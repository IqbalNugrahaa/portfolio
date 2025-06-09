import { TNavLink, TProject, TServices, TSosmedLink } from "@/types";
import { Variable } from "./variable";

export const NAV_LINKS: TNavLink[] = [
    { href: "/", key: "home", label: Variable.navbarHome },
    { href: `#about`, key: "about", label: Variable.navbarAboutMe },
    { href: "#services", key: "services", label: Variable.navbarServices },
    { href: "#projects", key: "projects", label: Variable.navbarProjects },
];

export const SOSMED_LINKS: TSosmedLink[] = [
    {
        href: "https://www.facebook.com/iqbal.fn?locale=id_ID",
        key: "facebook",
        icon: "/icons/facebook.svg"
    },
    {
        href: "https://www.instagram.com/iqbaallnugraha/?next=%2F",
        key: "instagram",
        icon: "/icons/instagram.svg"
    },
    {
        href: "https://www.linkedin.com/in/iqbal-nugraha-440b85249/",
        key: "linkedin",
        icon: "/icons/linkedin.svg"
    },
];

export const SERVICES: TServices[] = [
    {
        key: "flutter",
        icon: "/icons/flutter.svg",
        title: "Flutter",
        description: "I have experience in developing mobile applications using Flutter, focusing on performance and user experience.",
    },
    {
        key: "reactjs",
        icon: "/icons/reactjs.svg",
        title: "React JS",
        description: "I specialize in building dynamic web applications using React JS, ensuring responsive design and efficient state management.",
    },
    {
        key: "nextjs",
        icon: "/icons/reactjs.svg",
        title: "Next JS",
        description: "I specialize in building dynamic web applications using Next JS, ensuring responsive design and efficient state management.",
    },
];

export const PROJECTS: TProject[] = [
    {
        key: "perintis_berdaya",
        title: "Perintis Berdaya",
        description: "A landing page website designed for the Free Training from the Berdaya Bersama Program, which will be held on June 21, 2025",
        code: "Next JS",
        type: "nextjs",
    },
    {
        key: "naara_landing_page",
        title: "NAARA Landing Page",
        description: "Collaborated with the UI/UX and Backend teams to create a website that helps patients make online bookings",
        code: "Next JS",
        type: "nextjs",
    },
    {
        key: "hi_mitra_mobile_app",
        title: "Hi Mitra Mobile App",
        description: "Designed an application that allows clients to record attendance, create daily tasks, request leave/permission, and access pay slips",
        code: "Flutter",
        type: "flutter",
    },
    {
        key: "ecommerce_app",
        title: "Ecommerce Happiest",
        description: "This application was created as a final project for the FIC Batch 9 training organized by Jago Flutter",
        code: "Flutter",
        type: "flutter",
    },
    {
        key: "hr_mitra_website",
        title: "HR Mitra Website",
        description: "This website is designed to manage employees, track attendance, handle leave requests, and manage pay slips",
        code: "React JS",
        type: "reactjs",
    },
    {
        key: "admin_naara_website",
        title: "Admin Naara Website",
        description: "This website is designed to publish job openings for applicants and functions as a portal for recruiters to review and manage applications",
        code: "React JS",
        type: "reactjs",
    },
];

export const PROJECT_TYPES = [
    { title: "All", value: "all" },
    { title: "Flutter", value: "flutter" },
    { title: "React JS", value: "reactjs" },
    { title: "Next JS", value: "nextjs" },
];