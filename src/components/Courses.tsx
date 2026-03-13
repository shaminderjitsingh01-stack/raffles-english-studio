export default function Courses() {
  const courses = [
    {
      level: "O Level",
      subtitle: "English Language (1184)",
      description:
        "Comprehensive preparation for the GCE O Level English Language examination. Master Paper 1 (Editing, Situational Writing, Continuous Writing) and Paper 2 (Comprehension, Summary).",
      topics: [
        "Situational & Continuous Writing",
        "Visual Text & Comprehension",
        "Summary Writing Techniques",
        "Editing & Grammar Mastery",
        "Oral Communication Skills",
        "Listening Comprehension",
      ],
      color: "from-green-primary to-green-light",
    },
    {
      level: "A Level",
      subtitle: "General Paper (8881)",
      description:
        "Rigorous preparation for the GCE A Level General Paper. Develop critical thinking and persuasive essay writing skills across a wide range of contemporary topics.",
      topics: [
        "Essay Writing & Argumentation",
        "Comprehension & Application",
        "Summary & Inference Skills",
        "Current Affairs Analysis",
        "Critical Thinking Framework",
        "Language Use & Vocabulary",
      ],
      color: "from-green-dark to-green-primary",
    },
    {
      level: "IELTS",
      subtitle: "Academic & General Training",
      description:
        "Targeted coaching for all four IELTS modules — Listening, Reading, Writing, and Speaking. Achieve your target band score with our proven strategies.",
      topics: [
        "Task 1 & Task 2 Writing",
        "Reading Strategies & Speed",
        "Listening Practice & Tips",
        "Speaking Fluency & Confidence",
        "Vocabulary & Collocations",
        "Test-Day Strategies",
      ],
      color: "from-gold/90 to-gold",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-green-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Our Programmes
          </p>
          <h2 className="font-serif text-cream text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Courses We Offer
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            Structured programmes designed to take you from where you are to
            where you want to be.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.level}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-cream/10 overflow-hidden hover:border-gold/30 transition-all duration-300 group"
            >
              <div
                className={`bg-gradient-to-r ${course.color} p-6`}
              >
                <h3 className="font-serif text-cream text-2xl font-bold">
                  {course.level}
                </h3>
                <p className="text-cream/70 text-sm mt-1">{course.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="text-cream/70 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                <ul className="space-y-3">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-cream/80 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gold flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6589677685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block text-center bg-cream/10 hover:bg-gold hover:text-green-dark text-cream border border-cream/20 hover:border-gold font-semibold py-3 rounded transition-all duration-200"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
