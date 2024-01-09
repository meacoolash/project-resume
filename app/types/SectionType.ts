import { FilterType } from "./FilterType"

interface Company {
    name: string,
    logo: string | null,
    link: string | undefined | null,
    via?: Company,
    type: "contract" | "perm" | null,
}

interface Repository { 
    name?: string,
    description?: string,
    link: string | "REQUEST",
}

interface MediaLink {
    type: "image" | "video",
    url: string,
}

export interface ProjectType { 
    name: string,
    description: string,
    repository?: Repository | null,
}

export interface SectionType {
    id: string,
    title: string,
    period: string,
    duration: string,
    company: Company | null,
    challenges?: string[],
    projects?: ProjectType[],
    tools: string[],
    media: MediaLink | null,
    live: string | null,
    filter?: FilterType[],
}