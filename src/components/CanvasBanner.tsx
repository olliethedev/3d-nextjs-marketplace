import React, { useRef } from "react";
import { Suspense } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BufferGeometry, Material, Mesh, Texture } from "three";

interface CanvasBannerProps {
  text: string;
  image: string;
}

const CanvasBanner = ({ text, image }: CanvasBannerProps) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Canvas
        style={{
          height: "100vh",
        }}
        camera={{ position: [0, -1, 2.5], fov: 45 }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <TextPlane text={text} position={[0, -0.0, -0.51]} />
          <ImagePlane position={[0.0, 0, 0.5]} asset="/assets/author.jpeg" />

          <ColorPlane
            position={[0.5, 0, 0.0]}
            rotateX={Math.PI / 2}
            rotateY={Math.PI / 2}
            color="#0891b2"
          />
          <ColorPlane
            position={[0.0, -0.5, 0.0]}
            rotateX={Math.PI / 2}
            color="#0891b2"
          />

          <ColorPlane
            position={[-0.5, 0, 0.0]}
            rotateY={Math.PI * 1.5}
            color="#0891b2"
          />
          <ColorPlane
            position={[0.0, 0.5, 0.0]}
            rotateX={Math.PI / 2}
            rotateY={Math.PI}
            color="#0891b2"
          />

          <ColorPlane
            position={[0.0, 0, -0.5]}
            rotateX={Math.PI}
            color="#14b8a6"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

function TextPlane(props: any) {
  return (
    <group {...props}>
      <Text
        scale={[0.5, 0.5, 1]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.1}
        maxWidth={1.9}
        lineHeight={0.85}
      >
        {props.text ?? "Hello World"}
      </Text>
    </group>
  );
}

const ImagePlane = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>();
  const texture = useLoader(TextureLoader, props.asset) as Texture;

  useFrame((state) => {
    if (!ref.current) return;
    if (props.rotateX) ref.current.rotation.x = props.rotateX;
    if (props.rotateY) ref.current.rotation.y = props.rotateY;
    if (props.rotateZ) ref.current.rotation.z = props.rotateZ;
  });

  return (
    <mesh
      ref={ref as any}
      position={props.position}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
      rotateZ={props.rotateZ}
      scale={props.scale}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        side={THREE.DoubleSide}
        map={texture}
        toneMapped={false}
      />
    </mesh>
  );
};

const ColorPlane = (props: any) => {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>();

  useFrame((state) => {
    if (!ref.current) return;
    if (props.rotateX) ref.current.rotation.x = props.rotateX;
    if (props.rotateY) ref.current.rotation.y = props.rotateY;
    if (props.rotateZ) ref.current.rotation.z = props.rotateZ;
  });

  return (
    <mesh
      ref={ref as any}
      position={props.position}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
      rotateZ={props.rotateZ}
    >
      <planeGeometry args={props.args ?? [1, 1]} />
      <meshStandardMaterial color={props.color ?? "#fff"} />
    </mesh>
  );
};

export default CanvasBanner;
