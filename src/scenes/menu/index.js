import './style.css';
import { PREPAIR_SCENE } from 'constants/scene';
import useScene from 'hooks/useScene';
import useWeb3 from 'hooks/useWeb3';
import logo from 'images/logo.png';

function MenuScene() {
  const setScene = useScene((state) => state.setScene);
  const connected = useWeb3((state) => state.connected);
  const requestAccounts = useWeb3((state) => state.requestAccounts);

  return (
    <div className="menu-scene">
      <img src={logo} alt="logo" className="logo" />
      {connected ? (
        <button onClick={() => setScene(PREPAIR_SCENE)} className="menu-scene__btn">
          Start
        </button>
      ) : (
        <button onClick={requestAccounts} className="menu-scene__btn">
          Connect wallet
        </button>
      )}
    </div>
  );
}

export default MenuScene;
