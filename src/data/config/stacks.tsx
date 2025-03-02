import { BiLogoJava } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import {
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiSolidity,
  SiEthereum,
  SiIpfs,
  SiGraphql,
  SiSolana,
  SiSass,
  SiPython,
  SiClerk,
  SiBun,
  SiMongodb,
  SiPostgresql,
  SiOllama,
  SiBootstrap,
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import Flowbite from "@/svgs/flowbite";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400
  Pyhton: <SiPython size={iconSize} color="#60A5FA"/>,
  Dart: <SiDart size={iconSize} color="#60A5FA" />, // blue-400
  Go: <SiGo size={iconSize} color="#60A5FA" />, // blue-400
  Solidity: <SiSolidity size={iconSize} color="#8C8C8C" />, // gray-500

  // Web3 and Blockchain
  Ethereum: <SiEthereum size={iconSize} color="#3C3C3D" />, // ethereum color
  EVM: <FaEthereum size={iconSize} color="#627EEA" />, // EVM icon, using Ethereum color
  Solana: <SiSolana size={iconSize} color="#00FFA3" />, // solana green
  Ollama: <SiOllama size={iconSize} />,
  IPFS: <SiIpfs size={iconSize} color="#65C2CB" />, // cyan-400
  GraphQL: <SiGraphql size={iconSize} color="#E535AB" />, // pink-500

  // Mobile Frameworks
  ReactNative: <SiReact size={iconSize} color="#0EA5E9" />,
  Java: <FaJava size={iconSize} color="#DC2626" />,

  // Frontend Frameworks
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="#0EA5E9" />, // sky-500
  Webpack: <SiWebpack size={iconSize} color="#3B82F6" />, // blue-500

  // Frontend Library
  "shadcn/ui": <SiShadcnui size={iconSize} />,
  SCSS: <SiSass size={iconSize} color="#E535AB" />,
  "Material UI": <SiMui size={iconSize} color="#38BDF8" />, // sky-400
  Bootstrap: <SiBootstrap size={iconSize} color="#E535AB" />, // pink-500
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  Redux: <SiRedux size={iconSize} color="#A855F7" />, // purple-500
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300

  // Backend
  Express: <SiExpress size={iconSize} />,
  // "Nest.js": <SiNestjs size={iconSize} color="#DC2626" />, // red-600
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Firebase: <SiFirebase size={iconSize} color="#F59E0B" />, // yellow-500
  Supabase: <SiSupabase size={iconSize} color="#22C55E" />, // green-500
  Jest: <SiJest size={iconSize} color="#DC2626" />, // red-600
  GoLang: <SiGo size={iconSize} color="#60A5FA" />, // blue-400
  Redis: <SiRedis size={iconSize} color="#DC2626" />, // red-600
  Bun: <SiBun size={iconSize} color="oklch(0.872 0.01 258.338)" />,
  

  // Others
  "Node.js": <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600
  Nginx: <SiNginx size={iconSize} color="#22C55E" />, // green-500
  Docker: <SiDocker size={iconSize} color="#93C5FD" />, // blue-300
  MongoDB: <SiMongodb size={iconSize} color="#22C55E"/>,
  Gemini: <SiGooglegemini size={iconSize} />,
  Linux: <SiLinux size={iconSize} />,
  Figma: <SiFigma size={iconSize} />,
  PostgreSQL: <SiPostgresql size={iconSize} />,
  Clerk: <SiClerk size={iconSize}/>
};
