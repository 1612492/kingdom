import './style.css';
import {
  BOOT_SCENE,
  MENU_SCENE,
  PREPAIR_SCENE,
  BATTE_SCENE,
  RESULT_SCENE,
  LOADING_SCENE,
  ERROR_SCENE,
} from 'constants/scenes';
import useScene from 'hooks/useScene';
import useWeb3Listener from 'hooks/useWeb3Listener';
import BootScene from 'scenes/boot';
import MenuScene from 'scenes/menu';
import PrepairScene from 'scenes/prepair';
import BattleScene from 'scenes/battle';
import ResultScene from 'scenes/result';
import LoadingScene from 'scenes/loading';
import ErrorScene from 'scenes/error';

const scenes = {
  [BOOT_SCENE]: BootScene,
  [MENU_SCENE]: MenuScene,
  [PREPAIR_SCENE]: PrepairScene,
  [BATTE_SCENE]: BattleScene,
  [RESULT_SCENE]: ResultScene,
  [LOADING_SCENE]: LoadingScene,
  [ERROR_SCENE]: ErrorScene,
};

function Scenes() {
  const scene = useScene((state) => state.scene);
  const Scene = scenes[scene];

  useWeb3Listener();

  return (
    <div className="app">
      <Scene />
    </div>
  );
}

export default Scenes;
