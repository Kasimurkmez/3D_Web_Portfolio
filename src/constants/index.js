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
  shopify,
  threejs,
} from "../assets";
import world from "../assets/company/world.jpg";
import todo from "../assets/company/todo.webp";
import tours from "../assets/company/tours.png";
import todo_list from "../assets/todo_list.png";
import add_bag from "../assets/add_bag.png";
import world_ranks from "../assets/world_ranks.png";
import login from "../assets/login.png";
import nike from "../assets/nike-store.png";
import tours_travel from "../assets/tours.png";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
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
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Nike Store-Ecommerce",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "World Ranks",
    icon: world,
    iconBg: "#f1f1f1",
    date: "April 2023 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "ToDo-List",
    icon: todo,
    iconBg: "#C4D3FE",
    date: "March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "React.js Developer",
    company_name: "Tours & Travel",
    icon: tours,
    iconBg: "white",
    date: "February 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Nike Store ECommerce",
    description:
      "Nike Store is an e-commerce platform famous for sportswear, shoes and accessories. This online store offers users a wide range of Nike brand products and allows sports enthusiasts to discover and purchase the latest collections.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "white",
      },
      {
        name: "vercel",
        color: "orange-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/",
  },
  {
    name: "Todo List",
    description:
      "This Todo List app helps users develop better time management, organization and task completion skills in a personal or business setting. Users can easily track their daily, weekly or monthly tasks and manage their plans more efficiently.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "white",
      },
    ],
    image: todo_list,
    source_code_link: "https://github.com/Kasimurkmez/ToDo-List",
  },
  {
    name: "Apple Store",
    description:
      "This impressive Apple Store shopping app allows users to discover and buy Apple products. The application allows users to browse a wide range of products, access detailed information and easily purchase Apple's latest technology products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: add_bag,
    source_code_link: "https://github.com/Kasimurkmez/ADD-TO-BAG",
  },
  {
    name: "World Ranks",
    description:
      "World Ranks is an app that lets you explore countries around the world and review their rankings in different categories. With this app, you can access information about countries, view their ranking by popular categories, and compare different data from around the world.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "white",
      },
    ],
    image: world_ranks,
    source_code_link: "https://github.com/Kasimurkmez/World-Ranks",
  },
  {
    name: "Login Register",
    description:
      "Login/Register is a simple and secure authentication application that allows users to log in and create new accounts. Through this application, users can securely access their accounts, manage their personal information and create a new account before logging in.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: login,
    source_code_link: "https://github.com/Kasimurkmez/Loginregister",
  },
  {
    name: "Tour & Travel",
    description:
      "Tours & Travels is a comprehensive online platform that lets you discover travel and tourism experiences around the world. This site provides users with information about different destinations, tours, hotels and travel services so you can have an unforgettable travel experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: tours_travel,
    source_code_link: "https://github.com/Kasimurkmez/Loginregister",
  },
];

export { services, technologies, experiences, testimonials, projects };
