'use client'
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export default function Navbar() {

    return (
        <>
            {/* DEKSTOP VERSION */}
            <nav
                className={`sticky top-0 z-50 w-full transition-transform duration-500 -translate-y-0 bg-white hidden lg:flex items-center justify-between font-poppins px-[250px] py-4`}
            >
                <Link href="/">
                    <div className="flex items-center w-fit h-[67px]">
                        <p className="text-center text-xl text-[#606060] font-bold">IQBAL NUGRAHA</p>
                    </div>
                </Link>

                <div className="flex gap-8 justify-end">
                    {
                        NAV_LINKS.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className="font-montserrat font-normal text-[#515151] text-center">
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </>
    );
}