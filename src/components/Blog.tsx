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

// Placeholder posts shown when Sanity is not connected
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

export default async function Blog() {
  const posts = await getPosts();
  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  return (
    <section id="blog" className="py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Our Blog
          </p>
          <h2 className="font-serif text-green-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            English Insights & Tips
          </h2>
          <p className="text-text-dark/70 text-lg leading-relaxed">
            Expert advice, exam strategies, and language insights from our team
            of educators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-dark/20 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-green-primary/10 overflow-hidden">
                {post.mainImage ? (
                  <img
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-primary to-green-dark flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-cream/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] font-semibold tracking-wider uppercase bg-green-primary/10 text-green-primary px-2.5 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="font-serif text-green-dark text-lg font-semibold mb-2 group-hover:text-green-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-text-dark/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-text-dark/40 text-xs">
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="text-green-primary text-sm font-medium group-hover:text-gold transition-colors flex items-center gap-1">
                    Read more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-light text-cream font-semibold px-8 py-3.5 rounded transition-all duration-200"
          >
            View All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
