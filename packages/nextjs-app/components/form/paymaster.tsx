import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { AppContext } from "../AppProvider"

export function PaymasterUrl() {
    const {chainId, paymasterUrls, setPaymasterUrl} = useContext(AppContext)

    console.log('paymasterUrls', paymasterUrls);

    return (
        <div className="grid gap-2">
            <Label htmlFor="paymaster-url">Paymaster URL (chain-specific)</Label>
            <Input id="paymaster-url" disabled={!chainId} placeholder="Enter Paymaster URL" value={!chainId ? "" : paymasterUrls?.[chainId] ?? ""} onChange={(e) => setPaymasterUrl?.(chainId!, e.target.value)}/>
        </div>
    )
}