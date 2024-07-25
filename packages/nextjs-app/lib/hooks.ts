import { AppContext } from "@/components/AppProvider";
import { useContext } from "react";

export function useCapabilities() {
    const {chainId, paymasterUrls} = useContext(AppContext)

    const paymasterUrl = !!chainId ? paymasterUrls?.[chainId] : undefined
    const enabled = Boolean(paymasterUrl)

    return enabled ? {
        ...(paymasterUrl && {
            paymasterService: { url: paymasterUrl }
        })
    } : undefined
}