import dynamic from "next/dynamic"

const ConnectWalletButton = dynamic(
    () => import('../components/connect-wallet-button'),
    {
        ssr: false,
    }
)
export default function Header() {     
    return (
        <header className="flex flex-wrap justify-between p-5 mb-5">
            <div className="flex justify-center items-center">
                <ConnectWalletButton />
            </div>
        </header>)
}