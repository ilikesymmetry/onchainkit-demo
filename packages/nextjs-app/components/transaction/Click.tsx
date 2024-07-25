import { useContext } from "react";
import { Button } from "../ui/button";
import { AppContext } from "../AppProvider";
import { clickContracts } from "@/lib/transactions";
import { useCapabilities } from "@/lib/hooks";

export function Click() {
    const {chainId} = useContext(AppContext)
    const capabilities = useCapabilities()
    const contracts = clickContracts

    return (
        <Button>Click</Button>
    )
}