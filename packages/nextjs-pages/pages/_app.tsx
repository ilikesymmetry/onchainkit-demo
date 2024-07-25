import "@/styles/globals.css";
import type { AppProps } from "next/app";
import OnchainProviders from "@/components/OnchainProviders";
import '@coinbase/onchainkit/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OnchainProviders>
      <Component {...pageProps} />;
    </OnchainProviders>
  )
}
