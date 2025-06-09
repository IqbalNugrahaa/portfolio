import { SERVICES } from "@/constants";
import Image from "next/image";

export default function Services() {
    return (
        <section
            id="services"
            className="h-fit font-poppins bg-white px-10 lg:px-[250px] mb-[139px]"
        >
            <div className="flex flex-col items-center gap-4">
                <p className="text-6xl text-black font-semibold">
                    SERVICES
                </p>
                <p className="text-base text-black font-normal">
                    The technical skills I have at work include understanding Flutter, React JS, and Next JS programming.
                </p>
                <div className="flex mt-3 gap-[31px]">
                    {
                        SERVICES.map((service) => (
                            <div
                                key={service.key}
                                className="w-[330px] bg-[#F8F8F8] rounded-xl flex flex-col px-[18px] pt-[57px] pb-[10px] gap-[15px]"
                            >
                                <div className="w-[70px] h-[70px] mx-auto">
                                    <Image
                                        src={service.icon}
                                        alt={service.key}
                                        width={70}
                                        height={70}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <p className="mt-2 text-3xl text-black font-semibold">
                                    {service.title}
                                </p>
                                <p className="text-lg text-black font-normal">
                                    {service.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}