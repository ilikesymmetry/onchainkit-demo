// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { WalletPreference } from './form/wallet-type';

type State = {
    walletType?: WalletPreference
    setWalletType?: (walletType: WalletPreference) => void
    chainId?: number,
    setChainId?: (chainId: number) => void
    paymasterUrl?: string
    setPaymasterUrl?: (paymasterUrl: string) => void
}

const defaultState: State = {
    walletType: WalletPreference.SMART_WALLET,
    chainId: 85432,
    paymasterUrl: ""
}

export const AppContext = createContext(defaultState);

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const [walletType, setWalletTypeState] = useState<WalletPreference>();
  const [chainId, setChainIdState] = useState<number>();
  const [paymasterUrl, setPaymasterUrlState] = useState<string>();

  // Load initial values from localStorage
  useEffect(() => {
    const storedWalletType = localStorage.getItem('walletType');
    const storedChainId = localStorage.getItem('chainId');
    const storedPaymasterUrl = localStorage.getItem('paymasterUrl');

    console.log('storedWalletType', storedWalletType)
    console.log('storedChainId', storedChainId)
    console.log('storedPaymasterUrl', storedPaymasterUrl)
    
    if (storedWalletType) {
      setWalletType(storedWalletType as WalletPreference);
    }
    if (storedChainId) {
      setChainIdState(parseInt(storedChainId));
    }
    if (storedPaymasterUrl) {
      setPaymasterUrlState(storedPaymasterUrl);
    }
  }, []);

  // Update localStorage whenever the state changes
  function setWalletType(newWalletType: WalletPreference) {
    localStorage.setItem('walletType', newWalletType.toString());
    setWalletTypeState(newWalletType);
  }

  const setChainId = (newChainId: number) => {
    localStorage.setItem('chainId', newChainId.toString());
    setChainIdState(newChainId);
  };

  const setPaymasterUrl = (newPaymasterUrl: string) => {
    localStorage.setItem('paymasterUrl', newPaymasterUrl);
    setPaymasterUrlState(newPaymasterUrl);
  };

  return (
    <AppContext.Provider value={{ walletType, setWalletType, chainId, setChainId, paymasterUrl, setPaymasterUrl }}>
      {children}
    </AppContext.Provider>
  );
};
