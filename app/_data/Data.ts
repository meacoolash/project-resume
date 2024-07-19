import { FilterType } from "@models/FilterType";
import { SectionType } from "@models/SectionType";

export const Data: SectionType[] = [
    {
        id: "unicorn",
        print: true,
        title: "Software Architect",
        period: "Apr 2024 - Ongoing",
        duration: "",
        company: {
            name: "Unicorn.com",
            link: "https://www.unicorn.com/",
            logo: null,
            type: null,
        },
        info: "Responsible for a greenfield project - a Warehouse Management System (WMS) incorporating IoT technologies.",
        role: "Software Architect/Lead",
        projects: [
            {
                name: "SySEL WMS",
                description: "Responsible for designing and implementing solutions for a greenfield project developing a Warehouse Management System (WMS) as a web and mobile application for warehouse operations, incorporating IoT technologies.",
                repository: {
                    link: "REQUEST"
                }
            },
        ],
        tools: [
            "NextJS",
            "NestJS",
            "Tailwind CSS",
            "Postgres",
            "TypeORM",
            "Docker",
            "AWS",
            "IoT",
        ],
        challenges: [

            "Architectural Design",
            "Full Stack Development",
            "Lifecycle Management",
            "IoT Integration",
            "Team Management",

        ],
        media: {
            type: "image",
            url: "/unicorn.jpg"
        },
        live: null,
        filter: [
            FilterType.NextJS,
            FilterType.NestJS,
            FilterType.React,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.SQL,
            FilterType.Tailwind,
            FilterType.CSS,
            FilterType.CICD,
            FilterType.Docker,
            FilterType.AWS,
            FilterType.DevOps,
            FilterType.Lead,
        ]
    },
    {
        id: "qviks",
        print: true,
        title: "NextJS Fullstack",
        period: "Feb 2024 - Ongoing",
        duration: "",
        company: null,
        info: "Concept-to-deployment SaaS CRM Scalable application.",
        role: "",
        projects: [
            {
                name: "Qviks CRM",
                description: "AI-powered CRM designed for solo professionals. Simple to use. Seamlessly integrates with email marketing.",
                repository: {
                    link: "REQUEST"
                }
            },
        ],
        tools: [
            "NextJS",
            "Tailwind CSS",
            "Shadcn/ui",
            "Turso",
            "SQLite",
            "Drizzle ORM",
            "Vercel",
            "Tanstack",
            "Open AI",
        ],
        challenges: [

            "Architectural Design: Solo design and implementation of scalable SaaS CRM architecture.",
            "UI/UX Design: Creation of intuitive interfaces, enhancing user engagement. Using Shadcn/ui and Tailwind CSS along with animations and transitions.",
            "Full Stack Development: Independently developed using NextJS for server and client components.",
            "Lifecycle Management: Managed concept-to-deployment, including CI/CD, as a solo developer."

        ],
        media: {
            type: "image",
            url: "/qviks.jpg"
        },
        live: "https://qviks.com",
        filter: [
            FilterType.React,
            FilterType.NextJS,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.SQL,
            FilterType.Tailwind,
            FilterType.CSS,
            FilterType.UIUX,
            FilterType.CICD,
            FilterType.Solo,
        ]
    },


    //2024
    {
        id: "react",
        print: true,
        title: "React Ecosystem",
        period: "Oct 2023 - Feb 2024",
        duration: "",
        company: null,
        info: "Numerous small projects to explore and compare latest web technologies, focusing on AI integration and cloud services.",
        role: "",
        projects: [
            {
                name: "This Portfolio",
                description: "NextJS portfolio website, an interactive resume.",
                repository:
                {
                    name: "Portfolio",
                    description: "Next.js portfolio website, an interactive resume.",
                    link: "https://github.com/meacoolash/project-resume"
                }
            },
            {
                name: "Contemporary trends and hands-on micro-projects",
                description: "Several simple full-stack solutions, exploring the latest trends in web development, including AI and cloud technologies.",
            },
        ],
        tools: [
            "React",
            "NextJS",
            "Tailwind CSS",
            "NodeJS",
            "Express",
            "MongoDB",
            "SQL",
            "Drizzle ORM",
            "Netlify",
            "Vercel",
            "Open AI"
        ],
        challenges: [
            "Explore the trends of contemporary web development, choose between Express vs NextJS, SQL vs NoSQL, Vercel vs Netlify/Cyclic, Supabase vs Turso vs Neon, Drizzle ORM vs Prisma, Zustand/TanStack vs Redux, Clerk vs NextAuth etc.",
            "Fully understand the mindset of NextJS, Tailwind CSS, and other modern tools.",
            "Effectively use AI and Copilot to speed up development.",
            "Learn about current cloud technologies and deployment strategies.",
        ],
        media: {
            type: "image",
            url: "/react.jpg"
        },
        live: null,
        filter: [
            FilterType.React,
            FilterType.NextJS,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.Node,
            FilterType.SQL,
            FilterType.MongoDB,
            FilterType.Tailwind,
            FilterType.CSS,
            FilterType.UIUX,
            FilterType.CICD,
            FilterType.Solo,
        ]
    },

    // Angular17
    {
        id: "angular17",
        print: true,
        title: "Angular 17",
        period: "Jun 2023 - Sep 2023",
        duration: "1 yr",
        company: null,
        info: "Mentorship of junior developers trought spiralcoder.com",
        role: "",
        projects: [
            {
                name: "Angular 17",
                description: "Update knowledge of Angular to the latest version"
            },
            {
                name: "Mentorship",
                description: "Mentorship of junior developers trought spiralcoder.com"
            }
        ],
        tools: [
            "Angular 17",
        ],
        challenges: [
            "Learning about course creation and video production.",
            "Learning about web builders, SEO, marketing.",
            "While the course for junior developers was a promising project, I realized that my passion lies more in continuing my own education and working on projects, rather than teaching. Despite my love for teaching, I chose to focus on advancing my skills as a full-stack developer. I'm still available to lend a hand and offer guidance, but my primary focus is on my personal growth and work."
        ],
        media: {
            type: "image",
            url: "/angular.jpg"
        },
        live: null,
        filter: [
            FilterType.Angular,
            FilterType.Typescript,
            FilterType.JavaScript,
        ]
    },

    //OANDA
    {
        id: "oanda",
        print: true,
        title: "MEAN Stack",
        period: "2017 - Dec 2022",
        duration: "5 yrs",
        company: null,
        info: "A full-stack trading bot and analysis tool for stock/commodities.",
        role: "",
        projects: [
            {
                name: "Stock/Commodities Trading Bot and Analysis Tool",
                description: "A full-stack trading bot and analysis tool for stock/commodities, focused on both real-time trading and historical market data analysis.",
                repository: {
                    link: "REQUEST"
                }
            }
        ],
        tools: [
            "NodeJS",
            "Express",
            "MongoDB",
            "Angular",
            "Highcharts",
            "Socket.io",
            "OANDA API",
            "Jasmine",
            "Karma",
            "Jest"
        ],
        challenges: [
            "Develop a fullstack application from scratch.",
            "Explored socket.io and real time data visualization.",
            "Manage live high - frequency trading operations on a dedicated server.",
            "Overcame the complexities of the OANDA API for trading operations.",
            "Deal with challenges involving timezones and time- sensitive data processing.",
            "End the project in Dec 2023, as trading strategies proved non - profitable."
        ],
        media: {
            type: "image",
            url: "/oanda.jpg"
        },
        live: null,
        filter: [
            FilterType.Angular,
            FilterType.Node,
            FilterType.Typescript,
            FilterType.MongoDB,
            FilterType.CSS,
            FilterType.UnitTest,
            FilterType.SocketIO,
            FilterType.JavaScript,
            FilterType.UIUX,
            FilterType.Solo,
        ],
    },

    // UNIQA
    {
        id: "uniqa",
        print: true,
        title: "Angular 13",
        period: "Nov 2021 - Dec 2022",
        duration: "1 yr 2 mos",
        company: {
            name: "UNIQA Insurance Group AG (Vienna, Austria)",
            link: "https://www.uniqa.at/",
            logo: null,
            type: null,
            via: {
                name: "CoolPeople s.r.o. (Bratislava, Slovakia)",
                link: "https://www.coolpeople.sk/",
                logo: null,
                type: "contract",
            },
        },
        info: "Travel insurance calculator, Landing Page and CMS",
        role: "FE Developer in Scrum",
        projects: [
            {
                name: "Calculator Application",
                description: "Travel insurance calculator with complex functionality, numerous use-cases, and validations",
            },
            {
                name: "Landing page",
                description: "Responsive landing page with a container for the calculator, writing reusable Storybook components. Utilizes Scully for static site generation, enhancing performance and SEO."
            },
            {
                name: "CMS",
                description: "Allowing admins to edit the content of landing page using Storyblock"
            },
        ],
        tools: [
            "Angular 13",
            "Angular CDK",
            "Angular Material",
            "Custom CSS",
            "NgRX",
            "Cypress",
            "GitLab CI/CD",
            "Jasmine/Karma",
            "Storyblock",
            "Storybook",
            "Scully",
            "Scrum",
        ],
        challenges: [
            "Meet the tight deadline with ease.",
            "Collaborate within monorepo with the other teams.",
            "Learn about Scully, Storyblock, Storybook.",
            "Build complex components based on Angular CDK."
        ],
        media: {
            type: "video",
            url: "/uniqa.mp4",
            urlThumbnail: "/uniqa.jpg",
        },
        live: "https://reiseversicherung.uniqa.at/",
        filter: [
            FilterType.Angular,
            FilterType.Typescript,
            FilterType.CSS,
            FilterType.JavaScript,
            FilterType.UnitTest,
            FilterType.E2E,
            FilterType.UIUX,
            FilterType.CICD,
            FilterType.Scrum,

        ],
    },

    // VARDEN 
    {
        id: "varden",
        print: true,
        title: "Angular 11",
        period: "Nov 2020 - Nov 2021",
        duration: "1 yr",
        company: {
            name: "VARDEN.se (Sweden)",
            link: null,
            logo: null,
            type: "contract",
        },
        info: "Developing Platform, Booking system and Admin portal.",
        role: "FE Developer in Scrum",
        projects: [
            {
                name: "Platform",
                description: "Swedish online platform for healthcare services. It allows users to search for, compare, and book appointments with various healthcare providers."
            },
            {
                name: "Booking system",
                description: "Calendar booking system built from scratch, including API Design and custom styles.",
                repository: {
                    link: "REQUEST"
                }
            },
            {
                name: "Admin Portal",
                description: "A custom-built user management tool, where I actively contributed to its architectural design (Greenfield project)."
            }
        ],
        tools: [
            "Angular 11",
            "GitLab CI/CD",
            "Jasmine/Karma",
            "Angular Material",
            "Custom CSS",
            "Scrum",
        ],
        challenges: [
            "Developed a booking system from scratch, including an API design and custom styles.",
            "Optimized performance"
        ],
        media: {
            type: "video",
            url: "/varden.mp4",
            urlThumbnail: "/varden.jpg"
        },
        live: "http://varden.se",
        filter: [
            FilterType.Angular,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.CSS,
            FilterType.UnitTest,
            FilterType.E2E,
            FilterType.UIUX,
            FilterType.CICD,
            FilterType.Scrum,
        ],
    },

    //SWISSRE
    {
        id: "swissre",
        print: true,
        title: "Angular 8",
        period: "Dec 2019 - Dec 2020",
        duration: "1 yr",
        company: {
            name: "SWISS RE",
            link: null,
            logo: null,
            type: null,
            via: {
                name: "Riwers s.r.o.",
                link: "",
                logo: null,
                type: "contract",
            }
        },
        info: "Contributed to the transition of the GIN platform from AngularJS.",
        role: "FE Developer in Scrum",
        projects: [
            {
                name: "Platform upgrade",
                description: "Contributed to the transition of the GIN platform from AngularJS to Angular 8, which serves as a centralized application for mapping weather data related to natural hazards in Switzerland."
            }
        ],
        tools: [
            "AngularJS",
            "Angular 8",
            "Custom CSS",
            "Scrum"
        ],
        challenges: [
            "Transition existing code to new Angular standards.",
            "Implement numerous complex charts and layers.",
            "Gain understanding of the environmental domain.",
            "Develop a user-friendly Drag and Drop feature from scratch in vanilla JS."
        ],
        media: {
            type: "video",
            url: "gin.mp4",
            urlThumbnail: "gin.jpg"
        },
        live: null,
        filter: [
            FilterType.Angular,
            FilterType.CSS,
            FilterType.UnitTest,
            FilterType.JavaScript,
            FilterType.Scrum
        ],
    },

    //SOLAR
    {
        id: "solar",
        print: true,
        title: "Angular 6",
        period: "Aug 2018 - Jan 2020",
        duration: "1 yr 6 mos",
        company: {
            name: "Solar Turbines (Caterpillar Inc.)",
            link: null,
            logo: null,
            type: null,
            via: {
                name: "Ness s.r.o.",
                link: "",
                logo: null,
                type: "perm",
            }
        },
        info: "Developed an advanced administration system.",
        role: "FE Developer in Scrum",
        projects: [
            {
                name: "Admin Portal",
                description: "Developed an advanced administration system for sales support, focusing on offshore oil platforms equipped with solar turbines."
            }
        ],
        tools: [
            "Angular 6",
            "Jasmine",
            "Karma",
            "Cypress",
            "Angular Material",
            "Scrum"
        ],
        challenges: [
            "Overcame tight deadlines and resource limitations.",
            "Complete an initial version of the project solo that was initially planned for a multi-developer team.",
            "Obtain a Scrum Certification (PSM I) ID461536"
        ],
        media: {
            type: "image",
            url: "/solar2.jpg"
        },
        live: null,
        filter: [
            FilterType.Angular,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.CSS,
            FilterType.UnitTest,
            FilterType.E2E,
            FilterType.UIUX,
            FilterType.Scrum,
        ],
    },

    //INNOGY
    {
        id: "innogy",
        print: true,
        title: "AngularJS/Angular 5",
        period: "Jan 2018 - Aug 2018",
        duration: "8 mos",
        company: {
            name: "VSE (Innogy group)",
            link: null,
            logo: null,
            type: null,
            via: {
                name: "Code2b s.r.o.",
                link: "",
                logo: null,
                type: "contract",
            }
        },
        info: "AngularJS + 2 simple greenfield apps in Angular 5",
        role: "FE Developer in Scrum",
        projects: [
            {
                name: "Greenfield Angular Apps",
                description: "Developed 2 simple applications from scratch"
            },
            {
                name: "AngularJS to Angular2+ Migration",
                description: "rewrote one complex AngularJS app to Angular 4+, including maintenance."
            }
        ],
        tools: [
            "AngularJS",
            "Angular 2",
            "Angular Material",
            "Custom CSS",
            "Bootstrap"
        ],
        challenges: [],
        media: {
            type: "video",
            url: "/innogy.mp4",
            urlThumbnail: "/innogy.jpg"
        },
        live: null,
        filter: [
            FilterType.Angular,
            FilterType.Typescript,
            FilterType.JavaScript,
            FilterType.CSS,
            FilterType.UnitTest,
            FilterType.UIUX,
            FilterType.Scrum,
        ],
    },

    //ADITO
    {
        id: "adito-gmbh",
        print: true,
        title: "JavaScript/SQL",
        period: "Jan 2017 - Jan 2018",
        duration: "1 yr",
        company: {
            name: "Adito GmbH",
            link: null,
            logo: null,
            type: "contract",
            via: {
                name: "Nordlicht s.r.o.",
                link: "",
                logo: null,
                type: "contract",
            }
        },
        info: "Wrote JavaScript code for SQL operations",
        role: "JS/SQL Developer in Scrum",
        projects: [
            {
                name: "CRM System Maintenance",
                description: "Wrote JavaScript code for SQL operations in a Swing Java client application"
            }
        ],
        tools: [
            "SQL",
            "JavaScript"
        ],
        challenges: [],
        media: {
            type: "image",
            url: "/adito.jpg"
        },
        live: null,
        filter: [
            FilterType.SQL,
            FilterType.JavaScript,
            FilterType.Scrum
        ],
    },

    // WEBDEV
    {
        id: "webdev",
        print: true,
        title: "Web",
        period: "2014 - 2017",
        duration: "3 yrs",
        company: null,
        info: "Developed efficient landing pages for various clients.",
        role: "",
        projects: [
            {
                name: "Landing Pages Development",
                description: "Developed efficient landing pages for various clients using modern web technologies.",
                repository: {
                    link: "REQUEST"
                }
            },
            {
                name: "Exploring Angular and React",
                description: "Engaged in self-directed learning to understand the fundamentals of Angular and React. Developed several simple applications by following tutorials and official documentation."
            }
        ],
        tools: [
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "PUG",
            "Gulp",
            "UI/UX",
        ],
        challenges: [],
        media: {
            type: "video",
            url: "/webdev.mp4",
            urlThumbnail: "/webdev.jpg"
        },
        live: null,
        filter: [
            FilterType.CSS,
            FilterType.JavaScript,
            FilterType.Typescript,
            FilterType.React,
            FilterType.Angular,
            FilterType.UIUX,
            FilterType.Solo,
        ],
    },

    // WORDPRESS
    {
        id: "wordpress",
        print: true,
        title: "Wordpress",
        period: "2010 - 2014",
        info: "Developed webpages, e-commerce sites and blogs.",
        duration: "4 yrs",
        company: null,
        role: "",
        projects: [
            {
                name: "E-commerce and Blog Development",
                description: "Developed webpages, e-commerce sites, and blogs using Wordpress and Magento."
            }
        ],
        tools: [
            "HTML",
            "PHP",
            "CSS",
            "Magento",
            "Woocommerce",
            "MySQL",
            "Photoshop",
            "UI/UX",
        ],
        challenges: [],
        media: {
            type: "video",
            url: "/wordpress.mp4",
            urlThumbnail: "/wordpress.jpg"
        },
        live: null,
        filter: [
            FilterType.CSS,
            FilterType.PHP,
            FilterType.JavaScript,
            FilterType.UIUX,
            FilterType.Solo,
        ],
    },

    // ALLIANZ
    {
        id: "allianz",
        print: true,
        title: "Lotus Notes",
        period: "2006 - 2010",
        duration: "4 yrs",
        company: {
            name: "Allianz SP a.s.",
            link: null,
            logo: null,
            type: "perm",
        },
        info: "Managed Allianz insurance databases and calculators",
        role: "Lotus Notes Developer",
        projects: [
            {
                name: "Insurance Database Management",
                description: "Managed Allianz insurance databases and calculators, and involved in analysis, consulting, and UI/UX."
            }
        ],
        tools: [
            "LotusNotes",
            "LotusScript"
        ],
        challenges: [],
        media: {
            type: "image",
            url: "/allianz.jpg"
        },
        live: null,
        filter: [
            FilterType.UIUX,
        ],
    },

    // TAX
    {
        id: "tax",
        print: true,
        title: "Informix4GL",
        period: "2004 - 2006",
        info: "Developed and optimized Slovakia's tax information system",
        duration: "2 yrs",
        company: {
            name: "Novitech Tax, s.r.o.",
            link: null,
            logo: null,
            type: "perm",
        },
        role: "SQL developer",
        projects: [
            {
                name: "Tax Information System Optimization",
                description: "Developed and optimized Slovakia's tax information system and managed data operations for systems handling millions of rows."
            }
        ],
        tools: [
            "Informix4GL",
            "SQL",
            "Unix Terminals",
            "MS Word Templates"
        ],
        challenges: [],
        media: {
            type: "image",
            url: "/informix.jpg"
        },
        live: null,
        filter: [
            FilterType.SQL
        ],
    },

    // FLASH
    {
        id: "flash",
        print: true,
        title: "Web",
        period: "2003 - 2004",
        info: "Developed simple websites and Flash games.",
        duration: "1 yr",
        company: null,
        projects: [
            {
                name: "Website and Game Development",
                description: "Developed simple websites and Flash games."
            }
        ],
        role: "",
        tools: [
            "HTML",
            "CSS",
            "PHP",
            "MySQL",
            "Javascript",
            "Flash",
            "ActionScript"
        ],
        challenges: [],
        media: {
            type: "video",
            url: "/flash.mp4",
            urlThumbnail: "/flash.jpg"
        },
        live: null,
        filter: [
            FilterType.CSS,
            FilterType.PHP,
            FilterType.JavaScript,
            FilterType.SQL,
            FilterType.UIUX,
            FilterType.Solo,
        ],
    },


    // UNIVERSITY
    {
        id: "university",
        print: false,
        title: "Formal Education",
        period: "1999 - 2004",
        info: "",
        duration: "5 yrs",
        company: null,
        projects: [
            {
                name: "Master's degree",
                description: "Technical University of Košice, Slovakia",
            }
        ],
        tools: [],
        challenges: [],
        media: {
            type: "image",
            url: "/university.jpg"
        },
        live: null,
    },

    // PROCOM
    {
        id: "procom",
        print: false,
        title: "PC Configuration",
        info: "",
        period: "1997 - 1998",
        duration: "1 yr",
        company: {
            name: "ProCom, s.r.o. Košice",
            link: null,
            logo: null,
            type: null,
        },
        projects: [
            {
                name: "PC Configuration",
                description: "Configured Windows 95 PCs, according to customer's request"
            }
        ],
        tools: [
            "Windows 95", "Vacuum Cleaner (they were pretty dusty)"
        ],
        challenges: [],
        media: {
            type: "image",
            url: "/procom.jpg"
        },
        live: null
    },
    {
        id: "commodore",
        print: false,
        title: "First Touch",
        period: "1990 - 1995",
        info: "",
        duration: "4 yrs",
        company: null,
        projects: [
            {
                name: "Basic Programming",
                description: "Learned to program in Basic"
            }
        ],
        tools: [
            "Basic",
            "Karol",
            "Pascal"
        ],
        challenges: [],
        media: {
            type: "image",
            url: "/commodore.jpg"
        },
        live: null
    },
    {
        id: "life",
        print: false,
        title: "Life",
        period: "1981 - ?",
        info: "",
        duration: "",
        company: null,
        projects: [

        ],
        tools: [

        ],
        challenges: [],
        media: {
            type: "image",
            url: "/mikinko.jpg"
        },
        live: null
    }

]
