import { AppContext } from "@/components/AppProvider";
import { useContext } from "react";

export function useCapabilities() {
    const {paymasterUrl} = useContext(AppContext)

    return {
        ...(paymasterUrl && {
            paymasterService: { url: paymasterUrl }
        })
    }
}