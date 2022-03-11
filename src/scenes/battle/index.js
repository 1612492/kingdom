import './style.css';
import { ARCHER, WARRIOR, BARBARIAN } from 'constants/characters';
import imgArcher from 'images/archer.png';
import imgWarrior from 'images/warrior.png';
import imgBarbarian from 'images/barbarian.png';
import useTeam from 'hooks/useTeam';

const characterImgs = {
  [ARCHER]: imgArcher,
  [WARRIOR]: imgWarrior,
  [BARBARIAN]: imgBarbarian,
};

function BattleScene() {
  const team = useTeam((state) => state.team);

  return (
    <div className="battle-scene">
      <div className="left-side">
        {team.map((_, index) => {
          return (
            <img
              key={index}
              src={characterImgs[index % 3]}
              alt="character"
              className="battle-scene__character"
            />
          );
        })}
      </div>
      <div className="right-side">
        {team.map((_, index) => {
          return (
            <img
              key={index}
              src={characterImgs[index % 3]}
              alt="character"
              className="battle-scene__character"
            />
          );
        })}
      </div>
    </div>
  );
}

export default BattleScene;
