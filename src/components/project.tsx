'use client'
import { PROJECT_TYPES, PROJECTS } from "@/constants";
import { TProjectType } from "@/types";
import { useState } from "react";

export default function Project() {
    const [projectType, setProjectType] = useState<TProjectType>({
        title: "All",
        value: "all",
    });

    const handleProjectTypeChange = (type: TProjectType) => {
        setProjectType(type);
    };

    function getFilteredProjects(type: string) {
        if (type === 'all') return PROJECTS;
        return PROJECTS.filter((project) => project.type === type);
    }

    const projects = getFilteredProjects(projectType.value);

    return (
        <section
            id="projects"
            className="h-fit font-poppins bg-white px-10 lg:px-[250px] mb-[139px]"
        >
            <div className="flex flex-col items-center gap-4">
                <p className="text-6xl text-black font-semibold">
                    PROJECTS
                </p>
                <p className="text-base text-black font-normal">
                    Here are some projects that I have worked on.
                </p>
                <div className="mt-10 flex gap-[22px]">
                    {PROJECT_TYPES.map((type, i) => (
                        <div
                            key={i}
                            className={`${projectType.value === type.value
                                ? "bg-[#FD6F00] text-white"
                                : "bg-[#F8F8F8] border border-[#545454] text-black"} px-5 py-2 text-base font-normal rounded-xl cursor-pointer`}
                            onClick={() => handleProjectTypeChange(type)}
                        >
                            {type.title}
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-[#FD6F00] rounded-xl p-5 flex flex-col gap-2"
                        >
                            <p className="text-sm font-semibold text-white">
                                {project.code}
                            </p>
                            <p className="text-xl font-semibold text-white">
                                {project.title}
                            </p>
                            <p className="text-base font-normal text-white">
                                {project.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}