import './style.css';
import imgCard from 'images/card.png';
import iconCheck from 'images/ic_check.png';

function Card({ imgSrc, isSelected, onClick }) {
  return (
    <button onClick={onClick} className="card">
      <img src={imgCard} alt="card" className="card__img" />
      <div className="card__hero">
        <img src={imgSrc} alt="hero" className="card-hero__img" />
      </div>
      {isSelected ? <img src={iconCheck} alt="checked" className="card__checked" /> : null}
    </button>
  );
}

export default Card;
