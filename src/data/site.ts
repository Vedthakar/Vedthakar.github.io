export const profile = {
  name: "Ved Thakar",
  role: "Builds AI products end to end",
  location: "Toronto, ON",
  email: "ved06.thakar@gmail.com",
  github: "https://github.com/Vedthakar",
  linkedin: "https://www.linkedin.com/in/ved-thakar-00202b247/",
  resume: "/Ved_Thakar_Resume.pdf",
  intro:
    "CS & Economics at the University of Toronto. I've shipped a product that got acquired, helped close a $750K deal, won GenAI Genesis, and had code merged into AWS Cedar and Meta's Lexical.",
};

export type Win = { value: string; label: string; detail: string; href?: string };

export const wins: Win[] = [
  {
    value: "Acquired",
    label: "TripBuddy",
    detail: "Went from a 24-hour hackathon build to an acquisition two weeks after the live demo.",
    href: "#project-tripbuddy",
  },
  {
    value: "$750K",
    label: "Deal closed at Tavus",
    detail: "Helped close it with a solution architecture and a working demo built in under 5 hours.",
    href: "#journey-tavus",
  },
  {
    value: "Winner",
    label: "GenAI Genesis 2026",
    detail: "Sponsor prize for best use of memory architecture, for Revenant.",
    href: "#project-revenant",
  },
  {
    value: "169",
    label: "Security findings triaged",
    detail: "Ran a six-phase audit on a live iOS health app and closed every critical in code.",
    href: "#journey-sequen",
  },
  {
    value: "3 firms",
    label: "DealFlow OS in production",
    detail: "Built and run solo. 500+ production deployments.",
    href: "#project-dealflow-os",
  },
  {
    value: "Merged",
    label: "AWS Cedar · Meta Lexical",
    detail: "Open-source contributions to policy-language and editor frameworks used in production.",
    href: "#open-source",
  },
];

export type Stop = {
  id: string;
  org: string;
  role: string;
  when: string;
  where: string;
  logo?: string;
  note?: string;
  bullets: string[];
};

/** Newest first. The top of the timeline is the "next stop" marker. */
export const journey: Stop[] = [
  {
    id: "tavus",
    org: "Tavus",
    role: "Growth & Solutions Fellow (part-time)",
    when: "2026 – now",
    where: "Remote · San Francisco",
    note: "AI video company backed by YC, Sequoia and CRV",
    bullets: [
      "Helped close a $750K deal. On my first trip to San Francisco I sat with the prospect, mapped what they were trying to do onto how the product would actually be applied, and designed the solution architecture.",
      "Built a working client demo in under 5 hours, so the conversation moved from slides to something they could use.",
      "Represented Tavus at the Humongous Data Summit (120K+ attendees), sourcing my own opportunities instead of waiting on inbound and adding millions in new pipeline.",
    ],
  },
  {
    id: "sequen",
    org: "SEQUEN",
    role: "Forward Deployed Engineer (contract)",
    when: "Summer 2026",
    where: "Remote",
    note: "Skin-health app on iOS",
    bullets: [
      "Shipped 40+ merged pull requests across the React Native app, Supabase backend and clinic web CRM to get the app through App Store review.",
      "Ran a six-phase security audit that surfaced 169 findings and closed every critical in code across 44 security commits: edge-function hardening, rate limits, RLS and tier-escalation fixes.",
      "Built ARKit TrueDepth face-mesh capture with drift recovery, and made HealthKit sync reliable on iOS 26 with anchored-query fallbacks.",
    ],
  },
  {
    id: "geotab",
    org: "Geotab",
    role: "Backend Software Engineer Intern",
    when: "Jan – Apr 2026",
    where: "Toronto, ON",
    logo: "/logos/geotab.png",
    bullets: [
      "Took an ambiguous delivery-visibility problem with no defined scope, broke it into clear deliverables, then built and ran the pipeline behind the reporting. Delivery visibility improved by 80%.",
      "The team had no fast feedback on regressions, so I added automated test coverage and CI gating. Cycle time dropped by 70%.",
      "Documented the architecture so stakeholders outside engineering could follow how it worked.",
    ],
  },
  {
    id: "savi",
    org: "Savi Finance",
    role: "Junior Solutions Architect (Intern)",
    when: "May 2025 – Mar 2026",
    where: "Toronto, ON",
    bullets: [
      "Found a manual process eating developer hours that nobody owned and shipped an event-driven AWS Lambda + SQS service for it. Turnaround time dropped by 80%.",
      "Built the AI ticket-to-PR automation MVP that became the foundation for an internal tool on AWS.",
      "Penetration-tested the frontend, backend and GraphQL APIs and wrote the audit report used for SOC 2 and GDPR readiness.",
    ],
  },
  {
    id: "ascenix",
    org: "Ascenix",
    role: "Early Software Engineer",
    when: "May – Sep 2025",
    where: "Remote",
    note: "Joined before Y Combinator (F26), when it was still Fallyx",
    bullets: [
      "One of the earliest engineers, joining well before the company was accepted into Y Combinator.",
      "Took customer-facing React and TypeScript features from ambiguous ticket to released product, with nobody checking in hourly.",
      "Tested every feature against the API contract before handoff, so shipped work did not come back to the team.",
    ],
  },
  {
    id: "uoft",
    org: "University of Toronto",
    role: "BSc Computer Science & Economics",
    when: "Sep 2024 – 2028",
    where: "Toronto, ON",
    bullets: [
      "Coursework: Machine Learning (CSC311), Numerical Methods (CSC336), Data Structures in C, Microeconomics, Linear Algebra, Formal Logic.",
      "Google Cloud certification: Terraform for Google Cloud, Infrastructure as Code (2026).",
      "Most weekends were spent at hackathons, which is where most of the projects on this page started.",
    ],
  },
];

export type OpenSource = {
  repo: string;
  name: string;
  owner: string;
  blurb: string;
  merged: number;
  open: number;
  prs: { title: string; url: string; status: "merged" | "open" | "closed" }[];
};

export const openSource: OpenSource[] = [
  {
    repo: "cedar-policy/cedar",
    name: "Cedar",
    owner: "cedar-policy",
    blurb: "AWS's open-source authorization policy language, written in Rust.",
    merged: 2,
    open: 0,
    prs: [
      { title: "Add help text for function argument validation errors", url: "https://github.com/cedar-policy/cedar/pull/2291", status: "merged" },
      { title: "Add JSON integer boundary tests (i64/u64 edges)", url: "https://github.com/cedar-policy/cedar/pull/2292", status: "merged" },
      { title: "Decode Z3 models containing sets in SymCC", url: "https://github.com/cedar-policy/cedar/pull/2422", status: "closed" },
    ],
  },
  {
    repo: "facebook/lexical",
    name: "Lexical",
    owner: "facebook",
    blurb: "Meta's extensible text-editor framework.",
    merged: 1,
    open: 0,
    prs: [
      { title: "Clarify how Yjs syncs custom node properties in collaboration", url: "https://github.com/facebook/lexical/pull/8288", status: "merged" },
      { title: "Accept SerializedEditorState in LexicalComposer", url: "https://github.com/facebook/lexical/pull/8285", status: "closed" },
    ],
  },
  {
    repo: "google/osv.dev",
    name: "OSV.dev",
    owner: "google",
    blurb: "Google's open-source vulnerability database.",
    merged: 0,
    open: 1,
    prs: [
      { title: "Infer introduced and fixed versions from GitHub compare URLs", url: "https://github.com/google/osv.dev/pull/5214", status: "open" },
      { title: "Mark rejected CVEs as withdrawn", url: "https://github.com/google/osv.dev/pull/5188", status: "closed" },
      { title: "Clarify API 404s when querying alias CVE IDs", url: "https://github.com/google/osv.dev/pull/5208", status: "closed" },
    ],
  },
  {
    repo: "facebook/docusaurus",
    name: "Docusaurus",
    owner: "facebook",
    blurb: "Meta's static-site generator for documentation.",
    merged: 0,
    open: 1,
    prs: [
      { title: "Resolve slug conflict when index/README and dirname file coexist", url: "https://github.com/facebook/docusaurus/pull/11910", status: "open" },
    ],
  },
  {
    repo: "siddu-k/bashmanager",
    name: "bashmanager",
    owner: "siddu-k",
    blurb: "Desktop manager for shell scripts (Electron + Flask).",
    merged: 2,
    open: 0,
    prs: [
      { title: "Stop caching raw unlock passwords in frontend state", url: "https://github.com/siddu-k/bashmanager/pull/80", status: "merged" },
      { title: "Dynamic port allocation and startup error handling", url: "https://github.com/siddu-k/bashmanager/pull/82", status: "merged" },
    ],
  },
  {
    repo: "lovelymahor/StudyMatePlus",
    name: "StudyMatePlus",
    owner: "lovelymahor",
    blurb: "Open study-resource platform for university students.",
    merged: 0,
    open: 1,
    prs: [
      { title: "Fix stuck loading state on syllabus preview after filtering", url: "https://github.com/lovelymahor/StudyMatePlus/pull/603", status: "open" },
    ],
  },
];

export type Volunteer = { event: string; role: "Judge" | "Mentor"; year: string; logo?: string; detail: string };

export const volunteering: Volunteer[] = [
  { event: "MacHacks", role: "Judge", year: "2026", detail: "Judged submissions against a shared rubric under a tight window." },
  { event: "Hack the Move · UWAFT", role: "Judge", year: "2026", logo: "/logos/uwaft.png", detail: "Scored projects on technical merit and user impact, and gave feedback to finalists." },
  { event: "Hack Canada", role: "Mentor", year: "2025", detail: "Helped teams with implementation, product design and demo prep." },
  { event: "DeerHacks", role: "Mentor", year: "2025", detail: "Advised first-time builders on architecture and getting an MVP to demo." },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI & LLMs", items: ["RAG", "pgvector", "Agents & MCP", "Evaluation harnesses", "SageMaker", "Gemini / Groq"] },
  { group: "Backend & Infra", items: ["Python", "Go", "FastAPI", "Django", "PostgreSQL", "AWS Lambda / SQS", "Terraform", "Linux"] },
  { group: "Product & Frontend", items: ["TypeScript", "React", "Next.js", "Flutter", "SwiftUI", "Tailwind"] },
  { group: "Data", items: ["SQL", "BigQuery", "ETL pipelines", "pandas", "scikit-learn", "Dashboards"] },
];
