import React from 'react'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import useWagmiConnect from '../hooks/useWagmiConnect';

function ConnectButton() {
  const {
    address,
    ensAvatar,
    ensName,
    connector,
    isConnected,
    disconnect,
    connectors,
    handleConnect,
    error,
    isLoading,
    pendingConnector,
    signatureError,
    handleSignature,
  } = useWagmiConnect();

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => handleConnect(connector)}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
        </button>
      ))}
      {signatureError && <div>{signatureError.message}</div>}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default ConnectButton