import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/config/projects.config";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10 pt-0 md:pt-10">
      <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <Tabs defaultValue="myworks" className="flex flex-col items-center justify-center w-full">
      <TabsList className="grid w-[400px] grid-cols-2 mb-4">
        <TabsTrigger value="myworks">Self Grinds</TabsTrigger>
        <TabsTrigger value="clientworks">Client Hustle</TabsTrigger>
      </TabsList>
      <TabsContent value="myworks">
      <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="space-y-12 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Some dope stuff I&apos;ve been hacking on 💻
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve been grindin' on all sorts of projects – from slick landing pages to full-on Web3 dApps. Here's the collection of my builds.
                </p>
              </div>
            </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {PROJECTS.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  active={project.active}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
        </BlurFade>
        </TabsContent>
        <TabsContent value="clientworks">
        </TabsContent>
        </Tabs>
        </BlurFade>
      </section>
    </div>
  );
}
