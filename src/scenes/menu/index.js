import './style.css';
import { PREPAIR_SCENE } from 'constants/scenes';
import logo from 'images/logo.png';
import useScene from 'hooks/useScene';

function MenuScene() {
  const setScene = useScene((state) => state.setScene);

  return (
    <div className="menu-scene">
      <img src={logo} alt="logo" className="logo" />
      <button onClick={() => setScene(PREPAIR_SCENE)} className="btn-start">
        Start
      </button>
    </div>
  );
}

export default MenuScene;
