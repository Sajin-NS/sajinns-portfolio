import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiNodedotjs,
  SiPostgresql,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiPlaywright,
  SiRazorpay,
  SiSelenium,
  SiAdobephotoshop,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1TTILGB_vbti6BOY5aGLgGZKSkAjL_233/view?usp=drive_link";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/sajinns";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "CMS College Coimbatore",
    degree: "Bachelor of Computer Applications",
    duration: "December 2018 - May 2021",
    content1: "Major: Computer Applications",
    // content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "HSC | MGM HSS, Coimbatore",
    degree: "",
    duration: "May 2015 - June 2017",
    content1: "Accounts with computer science",
    // content1:
    //   "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  },
];

export const achievements = [
  {
    // id: "a-1",
    // icon: ethglobal,
    event: `Successfully led the development of a real estate management platform that resulted
in a notable increase in customer satisfaction ratings, elevating scores by 25% within
a 6-month time-frame`,
    // position: "Winner",
    content1: "Realiti.io",
    // content2: "One of Polygon's Best Public Goods",
    // content3: "Best Module on Biconomy SDK",
    // article:
    //   "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    // project: "https://devfolio.co/projects/chargeswap-3527",
    // youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    // id: "a-2",
    // icon: polkadot,
    event:
      "Improved overall application performance by effectively utilizing Redux, which led to a 25% decrease in state-related bugs and a more stable user experience",
    // position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Realiti.io",
    // content2: "",
    // content3: "",
    // github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    // id: "a-3",
    // icon: lightspeed,
    event:
      "Achieved a 40% increase in organic traffic by implementing SEO best practices, including Server-Side Rendering (SSR) with Next.js",
    // position: "1st Runner Up",
    content1: "Realiti.io",
    // content2: "Top 3 projects using Replit",
    // content3: "1st Runner Up by Amazon Web Services (AWS)",
    // article: "https://shorturl.at/fhjsT",
  },
  {
    // id: "a-4",
    // icon: dennisivy,
    event:
      "Enhanced the platform's response time by 20% through the integration of RESTful APIs, notably improving user interaction and satisfaction.",
    // position: "Winner",
    content1: "Realiti.io",
    // content2: "",
    // content3: "",
    // youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    // project: "https://parthmittal.netlify.app/",
  },
  {
    // id: "a-5",
    // icon: manipal,
    event:
      "Achieved 95% test coverage through automation testing with Playwright, leading to a 40% reduction in regression issues and ensuring a reliable product",
    // position: "Consolation Prize",
    content1: "Realiti.io",
    // content2:
    //   "Developed a cross-platform mobile application to address the problem of social cohesion.",
    // content3: "",
    // article: "https://shorturl.at/exEIQ",
  },
  // {
  //   id: "a-6",
  //   icon: icon,
  //   event: "ICON Hyperbuild Hackathon",
  //   position: "Honorable Mention",
  //   content1:
  //     "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devpost.com/software/green-trust-xj2w6g",
  // },
  // {
  //   id: "a-7",
  //   icon: ethforall,
  //   event: "ETHForAll 2023",
  //   position: "Top 3 Superfluid Projects",
  //   content1:
  //     "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devfolio.co/projects/green-trust-ed14",
  // },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPostgresql,
        name: "Postgresql",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "f-3",
        icon: SiPlaywright,
        name: "Playwright",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-3",
        icon: SiAdobephotoshop,
        name: "Photoshop",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Realiti.io",
    logo: oracle,
    link: "https://www.realiti.io",
    positions: [
      {
        title: "Frontend Developer",
        duration: "Aug 2023 - Jan 2025",
        content: [
          {
            text: "Frontend Developer of experience in creating and maintaining SaaS product. Experienced in debugging, developing efficient solutions, and ensuring quality through a strong foundation in testing.",
            link: "",
          },
          {
            text: "Spearheaded the design and development of a real estate management platform. using React.js, Next.js, and Tailwind CSS, boosting customer satisfaction scores by 25% within six months.",
            link: "",
          },
          {
            text: `Boosting SEO performance by utilizing Server-Side Rendering (SSR) with Next.js, resulting in faster page load times and increased search engine visibility.`,
            link: "",
          },
          {
            text: `Implementing a component-oriented architecture using React hooks and functional components, reducing feature development time by 30% and improving project delivery speed`,
            link: "",
          },
        ],
      },
      {
        title: "Automation Tester",
        duration: "Aug 2023 - Jan 2025",
        content: [
          {
            text: "Proficient in developing and executing automated test scripts to ensure robust and reliable software applications.",
            link: "",
          },
          {
            text: "Skilled in leveraging Playwright for cross-browser, end-to-end testing of web applications with seamless integration into CI/CD pipelines.",
            link: "",
          },
          {
            text: "Skilled in identifying and resolving test script failures and application bugs.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Infomat Technologies",
    logo: averlon,
    link: "https://www.veetechnologies.com/",
    positions: [
      {
        title: "Software Tester - Trainee",
        duration: "Jan 2023 - Jun 2023",
        content: [
          {
            text: `Assisted in executing test plans and scenarios to ensure software functionality met requirements.`,
            link: "",
          },
          {
            text: `Conducted bug tracking, documenting issues and working closely with developers to resolve them.`,
            link: "",
          },
          {
            text: `Gained hands-on experience in software quality assurance and testing practices, learning key methodologies for improving software performance and reliability.`,
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Beauty Mart",
    github: "https://github.com/Sajin-NS/beautymart",
    link: "https://beautymart.vercel.app/",
    content:
      "Developed a fully responsive e-commerce platform with React.js and Tailwind, featuring advanced navigation tools for seamless shopping experiences.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "icon-4",
        icon: SiRazorpay,
        name: "Razorpay",
      },
    ],
  },
  {
    id: "project-2",
    title: "SpiceMart",
    // github: "https://github.com/mittal-parth/GreenTrust",
    // link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "SpiceMart is an ERP system designed to streamline information and processes across various divisions of an organization. The system integrates operations from inventory purchase through processing and final shipment to customers, offering a unified and efficient approach to supply chain management.",
    stack: [
      {
        id: "icon-1",
        icon: SiMysql,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiSelenium,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiPlaywright,
        name: "Next.js",
      },
    ],
  },
  // {
  //   id: "project-3",
  //   title: "ChargeSwap",
  //   github: "https://github.com/CommanderAstern/ChargeSwap",
  //   link: "https://devfolio.co/projects/chargeswap-3527",
  //   image: chargeswap,
  //   content:
  //     "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiWeb3Dotjs,
  //       name: "Web3.js",
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiSolidity,
  //       name: "Solidity",
  //     },
  //     {
  //       id: "icon-5",
  //       icon: FaHardHat,
  //       name: "HardHat",
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiIpfs,
  //       name: "IPFS",
  //     },
  //     {
  //       id: "icon-7",
  //       icon: SiArduino,
  //       name: "Arduino",
  //     },
  //     {
  //       id: "icon-8",
  //       icon: IoIosNotificationsOutline,
  //       name: "Push Protocol",
  //     },
  //   ],
  // },
  // {
  //   id: "project-4",
  //   title: "Samsotech Table Management System",
  //   github: "",
  //   link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
  //   image: placeicon,
  //   content:
  //     "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDotnet,
  //       name: "Dot Net Core MVC 6",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiBootstrap,
  //       name: "Bootstrap",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiMsqlServer,
  //       name: "MS Sql Server",
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJquery,
  //       name: "jQuery",
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiTwilio,
  //       name: "Twillio",
  //     },
  //   ],
  // },
  // {
  //   id: "project-5",
  //   title: "Non-Teaching Recruitment Portal, NITK",
  //   github: "",
  //   link: "http://recruitment.nitk.ac.in/",
  //   image: recruitment,
  //   content:
  //     "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiRubyonrails,
  //       name: "Ruby on Rails",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiJquery,
  //       name: "jQuery",
  //     },
  //   ],
  // },
  // {
  //   id: "project-6",
  //   title: "Career Development Centre, NITK Website",
  //   github: "",
  //   link: "http://cdc.nitk.ac.in/",
  //   image: cdc,
  //   content: "The official website of CDC, NITK with a custom built CMS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiRubyonrails,
  //       name: "Ruby on Rails",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiBootstrap,
  //       name: "Bootstrap",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiJavascript,
  //       name: "JavaScript",
  //     },
  //   ],
  // },
  // {
  //   id: "project-7",
  //   title: "Huntly",
  //   github: "",
  //   link: "https://devfolio.co/projects/huntly-b5a9",
  //   image: huntly,
  //   content:
  //     "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django Rest Framework",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiFlutter,
  //       name: "Flutter",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiReplit,
  //       name: "Replit",
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiFlask,
  //       name: "Flask",
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiFigma,
  //       name: "Figma",
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiGooglemaps,
  //       name: "Google Maps API",
  //     },
  //   ],
  // },
  // {
  //   id: "project-8",
  //   title: "Cluboard",
  //   github: "https://github.com/mittal-parth/Cluboard",
  //   link: "",
  //   image: cluboard,
  //   content:
  //     "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS",
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJavascript,
  //       name: "JavaScript",
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiBootstrap,
  //       name: "Bootstrap",
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiChartdotjs,
  //       name: "Chart.js",
  //     },
  //   ],
  // },
  // {
  //   id: "project-9",
  //   title: "Cash Flow Minimiser",
  //   github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
  //   link: "https://minimise-cash-flow.netlify.app/",
  //   image: cash_flow,
  //   content:
  //     "A React application to help users visualise and minimise cash flow among multiple transactions.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS",
  //     },
  //   ],
  // },
  // {
  //   id: "project-10",
  //   title: "Portfolio",
  //   github: "https://github.com/mittal-parth/personal-portfolio",
  //   link: "https://parthmittal.netlify.app/",
  //   image: portfolio,
  //   content: "Personal portfolio website with React and Tailwind CSS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React",
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "Tailwind CSS",
  //     },
  //     {
  //       id: "icon-3",
  //       icon: AiFillHtml5,
  //       name: "HTML",
  //     },
  //   ],
  // },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sajinns/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Sajin-NS/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sajinsathyan001@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/sajin_ns",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/its__sajin",
  },
];

export const aboutMe = {
  name: "Sajin NS",
  tagLine: "Frontend Developer | QA Test Engineer",
  contact: "sajinsathyan001@gmail.com  |  +91 9789593505",
  intro: `Futuristic & Forward Looking Professional with a corporate bend of mind & track record of striving in uncertainty,
curiosity & challenges; targeting to express potential in Application Development with an esteemed organization`,
};
