import { FilterType } from "./FilterType"

interface Company {
    name: string,
    logo: string | null,
    link: string | undefined | null,
    via?: Company,
    type: "contract" | "perm" | null,
}

interface Project { 
    name: string,
    description: string,
}

interface Repository { 
    name: string,
    description: string,
    link: string | "REQUEST",
}

interface MediaLink {
    image: string,
    video: string,
}

export interface Section {
    id: string,
    title: string,
    start: string,
    end: string,
    duration: string,
    company: Company | null,
    challenges?: string[],
    projects?: Project []
    tools: string[],
    repositories: Repository[],
    media: MediaLink | null,
    live: string | null,
    filter?: FilterType[]
}