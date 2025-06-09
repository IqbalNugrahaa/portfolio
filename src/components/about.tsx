import Image from "next/image";
import SkillBar from "./skillbar";
import { Variable } from "@/constants/variable";

export default function About() {
    return (
        <section id="about" className="h-fit font-poppins bg-white px-10 lg:px-[250px]">
            <div className="flex justify-center items-center gap-[33px]">
                <div className="relative w-[675px] h-[675px]">
                    <Image
                        src="/images/about.webp"
                        alt="profile"
                        loading="lazy"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="w-full flex flex-col gap-4">
                    <p className="text-6xl text-black font-semibold">
                        About Me
                    </p>
                    <p className="text-sm text-black font-normal text-justify">
                        {Variable.aboutMe}
                    </p>
                    <div className="flex flex-col">
                        <SkillBar label="Flutter" percentage={80} />
                        <SkillBar label="React JS" percentage={75} />
                        <SkillBar label="Next JS" percentage={60} />
                    </div>
                </div>
            </div>

        </section>
    );
}