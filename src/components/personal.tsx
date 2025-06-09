import { SOSMED_LINKS } from "@/constants";
import { Variable } from "@/constants/variable";
import Image from "next/image";
import Link from "next/link";

export default function Personal() {
    return (
        <section
            id="home"
            className="h-fit font-poppins bg-white px-10 lg:px-[250px]"
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                {/* MOBILE VERSION */}
                <div className="flex lg:hidden flex-col justify-center items-center">
                    <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
                        <Image
                            src="/images/profile.webp"
                            alt="profile"
                            loading="lazy"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex gap-4 mt-6">
                        {SOSMED_LINKS.map((sosmed) => (
                            <Link href={sosmed.href} target="_blank" key={sosmed.key}>
                                <Image
                                    src={sosmed.icon}
                                    alt={sosmed.key}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tab Kiri */}
                <div className="flex-1 flex flex-col gap-2 lg:gap-4 items-start text-center md:text-left">
                    <p className="text-black text-sm">Hi, I am</p>
                    <p className="text-2xl font-bold text-[#FD6F00]">
                        IQBAL FATUR NUGRAHA
                    </p>
                    <h1 className="text-xl lg:text-5xl font-extrabold text-black leading-tight">
                        FRONT END <br /> DEVELOPER
                    </h1>
                    <p className="text-sm text-black font-normal text-justify max-w-lg">
                        {Variable.aboutMe}
                    </p>
                    <a
                        href="https://wa.me/6282268681612"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-[#FD6F00] text-white text-xl font-medium px-8 py-4 rounded-lg"
                    >
                        HIRE ME
                    </a>
                </div>

                {/* Tab Kanan */}
                <div className="flex flex-col justify-center items-center">
                    <div className="hidden lg:block relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
                        <Image
                            src="/images/profile.webp"
                            alt="profile"
                            loading="lazy"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="hidden lg:flex gap-4 mt-6">
                        {SOSMED_LINKS.map((sosmed) => (
                            <Link href={sosmed.href} target="_blank" key={sosmed.key}>
                                <Image
                                    src={sosmed.icon}
                                    alt={sosmed.key}
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
