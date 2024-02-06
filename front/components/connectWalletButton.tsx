import { useConnect, useAccount, useNetwork, useDisconnect } from "wagmi"
export default function ConnectWalletButton() {

    // states 
    const { connect, connectors } = useConnect();
    const { data: dataAccount } = useAccount();
    const { activeChain } = useNetwork();
    const { disconnect } = useDisconnect();

    // variables and functions
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    const truncateEthAddress = (address) => {
        const match = address.match(truncateRegex);
        if (!match) return address;
        return `${match[1]}…${match[2]}`;
    };

    // templates
    if (!dataAccount?.address) {
        return (
            <button
                className="text-lg font-medium rounded-md px-5 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500"
                onClick={() => {
                    connect(connectors[0]);
                }}
            >
                <span>Connect Wallet</span>
            </button>
        );
    } else {
        return (
            <div className="flex flex-wrap gap-5 justify-center items-center">
                <div className="p-3 bg-slate-700 text-lg font-medium rounded-md">
                    <span>{truncateEthAddress(dataAccount?.address)}</span>
                </div>
                <button
                    onClick={() => disconnect()}
                    className="text-lg font-medium rounded-md px-5 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500"
                >
                    Disconnect
                </button>
            </div>
        );
    }
}