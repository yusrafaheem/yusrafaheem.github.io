// ============================================================================
//  EDIT THIS FILE to customize your portfolio with your own information.
//  This is the ONLY file most people need to touch to make the site "theirs."
// ============================================================================

const content = {
  name: "Yusra Faheem",
  initials: "YF",
  role: "Software Engineer",
  tagline: "I write code, mostly backend and machine learning.",
  email: "yusra.faheem@gwu.edu",
  location: "Washington, D.C.",
  resumeUrl: "", // add a link to a hosted PDF version of your resume here
  githubUsername: "yusrafaheem",

  social: [
    { name: "GitHub", url: "https://github.com/yusrafaheem", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yusra-faheem-1b6370333/", icon: "linkedin" },
    { name: "Medium", url: "https://medium.com/@yusra.faheem_19947", icon: "medium" },
    { name: "Email", url: "mailto:yusra.faheem@gwu.edu", icon: "email" },
  ],

  about: {
    paragraphs: [
      "I'm a CS undergrad at George Washington University (accounting minor, mostly unrelated at this point). Most of what I actually do is backend engineering and machine learning — RAG pipelines, LLM fine-tuning, some adversarial ML on the side.",
      "I also built and run Veribuy, a full-stack app (FastAPI, React, Postgres) that compares prices and flags fake reviews using a couple of basic NLP classifiers. Built and deployed the whole thing myself.",
      "Outside of classes I've done ML research, a couple of SWE internships, and a semester doing data work for a congressional office. Different contexts, same basic loop: read the data, write the code, see if it works.",
    ],
    skills: [
      "Python & Java",
      "Data Structures & Algorithms",
      "PyTorch & Hugging Face",
      "FastAPI",
      "React.js & Node.js",
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
      image: "https://raw.githubusercontent.com/yusrafaheem/veribuy/main/docs/pitch-deck/03-solution.jpg",
    },
    {
      title: "Multimodal Synthetic Content Authentication Engine",
      description:
        "A distributed system combining fine-tuned vision transformers and LLMs to authenticate images, text, and metadata in real time under adversarial conditions — achieving robust detection across deepfakes, adversarial perturbations, and metadata spoofing. Includes a cross-modal consistency pipeline with automated benchmarking, now running as GW SEAS research infrastructure.",
      tags: ["Python", "PyTorch", "Hugging Face", "OpenCV", "FastAPI"],
      link: "https://github.com/yusrafaheem/multimodal-content-auth-engine",
      image: "https://mermaid.ink/img/Zmxvd2NoYXJ0IExSCiAgICBzdWJncmFwaCBJbnB1dAogICAgICAgIElNR1tJbWFnZSBieXRlc10KICAgICAgICBDQVBbQ2FwdGlvbiAvIGNsYWltIHRleHRdCiAgICBlbmQKCiAgICBJTUcgLS0-IElEW0ltYWdlIERldGVjdG9yPGJyLz5WaVQgYmFja2JvbmUgKyBoZWFkPGJyLz5vciBFTEEgKyBub2lzZS1yZXNpZHVhbF0KICAgIElNRyAtLT4gTURbTWV0YWRhdGEgRGV0ZWN0b3I8YnIvPkVYSUYgcnVsZSBlbmdpbmVdCiAgICBDQVAgLS0-IFREW1RleHQgRGV0ZWN0b3I8YnIvPkNMSVAgaW1hZ2UtdGV4dCBzaW1pbGFyaXR5PGJyLz5vciB0ZXh0LXN0YXRzIGhldXJpc3RpY10KICAgIElNRyAtLT4gVEQKCiAgICBJRCAtLT4gRlVTW0Nyb3NzLU1vZGFsPGJyLz5Db25zaXN0ZW5jeSBQaXBlbGluZV0KICAgIE1EIC0tPiBGVVMKICAgIFREIC0tPiBGVVMKCiAgICBGVVMgLS0-IE9VVFtVbmlmaWVkIFZlcmRpY3Q8YnIvPmF1dGhlbnRpYyAvIHN1c3BpY2lvdXMgLyBsaWtlbHlfZmFrZTxici8-KyBwZXItbW9kYWxpdHkgZXhwbGFuYXRpb25dCg==",
    },
    {
      title: "Algorithmic Fairness Auditing Framework",
      description:
        "A model-agnostic ML auditing framework computing demographic parity, equalized odds, and predictive parity across hiring, lending, and content-moderation datasets, surfacing previously undetected bias in production-style models. Packaged as a pre-deployment quality gate consumable via CLI or REST API, with a React.js dashboard exposing severity scores and remediation paths.",
      tags: ["Python", "scikit-learn", "Fairlearn", "React.js", "Node.js"],
      link: "https://github.com/yusrafaheem/fairness-audit-framework",
      image: "https://raw.githubusercontent.com/yusrafaheem/fairness-audit-framework/main/docs/architecture.svg",
    },
    {
      title: "Flowbook — Limit Order Book Microstructure Lab",
      description:
        "A C++ matching engine with lock-free SPSC ingestion, an Avellaneda-Stoikov market maker backtested on a calibrated synthetic order-flow simulator, and from-scratch microstructure tooling for studying price formation and liquidity.",
      tags: ["C++", "Python", "Market Microstructure", "Simulation"],
      link: "https://github.com/yusrafaheem/flowbook",
      image: "https://mermaid.ink/img/Zmxvd2NoYXJ0IFRCCiAgICBzdWJncmFwaCBDUFBbImNwcC8gKEMrKzE3LCBweWJpbmQxMSkiXQogICAgICAgIE1FWyJNYXRjaGluZ0VuZ2luZTxici8-cHJpY2UtdGltZSBwcmlvcml0eTxici8-bGF6eSB0b21ic3RvbmUgY2FuY2VsbGF0aW9uPGJyLz5taWQgLyBtaWNyb3ByaWNlIC8gZGVwdGggc25hcHNob3QiXQogICAgICAgIFJCWyJTcHNjUmluZ0J1ZmZlcig0MDk2KTxici8-d2FpdC1mcmVlLCBhdG9taWMgaGVhZC90YWlsIl0KICAgIGVuZAogICAgc3ViZ3JhcGggUFlbInB5dGhvbi9mbG93Ym9vay8iXQogICAgICAgIFNJTVsic2ltdWxhdG9yLnB5PGJyLz5zeW50aGV0aWMgb3JkZXIgZmxvdyJdCiAgICAgICAgRkVBVFsiZmVhdHVyZXMucHk8YnIvPk9CSSAvIG1pY3JvcHJpY2UgLyBzcHJlYWQiXQogICAgICAgIFNUUkFUWyJzdHJhdGVnaWVzLnB5PGJyLz5BdmVsbGFuZWRhLVN0b2lrb3YgKyBiYXNlbGluZSJdCiAgICAgICAgQlRbImJhY2t0ZXN0LnB5PGJyLz5QbkwgLyBTaGFycGUgLyBkcmF3ZG93biJdCiAgICAgICAgUkVTWyJyZXNlYXJjaC5weTxici8-ZnJvbS1zY3JhdGNoIGF0dGVudGlvbiBtb2RlbCJdCiAgICBlbmQKICAgIENQUCAtLT58cHliaW5kMTEgZmxvd2Jvb2suX2NvcmV8IFBZCg==",
    },
    {
      title: "Vectorgrad — Autodiff Engine From Scratch",
      description:
        "A reverse-mode automatic differentiation engine and neural network library built from scratch on vectorized NumPy, benchmarked against PyTorch for correctness and performance.",
      tags: ["Python", "NumPy", "Autodiff", "Deep Learning"],
      link: "https://github.com/yusrafaheem/vectorgrad",
      image: "",
    },
    {
      title: "Provenance-Constrained Attention — NumPy Proof of Concept",
      description:
        "Small-scale NumPy implementation of Provenance-Constrained Attention, the mechanism from Section 6 of my paper on keeping untrusted tokens out of a model's decision path. No autodiff library — forward and backward passes for all three conditions (vanilla, labeled, PCA) are hand-derived and checked against a central-difference gradient test. Includes an exhaustive adaptive-attack search and a multi-seed run reproducing the paper's results table.",
      tags: ["Python", "NumPy", "Attention", "Adversarial ML", "Research"],
      link: "https://github.com/yusrafaheem/pca-experiment",
      image: "",
    },
    {
      title: "Data Structures & Algorithms Coursework",
      description:
        "A set of small Java projects from GW's data structures course, plus one side project: a hash table (separate chaining) and a binary search tree (lazy deletion) profiled against each other on ~200 records, a queue/stack-based bank transaction simulator, sorting-algorithm profiling (selection, bubble, insertion, quicksort) on datasets up to 10k rows, an ArrayList-vs-LinkedList music catalog, a substring-search cipher decoder, and a from-scratch Enigma machine with a JUnit test suite. Outside of coursework: a DC Metro network simulator modeling transfer stations as a linked structure with a recursive shortest-path search.",
      tags: ["Java", "Data Structures", "Algorithms", "Sorting", "JUnit"],
      link: "https://github.com/yusrafaheem/dc-metro-simulator",
      image: "",
    },
  ],

  // Featured writing — research, articles, and posts. Shown in the "Writing & Research" section.
  writing: [
    {
      title: "Designing an Attention Mechanism That Keeps Untrusted Tokens Out of the Decision Path",
      outlet: "Medium",
      date: "July 2026",
      excerpt:
        "A deep dive into Provenance-Constrained Attention — an attention mechanism designed so that untrusted or adversarial tokens can be down-weighted before they ever reach the model's decision path.",
      url: "https://medium.com/@yusra.faheem_19947/designing-an-attention-mechanism-that-keeps-untrusted-tokens-out-of-the-decision-path-ae9ad0ebadcc",
      secondaryLink: {
        label: "Also on LinkedIn",
        url: "https://www.linkedin.com/in/yusra-faheem-1b6370333/overlay/1783395776862/single-media-viewer/?profileId=ACoAAFPhjBoBIMlIQF_PoyzwYsL7TON1Fmh3LuQ",
      },
    },
  ],
}

export default content
