import create from 'zustand';
import { BATTE_SCENE } from 'constants/scene';

const useScene = create((set) => ({
  scene: BATTE_SCENE,
  setScene: (scene) => set({ scene }),
}));

export default useScene;
