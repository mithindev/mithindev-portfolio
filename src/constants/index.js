import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  foundit,
  hashnode
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Freelancer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Content Writer",
    company_name: "",
    icon: hashnode,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I write Simple and informative articles in a engaging way!",
      "Read my articles on Hashnode, Medium and many more blogging sites",
      "Writer @Mithin's Concepts"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FoundIt",
    description:
      "🔍 FoundIt is an application that empowers users to report lost items and connect them with potential matches. It allows for seamless submission of item details.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
    ],
    image: foundit,
    source_code_link: "https://github.com/mithindev/FoundIt",
  },
  {
    name: "CodeEngage",
    description:
      "An Applications that allows you to talk with your code! It uses completely opensource models for training and retriving! Very easy to use and understand",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mithindev/CodeEngage",
  }
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
];

export { services, technologies, experiences, testimonials, projects };