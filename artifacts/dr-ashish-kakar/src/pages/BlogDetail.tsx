import React from "react";
import { useParams, Link } from "wouter";
import { PageBanner } from "../components/PageBanner";
import { useSEO } from "../hooks/use-seo";
import { blogPosts } from "./BlogIndex";
import NotFound from "./not-found";
import { Calendar, User, Tag, Share2, ArrowLeft } from "lucide-react";
function renderContent(content: string) {
  const blocks = content.trim().split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={i}>{trimmed.replace(/^##\s+/, "")}</h2>;
    }
    if (trimmed.startsWith("# ")) {
      return <h1 key={i}>{trimmed.replace(/^#\s+/, "")}</h1>;
    }
    if (trimmed.startsWith("### ")) {
      return <h3 key={i}>{trimmed.replace(/^###\s+/, "")}</h3>;
    }
    const lines = trimmed.split("\n");
    if (lines.every((l) => /^\s*[-*]\s+/.test(l))) {
      return (
        <ul key={i}>
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^\s*[-*]\s+/, "")}</li>
          ))}
        </ul>
      );
    }
    if (lines.every((l) => /^\s*\d+\.\s+/.test(l))) {
      return (
        <ol key={i}>
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^\s*\d+\.\s+/, "")}</li>
          ))}
        </ol>
      );
    }
    return <p key={i}>{trimmed}</p>;
  });
}

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  useSEO({
    title: `${post.title} | Dr. Ashish Kakar Dental Clinic`,
    description: post.excerpt
  });

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  // Simple sharing URLs
  const shareUrl = window.location.href;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + shareUrl)}`;

  return (
    <div className="bg-white min-h-screen">
      <PageBanner title="Blog" breadcrumb={`Blogs / ${post.title}`} />
      
      <article className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-y border-gray-100 py-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
              </div>
            </div>
          </header>

          <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100 aspect-[16/9] md:aspect-[21/9]">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg prose-primary max-w-none mb-16 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-accent prose-li:text-gray-600">
            {renderContent(post.content)}
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4 py-8 border-y border-gray-100 mb-16">
            <span className="font-bold text-gray-900 flex items-center gap-2">
              <Share2 className="w-5 h-5" /> Share this article:
            </span>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-colors">
              X
            </a>
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#4267B2] hover:text-white flex items-center justify-center transition-colors font-bold">
              f
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors">
              W
            </a>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have questions about your dental health?</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Our team of experts is here to help you achieve and maintain a perfect, healthy smile.
            </p>
            <Link href="/contact-us" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md">
              Book a Consultation
            </Link>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden mb-4 aspect-video border border-gray-100">
                    <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{rp.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">{rp.date}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
