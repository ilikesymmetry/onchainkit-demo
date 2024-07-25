import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useContext } from "react"
import { useConnect, useConnectors, useDisconnect } from "wagmi"
import { AppContext } from "../AppProvider"

export enum WalletPreference {
    SMART_WALLET="smartWalletOnly",
    EOA="eoaOnly"
}

export function WalletType() { 
    const {walletType, setWalletType} = useContext(AppContext)
    const { connect } = useConnect()
    const connectors = useConnectors()

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

    return (
        <div className="grid gap-2">
            <Label htmlFor="wallet-type">Wallet Type</Label>
            <RadioGroup id="wallet-type" value={walletType} className="flex items-center gap-2" onValueChange={(value) => changeWallet(value as WalletPreference)}>
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
            </RadioGroup>
        </div>
    )
}