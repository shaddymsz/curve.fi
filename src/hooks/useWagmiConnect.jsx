import { useCallback, useState } from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

export default function useWagmiConnect() {
  const [signatureError, setSignatureError] = useState(null);
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = useCallback(
    async (connector) => {
      try {
        await connect({ connector });
      } catch (err) {
        console.error(err);
      }
    },
    [connect],
  );

  const handleSignature = useCallback(
    async (message) => {
      try {
        const signature = await connector.signMessage(message);
        // Use signature to do something useful
      } catch (err) {
        console.error(err);
        setSignatureError(err);
      }
    },
    [connector],
  );

  if (isConnected) {
    return {
      address,
      ensAvatar,
      ensName,
      connector,
      isConnected,
      disconnect,
    };
  }

  return {
    connectors,
    handleConnect,
    error,
    isLoading,
    pendingConnector,
    signatureError,
    handleSignature,
  };
}