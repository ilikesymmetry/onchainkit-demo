import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useContext } from "react"
import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi"
import { AppContext } from "../AppProvider"

export enum WalletPreference {
    SMART_WALLET="smartWalletOnly",
    EOA="eoaOnly"
}

export function WalletType() { 
    const {walletType, setWalletType} = useContext(AppContext)
    const { connect } = useConnect()
    const { disconnectAsync } = useDisconnect()
    const connectors = useConnectors()
    const account = useAccount()

    async function changeWallet(walletType: WalletPreference) {
        setWalletType?.(walletType)
        let connector
        if (walletType === WalletPreference.SMART_WALLET) {
            connector = connectors[0]
        } else {
            connector = connectors[1]
        }
        connect({connector})
    }

    async function disconnectAll() {
        await disconnectAsync({connector: connectors[0]})
        await disconnectAsync({connector: connectors[1]})
    }

    return (
        <div className="grid gap-2">
            <Label htmlFor="wallet-type">Wallet Type</Label>
            <RadioGroup id="wallet-type" value={walletType} className="flex items-center justify-between" onValueChange={(value) => changeWallet(value as WalletPreference)}>
                <div className="flex items-center gap-2">
                    <Label
                        htmlFor="wallet-type-smart"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                        >
                        <RadioGroupItem id="wallet-type-smart" value={WalletPreference.SMART_WALLET} />
                        Smart Wallet
                    </Label>
                    <Label
                        htmlFor="wallet-type-eoa"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                        >
                        <RadioGroupItem id="wallet-type-eoa" value={WalletPreference.EOA} />
                        EOA
                    </Label>              
                </div>
                <button className="text-xs hover:underline" onClick={disconnectAll}>Disconnect all</button>
            </RadioGroup>
            <div className="text-xs text-neutral-500">{!account?.address ? (
                "Click a type to connect"
            ) : (
                `Connected: ${account?.address}`  
            )}</div>
        </div>
    )
}