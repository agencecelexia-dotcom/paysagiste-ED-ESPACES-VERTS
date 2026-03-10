import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { BLOG_CATEGORY_LABELS } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="primary">
            {BLOG_CATEGORY_LABELS[post.category]}
          </Badge>
          <span className="text-xs text-neutral-500">
            {post.readingTime} min de lecture
          </span>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
          <span>{post.author}</span>
          <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
        </div>
      </div>
    </Link>
  );
}
