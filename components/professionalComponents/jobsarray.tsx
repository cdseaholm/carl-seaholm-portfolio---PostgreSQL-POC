import React from 'react';
import JobBite from './jobBite';

const jobOne = {
    id: 1,
    company: "ERP Automated",
    title: "Sales Devlopment Team Lead / Stand In IT Manager / Website Developer",
    date: {startDate: new Date('2023-08'), endDate: new Date('2024-01')},
    descriptions: ["Set up, implement, and deploy an entire Sales/Marketing Function", "Filled in for IT in my most previous role (Email set-up and permissions, website debugging, API access/integrations, and virus protection)", "Enhance the teams Marketing capabilities and Web Presence", "Build custom tables and worksheets with HTML and Javascript. These were for the Sales team to send out and implemented into Landing Pages", "Re-work and enhance the company website from the ground up"],
    location: "Remote - Denver, CO",
    category: ['Development', 'Sales']
};

const jobTwo = {
    id: 2,
    company: "Version2",
    title: "Strategic Partnerships",
    date: {startDate: new Date('2023-02'), endDate: new Date('2023-06')},
    descriptions: [
        "Help build out the Outbound SDR role to Brand Direct",
        "Generate 20 SQLs monthly, resulting in an average stream of $500k - $1 million",
        "Take 20 daily new leads to keep pipeline and sequences fresh and up to date",
        "Manage 1000s of accounts via Hubspot and Google Excel",
        "Take leads through a short slide deck to enhance their understanding of programmatic technology and Orion (Trade Side platform)"
    ],
    category: ['Management', 'Sales'],
    location: "Remote - Denver, CO"
};

const jobThree = {
    id: 3,
    company: "Loom",
    title: "Sales Development Representative",
    date: {startDate: new Date('2021-09'), endDate: new Date('2022-10')},
    descriptions: ["Help build out the Inbound and Outbound SDR role", "Generate 20 SQLs monthly, resulting in an average of 250k-400k monthly",
   "Use Outreach to keep pipeline and sequences fresh and up to date",
   "Provide AEs assistance with outbound into ten named accounts a month"],
    category: ['Sales', 'Management'],
    location: "Remote - Denver, CO"
};

const jobFour = {
    id: 4,
    company: 'WhiteSource',
    title: "Sales Development Representative",
    date: {startDate: new Date('2021-04'), endDate: new Date('2022-09')},
    descriptions: ["Take Inbound Leads through a 5-10 minute discovery call to qualify them for a demo.",
    "Generate 15 SQLs monthly, resulting in an average of 100k monthly",
    "Use SalesLoft to keep leads that are not ready for a demo, warm and up to date",
    "Provide AEs assistance with outbound into ten named accounts a month"],
    category: ['Sales'],
    location: "Remote - Denver, CO"
};

const jobFive = {
    id: 5,
    company: 'Justworks',
    title: "Business Development Representative",
    date: {startDate: new Date('2020-02'), endDate: new Date('2020-12')},
    descriptions: ["Outbound to 100 leads daily",
    "Generate 10 SQLs monthly, resulting in an average of 100k monthly",
    "Reach out to old leads that might be ready to switch their HR and Payroll provider",
    "Provide AEs assistance with outbound into ten named accounts a month"],
    category: ['Sales'],
    location: "New York, New York"
};

const jobSix = {
    id: 6,
    company: 'The Peak Beyond',
    title: "IT and Account based Manager",
    date: {startDate: new Date('2018-03'), endDate: new Date('2020-02')},
    descriptions: ["Manage 3 stores that use The Peak Beyond's smartboard technology",
    "Basic Technological Support and testing",
    "Hardware and Software Support"],
    category: ['IT', 'Management', 'Sales'],
    location: "Denver, CO"
};

const jobSeven = {
    id: 7,
    company: 'Jumper Media',
    title: "Account Executive",
    date: {startDate: new Date('2019-04'), endDate: new Date('2020-01')},
    descriptions: ["Develop and manage a sales pipeline for existing account retention and growth",
   "Build strong rapport/relationships with key contacts and decision-makers",
    "Analyze the goals and objectives of each account to fully understand their current and future needs.",
     "Prepare written presentations and pricing proposal"],
    category: ['Sales'],
    location: "San Diego, CA"
};

const jobEight = {
    id: 8,
    company: 'Vivax Pros',
    title: "Project Qualifier",
    date: {startDate: new Date('2018-11'), endDate: new Date('2019-04')},
    descriptions: ["Qualify leads for the Sales team to go out and give estimates for painting projects."],
    category: ['Sales'],
    location: "Denver, CO"
};

const jobNine = {
    id: 9,
    company: 'CanopyBoulder',
    title: "Internship",
    date: {startDate: new Date('2018-01'), endDate: new Date('2018-03')},
    descriptions: ["Assist Management with any projects needed",
    "Assist on CRM Website development",
    "Follow up on references for potential startups",
    "Slide deck creation"],
    category: ['Management'],
    location: "Boulder, CO"
};

const jobTen = {
    id: 10,
    company: 'New Progress WordPress site',
    title: "Owner and Operator of New Progress Blog",
    date: {startDate: new Date('2019-03'), endDate: new Date('2023-02')},
    descriptions: ["Set up and managed Blog via Wordpress, creating custom templates and pages",
    "Basic Technological Support and testing",
    "HTML and CSS implementations and improvements to the site.", "Built a following of 100s of people and had 1000s of views monthly.", "I used WordPress, HTML, CSS, MailChimp, and Social Media advertising for this."],
    category: ['Development'],
    location: "Remote"
};

const jobEleven = {
    id: 11,
    company: 'carlseaholm.com (Current)',
    title: "Developer and Creator",
    date: {startDate: new Date('2024-01'), endDate: new Date('2024-03')},
    descriptions: ["Transitioning over my WordPress Blog to my own site using Vercel, Next.js, and React", "This blog will be combined with a Professional Profile for myself to allow others to see my personal life, professional life, as well as current projects I'm working on.", "In addition to the stack mentioned above (Vercel, Next.js, and React), I am writing this with tsx. For styling I am using Tailwind CSS. I am also using Prisma for my database and NextAuth for authentication."],
    category: ['Development'],
    location: "Remote"
};

const jobThirteen = {
    id: 11,
    company: 'newprogressco.com (Current)',
    title: "Developer and Creator",
    date: {startDate: new Date('2023-06'), endDate: new Date('2024-03')},
    descriptions: ["Along with transitioning over my WordPress blog into it's own entity, I am beginning to implement my own Business site using Vercel, Next.js, and React.", "I expect this to be running within the next month.", "For styling I am using Tailwind CSS. I am also using Prisma for my database and NextAuth for authentication. I will implement Stripe for payments and am in the process of setting up a subscription service", "This site is a professional site for my company New Progress. It is a place where I can showcase my work, and allow potential clients to reach out to me.", "I offer services as small as bug fixes, to writing out Websites for Clients. Pricing is based on speed in which they need the project done and then heaviness of the load.",],
    category: ['Development'],
    location: "Remote"
};

const jobTwelve = {
    id: 12,
    company: 'New Progress Application Projects: NP Financr, NP Taskr, and NP Gamr (Current)',
    title: "Developer and Creator",
    date: {startDate: new Date('2023-03'), endDate: new Date('2024-03')},
    descriptions: ["Have built 2 applications in 10 months for my own personal use. Planning to deploy 1 soon, then the others later.",
    "Taught myself to code building these apps with Frameworks, Libraries, and Languages such as React Native, EXPO Go, PostgreSQL, JavaScript, and Tailwind.", "All of these are still under development. I went into each application with the idea of making the free and easy to use.",
    "NP Financr is a light-weight intuitive Financial tracking application where the user gets to set up how they want to see their money. There is tons of customizability. I am currently rewriting this to use React Native with Expo Go.",
    "NP Taskr is a task manager for the productive individual. The issue with most Task management applications today is that they are overwhelming and are typically paid for, while not being worth the money. I hope to make it convenient, easy to use, and helpful.",
    "NP Gamr is a game application where a user can play many classic games for free. Taking lessons from Chess.com where a user can learn a host of games, track their scores against others and challenge themselves. (Yet to upload to Github as this app is still never early)."],
    category: ['Development'],
    location: "Remote"
};

const schoolOne = {
    id: 1,
    school: "University of Colorado Boulder",
    degree: "Bachelor of Science",
    major: "Marketing",
    date: {startDate: new Date('2013-08'), endDate: new Date('2016-12')},
    location: "Boulder, CO"
};

const schoolTwo = {
    id: 2,
    school: "University of Colorado Boulder",
    degree: "Bachelor of Science",
    major: "Computer Science/Engineering",
    date: {startDate: new Date('2024-01'), endDate: new Date('2025-12')},
    location: "Boulder, CO"
};

const schoolThree = {
    id: 3,
    school: "Front Range Community College",
    degree: "General Education",
    major: "Associates",
    date: {startDate: new Date('2012-08'), endDate: new Date('2013-05')},
    location: "Wesminster, CO"
};

const jobsArray = [jobOne, jobTwo, jobThree, jobFour, jobFive, jobSix, jobSeven, jobEight, jobNine, jobTen, jobEleven, jobTwelve, jobThirteen];

const schoolsArray = [schoolOne, schoolTwo, schoolThree];

export { jobsArray, schoolsArray };