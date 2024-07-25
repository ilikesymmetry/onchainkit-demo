import { useContext } from "react";
import { Button } from "../ui/button";
import { AppContext } from "../AppProvider";
import { useCapabilities } from "@/lib/hooks";
import { clickContracts } from "@/lib/transactions";

export function SendEth() {
    const {chainId} = useContext(AppContext)
    const capabilities = useCapabilities()
    const contracts = clickContracts

    return (
        <Button>Send ETH</Button>
    )
}