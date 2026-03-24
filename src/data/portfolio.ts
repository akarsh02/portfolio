export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  contributions?: string[];
}

export interface PortfolioData {
  header: {
    tagline: string;
    title: string;
    focus: string;
  };
  skills: string[];
  experience: Experience[];
  projects: {
    title: string;
    description: string;
    githubUrl: string;
    tags: string[];
  }[];
}

export const portfolioData: PortfolioData = {
  header: {
    tagline: "Learn • Build • Repeat 🚀",
    title: "Web Developer & Mobile Developer",
    focus: "Web2 & Web3"
  },
  skills: [
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Expo",
    "Gluestack",
    "DeFi",
    "Web3.js",
    "WebSockets",
    "Redux",
    "HTML",
    "CSS"
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "STORYPEACH",
      type: "Full-time",
      period: "Jan 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      description: "Front-End Development, React Native and more."
    },
    {
      role: "Senior Frontend Developer",
      company: "KoinBX",
      type: "Full-time",
      period: "Aug 2024 - Jan 2025",
      location: "Bengaluru, Karnataka, India",
      description: "Played a key role in developing a secure and user-friendly trading experience across web. Built responsive interfaces, integrated APIs, and optimized real-time trading functionalities.",
      contributions: [
        "Developed and optimized responsive UIs using React.js, Next.js, React Native, TailwindCSS",
        "Implemented core trading features like Spot Trading & KYC Module",
        "Integrated Web3.js, WebSockets, and smart contracts for secure transactions",
        "Built real-time updates & notifications to enhance trading experiences",
        "Improved account management, transaction history, and portfolio tracking",
        "Developed an Admin Dashboard to manage user roles, KYC/AML, trading pairs, and compliance"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Autonomint",
      type: "Freelance",
      period: "Apr 2024 - Aug 2024",
      location: "Bengaluru, Karnataka, India · Remote",
      description: "Specialized in creating Web3-powered applications that deliver secure, scalable, and intuitive user experiences.",
      contributions: [
        "Developed staking platforms with Web3.js, integrating smart contracts for seamless token interactions",
        "Built responsive and optimized landing pages to enhance user engagement",
        "Integrated crypto wallets (MetaMask, WalletConnect) for secure transactions",
        "Implemented real-time data fetching & WebSockets for live staking updates",
        "Optimized performance, accessibility, and SEO for Web3 applications"
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "ZeroSwap Labs",
      type: "Full-time",
      period: "Oct 2020 - Oct 2023",
      location: "Bengaluru, Karnataka, India",
      description: "Frontend Web Development for Web3 and DeFi platforms."
    },
    {
      role: "Web Developer",
      company: "Magico",
      type: "Freelance",
      period: "Previous",
      location: "India",
      description: "Freelance web development."
    }
  ],
  projects: [
    {
        "title": "Akarsh02",
        "description": "Config files for my GitHub profile.",
        "githubUrl": "https://github.com/akarsh02/akarsh02",
        "tags": [
            "Code"
        ]
    },
    {
        "title": "Symfony Product BasicAPI",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/symfony-product-basicAPI",
        "tags": [
            "PHP"
        ]
    },
    {
        "title": "Symfony Signup Login Webapp",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/symfony-signup-login-webapp",
        "tags": [
            "PHP"
        ]
    },
    {
        "title": "Learn Web Development Checklist",
        "description": "Use this checklist as a guidebook to learn web development",
        "githubUrl": "https://github.com/akarsh02/Learn-Web-Development-Checklist",
        "tags": [
            "Code"
        ]
    },
    {
        "title": "Tokenization",
        "description": "Tokenization Using Openzeppelin & Truffle",
        "githubUrl": "https://github.com/akarshb02/tokenization",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Fintech Web3",
        "description": "React Native (API Routes, Zustand, Tanstack Query, FaceID, Charts, Clerk)",
        "githubUrl": "https://github.com/akarsh02/Fintech_Web3",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Expo Simple",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/Expo-Simple",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Php Oop Fundamentals",
        "description": "This repository accompanies the Tuts+ course PHP OOP Fundamentals",
        "githubUrl": "https://github.com/akarsh02/php-oop-fundamentals",
        "tags": [
            "Code"
        ]
    },
    {
        "title": "Ai Image Generator",
        "description": "An AI-powered image generator built with React Native, Expo, and Tailwind CSS, using Hugging Face API to generate images from text prompts.",
        "githubUrl": "https://github.com/akarsh02/Ai_Image_Generator",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Akarsh Portfolio Web",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/akarsh-portfolio-web",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Symfony Basics",
        "description": "the key concepts of the Symfony PHP MVC framework.",
        "githubUrl": "https://github.com/akarsh02/Symfony_Basics",
        "tags": [
            "PHP"
        ]
    },
    {
        "title": "AI Voice Assistant",
        "description": "Simple app to learn basics of native and typescript",
        "githubUrl": "https://github.com/akarsh02/AI_Voice_Assistant",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Real Estate",
        "description": "Simple dummy app to understand google auth using appwriter and context",
        "githubUrl": "https://github.com/akarsh02/Real_Estate",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Movie App",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/Movie_App",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Ecommers",
        "description": "Ecommers platform using React Native,Expo and Gluestack",
        "githubUrl": "https://github.com/akarsh02/ecommers",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Restaurant",
        "description": "Explore this online react-food-ordering-app ",
        "githubUrl": "https://github.com/akarshb02/Restaurant",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Redux Thunk",
        "description": "Using JSONPLACEHOLDER simple CRUD operation",
        "githubUrl": "https://github.com/akarshb02/Redux-Thunk",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Rating",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/Rating",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Reeco",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/Reeco",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Redux",
        "description": "Understanding the use of redux",
        "githubUrl": "https://github.com/akarshb02/redux",
        "tags": [
            "Code"
        ]
    },
    {
        "title": "Akarshb02",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/akarshb02",
        "tags": [
            "Code"
        ]
    },
    {
        "title": "Testing",
        "description": "WebdriverIO allows you to automate any application written with modern web frameworks.",
        "githubUrl": "https://github.com/akarsh02/Testing",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Testing",
        "description": "learning react testing basics to implement it on web3",
        "githubUrl": "https://github.com/akarshb02/Testing",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "NftMusic",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/nftMusic",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Proxy Contract",
        "description": "The basic idea is using a proxy for upgrades. The first contract is a simple wrapper or \"proxy\" which users interact with directly and is in charge of forwarding transactions to and from the second contract, which contains the logic. The key concept to understand is that the logic contract can be replaced while the proxy, or the access point is never changed. Both contracts are still immutable in the sense that their code cannot be changed, but the logic contract can simply be swapped by another contract. The wrapper can thus point to a different logic implementation and in doing so, the software is \"upgraded\".",
        "githubUrl": "https://github.com/akarsh02/proxy_contract",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Solidity Contract",
        "description": "simple contract to create own token using @openzeppelin",
        "githubUrl": "https://github.com/akarsh02/solidity_contract",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Wallets",
        "description": "Repository from akarsh02",
        "githubUrl": "https://github.com/akarsh02/wallets",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "File Directory",
        "description": "react basics ",
        "githubUrl": "https://github.com/akarshb02/file_directory",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Movie List App",
        "description": "lists the movies using api",
        "githubUrl": "https://github.com/akarshb02/movie_list_app",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Otp Generator",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/otp_generator",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Blockchain Game",
        "description": "game app",
        "githubUrl": "https://github.com/akarshb02/blockchain_game",
        "tags": [
            "Solidity"
        ]
    },
    {
        "title": "Podkedex",
        "description": "ssr vs ssg ",
        "githubUrl": "https://github.com/akarshb02/podkedex",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Fun Token",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/fun_token",
        "tags": [
            "Solidity"
        ]
    },
    {
        "title": "Wallet",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/wallet",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Etherum Blockchain",
        "description": "Ethereum Blockchain Development",
        "githubUrl": "https://github.com/akarshb02/etherum-blockchain",
        "tags": [
            "Solidity"
        ]
    },
    {
        "title": "Own Token",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/own-token",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Xml",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/xml",
        "tags": [
            "Java"
        ]
    },
    {
        "title": "Typescript Projects",
        "description": "react with typescript",
        "githubUrl": "https://github.com/akarshb02/typescript_projects",
        "tags": [
            "TypeScript"
        ]
    },
    {
        "title": "Next Js",
        "description": "React library for server-side rendering",
        "githubUrl": "https://github.com/akarshb02/next_js",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Js Concepts",
        "description": "HTML-CSS-JS Fundamentals",
        "githubUrl": "https://github.com/akarshb02/js-concepts",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Defi App",
        "description": "Build a DeFi App ",
        "githubUrl": "https://github.com/akarshb02/defi_app",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "SignUp",
        "description": "A Sign Up Application (React, Node.js, Express and MongoDB)",
        "githubUrl": "https://github.com/akarshb02/signUp",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Es 6",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/es_6",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Project Requirment",
        "description": "Repository from akarshb02",
        "githubUrl": "https://github.com/akarshb02/project-requirment",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Tailwind Css",
        "description": "css framework made up of utility classes",
        "githubUrl": "https://github.com/akarshb02/tailwind-css",
        "tags": [
            "HTML"
        ]
    },
    {
        "title": "Node Course",
        "description": "A JavaScript runtime",
        "githubUrl": "https://github.com/akarshb02/node-course",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "React",
        "description": "JS library for building user interface ",
        "githubUrl": "https://github.com/akarshb02/react",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Mongoose",
        "description": "Mongoose-An Object modeling tool for MongoDB.",
        "githubUrl": "https://github.com/akarshb02/mongoose",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Bootstrap",
        "description": "Css framework",
        "githubUrl": "https://github.com/akarshb02/bootstrap",
        "tags": [
            "HTML"
        ]
    },
    {
        "title": "Ejs",
        "description": "Ejs- a simple templating language",
        "githubUrl": "https://github.com/akarshb02/ejs",
        "tags": [
            "JavaScript"
        ]
    },
    {
        "title": "Html",
        "description": "web development basics",
        "githubUrl": "https://github.com/akarshb02/html",
        "tags": [
            "HTML"
        ]
    },
    {
        "title": "Html Css",
        "description": "Web development basics",
        "githubUrl": "https://github.com/akarshb02/html-css",
        "tags": [
            "HTML"
        ]
    },
    {
        "title": "Openzeppelin Contracts",
        "description": "OpenZeppelin Contracts is a library for secure smart contract development.",
        "githubUrl": "https://github.com/akarshb02/openzeppelin-contracts",
        "tags": [
            "Code"
        ]
    }
]
};
