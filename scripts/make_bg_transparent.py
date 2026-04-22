#!/usr/bin/env python3
"""Remove uniform background from PNG via edge flood-fill (screenshots / product cutouts)."""

from __future__ import annotations

import sys
from collections import deque

from PIL import Image


def rgb_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def main() -> None:
    if len(sys.argv) < 3:
        print("Usage: make_bg_transparent.py <input.png> <output.png> [tolerance]", file=sys.stderr)
        sys.exit(1)

    inp = sys.argv[1]
    out = sys.argv[2]
    tolerance = float(sys.argv[3]) if len(sys.argv) > 3 else 38.0

    img = Image.open(inp).convert("RGBA")
    w, h = img.size
    px = img.load()

    # Seed background colour from image corners (average RGB)
    corners = [
        px[0, 0][:3],
        px[w - 1, 0][:3],
        px[0, h - 1][:3],
        px[w - 1, h - 1][:3],
    ]
    bg_r = sum(c[0] for c in corners) // 4
    bg_g = sum(c[1] for c in corners) // 4
    bg_b = sum(c[2] for c in corners) // 4
    bg = (bg_r, bg_g, bg_b)

    def matches_bg(r: int, g: int, b: int) -> bool:
        return rgb_distance((r, g, b), bg) <= tolerance

    transparent = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            r, g, b, _ = px[x, y]
            if matches_bg(r, g, b):
                transparent[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if transparent[y][x]:
                continue
            r, g, b, _ = px[x, y]
            if matches_bg(r, g, b):
                transparent[y][x] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= w or ny < 0 or ny >= h:
                continue
            if transparent[ny][nx]:
                continue
            r, g, b, _ = px[nx, ny]
            if matches_bg(r, g, b):
                transparent[ny][nx] = True
                q.append((nx, ny))

    for y in range(h):
        for x in range(w):
            if transparent[y][x]:
                px[x, y] = (0, 0, 0, 0)
            else:
                r, g, b, a = px[x, y]
                px[x, y] = (r, g, b, a)

    img.save(out, "PNG")
    print(f"Wrote {out} (bg RGB≈{bg}, tolerance={tolerance})")


if __name__ == "__main__":
    main()
