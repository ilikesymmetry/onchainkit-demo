// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { WalletPreference } from './form/wallet-type';

type State = {
    walletType?: WalletPreference
    setWalletType?: (walletType: WalletPreference) => void
    chainId?: number,
    setChainId?: (chainId: number) => void
    paymasterUrls?: Record<number, string> // paymasterUrls is per network
    setPaymasterUrl?: (chainId: number, paymasterUrl: string) => void
}

const defaultState: State = {
    walletType: WalletPreference.SMART_WALLET,
    chainId: 85432,
    paymasterUrls: {}
}

export const AppContext = createContext(defaultState);

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const [walletType, setWalletTypeState] = useState<WalletPreference>();
  const [chainId, setChainIdState] = useState<number>();
  const [paymasterUrls, setPaymasterUrlsState] = useState<Record<number,string>>();

  // Load initial values from localStorage
  useEffect(() => {
    const storedWalletType = localStorage.getItem('walletType');
    const storedChainId = localStorage.getItem('chainId');
    const storedPaymasterUrls = localStorage.getItem('paymasterUrls');

    console.log('storedWalletType', storedWalletType)
    console.log('storedChainId', storedChainId)
    console.log('storedPaymasterUrls', storedPaymasterUrls)
    
    if (storedWalletType) {
      setWalletType(storedWalletType as WalletPreference);
    }
    if (storedChainId) {
      setChainIdState(parseInt(storedChainId));
    }
    if (storedPaymasterUrls) {
      setPaymasterUrlsState(JSON.parse(storedPaymasterUrls));
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

  const setPaymasterUrl = (chainId: number, newPaymasterUrls: string) => {
    const newObj = {
      ...paymasterUrls,
      [chainId]: newPaymasterUrls
    }
    localStorage.setItem('paymasterUrls', JSON.stringify(newObj));
    setPaymasterUrlsState(newObj);
  };

  return (
    <AppContext.Provider value={{ walletType, setWalletType, chainId, setChainId, paymasterUrls, setPaymasterUrl }}>
      {children}
    </AppContext.Provider>
  );
};
