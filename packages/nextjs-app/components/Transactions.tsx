"use client";

import { AppProvider } from "@/components/AppProvider";
import { Connect } from "@/components/Connect";
import { Chain } from "@/components/form/chain";
import { PaymasterUrl } from "@/components/form/paymaster";
import { WalletType } from "@/components/form/wallet-type";
import { Click } from "@/components/transaction/Click";
import { MintNft } from "@/components/transaction/MintNft";
import { SendEth } from "@/components/transaction/SendEth";

export function Transactions() {
    return (
        <AppProvider>
            <div className="absolute top-2 right-2">
                <Connect />     
            </div>
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
                        <MintNft />
                        <SendEth />
                    </div>
                </div>
            </div>
        </AppProvider>
    )
}