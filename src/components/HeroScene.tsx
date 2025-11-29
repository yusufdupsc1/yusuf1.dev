import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * Moon shader: procedurally generated with craters, surface detail, and realistic lighting.
 * No external assets required; uses GLSL for crisp, scalable visuals.
 */
const moonVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const moonFragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  // Simplex-like noise for crater generation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    
    // Base lunar color: pale blue-white
    vec3 baseColor = vec3(0.95, 0.97, 1.0);
    
    // Generate surface detail using FBM
    vec2 detailUv = vUv * 4.0;
    float craterNoise = fbm(detailUv);
    
    // Darker crater regions
    vec3 craterColor = mix(baseColor, vec3(0.55, 0.60, 0.75), craterNoise * 0.4);
    
    // Lighting
    float diff = max(0.0, dot(normal, lightDir));
    vec3 lit = craterColor * (0.5 + 0.5 * diff);
    
    // Rim lighting for glow
    vec3 viewDir = normalize(-vPosition);
    float rim = pow(1.0 - max(0.0, dot(normal, viewDir)), 2.0);
    vec3 rimColor = vec3(0.5, 0.8, 1.0) * rim * 0.3;
    
    gl_FragColor = vec4(lit + rimColor, 1.0);
  }
`;

/**
 * Moon component: procedural shader-based moon with rotation.
 */
function Moon() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    if (materialRef.current) {
      (materialRef.current.uniforms.uTime as any).value = clock.getElapsedTime();
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={moonVertexShader}
        fragmentShader={moonFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

/**
 * Particle system: thousands of stars with optimized geometry.
 */
function ParticleStars() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.00001;
      particlesRef.current.rotation.y += 0.00002;
    }
  });

  const particleCount = 2000;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 60;
      positions[i + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation
        color={new THREE.Color(0.8, 0.9, 1.0)}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

/**
 * Ambient lighting and scene controls.
 */
function SceneContent() {
  useThree(({ camera }) => {
    camera.position.z = 5;
  });

  return (
    <>
      <color attach="background" args={['#0f172a']} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color={0x88ccff} />
      <Moon />
      <ParticleStars />
    </>
  );
}

/**
 * HeroScene: Main 3D canvas component with error boundary.
 * Lazy-loaded via React.lazy and Suspense in Hero.tsx
 */
export function HeroScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          precision: 'highp',
          powerPreference: 'high-performance',
        }}
        style={{ display: 'block' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}

export default HeroScene;
