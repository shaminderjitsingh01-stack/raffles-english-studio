import { getSanityClient, urlFor, POST_QUERY } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { notFound } from "next/navigation";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body?: Array<{ _type: string; children?: Array<{ text: string }> }>;
  publishedAt: string;
  mainImage?: { asset: { _ref: string } };
  categories?: string[];
}

// Placeholder posts for when Sanity isn't connected
const placeholderPosts: Record<string, Post> = {
  "o-level-english-tips": {
    _id: "1",
    title: "5 Tips to Score A1 for O Level English",
    slug: { current: "o-level-english-tips" },
    excerpt: "Discover the strategies our top students use to consistently achieve distinction in their O Level English examinations.",
    publishedAt: "2026-03-10",
    categories: ["O Levels", "Study Tips"],
    body: [
      { _type: "block", children: [{ text: "Scoring well in O Level English requires a combination of strong fundamentals, consistent practice, and smart exam strategies. Here are the five tips our top students swear by." }] },
      { _type: "block", children: [{ text: "1. Master the Marking Scheme — Understanding exactly what examiners look for is half the battle. For Paper 1 Situational Writing, markers award marks for tone, format, and task fulfilment. For Continuous Writing, focus on having a clear thesis, well-developed paragraphs, and varied sentence structures." }] },
      { _type: "block", children: [{ text: "2. Read Widely and Actively — Reading newspapers, magazines, and novels builds your vocabulary and comprehension skills organically. Keep a vocabulary journal and note down useful phrases you encounter." }] },
      { _type: "block", children: [{ text: "3. Practice Summary Writing Weekly — Summary is one of the most score-able sections. Train yourself to identify key points, paraphrase effectively, and stay within the word limit. Use the 'hunting' technique to systematically find content points." }] },
      { _type: "block", children: [{ text: "4. Time Management is Key — In the actual exam, allocate your time wisely. For Paper 2, spend about 15 minutes on Visual Text, 50 minutes on Comprehension, and 25 minutes on Summary." }] },
      { _type: "block", children: [{ text: "5. Get Feedback on Every Essay — Writing without feedback is like practising football without a coach. Submit your essays for marking regularly and pay attention to recurring mistakes." }] },
      { _type: "block", children: [{ text: "At The Raffles English Studio, we provide detailed essay marking, weekly timed practices, and personalised feedback to help you implement all five of these strategies effectively. Book a free trial to experience the difference." }] },
    ],
  },
  "gp-essay-framework": {
    _id: "2",
    title: "How to Write a Compelling GP Essay in 60 Minutes",
    slug: { current: "gp-essay-framework" },
    excerpt: "A step-by-step framework for structuring your General Paper essays under timed conditions — with real examples.",
    publishedAt: "2026-03-05",
    categories: ["A Levels", "Writing"],
    body: [
      { _type: "block", children: [{ text: "Writing a well-structured General Paper essay under timed conditions is one of the most challenging tasks A Level students face. Here's our proven 60-minute framework." }] },
      { _type: "block", children: [{ text: "Minutes 1-5: Planning — Read the question twice. Identify the key words and the scope. Brainstorm 3 arguments for and 2-3 against (or vice versa depending on your stance). Choose your strongest points and arrange them logically." }] },
      { _type: "block", children: [{ text: "Minutes 5-10: Introduction — Start with a hook (a striking fact, question, or observation). Define key terms if ambiguous. State your thesis clearly. A strong introduction sets the tone for the entire essay." }] },
      { _type: "block", children: [{ text: "Minutes 10-45: Body Paragraphs — Aim for 3-4 well-developed body paragraphs. Each paragraph should follow the PEEL structure: Point, Elaboration, Evidence, Link. Use real-world examples from current affairs, history, science, or the arts." }] },
      { _type: "block", children: [{ text: "Minutes 45-55: Counter-argument & Conclusion — Dedicate one paragraph to the opposing view, then refute it. Your conclusion should synthesise your arguments and offer a nuanced final position." }] },
      { _type: "block", children: [{ text: "Minutes 55-60: Proofreading — Check for grammatical errors, awkward phrasing, and logical gaps. Even fixing 2-3 errors can bump you up a grade band." }] },
      { _type: "block", children: [{ text: "Practice this framework weekly and you'll find that 60 minutes becomes more than enough time to produce a compelling essay." }] },
    ],
  },
  "ielts-speaking-mistakes": {
    _id: "3",
    title: "IELTS Speaking: Common Mistakes Singaporeans Make",
    slug: { current: "ielts-speaking-mistakes" },
    excerpt: "From pronunciation to fluency, here are the most common pitfalls and how to avoid them in your IELTS speaking test.",
    publishedAt: "2026-02-28",
    categories: ["IELTS", "Speaking"],
    body: [
      { _type: "block", children: [{ text: "Singaporean test-takers often score lower in IELTS Speaking than they expect. Here are the most common mistakes and how to fix them." }] },
      { _type: "block", children: [{ text: "1. Singlish Interference — While Singlish is a perfectly valid way of communicating locally, IELTS examiners assess standard English. Avoid particles like 'lah', 'lor', and 'leh'. Practice speaking in complete sentences with proper subject-verb agreement." }] },
      { _type: "block", children: [{ text: "2. Short, Undeveloped Answers — Many candidates give one-line answers in Part 1. Instead, aim for 2-3 sentences. Use the 'Answer + Reason + Example' technique to naturally extend your responses." }] },
      { _type: "block", children: [{ text: "3. Memorised Answers — Examiners can spot rehearsed answers immediately, and it hurts your score. Instead, practise discussing topics fluently rather than memorising scripts." }] },
      { _type: "block", children: [{ text: "4. Pronunciation Issues — Focus on word stress, sentence stress, and intonation. Common issues include flattened intonation (sounding monotone) and mispronouncing 'th' sounds." }] },
      { _type: "block", children: [{ text: "5. Not Using Cohesive Devices — Link your ideas with words like 'moreover', 'on the other hand', 'having said that'. This demonstrates fluency and coherence." }] },
      { _type: "block", children: [{ text: "At The Raffles English Studio, our IELTS Speaking module includes weekly mock tests with detailed feedback on pronunciation, fluency, grammar, and vocabulary." }] },
    ],
  },
};

const blogImages: Record<string, string> = {
  "o-level-english-tips": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop&q=80",
  "gp-essay-framework": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop&q=80",
  "ielts-speaking-mistakes": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&q=80",
};

async function getPost(slug: string): Promise<Post | null> {
  try {
    const client = getSanityClient();
    if (client) {
      const post = await client.fetch(POST_QUERY, { slug });
      if (post) return post;
    }
  } catch { /* fall through to placeholder */ }
  return placeholderPosts[slug] || null;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : blogImages[slug] || blogImages["o-level-english-tips"];

  return (
    <>
      <Navbar forceSolid />
      <main className="pt-24 pb-16 bg-cream-light min-h-screen">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero image */}
          <div className="relative h-64 sm:h-80 rounded-sm overflow-hidden mb-10">
            <img
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-darker/50 via-transparent to-transparent" />
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] font-semibold tracking-wider uppercase bg-gold/10 text-gold-dark px-3 py-1.5 rounded-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-serif text-green-primary text-3xl sm:text-4xl font-bold mb-4 tracking-tight leading-tight">
            {post.title}
          </h1>

          <time className="text-text-dark/40 text-sm font-light">
            {formatDate(post.publishedAt)}
          </time>

          <div className="premium-divider my-8" />

          {/* Body */}
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              post.body.map((block, i) => {
                if (block._type === "block" && block.children) {
                  const text = block.children.map((c) => c.text).join("");
                  return (
                    <p
                      key={i}
                      className="text-text-dark/70 text-base leading-relaxed mb-6 font-light"
                    >
                      {text}
                    </p>
                  );
                }
                return null;
              })
            ) : (
              <p className="text-text-dark/70 text-base leading-relaxed font-light">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-green-primary rounded-sm p-8 sm:p-10 text-center">
            <h3 className="font-serif text-cream text-2xl font-bold mb-3 tracking-tight">
              Ready to Excel?
            </h3>
            <p className="text-cream/50 text-sm font-light mb-6 max-w-md mx-auto">
              Join The Raffles English Studio and get personalised coaching for
              your English examinations.
            </p>
            <a
              href="https://wa.me/6589677685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-green-darker font-medium px-8 py-3.5 rounded-sm transition-all duration-300 text-sm tracking-wide"
            >
              Book a Free Trial
            </a>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-green-primary/60 hover:text-gold text-sm font-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to all articles
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
