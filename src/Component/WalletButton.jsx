import { useCallback } from 'react';
import useWagmiConnect from '../hooks/useWagmiConnect';

const WalletButton = () => {
  const { status, handleConnect } = useWagmiConnect();

  const handleButtonClick = useCallback(async () => {
    await handleConnect();
  }, [handleConnect]);

  return (
    <button onClick={handleButtonClick}>
      {status === 'disconnected' && 'Connect Wallet'}
      {status === 'connecting' && 'Connecting...'}
      {status === 'connected' && 'Sign Message'}
      {status === 'verified' && 'Verified'}
    </button>
  );
};

export default WalletButton;
