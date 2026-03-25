import { a, useSpring } from "@react-spring/three";
import { SectionTitle } from "../SectionTitle.jsx";
import { BookCase } from "../BookCase.jsx";
import { CouchSmall } from "../CouchSmall.jsx";
import { Lamp } from "../Lamp.jsx";
import { MeshDistortMaterial } from "@react-three/drei";
import { SECTIONS_DISTANCE } from "../../assets/utils/common.js";

export const SkillsSection = ({ section }) => {
  const skillsSpring = useSpring({
    y: section === "skills" ? 0 : -5,
  });
  return (
    <a.group position-z={SECTIONS_DISTANCE} position-y={skillsSpring.y}>
      <group position-x={-2}>
        <SectionTitle position-z={1.5} rotation-y={Math.PI / 6}>
          SKILLS
        </SectionTitle>

        <BookCase position-z={-2} />

        <CouchSmall
          scale={0.4}
          position-z={0}
          position-x={-0.2}
          rotation-y={Math.PI / 3}
        />

        <Lamp
          position-z={0.6}
          position-x={-0.4}
          position-y={-0.8}
          rotation-y={-Math.PI}
        />
      </group>

      <mesh position-y={2} position-z={-4} position-x={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          opacity={0.8}
          transparent
          distort={0.8}
          speed={4.5}
          color="lightgray"
        />
      </mesh>
    </a.group>
  );
};
