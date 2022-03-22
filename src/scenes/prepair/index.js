import './style.css';
import { BATTE_SCENE } from 'constants/scene';
import { names } from 'constants/hero';
import Card from 'components/card';
import useScene from 'hooks/useScene';
import useTeam from 'hooks/useTeam';
import data from 'mocks/collection';
import imgGolem1 from 'images/hero/golem1.png';
import imgGolem2 from 'images/hero/golem2.png';
import imgGolem3 from 'images/hero/golem3.png';
import imgMinotaur1 from 'images/hero/minotaur1.png';
import imgMinotaur2 from 'images/hero/minotaur2.png';
import imgMinotaur3 from 'images/hero/minotaur3.png';
import imgSatyr1 from 'images/hero/satyr1.png';
import imgSatyr2 from 'images/hero/satyr2.png';
import imgSatyr3 from 'images/hero/satyr3.png';
import imgWraith1 from 'images/hero/wraith1.png';
import imgWraith2 from 'images/hero/wraith2.png';
import imgWraith3 from 'images/hero/wraith3.png';

const MAX_SELECTION = 5;

const heroImages = {
  [names.GOLEM1]: imgGolem1,
  [names.GOLEM2]: imgGolem2,
  [names.GOLEM3]: imgGolem3,
  [names.MINOTAUR1]: imgMinotaur1,
  [names.MINOTAUR2]: imgMinotaur2,
  [names.MINOTAUR3]: imgMinotaur3,
  [names.SATYR1]: imgSatyr1,
  [names.SATYR2]: imgSatyr2,
  [names.SATYR3]: imgSatyr3,
  [names.WRAITH1]: imgWraith1,
  [names.WRAITH2]: imgWraith2,
  [names.WRAITH3]: imgWraith3,
};

function PrepairScene() {
  const { team, add, remove } = useTeam();
  const setScene = useScene((state) => state.setScene);

  return (
    <div className="prepair-scene">
      <div className="prepair-scene__header">CHOOSE {MAX_SELECTION} HEROES</div>
      <div className="prepair-scene__container">
        {data.map(({ heroId, name }) => {
          let isSelected = team.includes(heroId);

          return (
            <Card
              key={heroId}
              imgSrc={heroImages[name]}
              isSelected={isSelected}
              onClick={() => (isSelected ? remove(heroId) : team.length < 5 && add(heroId))}
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
