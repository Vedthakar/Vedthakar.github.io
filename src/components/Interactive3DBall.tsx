import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBall() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // Create particles around the sphere
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 3;
      
      temp.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        speed: Math.random() * 0.02 + 0.01,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <>
      {/* Main sphere */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#4338ca"
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
          factor={2}
        />
      </Sphere>

      {/* Outer glow sphere */}
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#e91e63" 
          transparent 
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Particle points */}
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Lighting */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#4338ca" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e91e63" />
      <ambientLight intensity={0.3} />
    </>
  );
}

export default function Interactive3DBall() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <AnimatedBall />
      </Canvas>
    </div>
  );
}