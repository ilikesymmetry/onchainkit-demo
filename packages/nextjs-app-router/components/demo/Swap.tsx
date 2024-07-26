import { 
    Swap, 
    SwapAmountInput, 
    SwapToggleButton, 
    SwapButton, 
    SwapMessage
} from '@coinbase/onchainkit/swap'; 
import type { Token } from '@coinbase/onchainkit/token';
import { useContext } from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { AppContext } from '../AppProvider';
 
function SwapComponent() {
  const { address } = useAccount();
  const {chainId} = useContext(AppContext)
 
  const ETHToken: Token = {     
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH", 
    };
 
  const USDCToken: Token = { 
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
   };
 
  const swappableTokens: Token[] = [ETHToken, USDCToken];
 
  return (
    <div className='relative w-full h-full'>
      {chainId !== 8453 && (
        <div className='w-full h-full flex flex-col justify-center text-center bg-[#000000] bg-opacity-50 z-10 absolute top-0 left-0 rounded-xl'>
          <div className='bg-muted w-fit mx-auto p-6 rounded-md'>
            Swap Demo is only available on Base.
            <br />
            Please change your chain.
          </div>
        </div>
      )}
      <Swap address={address} className="border bg-[#ffffff]">
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens} 
          token={ETHToken} 
          type="from"
          /> 
        <SwapToggleButton /> 
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens} 
          token={USDCToken} 
          type="to"
          /> 
        <SwapButton /> 
        <SwapMessage /> 
      </Swap> 
    </div>
  );
}

export default function SwapDemo() {
    return (
        <div className='mx-auto'>
            <SwapComponent />
        </div>
    )
}