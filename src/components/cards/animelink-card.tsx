import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import catImage from "../../../public/0002.jpg"

export const AnimeLinkCard = () => {
  return (
    <Link href={"/about"}>
      <div className="h-36 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
        <Image
          className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg brightness-75 dark:brightness-50"
          src={catImage}
          alt="anime"
          placeholder="blur"
          priority
        />
        <p className="font-bold -rotate-90 absolute top-10 bottom-16 -left-[3.70rem] text-white w-40">
          About 私
        </p>
        <ArrowUpRight className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
      </div>
    </Link>
  );
};
