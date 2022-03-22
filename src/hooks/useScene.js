import create from 'zustand';
import { BOOT_SCENE } from 'constants/scene';

const useScene = create((set) => ({
  scene: BOOT_SCENE,
  setScene: (scene) => set({ scene }),
}));

export default useScene;
