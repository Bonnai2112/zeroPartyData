import { providers } from 'ethers';
import { WagmiConfig, createClient } from 'wagmi';
import networks from '../utils/networks.json';
import Header from './header';

const provider = providers.getDefaultProvider(
    networks[networks.selectedChain].rpcUrls[0]
)
const client = createClient({
    provider: provider,
    autoConnect: true
})

export default function Layout({ children }) {
    return (
        <WagmiConfig client={client}>
            <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300" >
                <Header />
                <main>{children}</main>
            </div>
        </WagmiConfig>
    )
}