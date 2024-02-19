import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import networks from '../utils/networks.json';

export default function ConnectWalletButton() {
    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    // if user is connected 
    if(!address) {
        return (
            <button className='text-lg font-medium rounded-md px-5 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500' 
                    onClick={() => connect({
                        chainId: Number(networks.selectedChain),
                        connector: connectors[0]
                    }) }>
                <span> Connect Wallet</span>
            </button>
        )
    } else {
    // if user isn't connected
        return (
            <button className='text-lg front-medium rounded-md px-5 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500'
                    onClick={() => disconnect()}>
                <span> Disconnect</span>
            </button>
        )
    }
}