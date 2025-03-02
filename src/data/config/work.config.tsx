import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    "title": "NEXT CARBON (IITM)",
    "role": "Project Intern",
    "dates": "Jan 2025 - Present",
    "location": "Hybrid, IITM (India)",
    "description": [
      {
        "text": "Developing a Web2.5 crowdfunding platform, integrating both traditional Web2 authentication and Web3 payment solutions for seamless user onboarding.",
        "technologies": ["React", "Vite", "TypeScript"]
      },
      {
        "text": "Implementing authentication with Web2 methods (Supabase Auth) and Web3 wallets, allowing users to contribute via Razorpay or Ethereum-based wallets.",
        "technologies": ["Supabase", "PostgreSQL", "Razorpay", "Ethereum"]
      },
      {
        "text": "Designing and developing smart contracts to facilitate decentralized funding, ensuring security, transparency, and efficiency.",
        "technologies": ["Solidity", "Ethers.js"]
      },
      {
        "text": "Building a scalable backend with Supabase, integrating Postgres for data storage, and optimizing queries for performance.",
        "technologies": ["Supabase", "PostgreSQL"]
      }
    ],
    "image": "/iitm.jpg",
    "links": [
      // {
      //   "title": "Website",
      //   "href": "https://nextcarbon.app/",
      //   "icon": "<Link className='size-3' />"
      // },
      {
        "title": "Proof",
        "href": "https://github.com/rxhul18/Next_carbon",
        "icon": <ExternalLink className='size-3' />
      }
    ]
  },
  {
    "title": "Plura",
    "role": "Next.js Fullstack Contributor",
    "dates": "Dec 2024 - Present",
    "location": "Remote",
    "description": [
      {
        "text": "Developed a robust workflow page using React Flow, enabling users to create, visualize, and manage AI agent workflows with a dock of customizable nodes.",
        "technologies": ["React Flow", "Next.js", "TypeScript", "Tailwind"]
      },
      {
        "text": "Designed and implemented a dashboard page with a structured data table displaying created workflows, their statuses, and relevant actions, ensuring a seamless user experience.",
        "technologies": ["ShadCN", "React Table", "Zod"]
      },
      {
        "text": "Built a feedback system using ShadCN dialog with Zod validation, defining schemas, API routes, and helpers for managing user feedback efficiently.",
        "technologies": ["ShadCN", "Zod", "Next.js API Routes"]
      },
      {
        "text": "Integrated a feature-rich table with ShadCN’s DataTable, including export functionality using export-from-json to download selected columns in CSV format.",
        "technologies": ["ShadCN", "export-from-json", "TypeScript"]
      },
      {
        "text": "Implemented API management using Unkey, handling API creation for projects with secure validation using Zod.",
        "technologies": ["Unkey", "Zod", "Next.js API Routes"]
      }
    ],
    "image": "/plura.png",
    "links": [
      {
        "title": "Website",
        "href": "https://plura.ai",
        "icon": <Link className='size-3' />
      },
      {
        "title": "Proof",
        "href": "https://github.com/plura-ai/plura/issues?q=is%3Aissue+is%3Aclosed+assignee%3Arxhul18",
        "icon": <ExternalLink className='size-3' />
      }
    ]
  },
  {
    "title": "Rentkar",
    "role": "Fullstack Web Developer Intern",
    "dates": "May 2024 - Sep 2024",
    "location": "On-site, Mumbai (India)",
    "description": [
      {
        "text": "Development and maintenance of the entire frontend, ensuring a seamless user experience and optimizing the website for performance, accessibility, and SEO.",
        "technologies": ["React", "Nextja", "Tailwind", "TypeScript"]
      },
      {
        "text": "Built and integrated new features and pages, improving the platform’s functionality and enhancing user engagement.",
        "technologies": ["React Redux"]
      },
      {
        "text": "Contributed to backend enhancements by implementing APIs, database optimizations, and security improvements.",
        "technologies": ["Node.js", "Express", "MongoDB"]
      }
    ],
    image: "/rentkar.png",
    links: [
      {
        title: "Website",
        href: "https://rentkar.app/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://linkedin.com/in/rxhul18",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  }
];
