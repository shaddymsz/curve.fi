import useWagmiConnect from '../hooks/useWagmiConnect';

const SignatureStatus = () => {
  const { status, error } = useWagmiConnect();

  if (status === 'disconnected') {
    return <p>Wallet is not connected</p>;
  }

  if (status === 'connecting') {
    return <p>Connecting to wallet...</p>;
  }

  if (status === 'connected') {
    return <p>Sign message to verify</p>;
  }

  if (status === 'verified') {
    return <p>Message has been verified</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return null;
};

export default SignatureStatus;
