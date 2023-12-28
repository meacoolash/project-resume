import { Section } from './SectionType';

export const Data: Section[] = [
    //OANDA
    {
        id: "oanda",
        title: "MEAN Stack Personal Project",
        start: "2017",
        end: "2022",
        duration: "5 yrs",
        company: null,
        projects: [
            {
                name: "Stock/Commodities Trading Bot and Analysis Tool",
                description: "A full-stack trading bot and analysis tool for stock/commodities, focused on both real-time trading and historical market data analysis."
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
            "Developed a fullstack application from scratch",
            "Explored socket.io and real time data visualization",
            "Managed live high - frequency trading operations on a dedicated server",
            "Overcame the complexities of the OANDA API for trading operations",
            "Dealt with challenges involving timezones and time- sensitive data processing",
            "Ended the project in Dec 2023, as trading strategies proved non - profitable"
        ],
        repositories: [],
        media: null,
        live: null,
    },

    // UNIQA
    {
        id: "uniqa",
        title: "Angular 13 Developer",
        start: "Nov 2021",
        end: "Dec 2022",
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
            "The tight deadline met with ease.",
            "Collaborated within monorepo with the other teams",
            "Learned about Scully, Storyblock, Storybook",
            "Built complex components based on Angular CDK"
        ],
        repositories: [],
        media: null,
        live: "https://www.uniqa.at/reiseversicherung/",
    },

    // VARDEN 
    {
        "id": "varden",
        "title": "Angular 11 Developer",
        "start": "11/2020",
        "end": "11/2021",
        "duration": "1 yr",
        "company": {
            "name": "VARDEN",
            "link": null,
            "logo": null,
            "type": "contract",
        },
        "projects": [
            {
                "name": "Platform",
                "description": "Swedish online platform for healthcare services. It allows users to search for, compare, and book appointments with various healthcare providers."
            },
            {
                "name": "Booking system",
                "description": "Calendar booking system built from scratch, including API Design and custom styles."
            },
            {
                "name": "Admin Portal",
                "description": "A custom-built user management tool, where I actively contributed to its architectural design (Greenfield project)."
            }
        ],
        "tools": [
            "Angular 11",
            "GitLab CI/CD",
            "Jasmine/Karma",
            "Scrum",
            "Angular Material",
            "Custom CSS"
        ],
        "challenges": [
            "Developed a booking system from scratch, including an API design and custom styles.",
            "Optimized performance"
        ],
        "repositories": [
            {
                "name": "Booking System",
                "description": "Calendar booking system built from scratch, including API Design and custom styles.",
                "link": "REQUEST",
            }
        ],
        "media": null,
        "live": null
    },

    //SWISSRE
    {
        "id": "swissre",
        "title": "Angular 8 Developer",
        "start": "12/2019",
        "end": "12/2020",
        "duration": "1 yr",
        "company": {
            "name": "SWISS RE",
            "link": null,
            "logo": null,
            "type": null,
            "via": {
                "name": "Riwers s.r.o.",
                "link": "",
                "logo": null,
                "type": "contract",
                "via": null
            }
        },
        "projects": [
            {
                "name": "Platform upgrade",
                "description": "Contributed to the transition of the GIN platform from AngularJS to Angular 8, which serves as a centralized application for mapping weather data related to natural hazards in Switzerland."
            }
        ],
        "tools": [
            "AngularJS",
            "Angular 8",
            "Custom CSS"
        ],
        "challenges": [
            "Transitioned existing code to new Angular standards",
            "Implemented numerous complex charts and layers",
            "Gained understanding of the environmental domain",
            "Developed a user-friendly Drag and Drop feature from scratch in vanilla JS"
        ],
        "repositories": [],
        "media": null,
        "live": null
    },

    //SOLAR
    {
        "id": "solar",
        "title": "Angular 6 Developer",
        "start": "08/2018",
        "end": "01/2020",
        "duration": "1 yr 6 mos",
        "company": {
            "name": "Solar Turbines (Caterpillar Inc.)",
            "link": null,
            "logo": null,
            "type": null,
            "via": {
                "name": "Ness s.r.o.",
                "link": "",
                "logo": null,
                "type": "perm",
            }
        },
        "projects": [
            {
                "name": "Admin Portal",
                "description": "Led the development of the Admin Portal's frontend from scratch."
            }
        ],
        "tools": [
            "Angular 6",
            "Jasmine",
            "Karma",
            "Cypress",
            "Angular Material"
        ],
        "challenges": [
            "Overcame tight deadlines and resource limitations",
            "Completing an initial version of the project solo that was initially planned for a multi-developer team."
        ],
        "repositories": [],
        "media": null,
        "live": null
    },

    //INNOGY
    {
        "id": "innogy",
        "title": "AngularJS/Angular 2+ Developer",
        "start": "01/2018",
        "end": "08/2018",
        "duration": "8 mos",
        "company": {
            "name": "VSE (Innogy group)",
            "link": null,
            "logo": null,
            "type": null,
            "via": {
                "name": "Code2b s.r.o.",
                "link": "",
                "logo": null,
                "type": "contract",
            }
        },
        "projects": [
            {
                "name": "Greenfield Angular Apps",
                "description": "Developed 2 simple applications from scratch" 
            },
            {
                "name": "AngularJS to Angular2+ Migration",
                "description": "rewrote one complex AngularJS app to Angular 2, including maintenance."
            }
        ],
        "tools": [
            "AngularJS",
            "Angular 2",
            "Angular Material",
            "Custom CSS",
            "Bootstrap"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    //ADITO
    {
        "id": "adito-gmbh",
        "title": "JavaScript/SQL Developer",
        "start": "2017",
        "end": "2017",
        "duration": "1 yr",
        "company": {
            "name": "Adito GmbH",
            "link": null,
            "logo": null,
            "type": "contract",
            "via": {
                "name": "Nordlicht s.r.o.",
                "link": "",
                "logo": null,
                "type": "contract",
            }
        },
        "projects": [
            {
                "name": "CRM System Maintenance",
                "description": "Wrote JavaScript code for SQL operations in a Swing Java client application"
            }
        ],
        "tools": [
            "SQL",
            "JavaScript"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // WEBDEV
    {
        "id": "webdev",
        "title": "Web Developer",
        "start": "2014",
        "end": "2017",
        "duration": "3 yrs",
        "company": null,
        "projects": [
            {
                "name": "Landing Pages Development",
                "description": "Developed efficient landing pages for various clients using modern web technologies."
            }
        ],
        "tools": [
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "PUG",
            "Gulp",
            "UI/UX",
            "Photoshop"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // WORDPRESS
    {
        "id": "wordpress",
        "title": "Wordpress/Magento",
        "start": "2010",
        "end": "2014",
        "duration": "4 yrs",
        "company": null,
        "projects": [
            {
                "name": "E-commerce and Blog Development",
                "description": "Developed webpages, e-commerce sites, and blogs using Wordpress and Magento."
            }
        ],
        "tools": [
            "HTML",
            "PHP",
            "CSS",
            "Magento",
            "Woocommerce",
            "MySQL",
            "Photoshop"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // ALLIANZ
    {
        "id": "allianz",
        "title": "Lotus Notes",
        "start": "2006",
        "end": "2010",
        "duration": "4 yrs",
        "company": {
            "name": "Allianz SP a.s.",
            "link": null,
            "logo": null,
            "type": "perm",
        },
        "projects": [
            {
                "name": "Insurance Database Management",
                "description": "Managed Allianz insurance databases and calculators, and involved in analysis, consulting, and UI/UX."
            }
        ],
        "tools": [
            "LotusNotes",
            "LotusScript"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // TAX
    {
        "id": "tax",
        "title": "Informix4GL",
        "start": "2004",
        "end": "2006",
        "duration": "2 yrs",
        "company": {
            "name": "Novitech Tax, s.r.o.",
            "link": null,
            "logo": null,
            "type": "perm",
        },
        "projects": [
            {
                "name": "Tax Information System Optimization",
                "description": "Developed and optimized Slovakia's tax information system and managed data operations for systems handling millions of rows."
            }
        ],
        "tools": [
            "Informix4GL",
            "SQL",
            "Unix Terminals",
            "MS Word Templates"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // FLASH
    {
        "id": "flash",
        "title": "Web Developer",
        "start": "2003",
        "end": "2004",
        "duration": "1 yr",
        "company": null,
        "projects": [
            {
                "name": "Website and Game Development",
                "description": "Developed simple websites and games."
            }
        ],
        "tools": [
            "HTML",
            "CSS",
            "PHP",
            "MySQL",
            "Javascript",
            "Flash",
            "ActionScript"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },


    // UNIVERSITY
    {
        "id": "university",
        "title": "Formal Education",
        "start": "1999",
        "end": "2004",
        "duration": "5 yrs",
        "company": {
            "name": "Technical University of Košice, Slovakia",
            "link": null,
            "logo": null,
            "type": null,
        },
        "projects": [],
        "tools": [],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    },

    // PROCOM
    {
        "id": "procom",
        "title": "PC Configuration",
        "start": "1997",
        "end": "1998",
        "duration": "1 yr",
        "company": {
            "name": "ProCom, s.r.o. Košice",
            "link": null,
            "logo": null,
            "type": null,
        },
        "projects": [
            {
                "name": "PC Configuration",
                "description": "Configured Windows 95 PCs, according to customer's request"
            }
        ],
        "tools": [
            "Windows 95", "Vacuum Cleaner (they were pretty dusty)"
        ],
        "challenges": [],
        "repositories": [],
        "media": null,
        "live": null
    }

]
