import { getSanityClient, urlFor, ALL_POSTS_QUERY } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: { asset: { _ref: string } };
  categories?: string[];
}

async function getAllPosts(): Promise<Post[]> {
  try {
    const client = getSanityClient();
    if (!client) return [];
    return await client.fetch(ALL_POSTS_QUERY);
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
  {
    _id: "4",
    title: "The Art of Summary Writing: A Complete Guide",
    slug: { current: "summary-writing-guide" },
    excerpt:
      "Master the art of condensing passages into concise summaries. Essential techniques for both O Level and A Level students.",
    publishedAt: "2026-02-20",
    categories: ["O Levels", "A Levels"],
  },
  {
    _id: "5",
    title: "Why Reading Widely Matters for English Exams",
    slug: { current: "reading-widely" },
    excerpt:
      "How building a regular reading habit can dramatically improve your vocabulary, comprehension, and writing scores.",
    publishedAt: "2026-02-15",
    categories: ["Study Tips"],
  },
  {
    _id: "6",
    title: "IELTS vs TOEFL: Which Should You Take?",
    slug: { current: "ielts-vs-toefl" },
    excerpt:
      "A comprehensive comparison to help you decide which English proficiency test is right for your goals.",
    publishedAt: "2026-02-10",
    categories: ["IELTS"],
  },
];

export default async function BlogPage() {
  const posts = await getAllPosts();
  const displayPosts = posts.length > 0 ? posts : placeholderPosts;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-cream-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
              Our Blog
            </p>
            <h1 className="font-serif text-green-primary text-4xl sm:text-5xl font-bold mb-6">
              English Insights & Tips
            </h1>
            <p className="text-text-dark/70 text-lg leading-relaxed">
              Expert advice, exam strategies, and language insights from our
              educators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <a
                href={`/blog/${post.slug.current}`}
                key={post._id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-dark/20 group block"
              >
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

                <div className="p-6">
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

                  <h2 className="font-serif text-green-dark text-lg font-semibold mb-2 group-hover:text-green-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-text-dark/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <time className="text-text-dark/40 text-xs">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
