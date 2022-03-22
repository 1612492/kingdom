import { useCallback } from 'react';
import './style.css';
import { status } from 'constants/hero';
import Hero from 'components/hero';
import useBattle from 'hooks/useBattle';

function BattleScene() {
  const { initialHeroes, playerTeam, opponentTeam, turnInfo, winner } = useBattle();

  if (winner) {
    console.log(winner);
  }

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
