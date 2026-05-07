import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { config } from "./config.js";
import { MotionConfig } from "framer-motion";
import { Interface } from "./components/Interface.jsx";
import { Menu } from "./components/Menu.jsx";
import { LoadingScreen } from "./components/LoadingScreen.jsx";

// TODO: play with damping and maxSpeed when groups are finished
function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />
        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.2}
        >
          <MotionConfig transition={{ duration: 0.6 }}>
            <group position-y={-1}>
              <Experience />
            </group>
          </MotionConfig>
          <Scroll html>
            <MotionConfig>
              <Menu />
              <Interface />
            </MotionConfig>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
