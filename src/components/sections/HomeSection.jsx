import { Center, Float } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { SectionTitle } from "../SectionTitle.jsx";
import { MacBookPro } from "../MacBookPro";
import { PalmTree } from "../PalmTree.jsx";
import { Star } from "../Star";
import { config } from "../../config.js";
import * as THREE from "three";

export const HomeSection = ({ section }) => {
  const homeSpring = useSpring({
    y: section === "home" ? 0 : -5,
  });

  return (
    <a.group position-y={homeSpring.y}>
      <Star position-z={0} position-y={2.2} scale={0.3} />

      <Float floatIntensity={2} speed={2}>
        <MacBookPro
          position-x={-1}
          position-y={0.5}
          scale={0.3}
          rotation-y={Math.PI / 4}
        />
      </Float>

      <PalmTree
        scale={0.018}
        rotation-y={THREE.MathUtils.degToRad(140)}
        position={[4, 0, -5]}
      />

      <Float floatIntensity={0.6}>
        <Center disableY disableZ>
          <SectionTitle size={0.8} position-y={1.6} position-z={-3}>
            {config.home.title}
          </SectionTitle>
        </Center>
      </Float>

      <Center disableY disableZ>
        <SectionTitle
          size={1.2}
          position-x={-2.6}
          position-z={-3}
          rotation-y={Math.PI / 10}
        >
          {config.home.subtitle}
        </SectionTitle>
      </Center>
    </a.group>
  );
};
