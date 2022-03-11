import './style.css';
import { ARCHER, WARRIOR, BARBARIAN } from 'constants/characters';
import imgCard from 'images/card.png';
import imgArcher from 'images/archer.png';
import imgWarrior from 'images/warrior.png';
import imgBarbarian from 'images/barbarian.png';
import iconCheck from 'images/ic_check.png';

const characterImgs = {
  [ARCHER]: imgArcher,
  [WARRIOR]: imgWarrior,
  [BARBARIAN]: imgBarbarian,
};

function Card({ character, isSelected, onClick }) {
  return (
    <button onClick={onClick} className="card">
      <img src={imgCard} atl="card" className="card__img" />
      <div className="card__character">
        <img src={characterImgs[character]} alt="character" className="card-character__img" />
      </div>
      {isSelected ? <img src={iconCheck} atl="checked" className="card__checked" /> : null}
    </button>
  );
}

export default Card;
