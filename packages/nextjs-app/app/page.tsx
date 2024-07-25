"use client";

import { Connect } from "@/components/Connect";
import { TransactionTesting } from "@/components/transaction-testing";

export default function Home() {
  return (
    <main className="">
      <div className="absolute top-2 right-2">
        <Connect />
      </div>
      <TransactionTesting />
    </main>
  );
}
