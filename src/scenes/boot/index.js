import './style.css';

import { MENU_SCENE } from 'constants/scene';
import ProgressBar from 'components/progress-bar';
import useScene from 'hooks/useScene';

function BootScene() {
  const setScene = useScene((state) => state.setScene);

  return (
    <div className="boot-scene">
      <ProgressBar onFinish={() => setScene(MENU_SCENE)} />
    </div>
  );
}

export default BootScene;
