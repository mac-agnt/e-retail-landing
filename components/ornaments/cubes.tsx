"use client";

import { motion } from "framer-motion";

interface CubeProps {
  className?: string;
  size?: number;
  delay?: number;
}

function Cube({ className = "", size = 60, delay = 0 }: CubeProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Top face */}
      <path
        d="M30 5L55 17.5V42.5L30 55L5 42.5V17.5L30 5Z"
        fill="url(#cube-gradient)"
        fillOpacity="0.1"
        stroke="url(#cube-stroke)"
        strokeWidth="1"
      />
      {/* Left face */}
      <path
        d="M5 17.5L30 30V55L5 42.5V17.5Z"
        fill="#1A202B"
        fillOpacity="0.5"
      />
      {/* Right face */}
      <path
        d="M55 17.5L30 30V55L55 42.5V17.5Z"
        fill="#12171F"
        fillOpacity="0.5"
      />
      {/* Top face highlight */}
      <path
        d="M30 5L55 17.5L30 30L5 17.5L30 5Z"
        fill="#262D3A"
        fillOpacity="0.3"
      />
      {/* Inner lines */}
      <path
        d="M30 30V55M5 17.5L30 30L55 17.5"
        stroke="#262D3A"
        strokeWidth="0.5"
        strokeOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="cube-gradient"
          x1="5"
          y1="5"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E44242" stopOpacity="0.2" />
          <stop offset="1" stopColor="#262D3A" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="cube-stroke"
          x1="5"
          y1="5"
          x2="55"
          y2="55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E44242" stopOpacity="0.3" />
          <stop offset="1" stopColor="#262D3A" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export function Cubes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top right cube */}
      <Cube
        className="absolute top-20 right-[15%]"
        size={80}
        delay={0}
      />
      {/* Top left cube */}
      <Cube
        className="absolute top-40 left-[10%]"
        size={50}
        delay={1.5}
      />
      {/* Bottom right cube */}
      <Cube
        className="absolute bottom-32 right-[25%]"
        size={65}
        delay={3}
      />
      {/* Center left cube */}
      <Cube
        className="absolute top-1/2 left-[5%]"
        size={45}
        delay={2}
      />
      {/* Bottom left cube */}
      <Cube
        className="absolute bottom-20 left-[20%]"
        size={55}
        delay={4}
      />
    </div>
  );
}
