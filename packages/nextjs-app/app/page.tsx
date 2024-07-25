"use client";

import { Transactions } from "@/components/Transactions";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-muted/40">
      <Transactions />
    </main>
  );
}
