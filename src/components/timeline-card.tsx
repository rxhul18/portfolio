import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface LinkItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

interface DescriptionPoint {
  text: string;
  technologies?: string[];
}

interface Props {
  title: string;
  role?: string;
  description: DescriptionPoint[];
  dates: string;
  location: string;
  image?: string;
  links?: LinkItem[];
}

export function TimeLineCard({
  title,
  role,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {role && (
          <Badge variant="secondary" className="w-fit text-xs">
            {role}
          </Badge>
        )}
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}

        {description && (
          <ul className="prose dark:prose-invert text-sm text-muted-foreground list-disc pl-5 space-y-2 text-justify">
            {description.map((point, idx) => (
              <li key={idx}>
                {point.text}
                {point.technologies && point.technologies.length > 0 && (
                  <span className="ml-2 text-gray-500 dark:text-white">
                    ({point.technologies.join(", ")})
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
