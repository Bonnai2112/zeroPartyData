import dynamic from "next/dynamic"

const ConnectWalletButton = dynamic(
    () => import("./connectWalletButton"),
    {
        ssr : false
    }
)

export default function Header() {
    <header>
        <div className="flex justify-center items-center">
            <ConnectWalletButton />
        </div>
    </header>
}