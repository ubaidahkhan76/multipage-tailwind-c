import Link from "next/link";

export default function Nav() {
    return (
        <div className="bg-blue-600 text-white h-16 py-3">
            <nav>
                <ul className="flex gap-20 justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}
