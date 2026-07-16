// ============================================================================
//  EDIT THIS FILE to customize your portfolio with your own information.
//  This is the ONLY file most people need to touch to make the site "theirs."
// ============================================================================

const content = {
  name: "Yusra Faheem",
  initials: "YF",
  role: "Software Developer & Founder, Veribuy",
  tagline: "I build systems that make markets more transparent.",
  email: "yusra.faheem@gwu.edu",
  location: "Washington, D.C.",
  resumeUrl: "", // add a link to a hosted PDF version of your resume here

  social: [
    { name: "GitHub", url: "https://github.com/yusrafaheem", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yusra-faheem-1b6370333/", icon: "linkedin" },
    { name: "Email", url: "mailto:yusra.faheem@gwu.edu", icon: "email" },
  ],

  about: {
    paragraphs: [
      "I'm a Computer Science undergraduate at George Washington University (Accounting minor), building systems at the intersection of technology, markets, and public decision-making — with a focus on using computational tools to improve transparency, trust, and efficiency in real-world systems.",
      "I'm currently the founder of Veribuy, an AI-powered platform tackling information asymmetry in digital commerce by combining machine learning, price aggregation, and verified user data to cut through unreliable reviews and fragmented pricing.",
      "My background spans ML research, production software engineering, and public-sector policy work (including a stint with a member of Congress) — giving me a dual lens on both building technical systems and understanding the impact they have once they're out in the world.",
    ],
    skills: [
      "Python & Java",
      "React.js & Node.js",
      "PyTorch & Hugging Face",
      "FastAPI",
      "AWS & GCP",
      "Docker & Kubernetes",
      "SQL",
      "Git & CI/CD",
    ],
  },

  experience: [
    {
      company: "Amazon",
      title: "AI Engineering Extern",
      range: "June 2026 — Present",
      bullets: [
        "Engineering an end-to-end AI document-intelligence pipeline for Pfizer's clinical supply chain to replace manual, Ctrl+F-style review of scanned and digital documents.",
        "Built OCR ingestion (Tesseract, PaddleOCR, EasyOCR) with field-level extraction and bounding-box coordinates, plus a RAG-based semantic search layer (LlamaIndex, FAISS, Gemini API) over structured JSON outputs.",
        "Shipped modular classification/routing logic with a Streamlit interface for natural-language document queries.",
      ],
    },
    {
      company: "Veribuy",
      title: "Founder & CEO",
      range: "September 2025 — Present",
      bullets: [
        "Founded and shipped Veribuy (veribuy.vercel.app), a live full-stack consumer platform (Python/FastAPI, React.js, PostgreSQL) for real-time price comparison and product discovery.",
        "Single-handedly owned architecture, backend infrastructure, frontend, and product strategy from concept to production deployment on AWS/Vercel.",
        "Engineered data pipelines to aggregate, validate, and rank pricing data across retailers at scale. Semifinalist, GW New Venture Competition.",
      ],
    },
    {
      company: "STIDAX Technologies",
      title: "Software Engineer Intern",
      range: "June 2025 — December 2025",
      bullets: [
        "Shipped full-stack features end-to-end (React.js, Node.js, REST APIs) in an Agile/Scrum environment, translating ambiguous product requirements into production code reviewed and merged via Git-based CI/CD.",
        "Built telemetry and analytics dashboards parsing user-interaction data to identify behavioral drop-off points and performance bottlenecks, measurably improving page-load performance and user retention.",
      ],
    },
    {
      company: "GW School of Engineering & Applied Science",
      title: "Student Researcher, ML & Data Integrity",
      range: "September 2025 — Present",
      bullets: [
        "Architecting scalable distributed systems and training multimodal CV+NLP verification models (fine-tuned vision transformers + LLMs) to detect synthetic and adversarial content across images, text, and metadata.",
        "Benchmarked detection across multiple attack categories, including deepfakes and metadata spoofing; contributed reusable trustworthy-AI frameworks now used by the lab for ongoing policy-critical AI reliability research.",
      ],
    },
    {
      company: "U.S. House of Representatives",
      title: "Operations Intern, Office of Congressman Oye",
      range: "January 2026 — May 2026",
      bullets: [
        "Engineered structured datasets from constituent federal records and built NLP classification frameworks automating casework triage.",
        "Produced decision-ready datasets used directly in legislative reporting.",
      ],
    },
    {
      company: "Upwork",
      title: "Freelance Software Engineer",
      range: "January 2026 — Present",
      bullets: [
        "Architected and shipped full-stack applications (Python/FastAPI backends, React/TypeScript frontends, RESTful APIs, CI/CD) for clients across e-commerce, fintech, and SaaS.",
        "Independently managed the full lifecycle from technical scoping through cloud deployment, maintaining 5-star ratings across all engagements.",
      ],
    },
  ],

  // Shown in the scrolling project carousel. Add as many as you like.
  projects: [
    {
      title: "Scalable Fake Review Detection & Explainability System",
      description:
        "A full-stack ML system combining NLP classification, anomaly detection, and graph-based trust scoring to detect fake reviews at scale, surfacing manipulation patterns invisible to keyword-based filters. Deployed as a real-time FastAPI service with an explainability layer (feature attribution, calibrated confidence scores), backed by an economic analysis of how review manipulation distorts pricing and harms consumers.",
      tags: ["Python", "PyTorch", "NLP", "Graph ML", "FastAPI", "React.js"],
      link: "https://veribuy.vercel.app/",
      image: "",
    },
    {
      title: "Multimodal Synthetic Content Authentication Engine",
      description:
        "A distributed system combining fine-tuned vision transformers and LLMs to authenticate images, text, and metadata in real time under adversarial conditions — achieving robust detection across deepfakes, adversarial perturbations, and metadata spoofing. Includes a cross-modal consistency pipeline with automated benchmarking, now running as GW SEAS research infrastructure.",
      tags: ["Python", "PyTorch", "Hugging Face", "OpenCV", "FastAPI"],
      link: "",
      image: "",
    },
    {
      title: "Algorithmic Fairness Auditing Framework",
      description:
        "A model-agnostic ML auditing framework computing demographic parity, equalized odds, and predictive parity across hiring, lending, and content-moderation datasets, surfacing previously undetected bias in production-style models. Packaged as a pre-deployment quality gate consumable via CLI or REST API, with a React.js dashboard exposing severity scores and remediation paths.",
      tags: ["Python", "scikit-learn", "Fairlearn", "React.js", "Node.js"],
      link: "",
      image: "",
    },
    {
      title: "Scalable URL Shortener",
      description:
        "A high-throughput URL shortener built to actually sustain production-scale traffic rather than serve as a CRUD demo: Snowflake-style distributed ID generation, a 16-shard cache-aside store, per-client token-bucket rate limiting, and multi-process horizontal scaling via Node's cluster module, all instrumented with Prometheus metrics. Benchmarked at 119,747 req/s on a 4-worker cluster with zero errors — real, reproducible numbers, not estimates.",
      tags: ["Node.js", "Fastify", "System Design", "Docker", "Prometheus"],
      link: "https://github.com/yusrafaheem/scalable-url-shortener",
      image: "",
    },
  ],
}

export default content
