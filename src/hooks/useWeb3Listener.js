import { useEffect } from 'react';
import useWeb3 from 'hooks/useWeb3';
import { getAccounts, getChainId } from 'request/rpc';

function useWeb3Listener() {
  const changeAccounts = useWeb3((state) => state.changeAccounts);
  const changeChainId = useWeb3((state) => state.changeChainId);
  const available = useWeb3((state) => state.available);

  useEffect(() => {
    function onAccountsChanged(accounts) {
      changeAccounts(accounts);
    }

    function onChainChanged(chainId) {
      changeChainId(chainId);
    }

    if (available) {
      getAccounts()
        .then((accounts) => onAccountsChanged(accounts))
        .catch((error) => console.error(error));

      getChainId()
        .then((chainId) => onChainChanged(chainId))
        .catch((error) => console.error(error));

      if (window.ethereum.on && window.ethereum.removeListener) {
        window.ethereum.on('chainChanged', onChainChanged);
        window.ethereum.on('accountsChanged', onAccountsChanged);

        return () => {
          window.ethereum.removeListener('chainChanged', onChainChanged);
          window.ethereum.removeListener('accountsChanged', onAccountsChanged);
        };
      }
    } else {
      console.error('No metamask installed');
    }
  }, [available, changeAccounts, changeChainId]);
}

export default useWeb3Listener;
