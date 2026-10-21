export const profile = {
  name: "Ved Thakar",
  role: "Builds AI products end to end",
  location: "Toronto, ON",
  email: "ved06.thakar@gmail.com",
  github: "https://github.com/Vedthakar",
  linkedin: "https://www.linkedin.com/in/ved-thakar-00202b247",
  resume: "/Ved_Thakar_Resume.pdf",
  intro:
    "CS & Economics at the University of Toronto. I've shipped a product that got acquired, helped close a $750K deal, won three hackathons (GenAI Genesis, the Cursor Hackathon and Hack the Valley 11), and ranked in the top 3% of 47,923 open-source contributors in GSSoC 2026.",
};

export type Stat = { value: string; label: string; detail: string; href?: string };

/** The six headline stats shown as boxes under the hero. */
export const stats: Stat[] = [
  { value: "$750K", label: "Biggest deal closed", detail: "Helped close it at Tavus with a solution architecture and a demo built in under 5 hours.", href: "#journey-tavus" },
  { value: "Acquired", label: "TripBuddy", detail: "From a 24-hour hackathon build to an acquisition two weeks after the live demo.", href: "#project-tripbuddy" },
  { value: "3×", label: "Hackathon winner", detail: "GenAI Genesis, the Cursor Hackathon, and Hack the Valley 11 (1st in Cities, 3rd overall).", href: "#project-estate-o-bot" },
  { value: "Top 3%", label: "GSSoC 2026, worldwide", detail: "Ranked 1,396 of 47,923 open-source contributors, and mentored in the program.", href: "#open-source" },
  { value: "905", label: "GitHub contributions in the last year", detail: "Including 24 pull requests to AWS Cedar and Meta's Lexical, and 29 across open source.", href: "https://github.com/Vedthakar" },
  { value: "5", label: "Industry roles", detail: "Tavus, SEQUEN, Geotab, Savi Finance and Ascenix (YC F26), before third year.", href: "#journey" },
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
    logo: "/logos/tavus.svg",
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
    logo: "/logos/sequen.svg",
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
    logo: "/logos/savi.png",
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
    org: "Ascenix (YC F26)",
    logo: "/logos/ascenix.png",
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
  prs: { title: string; url: string; status: "merged" | "open" | "closed" }[];
};

export const openSource: OpenSource[] = [
  {
    repo: "cedar-policy/cedar · cedar-go · cedar-examples",
    name: "Cedar",
    owner: "cedar-policy",
    blurb: "AWS's open-source authorization policy language: the Rust engine, the Go port and the reference examples.",
    prs: [
      { title: "Make entity validation errors deterministic", url: "https://github.com/cedar-policy/cedar/pull/2603", status: "merged" },
      { title: "Add help text for function argument validation errors", url: "https://github.com/cedar-policy/cedar/pull/2291", status: "merged" },
      { title: "Add JSON integer boundary tests (i64/u64 edges)", url: "https://github.com/cedar-policy/cedar/pull/2292", status: "merged" },
      { title: "Move ValidationResult's Display, Error and Diagnostic impls into core", url: "https://github.com/cedar-policy/cedar/pull/2641", status: "open" },
      { title: "Keep method names attached to their argument lists in the formatter", url: "https://github.com/cedar-policy/cedar/pull/2640", status: "open" },
      { title: "Recover from scope variable parse errors at the next , or )", url: "https://github.com/cedar-policy/cedar/pull/2639", status: "open" },
      { title: "Print only policy and template ids in Debug for PolicySet", url: "https://github.com/cedar-policy/cedar/pull/2638", status: "open" },
      { title: "Look up action in [...] in the schema instead of scanning descendants", url: "https://github.com/cedar-policy/cedar/pull/2637", status: "open" },
      { title: "Hash only the span of a Loc", url: "https://github.com/cedar-policy/cedar/pull/2636", status: "open" },
      { title: "Only build the invalid ancestor error for the smallest ancestor", url: "https://github.com/cedar-policy/cedar/pull/2635", status: "open" },
      { title: "Return None from to_cedar for JSON policies with no Cedar syntax", url: "https://github.com/cedar-policy/cedar/pull/2602", status: "open" },
      { title: "Cedar Go: Reject records whose shared attributes differ in optionality, matching Rust", url: "https://github.com/cedar-policy/cedar-go/pull/189", status: "open" },
      { title: "Cedar Go: Reject undeclared enum entity IDs, matching Rust", url: "https://github.com/cedar-policy/cedar-go/pull/188", status: "open" },
      { title: "Examples: Reformat example policies for the new Cedar formatter rules", url: "https://github.com/cedar-policy/cedar-examples/pull/283", status: "open" },
    ],
  },
  {
    repo: "facebook/lexical",
    name: "Lexical",
    owner: "facebook",
    blurb: "Meta's extensible text-editor framework.",
    prs: [
      { title: "Keep commit listeners in order when editor.read() runs during dispatch", url: "https://github.com/facebook/lexical/pull/9335", status: "merged" },
      { title: "Clarify how Yjs syncs custom node properties in collaboration", url: "https://github.com/facebook/lexical/pull/8288", status: "merged" },
      { title: "Dragging a selection onto a check box no longer checks the item", url: "https://github.com/facebook/lexical/pull/9429", status: "open" },
      { title: "Shortcuts in a decorator's input act on the input", url: "https://github.com/facebook/lexical/pull/9428", status: "open" },
      { title: "Commenting on part of a link no longer marks the whole link", url: "https://github.com/facebook/lexical/pull/9427", status: "open" },
      { title: "Enforce TabIndentationExtension maxIndent on all content, including pastes", url: "https://github.com/facebook/lexical/pull/9426", status: "open" },
      { title: "Registering a transform no longer moves focus into an unfocused editor", url: "https://github.com/facebook/lexical/pull/9425", status: "open" },
      { title: "$toggleLink does nothing for a collapsed selection outside a link", url: "https://github.com/facebook/lexical/pull/9424", status: "open" },
      { title: "Keep the part of a paste that fits when it exceeds the max length", url: "https://github.com/facebook/lexical/pull/9423", status: "open" },
      { title: "Select a horizontal rule when clicking the empty space around it", url: "https://github.com/facebook/lexical/pull/9422", status: "open" },
    ],
  },
  {
    repo: "google/osv.dev",
    name: "OSV.dev",
    owner: "google",
    blurb: "Google's open-source vulnerability database.",
    prs: [
      { title: "Infer introduced and fixed versions from GitHub compare URLs", url: "https://github.com/google/osv.dev/pull/5214", status: "open" },
    ],
  },
  {
    repo: "facebook/docusaurus",
    name: "Docusaurus",
    owner: "facebook",
    blurb: "Meta's static-site generator for documentation.",
    prs: [
      { title: "Resolve slug conflict when index/README and dirname file coexist", url: "https://github.com/facebook/docusaurus/pull/11910", status: "open" },
    ],
  },
  {
    repo: "siddu-k/bashmanager",
    name: "bashmanager",
    owner: "siddu-k",
    blurb: "Desktop manager for shell scripts (Electron + Flask).",
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
    prs: [
      { title: "Fix stuck loading state on syllabus preview after filtering", url: "https://github.com/lovelymahor/StudyMatePlus/pull/603", status: "open" },
    ],
  },
];

export const gssoc = {
  program: "GirlScript Summer of Code 2026",
  rank: "1,396",
  of: "47,923",
  badge: "/logos/gssoc.png",
  detail:
    "Ranked 1,396 of 47,923 contributors worldwide (top 3%) for merged open-source work across the program, and selected as a GSSoC 2026 mentor.",
};

export type Volunteer = {
  event: string;
  role: "Judge" | "Mentor" | "Club";
  title: string;
  year: string;
  logo?: string;
  detail: string;
};

export const volunteering: Volunteer[] = [
  { event: "MacHacks", role: "Judge", title: "Judge", year: "2026", logo: "/logos/machacks.png", detail: "Judged submissions at McMaster's AI hackathon against a shared rubric under a tight window." },
  { event: "Hack the Move · UWAFT", role: "Judge", title: "Judge", year: "2026", logo: "/logos/uwaft.png", detail: "Scored projects on technical merit and user impact, and gave feedback to finalists." },
  { event: "GSSoC 2026", role: "Mentor", title: "Mentor", year: "2026", logo: "/logos/gssoc.png", detail: "Mentored contributors in GirlScript Summer of Code, one of the largest open-source programs in the world." },
  { event: "Hack Canada", role: "Mentor", title: "Mentor", year: "2025", logo: "/logos/hackcanada.svg", detail: "Helped teams with implementation, product design and demo prep." },
  { event: "DeerHacks", role: "Mentor", title: "Mentor", year: "2025", logo: "/logos/deerhacks.png", detail: "Advised first-time builders on architecture and getting an MVP to demo." },
  { event: "Rotaract Club", role: "Club", title: "VP of Externals", year: "Now", logo: "/logos/rotaract.png", detail: "On the executive team, leading external relations." },
  { event: "Boxing Club", role: "Club", title: "Member", year: "Now", detail: "Training with the university boxing club." },
  { event: "MMA Club", role: "Club", title: "Member", year: "Now", detail: "Training with the university MMA club." },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI & LLMs", items: ["RAG", "pgvector", "Agents & MCP", "Evaluation harnesses", "SageMaker", "Gemini / Groq"] },
  { group: "Backend & Infra", items: ["Python", "Go", "FastAPI", "Django", "PostgreSQL", "AWS Lambda / SQS", "Terraform", "Linux"] },
  { group: "Product & Frontend", items: ["TypeScript", "React", "Next.js", "Flutter", "SwiftUI", "Tailwind"] },
  { group: "Data", items: ["SQL", "BigQuery", "ETL pipelines", "pandas", "scikit-learn", "Dashboards"] },
];
