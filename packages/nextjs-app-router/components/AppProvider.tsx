// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { WalletPreference } from './form/wallet-type';


type Paymaster = {
  url: string, 
  enabled: boolean
}
type State = {
    walletType?: WalletPreference
    setWalletType?: (walletType: WalletPreference) => void
    clearWalletType?: () => void
    chainId?: number,
    setChainId?: (chainId: number) => void
    paymasters?: Record<number, Paymaster> // paymasters is per network
    setPaymaster?: (chainId: number, url: string, enabled: boolean) => void
}

const defaultState: State = {
    walletType: WalletPreference.SMART_WALLET,
    chainId: 85432,
    paymasters: {}
}

export const AppContext = createContext(defaultState);

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const [walletType, setWalletTypeState] = useState<WalletPreference>();
  const [chainId, setChainIdState] = useState<number>();
  const [paymasters, setPaymastersState] = useState<Record<number,Paymaster>>();

  // Load initial values from localStorage
  useEffect(() => {
    const storedWalletType = localStorage.getItem('walletType');
    const storedChainId = localStorage.getItem('chainId');
    const storedPaymasters = localStorage.getItem('paymasters');

    console.log('storedWalletType', storedWalletType)
    console.log('storedChainId', storedChainId)
    console.log('storedPaymasters', storedPaymasters)
    
    if (storedWalletType) {
      setWalletType(storedWalletType as WalletPreference);
    }
    if (storedChainId) {
      setChainIdState(parseInt(storedChainId));
    }
    if (storedPaymasters) {
      setPaymastersState(JSON.parse(storedPaymasters));
    }
  }, []);

  // Update localStorage whenever the state changes
  function setWalletType(newWalletType: WalletPreference) {
    localStorage.setItem('walletType', newWalletType.toString());
    setWalletTypeState(newWalletType);
    }
    
  function clearWalletType() {
    localStorage.setItem('walletType', "");
    setWalletTypeState(undefined);
  }

  const setChainId = (newChainId: number) => {
    localStorage.setItem('chainId', newChainId.toString());
    setChainIdState(newChainId);
  };

  const setPaymaster = (chainId: number, url: string, enabled: boolean) => {
    const newObj = {
      ...paymasters,
      [chainId]: { url, enabled }
    }
    localStorage.setItem('paymasters', JSON.stringify(newObj));
    setPaymastersState(newObj);
  };

  return (
    <AppContext.Provider value={{ walletType, setWalletType, clearWalletType, chainId, setChainId, paymasters, setPaymaster }}>
      {children}
    </AppContext.Provider>
  );
};
