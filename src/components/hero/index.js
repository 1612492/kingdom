import './style.css';
import { status } from 'constants/hero';
import { classes } from 'constants/hero';
import classname from 'utils/classname';

const { DIE } = status;

function Hero({ name, hpPercentage, status }) {
  return (
    <div className="hero">
      <div style={{ opacity: status === DIE ? 0 : 1 }} className="hero__hp">
        <div style={{ width: hpPercentage }} className="hero__remain-hp" />
      </div>
      <div className="hero__body">
        <div className={classname(classes[status][name])} />
      </div>
    </div>
  );
}

export default Hero;
