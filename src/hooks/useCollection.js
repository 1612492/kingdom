import { useEffect } from 'react';

import useAsync from 'hooks/useAsync';
import useWeb3 from 'hooks/useWeb3';
import { getCollection } from 'request/rest';

function useCollection() {
  const { execute, value, loading, error } = useAsync(getCollection);
  const account = useWeb3((state) => state.account);

  useEffect(() => {
    if (account) {
      execute(account);
    }
  }, [account, execute]);

  return { value, loading, error };
}

export default useCollection;
