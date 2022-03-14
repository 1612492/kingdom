import create from 'zustand';
import { ethers } from 'ethers';

import supportedChains from 'config/supported-chains';
import { NOT_FOUND_CHAIN } from 'constants/error';
import { addChain, getBalance, requestAccounts, switchChain, sign } from 'request/rpc';

const supportedChainIds = supportedChains.map((chain) => chain.chainId);

let provider = null;

const available = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';

if (available) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
}

const initialStates = {
  available,
  connected: false,
  account: null,
  balance: null,
  chainId: null,
  provider,
};

const useWeb3 = create((set, get) => ({
  ...initialStates,
  reset: () => set(initialStates),
  requestAccounts: () => {
    requestAccounts()
      .then((accounts) => {
        get().changeAccounts(accounts);
      })
      .catch((error) => console.error(error));
  },
  changeAccounts: (accounts) => {
    if (accounts.length && accounts.length > 0) {
      const account = accounts[0];
      set({ connected: true, account });
      getBalance(account).then((balance) => set({ balance }));
    } else {
      get().reset();
    }
  },
  changeChainId: (chainId) => {
    const hexChainId = ethers.utils.hexValue(chainId);
    if (supportedChainIds.includes(hexChainId)) {
      set({ chainId: hexChainId });
    } else {
      console.error(new Error('Unsupported chain'));
      const defaultChain = supportedChains[0];

      switchChain(defaultChain.chainId).catch((error) => {
        if (error.code === NOT_FOUND_CHAIN) {
          addChain(defaultChain).catch((error) => console.error(error));
        } else {
          console.error(error);
        }
      });
    }
  },
  sign: () => {
    sign(get().account)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  },
}));

export default useWeb3;
