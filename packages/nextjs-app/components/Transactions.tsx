"use client";

import { AppProvider } from "@/components/AppProvider";
import { Chain } from "@/components/form/chain";
import { PaymasterUrl } from "@/components/form/paymaster";
import { WalletType } from "@/components/form/wallet-type";
import { Click } from "@/components/transaction/Click";

export function Transactions() {
    return (
        <AppProvider>
            <div className="hidden min-w-120 w-1/4 flex-col border-r bg-background p-6 sm:flex">
                <div className="mb-12 text-lg font-semibold">Settings</div>
                <form className="grid gap-8">
                    <WalletType />
                    <Chain />
                    <PaymasterUrl />
                </form>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex flex-col justify-center w-full h-full">
                    <div className="grid gap-8 w-1/2 mx-auto">
                        <Click />
                    </div>
                </div>
            </div>
        </AppProvider>
    )
}