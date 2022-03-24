import { useState, useEffect } from 'react';

import data from 'mocks/battle';

function useBattle() {
  const [playerTeam, setPlayerTeam] = useState([]);
  const [opponentTeam, setOpponentTeam] = useState([]);
  const [turnInfo, setTurnInfo] = useState({});
  const [initialHeroes, setInitialHeroes] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let start = 0;
    let end = Object.keys(data.info.all_states).length;
    const intervalId = setInterval(() => {
      const turn = data.info.all_states[start];

      if (start === 0) {
        const heroes = [...turn.team_one, ...turn.team_two].reduce((previous, current) => {
          previous[current.id] = current;

          return previous;
        }, {});
        setInitialHeroes(heroes);
      }

      if (start < end) {
        setPlayerTeam(turn.team_one);
        setOpponentTeam(turn.team_two);
        setTurnInfo(turn.logs);
      }

      if (start === end + 1) {
        setWinner(data.info.winner);
        clearInterval(intervalId);
      }
      start++;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    initialHeroes,
    playerTeam,
    opponentTeam,
    turnInfo,
    winner,
  };
}

export default useBattle;
