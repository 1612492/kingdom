import './style.css';
import { ARCHER, WARRIOR, BARBARIAN } from 'constants/characters';
import { BATTE_SCENE } from 'constants/scenes';
import Card from 'components/card';
import useScene from 'hooks/useScene';
import useTeam from 'hooks/useTeam';

const characters = [ARCHER, WARRIOR, BARBARIAN];
const MAX_SELECTION = 5;

function PrepairScene() {
  const { team, add, remove } = useTeam();
  const setScene = useScene((state) => state.setScene);

  return (
    <div className="prepair-scene">
      <div className="prepair-scene__header">CHOOSE {MAX_SELECTION} CHARACTERS</div>
      <div className="prepair-scene__container">
        {Array(10)
          .fill()
          .map((_, index) => {
            let isSelected = team.includes(index);

            return (
              <Card
                key={index}
                character={characters[index % 3]}
                isSelected={isSelected}
                onClick={() => (isSelected ? remove(index) : team.length < 5 && add(index))}
              />
            );
          })}
      </div>
      <div className="prepair-scene__footer">
        <button
          disabled={team.length !== 5}
          onClick={() => setScene(BATTE_SCENE)}
          className="btn-battle"
        >{`Let's battle`}</button>
      </div>
    </div>
  );
}

export default PrepairScene;
