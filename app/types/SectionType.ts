import { FilterType } from "./FilterType"

interface Company {
    name: string,
    logo: string | null,
    link: string | undefined | null,
    via?: Company,
    type: "contract" | "perm" | null,
}

interface Repository { 
    name: string,
    description: string,
    link: string | "REQUEST",
}

interface MediaLink {
    type: "image" | "video",
    url: string,
}

export interface ProjectType { 
    name: string,
    description: string,
}

export interface SectionType {
    id: string,
    title: string,
    start: string,
    end: string,
    duration: string,
    company: Company | null,
    challenges?: string[],
    projects?: ProjectType[],
    tools: string[],
    repositories: Repository[],
    media: MediaLink | null,
    live: string | null,
    filter?: FilterType[]
}