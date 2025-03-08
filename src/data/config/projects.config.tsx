import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "Orbit-Ai an advanced AI-powered tool",
    href: "https://orbitai.rahulwtf.in/",
    dates: "Feb 2025 - Mar 2025",
    featured: true,
    description:
      "Orbit-Ai is an advanced AI-powered tool that enables you to interact seamlessly with any website or document (including PDFs & CSVs) using natural language. Whether you're looking to extract specific data or gain insights, Orbit-Ai makes it possible with ease. Best of all, it's free and accessible to everyone.",
    technologies: [
      "NextJs",
      "TailwindCSS",
      "Supabase",
      "Upstash-redis",
      "Shadcn",
      "Together.ai",
      "MagicUI",
      "Deepseek R1"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/OrbitAi",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://orbitai.rahulwtf.in/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/anJWvVl.png",
    video: "",
  },
  {
    title: "Interview Scheduler WebApp",
    href: "https://interview.rahulwtf.in/",
    dates: "Jan 2024",
    featured: true,
    active: false,
    description:
      "Interview Scheduler is a modern React application designed to help HR professionals and recruiters efficiently schedule, manage, and view interviews.",
    technologies: [
      "React+vite",
      "Typescript",
      "ShadcnUI",
      "TailwindCSS",
      "Zustand",
      "Localstorage",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/InterviewScheduler/",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://interview.rahulwtf.in/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/C7Ich7B.png",
    video: "",
  },
  {
    title: "StreamOn",
    href: "https://github.com/rxhul18/StreamOn",
    dates: "Jan 2025",
    featured: false,
    description:
      "This platform lets you easily start a live stream, share the link, and invite others to join as co-hosts or audience members.",
    technologies: [
      "NextJS",
      "Zustand",
      "TailwindCSS",
      "Typescript",
      "Zegocloud"
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/StreamOn",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/qDAvfeP.png",
    video: "",
  },
  {
    title: "Solana Token LaunchPad",
    href: "https://solpad.rahulwtf.in/",
    dates: "Nov 2024",
    featured: false,
    description:
      "Token LaunchPad build on Solana which makes it quick and secure to create, distribute, and fundraise tokens, all while taking advantage of Solana’s lightning-fast speed",
    technologies: ["ReactJS","Vite", "TailwindCss", "Solana","SPL"],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/SolanaTokenLaunchPad",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://solpad.rahulwtf.in/",
        icon: <Icons.globe className="size-3" />,
      }
    ],
    image: "https://i.imgur.com/Ef84USo.png",
    video: "",
  },
  {
    title: "Decentralized wallet - DeWall",
    href: "https://de-wall.vercel.app/",
    dates: "Sep 2024",
    featured: false,
    description:
    "DeWall⛓️‍💥 is a decentralized crypto wallet supporting Solana and Ethereum HD wallets",
    technologies: ["ReactJS","Vite", "TailwindCss", "Solana","ethers","bip39"],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/DeWall",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://de-wall.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      }
    ],
    image: "https://i.imgur.com/jCeJsEw.png",
    video: "",
  },
  {
    title: "KaryaFy - TodoApp",
    href: "https://karyafy.vercel.app/",
    dates: "Mar 2024",
    featured: false,
    description:'"Karyafy" is modern platform related to tasksList ot TodoList. It combines "karya," which means task in Hindi, with the suffix "-fy," implying transformation or conversion into something. Overall, "Karyafy" suggests a platform that helps streamline or organize tasks effectively.',
    technologies: ["ReactJs", "vite", "Typescript","react-beautiful-dnd","css"],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/KaryaFy",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://karyafy.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      }
    ],
    image: "https://i.imgur.com/DzRbS25.png",
    video: "",
  },
  {
    title: "Pebble Clone",
    href: "https://rxhul18.github.io/pebble/",
    dates: "Jan - Mar 2024",
    featured: false,
    description: "Personal portfolio web app implemented with ReactJS and GraphQL.",
    technologies: ["ReactJs", "scss", "json", "Bootstrap", "react-router-dom"],
    links: [
      {
        type: "Source",
        href: "https://github.com/rxhul18/pebble",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://rxhul18.github.io/pebble/",
        icon: <Icons.globe className="size-3" />,
      }
    ],
    image: "https://i.imgur.com/2161CUu.png",
    video: "",
  }
];