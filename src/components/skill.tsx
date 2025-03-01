"use client";

import { useEffect, useState } from "react";
import Marquee from "@/components/magicui/marquee";
import { STACKS } from "@/data/config/stacks";

const Tag = ({ icon, title }: { icon: JSX.Element; title: string }) => (
  <div className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50">
    {icon}
    <span>{title}</span>
  </div>
);

export function Skill() {
  const [skills, setSkills] = useState<Array<[string, JSX.Element]>>([]);

  useEffect(() => {
    const skillsArray = Object.entries(STACKS);
    setSkills(skillsArray);
  }, []);

  const firstRow = skills.slice(0, Math.ceil(skills.length / 3));
  const secondRow = skills.slice(
    Math.ceil(skills.length / 3),
    Math.ceil((skills.length / 3) * 2)
  );
  const thirdRow = skills.slice(Math.ceil((skills.length / 3) * 2));

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:45s]">
        {firstRow.map(([title, icon]) => (
          <Tag key={title} icon={icon} title={title} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:45s]">
        {secondRow.map(([title, icon]) => (
          <Tag key={title} icon={icon} title={title} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:45s]">
        {thirdRow.map(([title, icon]) => (
          <Tag key={title} icon={icon} title={title} />
        ))}
      </Marquee>
    </div>
  );
}

export default Skill;
