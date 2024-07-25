"use client";

import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { WagmiProvider } from 'wagmi'; 

export const config = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
})

const queryClient = new QueryClient(); 
 
function OnchainProviders({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={"fsDbwDOLzfzHE6dxxdphhGPIjoSCxtt2"} // issue with process.env
          chain={base}
          schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider> 
  );
}
 
export default OnchainProviders;