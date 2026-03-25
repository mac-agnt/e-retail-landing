"use client";

import { useEffect, useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  RoundedBox,
  ContactShadows,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

/* ─── geometry ─── */
const PILLAR_W = 0.45, PILLAR_H = 2.0, PILLAR_D = 0.22;
const PILLAR_Y = 0.095 + PILLAR_H / 2;
const HOUSING_W = 1.3, HOUSING_H = 2.0, HOUSING_D = 0.14;
const HOUSING_Y = 0.095 + PILLAR_H + HOUSING_H / 2;
const BEZEL_W = 1.24, BEZEL_H = 1.94, BEZEL_D = 0.02;
const BEZEL_Z = HOUSING_D / 2 + 0.001;
const SCREEN_W = 1.18, SCREEN_H = 1.88;
const SCREEN_Z = BEZEL_Z + BEZEL_D / 2 + 0.001;
const BAR_Y = HOUSING_Y + HOUSING_H / 2 + 0.035;

/* ─── themes ─── */
interface KioskTheme {
  housing: string;
  rgh: number; met: number; cc: number; ccr: number; env: number;
  base: string; bezel: string; bar: string;
  showBranding: boolean;
}

const WHITE: KioskTheme = {
  housing: "#f2f2f2", rgh: 0.15, met: 0.01, cc: 0.35, ccr: 0.15, env: 0.9,
  base: "#1a1a1a", bezel: "#0d0d0d", bar: "#222222",
  showBranding: true,
};
const BLACK: KioskTheme = {
  housing: "#1a1a1a", rgh: 0.2, met: 0.05, cc: 0.5, ccr: 0.1, env: 1.0,
  base: "#1a1a1a", bezel: "#0a0a0a", bar: "#141414",
  showBranding: true,
};
const RED: KioskTheme = {
  housing: "#E63338", rgh: 0.7, met: 0.0, cc: 0.0, ccr: 0.0, env: 0.15,
  base: "#1a1a1a", bezel: "#0d0d0d", bar: "#2a1010",
  showBranding: true,
};

/* ─── sub-components ─── */
function ScreenDisplay() {
  const tex = useLoader(THREE.TextureLoader, "/kiosk-avatar.png");
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[0, HOUSING_Y, SCREEN_Z]}>
      <planeGeometry args={[SCREEN_W, SCREEN_H]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  );
}

function PillarBranding() {
  const tex = useLoader(THREE.TextureLoader, "/eretail-logo.png");
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[0, PILLAR_Y, PILLAR_D / 2 + 0.002]} rotation={[0, 0, Math.PI / 2]}>
      <planeGeometry args={[1.2, 0.3]} />
      <meshBasicMaterial map={tex} transparent alphaTest={0.1} toneMapped={false} side={THREE.FrontSide} />
    </mesh>
  );
}

function KioskBase({ color }: { color: string }) {
  return (
    <group>
      <RoundedBox args={[1.6, 0.08, 1.1]} position={[0, 0.04, 0]} radius={0.015}>
        <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} envMapIntensity={0.1} />
      </RoundedBox>
      <RoundedBox args={[1.55, 0.01, 1.05]} position={[0, 0.085, 0]} radius={0.012}>
        <meshStandardMaterial color="#252525" roughness={0.95} metalness={0.0} />
      </RoundedBox>
      <RoundedBox args={[1.5, 0.015, 1.0]} position={[0, 0.008, 0]} radius={0.005}>
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </RoundedBox>
      {([[-0.65, 0, -0.42], [0.65, 0, -0.42], [-0.65, 0, 0.42], [0.65, 0, 0.42]] as const).map((p, i) => (
        <mesh key={i} position={[p[0], p[1], p[2]]}>
          <cylinderGeometry args={[0.03, 0.035, 0.01, 16]} />
          <meshStandardMaterial color="#0a0a0a" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

/* ─── single kiosk ─── */
function Kiosk({ theme }: { theme: KioskTheme }) {
  const mat = useMemo(() => (
    <meshPhysicalMaterial
      color={theme.housing} roughness={theme.rgh} metalness={theme.met}
      clearcoat={theme.cc} clearcoatRoughness={theme.ccr} envMapIntensity={theme.env}
    />
  ), [theme]);

  return (
    <group>
      <KioskBase color={theme.base} />
      <RoundedBox args={[PILLAR_W, PILLAR_H, PILLAR_D]} radius={0.02} position={[0, PILLAR_Y, 0]}>{mat}</RoundedBox>
      {theme.showBranding && (
        <Suspense fallback={null}><PillarBranding /></Suspense>
      )}
      <mesh position={[0, 0.095 + PILLAR_H, HOUSING_D / 2 + 0.001]}>
        <planeGeometry args={[0.5, 0.008]} /><meshBasicMaterial color="#cccccc" />
      </mesh>
      <RoundedBox args={[HOUSING_W, HOUSING_H, HOUSING_D]} radius={0.05} smoothness={5} position={[0, HOUSING_Y, 0]}>{mat}</RoundedBox>
      <RoundedBox args={[BEZEL_W, BEZEL_H, BEZEL_D]} radius={0.04} smoothness={4} position={[0, HOUSING_Y, BEZEL_Z]}>
        <meshPhysicalMaterial color={theme.bezel} roughness={0.08} metalness={0.02} clearcoat={0.8} clearcoatRoughness={0.05} />
      </RoundedBox>
      <Suspense fallback={null}><ScreenDisplay /></Suspense>
      <group position={[0, BAR_Y, 0]}>
        <RoundedBox args={[1.38, 0.065, 0.085]} radius={0.015} smoothness={4}>
          <meshPhysicalMaterial color={theme.bar} roughness={0.7} metalness={0.2} clearcoat={0.15} />
        </RoundedBox>
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[-0.47 + i * 0.03, 0, 0.044]}>
            <circleGeometry args={[0.004, 8]} /><meshStandardMaterial color="#0a0a0a" roughness={1} />
          </mesh>
        ))}
        <group position={[0.15, 0, 0.044]}>
          <mesh><ringGeometry args={[0.016, 0.022, 32]} /><meshPhysicalMaterial color="#333333" roughness={0.2} metalness={0.6} /></mesh>
          <mesh position={[0, 0, 0.001]}><circleGeometry args={[0.016, 32]} /><meshPhysicalMaterial color="#0a0a12" roughness={0.05} metalness={0.3} clearcoat={1.0} clearcoatRoughness={0.05} /></mesh>
          <mesh position={[-0.004, 0.004, 0.002]}><circleGeometry args={[0.003, 16]} /><meshBasicMaterial color="#ffffff" opacity={0.3} transparent /></mesh>
        </group>
        <mesh position={[0.55, 0, 0.044]}><circleGeometry args={[0.005, 16]} /><meshBasicMaterial color="#44bb44" /></mesh>
      </group>
    </group>
  );
}

/* ─── cinematic animation ─── */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const FINAL_SCALE = 0.85;

function KioskHeroScene({ animate = true }: { animate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const whiteRef = useRef<THREE.Group>(null!);
  const blackRef = useRef<THREE.Group>(null!);
  const redRef = useRef<THREE.Group>(null!);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (animate) return;
    if (groupRef.current) {
      groupRef.current.position.y = 0;
      groupRef.current.rotation.set(0, 0, 0);
      groupRef.current.scale.setScalar(FINAL_SCALE);
    }
    if (whiteRef.current) {
      whiteRef.current.position.set(0, 0, 0.6);
      whiteRef.current.rotation.set(0, 0, 0);
    }
    if (redRef.current) {
      redRef.current.position.set(-2.0, 0, -1.4);
      redRef.current.rotation.set(0, 0.4, 0);
    }
    if (blackRef.current) {
      blackRef.current.position.set(2.0, 0, -1.4);
      blackRef.current.rotation.set(0, -0.4, 0);
    }
  }, [animate]);

  useFrame((state) => {
    if (!animate) return;
    if (startTime.current === null) startTime.current = state.clock.elapsedTime;
    const elapsed = state.clock.elapsedTime - startTime.current;
    const dur = 3.5;

    if (elapsed < dur) {
      const t = Math.min(elapsed / dur, 1);

      const rotP = easeOutQuart(Math.min(t / 0.6, 1));
      if (groupRef.current) {
        groupRef.current.rotation.y = lerp(-0.8, 0, rotP);
        groupRef.current.rotation.x = lerp(-0.15, 0, rotP);
        groupRef.current.scale.setScalar(lerp(0.9, FINAL_SCALE, easeOutQuart(t)));
      }

      const sT = easeInOutCubic(Math.max(0, Math.min((t - 0.1) / 0.7, 1)));

      // Start positions are already separated in Z to avoid z-fighting
      if (whiteRef.current) {
        whiteRef.current.position.set(0, 0, lerp(0.4, 0.6, sT));
        whiteRef.current.rotation.y = 0;
        whiteRef.current.rotation.z = 0;
      }

      if (redRef.current) {
        redRef.current.position.set(
          lerp(-0.5, -2.0, sT),
          0,
          lerp(-0.4, -1.4, sT),
        );
        const rr = easeOutQuart(Math.min(t / 0.85, 1));
        redRef.current.rotation.y = lerp(0.05, 0.4, rr);
        redRef.current.rotation.z = lerp(0.03, 0, rr);
      }

      if (blackRef.current) {
        blackRef.current.position.set(
          lerp(0.5, 2.0, sT),
          0,
          lerp(-0.8, -1.4, sT),
        );
        const br = easeOutQuart(Math.min(t / 0.85, 1));
        blackRef.current.rotation.y = lerp(-0.05, -0.4, br);
        blackRef.current.rotation.z = lerp(-0.03, 0, br);
      }
    } else {
      const idle = elapsed - dur;

      if (groupRef.current) {
        groupRef.current.position.y = Math.sin(idle * 1.5) * 0.015;
        groupRef.current.rotation.set(0, 0, 0);
        groupRef.current.scale.setScalar(FINAL_SCALE);
      }

      if (whiteRef.current) {
        whiteRef.current.position.set(0, 0, 0.6);
        whiteRef.current.rotation.y = Math.sin(idle * 0.5) * 0.02;
        whiteRef.current.rotation.z = 0;
      }

      if (redRef.current) {
        redRef.current.position.set(-2.0, 0, -1.4);
        redRef.current.rotation.set(0, 0.4, 0);
      }

      if (blackRef.current) {
        blackRef.current.position.set(2.0, 0, -1.4);
        blackRef.current.rotation.set(0, -0.4, 0);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Red and Black behind — rendered first */}
      <group ref={redRef}>
        <Suspense fallback={null}><Kiosk theme={RED} /></Suspense>
      </group>
      <group ref={blackRef}>
        <Suspense fallback={null}><Kiosk theme={BLACK} /></Suspense>
      </group>
      {/* White in front — rendered last */}
      <group ref={whiteRef}>
        <Suspense fallback={null}><Kiosk theme={WHITE} /></Suspense>
      </group>
    </group>
  );
}

/* ─── Features section: single black kiosk, spinning, tilted toward cards ─── */
function SpinningKiosk() {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y -= delta * 0.4;
  });
  return (
    <group ref={groupRef} rotation={[0, -0.35, 0]} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      <Kiosk theme={BLACK} />
    </group>
  );
}

/* kiosk with scale 1.5: total height ≈ 6.2 units, center ≈ 3.1 */
const FEATURES_KIOSK_CENTER_Y = 3.1;

export function FeaturesKioskScene() {
  return (
    <Canvas
      camera={{ position: [0, FEATURES_KIOSK_CENTER_Y, 13.5], fov: 34, near: 0.1, far: 100 }}
      style={{ background: "transparent", touchAction: "pan-y" }}
      className="pointer-events-none"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} color="#f8f8f8" />
      <directionalLight position={[5, 6, 4]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-3, 4, 2]} intensity={0.35} color="#f5f5f5" />
      <directionalLight position={[0, 3, -5]} intensity={0.25} color="#ffffff" />
      <Suspense fallback={null}>
        <SpinningKiosk />
        <Environment preset="studio" />
      </Suspense>
      {/* Lock camera to look horizontally at kiosk center */}
      <OrbitControls
        target={[0, FEATURES_KIOSK_CENTER_Y, 0]}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

/* ─── exported scene ─── */
export function KioskScene({
  animate = true,
  mobileOptimized = false,
}: {
  animate?: boolean;
  mobileOptimized?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 2.0, 10], fov: 30, near: 0.1, far: 100 }}
      style={{ background: "transparent", touchAction: "pan-y" }}
      className="pointer-events-none"
      shadows={!mobileOptimized}
      dpr={mobileOptimized ? [1, 1.2] : [1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <directionalLight position={[6, 7, 5]} intensity={1.0} color="#fff5eb" castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight position={[-6, 5, 3]} intensity={0.5} color="#eef2ff" />
      <directionalLight position={[0, 4, -7]} intensity={0.4} color="#ffffff" />
      <ambientLight intensity={0.3} color="#f5f5f5" />

      <Suspense fallback={null}>
        <KioskHeroScene animate={animate} />
        {!mobileOptimized && (
          <ContactShadows position={[0, 0.001, 0]} opacity={0.2} scale={12} blur={2.5} far={4} />
        )}
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        target={[0, 1.8, -0.5]}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
