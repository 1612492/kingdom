import { useCallback } from 'react';

import './style.css';
import { PREPAIR_SCENE } from 'constants/scene';
import { status } from 'constants/hero';
import Hero from 'components/hero';
import useBattle from 'hooks/useBattle';
import useScene from 'hooks/useScene';
import imgWin from 'images/you_win.png';
import imgLose from 'images/you_lose.png';

function BattleScene() {
  const { initialHeroes, playerTeam, opponentTeam, turnInfo, winner } = useBattle();
  const setScene = useScene((state) => state.setScene);

  const getStatus = useCallback(
    ({ id, hp }) => {
      if (hp === 0) {
        return status.DIE;
      }

      if (turnInfo) {
        if (turnInfo?.attack_hero_i === id) {
          return status.ATTACK;
        }

        if (turnInfo?.take_damage_hero_id === id) {
          return status.HURT;
        }
      }

      return status.IDLE;
    },
    [turnInfo]
  );

  return (
    <div className="battle-scene">
      {winner ? (
        <div className="battle-end">
          <img src={winner === 1 ? imgWin : imgLose} alt="end game" className="battle-end__img" />
          <button onClick={() => setScene(PREPAIR_SCENE)} className="battle-end__button">
            Continue
          </button>
        </div>
      ) : null}
      <div className="left-side">
        {playerTeam.map(({ id, name, attack, defend, hp }) => (
          <Hero
            key={id}
            id={id}
            name={name}
            attack={attack}
            defend={defend}
            hpPercentage={`${(hp * 100) / initialHeroes[id].hp}%`}
            status={getStatus({ id, hp })}
          />
        ))}
      </div>
      <div className="right-side">
        {opponentTeam.map(({ id, name, attack, defend, hp }) => (
          <Hero
            key={id}
            id={id}
            name={name}
            attack={attack}
            defend={defend}
            hpPercentage={`${(hp * 100) / initialHeroes[id].hp}%`}
            status={getStatus({ id, hp })}
          />
        ))}
      </div>
    </div>
  );
}

export default BattleScene;
