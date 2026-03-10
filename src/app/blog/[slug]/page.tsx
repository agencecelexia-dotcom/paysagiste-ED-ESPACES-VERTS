import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import BlogCard from "@/components/features/BlogCard";
import { blogPosts } from "@/data/blog-posts";
import { BLOG_CATEGORY_LABELS } from "@/types";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article non trouvé" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={post.featuredImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
            <Badge variant="primary" className="mb-4">
              {BLOG_CATEGORY_LABELS[post.category]}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-neutral-300">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
              <span>•</span>
              <span>{post.readingTime} min de lecture</span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container className="max-w-3xl">
          <FadeIn>
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => {
                switch (section.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                        {section.content}
                      </p>
                    );
                  case "heading":
                    if (section.level === 3) {
                      return (
                        <h3
                          key={index}
                          className="text-xl font-bold text-neutral-900 mt-8 mb-4"
                        >
                          {section.content}
                        </h3>
                      );
                    }
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-neutral-900 mt-10 mb-4"
                      >
                        {section.content}
                      </h2>
                    );
                  case "list":
                    return (
                      <div key={index} className="mb-6">
                        {section.content && (
                          <p className="text-neutral-700 font-medium mb-3">
                            {section.content}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {section.items?.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-neutral-700"
                            >
                              <svg
                                className="mt-1.5 h-4 w-4 shrink-0 text-accent-500"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="my-8 border-l-4 border-accent-500 pl-6 italic text-neutral-600 text-lg"
                      >
                        {section.content}
                      </blockquote>
                    );
                  case "image":
                    return (
                      <div
                        key={index}
                        className="my-8 relative aspect-[16/9] overflow-hidden rounded-xl"
                      >
                        <Image
                          src={section.content}
                          alt={section.imageAlt || ""}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </article>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Container className="mt-20">
            <FadeIn>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                Articles Similaires
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {relatedPosts.map((rp) => (
                  <BlogCard key={rp.id} post={rp} />
                ))}
              </div>
            </FadeIn>
          </Container>
        )}
      </section>
    </>
  );
}
