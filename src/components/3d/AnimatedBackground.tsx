'use client'

import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function GeometricShapes() {
  const shapes = useMemo(() => {
    const count = 15
    const positions = []
    const colors = []
    const scales = []
    
    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ])
      
      colors.push([
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 0.5
      ])
      
      scales.push(Math.random() * 0.5 + 0.5)
    }
    
    return { positions, colors, scales, count }
  }, [])

  return (
    <>
      {Array.from({ length: shapes.count }).map((_, i) => {
        const shapeType = Math.floor(Math.random() * 3)
        
        return (
          <Float
            key={i}
            speed={Math.random() * 2 + 1}
            rotationIntensity={Math.random() * 2}
            floatIntensity={Math.random() * 2}
          >
            {shapeType === 0 && (
              <mesh position={shapes.positions[i]} scale={shapes.scales[i]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial 
                  color={shapes.colors[i]} 
                  metalness={0.4}
                  roughness={0.2}
                  emissive={shapes.colors[i]}
                  emissiveIntensity={0.1}
                />
              </mesh>
            )}
            {shapeType === 1 && (
              <mesh position={shapes.positions[i]} scale={shapes.scales[i]}>
                <octahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial 
                  color={shapes.colors[i]} 
                  metalness={0.6}
                  roughness={0.1}
                  emissive={shapes.colors[i]}
                  emissiveIntensity={0.15}
                />
              </mesh>
            )}
            {shapeType === 2 && (
              <mesh position={shapes.positions[i]} scale={shapes.scales[i]}>
                <tetrahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial 
                  color={shapes.colors[i]} 
                  metalness={0.5}
                  roughness={0.15}
                  emissive={shapes.colors[i]}
                  emissiveIntensity={0.12}
                />
              </mesh>
            )}
          </Float>
        )
      })}
    </>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15
      positions[i + 1] = (Math.random() - 0.5) * 15
      positions[i + 2] = (Math.random() - 0.5) * 15
      
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5)
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }
    
    return { positions, colors }
  }, [])

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
        <spotLight position={[0, 10, 0]} intensity={0.4} angle={0.3} penumbra={1} />
        
        <GeometricShapes />
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}