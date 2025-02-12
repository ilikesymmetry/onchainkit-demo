import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { AppContext } from "@/components/AppProvider"
import { Switch } from "@/components/ui/switch"
import { usePaymaster } from "@/lib/hooks"

export function PaymasterUrl() {
    const {chainId, setPaymaster} = useContext(AppContext)
    const {paymasterUrl, enabled} = usePaymaster()

    function changePaymasterUrl(url: string) {
        setPaymaster?.(chainId!, url, !!url)
    }

    function changeEnabled(enabled: boolean) {
        setPaymaster?.(chainId!, paymasterUrl, enabled)
    }

    return (
        <div className="grid gap-2">
            <div className="flex items-center justify-between">
                <Label htmlFor="paymaster-url">Paymaster URL (per-chain)</Label>
                <div className="flex items-center">
                    <Switch id="paymaster-enabled" checked={enabled} disabled={!paymasterUrl} onCheckedChange={(enabled) => changeEnabled(enabled)}/>
                    <Label htmlFor="paymaster-enabled" className="ml-2">
                        Enabled
                    </Label>
                </div>
            </div>
            <Input id="paymaster-url" disabled={!chainId} placeholder="Enter Paymaster URL" value={paymasterUrl} onChange={(e) => changePaymasterUrl(e.target.value)}/>
        </div>
    )
}