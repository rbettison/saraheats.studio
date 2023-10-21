import Link from "next/link"

export default function Header() {
    return (
        <div className="container p-10 z-40">
            <div className="flex flex-row justify-between">
                <div className="text-4xl font-bold">@saraheats.studio</div>
                <div className="flex flex-row gap-16 font-bold text-lg">
                    <Link href="/design">design</Link>
                    <Link href="/photography">photography</Link>
                    <Link href="/about">about</Link>
                    <Link href="/contact">contact</Link>
                </div>

            </div>
        </div>
    )
}