import { a, useSpring } from "@react-spring/three";
import { SectionTitle } from "../SectionTitle.jsx";
import { Monitor } from "../Monitor.jsx";
import { RoundedBox } from "@react-three/drei";
import { SECTIONS_DISTANCE } from "../../assets/utils/common.js";

export const ProjectsSection = ({ section }) => {
  const projectsSpring = useSpring({
    y: section === "projects" ? 0 : -5,
  });
  return (
    <a.group position-z={2 * SECTIONS_DISTANCE} position-y={projectsSpring.y}>
      <group position-x={1}>
        <SectionTitle position-x={-0.5} rotation-y={-Math.PI / 6}>
          PROJECTS
        </SectionTitle>

        <group position-x={0.5} rotation-y={-Math.PI / 6} scale={0.8}>
          <Monitor
            scale={0.023}
            position-y={1}
            rotation-y={-Math.PI / 2}
            position-z={-1.5}
          />

          <RoundedBox scale-x={2} position-y={0.5} position-z={-1.5}>
            <meshStandardMaterial color="white" />
          </RoundedBox>
        </group>
      </group>
    </a.group>
  );
};
