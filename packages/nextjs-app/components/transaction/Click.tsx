import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { clickContracts } from "@/lib/transactions";
import { useCapabilities } from "@/lib/hooks";
import { 
    Transaction, 
    TransactionButton, 
    TransactionSponsor, 
    TransactionStatus, 
    TransactionStatusAction, 
    TransactionStatusLabel,
    TransactionToast,
    TransactionToastAction,
    TransactionToastIcon,
    TransactionToastLabel, 
  } from '@coinbase/onchainkit/transaction'; 
import { deployedContracts } from "@/lib/constants";
import { zeroAddress } from "viem";

export function Click() {
    const {chainId} = useContext(AppContext)
    const capabilities = useCapabilities()
    const contracts = clickContracts

    console.log('chainId', chainId)

    return (
        <Transaction 
            chainId={chainId ?? 84532} // something breaks if we don't have default network?
            address={!!chainId ? deployedContracts[chainId]?.click : zeroAddress} 
            contracts={contracts} 
            capabilities={capabilities} 
        >
            <TransactionButton text="Click" />
            {capabilities?.paymasterService?.url && (
                <TransactionSponsor text="Coinbase" />
            )}
            <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
            </TransactionStatus>
            <TransactionToast>
                <TransactionToastIcon />
                <TransactionToastLabel />
                <TransactionToastAction />
            </TransactionToast>
        </Transaction> 
    )
}