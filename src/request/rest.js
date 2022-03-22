import axios from 'axios';

import { API_URL } from 'constants/endpoint';

const rest = axios.create({
  baseURL: API_URL,
});

export function getCollection() {
  return rest.get('/getCollections');
}

export function getBattleInfo({ signature, account, heroIds }) {
  return rest.post('/battle', {
    signature,
    owner: account,
    hero_ids: heroIds,
  });
}
