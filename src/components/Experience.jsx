import {Environment, MeshDistortMaterial, useScroll} from "@react-three/drei";
import { Avatar } from './Avatar'
import { useRef } from "react";
import { SectionTitle } from "./SectionTitle.jsx";
import { useFrame } from "@react-three/fiber";
import { Center, Float } from "@react-three/drei";
import { MacBookPro } from "./MacBookPro";
import { PalmTree } from "./PalmTree";
import { Star } from "./Star";
import { BookCase } from "./BookCase.jsx";
import { CouchSmall } from "./CouchSmall.jsx";
import { Lamp} from "./Lamp.jsx";
import { RoundedBox } from "@react-three/drei";
import { Monitor } from "./Monitor";
import {config} from "../config.js";
import * as THREE from "three";
import { Balloon } from "./Balloon";
import { Mailbox } from "./Mailbox";
import { ParkBench } from "./ParkBench";
import { Pigeon } from "./Pigeon";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {

    const sceneContainer = useRef();
    const scrollData= useScroll();

    useFrame(() => {
        sceneContainer.current.position.z = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
    });

  return (
    <>
      <Environment preset="sunset" />
      <Avatar/>
        <group ref={sceneContainer}>
        {/*HOME*/}
        <group>
            <Star position-z={0} position-y={2.2} scale={0.3} />
            <Float floatIntensity={2} speed={2}>
                <MacBookPro
                    position-x={-1}
                    position-y={0.5}
                    position-z={-0}
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
                    <SectionTitle
                        size={0.8}
                        position-y={1.6}
                        position-z={-3}
                        bevelEnabled
                        bevelThickness={0.3}
                    >
                        {config.home.title}
                    </SectionTitle>
                </Center>
            </Float>
            <Center disableY disableZ>
                <SectionTitle
                    size={1.2}
                    position-x={-2.6}
                    position-z={-3}
                    bevelEnabled
                    bevelThickness={0.3}
                    rotation-y={Math.PI / 10}
                >
                    {config.home.subtitle}
                </SectionTitle>
            </Center>
        </group>
        {/*SKILLS*/}
        <group position-z={SECTIONS_DISTANCE}>
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
        </group>

        {/*PROJECTS*/}
        <group position-z={2 * SECTIONS_DISTANCE}>
            <group position-x={1}>
                <SectionTitle
                    position-x={-0.5}
                    position-z={0}
                    rotation-y={-Math.PI / 6}
                >
                    PROJECTS
                </SectionTitle>

                <group
                    position-x={0.5}
                    position-z={0}
                    rotation-y={-Math.PI / 6}
                    scale={0.8}
                >
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
        </group>
        {/*CONTACT*/}
        <group position-z={3 * SECTIONS_DISTANCE}>
                <SectionTitle position-x={-2} position-z={0.6}>
                    CONTACT
                </SectionTitle>
                    <group position-x={-2}>
                        <ParkBench
                            scale={0.5}
                            position-x={-0.5}
                            position-z={-2.5}
                            rotation-y={-Math.PI / 4}
                        />
                        <group position-y={2.2} position-z={-0.5}>
                            <Float floatIntensity={2} rotationIntensity={1.5}>
                                <Balloon scale={1.5} position-x={-0.5} color="#71a2d9" />
                            </Float>
                            <Float
                                floatIntensity={1.5}
                                rotationIntensity={2}
                                position-z={0.5}
                            >
                                <Balloon scale={1.3} color="#d97183" />
                            </Float>
                            <Float speed={2} rotationIntensity={2}>
                                <Balloon scale={1.6} position-x={0.4} color="yellow" />
                            </Float>
                        </group>
                    </group>
                    <Mailbox
                        scale={0.25}
                        rotation-y={1.25 * Math.PI}
                        position-x={1}
                        position-y={0.25}
                        position-z={0.5}
                    />
                    <Float floatIntensity={1.5} speed={3}>
                        <Pigeon
                            position-x={2}
                            position-y={1.5}
                            position-z={-0.5}
                            scale={0.3}
                        />
                    </Float>
                </group>
        </group>
    </>
  );
};
