import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const BLOGS = await getBlogPosts();

  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10 pt-0 md:pt-10">
      <section id="blogs">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Droppin' some thoughts
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Deep-divin' into the world of tech, crypto, and the wild ride that is life. Check out my latest drops – hope they vibe with you!
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {BLOGS.sort((a, b) => {
                  if (a && b && a.metadata && b.metadata) {
                    return (
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime()
                    );
                  }
                  return 0;
                }).map(
                  (post, id) =>
                    post && (
                      <BlurFade
                        key={post.slug}
                        delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                      >
                        <BlogCard
                          href={`/blog/${post.slug}`}
                          title={post.metadata.title}
                          description={post.metadata.summary}
                          publishedAt={post.metadata.publishedAt}
                          iconUrl={post.metadata.icon}
                          readTime={post.metadata.readTime}
                        />
                      </BlurFade>
                    ),
                )}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
