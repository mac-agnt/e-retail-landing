"use client";

import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  RoundedBox,
  ContactShadows,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────
 * Geometry constants (base top at y ≈ 0.095)
 * ─────────────────────────────────────────── */
const BASE_MAIN_H = 0.08;
const BASE_TOP_Y = BASE_MAIN_H + 0.01 / 2 + 0.005; // ~0.09

const PILLAR_W = 0.45, PILLAR_H = 2.0, PILLAR_D = 0.22;
const PILLAR_Y = 0.095 + PILLAR_H / 2;                      // ~1.095

const HOUSING_W = 1.3, HOUSING_H = 2.0, HOUSING_D = 0.14;
const HOUSING_Y = 0.095 + PILLAR_H + HOUSING_H / 2;         // ~3.095

const BEZEL_W = 1.24, BEZEL_H = 1.94, BEZEL_D = 0.02;
const BEZEL_Z = HOUSING_D / 2 + 0.001;                      // sits on housing front face

const SCREEN_W = 1.18, SCREEN_H = 1.88;
const SCREEN_Z = BEZEL_Z + BEZEL_D / 2 + 0.001;            // just in front of bezel

const BAR_Y = HOUSING_Y + HOUSING_H / 2 + 0.035;           // camera bar

/* ─────────────────────────────────────────────
 * Screen: full-bleed avatar only, no text
 * ─────────────────────────────────────────── */
function ScreenDisplay() {
  const avatarTexture = useLoader(THREE.TextureLoader, "/kiosk-avatar.png");
  avatarTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh position={[0, HOUSING_Y, SCREEN_Z]}>
      <planeGeometry args={[SCREEN_W, SCREEN_H]} />
      <meshBasicMaterial map={avatarTexture} toneMapped={false} />
    </mesh>
  );
}

/* ─────────────────────────────────────────────
 * Pillar branding: ONLY e-Retail logo, rotated
 * ─────────────────────────────────────────── */
function PillarBranding() {
  const eRetailTexture = useLoader(THREE.TextureLoader, "/eretail-logo.png");
  eRetailTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh
      position={[0, PILLAR_Y, PILLAR_D / 2 + 0.002]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <planeGeometry args={[1.2, 0.3]} />
      <meshBasicMaterial
        map={eRetailTexture}
        transparent
        alphaTest={0.1}
        toneMapped={false}
        side={THREE.FrontSide}
      />
    </mesh>
  );
}

/* ─────────────────────────────────────────────
 * Detailed base with layers and rubber feet
 * ─────────────────────────────────────────── */
function KioskBase() {
  return (
    <group>
      {/* Main base body */}
      <RoundedBox args={[1.6, BASE_MAIN_H, 1.1]} position={[0, 0.04, 0]} radius={0.015}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.85} metalness={0.05} envMapIntensity={0.1} />
      </RoundedBox>

      {/* Top plate — thin rubber pad */}
      <RoundedBox args={[1.55, 0.01, 1.05]} position={[0, 0.085, 0]} radius={0.012}>
        <meshStandardMaterial color="#252525" roughness={0.95} metalness={0.0} />
      </RoundedBox>

      {/* Bottom lip */}
      <RoundedBox args={[1.5, 0.015, 1.0]} position={[0, 0.008, 0]} radius={0.005}>
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </RoundedBox>

      {/* Rubber feet at corners */}
      {(
        [[-0.65, 0, -0.42], [0.65, 0, -0.42], [-0.65, 0, 0.42], [0.65, 0, 0.42]] as const
      ).map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], pos[2]]}>
          <cylinderGeometry args={[0.03, 0.035, 0.01, 16]} />
          <meshStandardMaterial color="#0a0a0a" roughness={1} />
        </mesh>
      ))}

      {/* Edge chamfer ring on top */}
      <mesh position={[0, 0.079, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.78, 0.8, 4]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.6} metalness={0.15} />
      </mesh>
    </group>
  );
}

/* ─────────────────────────────────────────────
 * Main kiosk group
 * ─────────────────────────────────────────── */
function Kiosk() {
  const groupRef = useRef<THREE.Group>(null!);

  const whiteCasing = useMemo(
    () => (
      <meshPhysicalMaterial
        color="#f2f2f2"
        roughness={0.15}
        metalness={0.01}
        clearcoat={0.35}
        clearcoatRoughness={0.18}
        envMapIntensity={0.8}
      />
    ),
    [],
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.4;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.015;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]}>
      {/* ── BASE ── */}
      <KioskBase />

      {/* ── PILLAR ── */}
      <RoundedBox args={[PILLAR_W, PILLAR_H, PILLAR_D]} radius={0.02} position={[0, PILLAR_Y, 0]}>
        {whiteCasing}
      </RoundedBox>

      {/* Pillar branding — e-Retail logo only */}
      <Suspense fallback={null}>
        <PillarBranding />
      </Suspense>

      {/* Shadow gap at pillar–housing junction */}
      <mesh position={[0, 0.095 + PILLAR_H, HOUSING_D / 2 + 0.001]}>
        <planeGeometry args={[0.5, 0.008]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>

      {/* ── SCREEN HOUSING — same material as pillar ── */}
      <RoundedBox
        args={[HOUSING_W, HOUSING_H, HOUSING_D]}
        radius={0.05}
        smoothness={5}
        position={[0, HOUSING_Y, 0]}
      >
        {whiteCasing}
      </RoundedBox>

      {/* ── BLACK BEZEL — thin, elegant, iPad-Pro style ── */}
      <RoundedBox
        args={[BEZEL_W, BEZEL_H, BEZEL_D]}
        radius={0.04}
        smoothness={4}
        position={[0, HOUSING_Y, BEZEL_Z]}
      >
        <meshPhysicalMaterial
          color="#0d0d0d"
          roughness={0.08}
          metalness={0.02}
          clearcoat={0.8}
          clearcoatRoughness={0.05}
        />
      </RoundedBox>

      {/* ── SCREEN — full-bleed avatar ── */}
      <Suspense fallback={null}>
        <ScreenDisplay />
      </Suspense>

      {/* ── CAMERA / SPEAKER BAR ── */}
      <group position={[0, BAR_Y, 0]}>
        <RoundedBox args={[1.38, 0.065, 0.085]} radius={0.015} smoothness={4}>
          <meshPhysicalMaterial color="#222222" roughness={0.7} metalness={0.2} clearcoat={0.15} />
        </RoundedBox>

        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[-0.47 + i * 0.03, 0, 0.044]}>
            <circleGeometry args={[0.004, 8]} />
            <meshStandardMaterial color="#0a0a0a" roughness={1} />
          </mesh>
        ))}

        <group position={[0.15, 0, 0.044]}>
          <mesh>
            <ringGeometry args={[0.016, 0.022, 32]} />
            <meshPhysicalMaterial color="#333333" roughness={0.2} metalness={0.6} />
          </mesh>
          <mesh position={[0, 0, 0.001]}>
            <circleGeometry args={[0.016, 32]} />
            <meshPhysicalMaterial color="#0a0a12" roughness={0.05} metalness={0.3} clearcoat={1.0} clearcoatRoughness={0.05} />
          </mesh>
          <mesh position={[-0.004, 0.004, 0.002]}>
            <circleGeometry args={[0.003, 16]} />
            <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
          </mesh>
        </group>

        <mesh position={[0.55, 0, 0.044]}>
          <circleGeometry args={[0.005, 16]} />
          <meshBasicMaterial color="#44bb44" />
        </mesh>
      </group>
    </group>
  );
}

/* ─────────────────────────────────────────────
 * Exported scene
 * ─────────────────────────────────────────── */
export function KioskScene() {
  return (
    <Canvas
      camera={{ position: [0, 2.1, 7.5], fov: 32, near: 0.1, far: 100 }}
      style={{ background: "transparent", touchAction: "auto" }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <directionalLight position={[3, 5, 4]} intensity={1.2} color="#fff8f0" castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <directionalLight position={[-3, 3, 2]} intensity={0.6} color="#f0f4ff" />
      <directionalLight position={[0, 3, -4]} intensity={0.4} color="#ffffff" />
      <ambientLight intensity={0.3} color="#f5f5f5" />

      <Suspense fallback={null}>
        <Kiosk />
        <ContactShadows position={[0, 0, 0]} opacity={0.3} scale={4} blur={2.5} far={3} />
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls
        target={[0, 2.1, 0]}
        autoRotate
        autoRotateSpeed={0.4}
        enableZoom={false}
        enablePan={false}
        enableRotate
      />
    </Canvas>
  );
}
