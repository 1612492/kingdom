import { useState, useEffect } from 'react';

import './style.css';

function ProgressBar({ onFinish }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      let timeoutId = setTimeout(function () {
        setPercentage((state) => state + 10);
      }, 500);

      return () => clearInterval(timeoutId);
    } else {
      let timeoutId = setTimeout(function () {
        onFinish();
      }, 500);

      return () => clearInterval(timeoutId);
    }
  });

  return (
    <div className="progress">
      <div className="progress__bar">
        <div style={{ width: `${percentage}%` }} className="progress__active-bar"></div>
      </div>
      <div className="progress__percentage">{percentage}%</div>
    </div>
  );
}

export default ProgressBar;
