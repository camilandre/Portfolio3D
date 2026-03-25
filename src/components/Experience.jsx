import { Environment, useScroll, ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { HomeSection } from "./sections/HomeSection.jsx";
import { SkillsSection } from "./sections/SkillsSection.jsx";
import { ProjectsSection } from "./sections/ProjectsSection.jsx";
import { ContactSection } from "./sections/ContactSection..jsx";
import { SECTIONS_DISTANCE } from "../assets/utils/common.js";
import { config } from "../config.js";

export const Experience = () => {
  const [section, setSection] = useState(config.sections[0]);

  const sceneContainer = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    const newSectionIndex = Math.round(
      scrollData.offset * (scrollData.pages - 1),
    );
    const newSection = config.sections[newSectionIndex];

    if (newSection !== section) {
      setSection(newSection);
    }

    sceneContainer.current.position.z =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  });

  return (
    <>
      <Environment preset="sunset" />
      <Avatar />
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />

      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
      </mesh>

      <group ref={sceneContainer}>
        <HomeSection section={section} />
        <SkillsSection section={section} />
        <ProjectsSection section={section} />
        <ContactSection section={section} />
      </group>
    </>
  );
};
