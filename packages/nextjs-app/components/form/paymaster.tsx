import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useContext } from "react"
import { AppContext } from "../AppProvider"

export function PaymasterUrl() {
    const {paymasterUrl, setPaymasterUrl} = useContext(AppContext)

    return (
        <div className="grid gap-2">
            <Label htmlFor="paymaster-url">Paymaster URL</Label>
            <Input id="paymaster-url" placeholder="Enter Paymaster URL" value={paymasterUrl} onChange={(e) => setPaymasterUrl?.(e.target.value)}/>
        </div>
    )
}