import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "Indodax (Web3 Ecosystem)",
    role: "Fullstack Web3 Engineer",
    dates: "Jan - Present",
    location: "Hybrid, Jakarta Selatan (Indonesia)",
    description: [
      {
        text: "Collaborated directly with CTO and CEO on enhancing feature development for minting, redeeming, and bridging tokens across EVM networks (BSC, Polygon) and Solana, including administration and management functionalities for IDRX Stablecoins.",
        technologies: ["NestJS", "NuxtJS", "Vuex", "Vuetify", "Prisma", "Rust", "Solidity"]
      },
      {
        text: "Enhanced a sophisticated multi-chain banking integration selection, enabling seamless fiat on/off-ramps for token redemption across various e-wallets and traditional banking platforms for IDRX Stablecoins.",
        technologies: ["NestJS", "Prisma"]
      },
      {
        text: "Developed an advanced administrative dashboard for comprehensive token lifecycle management, including mint, redeem, and bridge operations, with robust data visualization, filtering, and export capabilities to support Business Development initiatives for IDRX Stablecoins.",
        technologies: ["NuxtJS", "Vuex", "Vuetify"]
      },
      {
        text: "Enhanced a dynamic transaction fee system for cross-chain token operations, optimizing gas costs and enhancing platform sustainability across EVM-compatible networks and Solana for IDRX Stablecoins.",
        technologies: ["NestJS", "Solidity", "Rust"]
      },
      {
        text: "Engineered a balance monitoring system for third-party payment gateways, ensuring optimal liquidity management and operational efficiency for IDRX Stablecoins.",
        technologies: ["NestJS", "NuxtJS", "Vuex"]
      },
      {
        text: "Developed an innovative retry mechanism for failed token swaps, significantly improving the success rate of cross-chain operations for IDRX Stablecoins.",
        technologies: ["NestJS", "Web3.js", "Solana Web3.js"]
      },
      {
        text: "Created a fault-tolerant redeem request processing system, implementing advanced error handling and recovery procedures to ensure robust token redemption across multiple blockchains for IDRX Stablecoins.",
        technologies: ["NestJS"]
      },
      {
        text: "Partnered with CTO to develop swapping features for EVM tokens on Base, Avalanche, and Arbitrum networks, as part of the Nusa DEX initiatives for Nusa Finance.",
        technologies: ["jQuery", "Codeigniter"]
      },
      {
        text: "Architected and implemented a high-performance, data-intensive home page for Nusa DEX V2, featuring real-time token metrics (gainers, losers, trending) across multiple networks. Optimized for speed using Incremental Static Regeneration (ISR), server-side rendering, and strategic preloading techniques.",
        technologies: ["NextJS", "TypeScript"]
      },
      {
        text: "Engineered a robust backend token API with advanced resilience mechanisms, including exponential backoff, intelligent retry logic with state persistence, and TTL caching, ensuring high availability and performance under load for Nusa DEX V2.",
        technologies: ["Codeigniter", "PHP"]
      },
      {
        text: "Developed a sophisticated same-chain swap engine, incorporating functionalities such as reverse routing, dynamic slippage adjustment, and gas optimization for Nusa DEX V2.",
        technologies: ["NextJS", "TypeScript", "Web3.js"]
      },
      {
        text: "Implemented a seamless user experience with reactive price quoting and an indexer-powered swap history. Optimized performance using Incremental Static Regeneration (ISR) and server-side rendering for efficient loading of extensive swap history data for Nusa DEX V2.",
        technologies: ["NextJS", "TypeScript", "Web3.js"]
      },
      {
        text: "Developed a sophisticated swap feature on the Base network using 0x API, including search token functionality, reverse swap capability, slippage percentage settings, and swap history tracking for Tokenomy.",
        technologies: ["Next.js", "TypeScript", "Web3.js"]
      },
      {
        text: "Developed an event logging and indexing system for $TEN stakers, featuring detailed event logs (stake, unbound, withdraw), real-time indexing, state data management, and an integrated admin staking dashboard for Tokenomy.",
        technologies: ["Next.js", "TypeScript", "Web3.js", "CodeIgniter"]
      }
    ],
    image: "/indodax.png",
    links: [
      {
        title: "Website",
        href: "https://www.indodax.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://linkedin.com/in/jasonalhilal",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "Mandiri Tunas Finance",
    role: "Software Engineer",
    dates: "Jan - Mar, 2023",
    location: "On-site, Jakarta Pusat (Indonesia)",
    description: [
        {
          text: "Worked closely with Corporate Performance and Planning Management (CPM) division to develop branch performance monitoring web based application (MyBranch) for all head managers of PT Mandiri Tunas Finance around Indonesia",
          technologies: []
        },
        {
          text: "Sliced UI design fully responsive and improved web accessibility, SEO, performance, and best practices with Progressively Enhanced Multi-Page Apps (PEMPAs) Architecture.",
          technologies: ["JavaScript","Bootstrap","jQuery","Hotwire Turbo"]
        },
        {
          text: "Developed authentication, authorization, multifinance management, also performance monitoring services (ex: sales strategy, collection strategy,SLA branch,etc).",
          technologies: ["Codeigniter"]
        },
        {
          text: "Implementing clean code and security best practices at the agile scrum development stage process.",
          technologies: ["OpenSSL", "Libsodium", "SQL Server", "Query Builder"]
        }
    ],
    image: "/mtf.png",
    mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [
      {
        title: "Website",
        href: "https://www.mtf.co.id/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "htpps://linkedin.com/in/jasonalhilal",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "TEDx Semarang",
    role: "Fullstack Engineer",
    dates: "Apr - Jun, 2024",
    location: "Remote, Semarang (Indonesia)",
    description: [
      {
        text: "Collaborated with other divisions to brainstorm, design, and develop a service product to help people participate in the TEDx event series.",
        technologies: []
      },
      {
        text: "Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features.",
        technologies: ["GitHub"]
      },
      {
        text: "Sliced UI design into a website and improved user experiences.",
        technologies: ["Bootstrap", "SCSS", "JavaScript"]
      },
      {
        text: "Implemented front-end engineering best practices and patterns and presented them to other engineers.",
        technologies: []
      },
      {
        text: "Migrated backend service into a new system with a better design pattern.",
        technologies: ["Express.js"]
      }
    ],
    image: "/tedex.png",
    links: [
      {
        title: "Website",
        href: "https://www.tedx.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://linkedin.com/in/jasonalhilal",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];
