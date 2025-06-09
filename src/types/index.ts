export type TNavLink = {
    href: string;
    key: string;
    label: string;
};

export type TSosmedLink = {
    href: string;
    key: string;
    icon: string;
}

export type TServices = {
    key: string;
    icon: string;
    title: string;
    description: string;
}

export type TProject = {
    key: string;
    title: string;
    description: string;
    code: string;
    type: string;
}

export type TProjectType = {
    title: string;
    value: string;
}