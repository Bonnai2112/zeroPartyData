import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers"
import networks from "../utils/networks.json"
import Header from "./header";

// Provider that will be used when no wallet is connected (aka no signer)
const provider = getDefaultProvider(
    networks[networks.selectedChain].rpcUrls[0]
);

const client = createClient({
    autoConnect: true,
    provider,
});

export default function Layout({ children }) {
    return (
        <WagmiConfig client={client}>
            <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300">
                <Header />
                <main className="mb-auto">{children}</main>
            </div>
        </WagmiConfig>)
}