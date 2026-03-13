import { getSanityClient, urlFor, POSTS_QUERY } from "@/lib/sanity";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: { asset: { _ref: string } };
  categories?: string[];
}

async function getPosts(): Promise<Post[]> {
  try {
    const client = getSanityClient();
    if (!client) return [];
    return await client.fetch(POSTS_QUERY);
  } catch {
    return [];
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const placeholderPosts: Post[] = [
  {
    _id: "1",
    title: "5 Tips to Score A1 for O Level English",
    slug: { current: "o-level-english-tips" },
    excerpt:
      "Discover the strategies our top students use to consistently achieve distinction in their O Level English examinations.",
    publishedAt: "2026-03-10",
    categories: ["O Levels", "Study Tips"],
  },
  {
    _id: "2",
    title: "How to Write a Compelling GP Essay in 60 Minutes",
    slug: { current: "gp-essay-framework" },
    excerpt:
      "A step-by-step framework for structuring your General Paper essays under timed conditions — with real examples.",
    publishedAt: "2026-03-05",
    categories: ["A Levels", "Writing"],
  },
  {
    _id: "3",
    title: "IELTS Speaking: Common Mistakes Singaporeans Make",
    slug: { current: "ielts-speaking-mistakes" },
    excerpt:
      "From pronunciation to fluency, here are the most common pitfalls and how to avoid them in your IELTS speaking test.",
    publishedAt: "2026-02-28",
    categories: ["IELTS", "Speaking"],
  },
];

// Unsplash placeholder images for blog posts
const blogImages = [
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
];

export default async function Blog() {
  const posts = await getPosts();
  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  return (
    <section id="blog" className="relative py-28 bg-cream-light overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Our Blog
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            English Insights & Tips
          </h2>
          <div className="premium-divider mx-auto mb-6" />
          <p className="text-text-dark/60 text-base leading-relaxed font-light">
            Expert advice, exam strategies, and language insights from our team
            of educators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, i) => (
            <article
              key={post._id}
              className="reveal group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark/15 hover:border-gold/20"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Featured image */}
              <div className="relative h-52 overflow-hidden">
                {post.mainImage ? (
                  <img
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={blogImages[i % blogImages.length]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-darker/60 via-transparent to-transparent" />

                {/* Categories on image */}
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[9px] font-semibold tracking-wider uppercase bg-gold/90 text-green-darker px-2.5 py-1 rounded-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <time className="text-text-dark/30 text-[11px] tracking-wider uppercase font-light">
                  {formatDate(post.publishedAt)}
                </time>

                <h3 className="font-serif text-green-dark text-lg font-semibold mt-2 mb-3 group-hover:text-green-primary transition-colors line-clamp-2 tracking-tight">
                  {post.title}
                </h3>

                <p className="text-text-dark/50 text-sm leading-relaxed mb-5 line-clamp-3 font-light">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-green-primary text-xs font-medium group-hover:text-gold transition-colors tracking-wide">
                  Read article
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal text-center mt-14">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-light text-cream font-medium px-8 py-3.5 rounded-sm transition-all duration-300 text-sm tracking-wide hover:shadow-lg hover:shadow-green-primary/20"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
