import { ethers } from 'ethers';

import { SALT } from 'constants/salt';

export function requestAccounts() {
  return window.ethereum.request({ method: 'eth_requestAccounts' });
}

export function getAccounts() {
  return window.ethereum.request({ method: 'eth_accounts' });
}

export function getChainId() {
  return window.ethereum.request({ method: 'eth_chainId' });
}

export function getBalance(account) {
  return window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
}

export function addChain(chain) {
  return window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: ethers.utils.hexValue(chain.chainId),
        chainName: chain.chainName,
        nativeCurrency: chain.nativeCurrency,
        rpcUrls: chain.rpcUrls,
      },
    ],
  });
}

export function switchChain(chainId) {
  return window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: ethers.utils.hexValue(chainId) }],
  });
}

export function sign(account) {
  const msg = ethers.utils.toUtf8Bytes(SALT);
  const hash = ethers.utils.keccak256(msg);

  return window.ethereum.request({
    method: 'eth_sign',
    params: [account, hash],
  });
}
