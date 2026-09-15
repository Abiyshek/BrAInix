import {
  Globe, Server, Palette, Terminal, Rocket, ShieldCheck, Gauge, Headset,
  Boxes, Sparkles, Bot, Code2, Cloud, Cpu, Network, Database, TrendingUp,
  Brain, FlaskConical, BarChart3, Award, Users, MessagesSquare, PenTool,
  Layers, GitBranch, Zap, GraduationCap, Briefcase,
} from 'lucide-react';

/* ------------------------------------------------------------------
   Brand-level facts (shared by both modes)
   ------------------------------------------------------------------ */
export const BRAND = {
  name: 'BrAInix',
  tagline: 'One studio. Two worlds.',
  founder: 'S ABIYSHEK',
  founderRole: 'Founder & CEO, BrAInix',
  phone: '+91 63747 24269',
  phoneHref: 'tel:+916374724269',
  email: 'hashedtechs@gmail.com',
  address: '42, 5th Cross, Maraimalai Nagar, Velrampet, Puducherry — 605004',
  mapHref:
    'https://maps.google.com/?q=42,+5th+cross,+maraimalai+nagar,+velrampet,+Puducherry-605004',
  formHref: 'https://forms.gle/7p2BKU7n1imjDusJA',
};

export const MODES = ['services', 'edu'];

/* ------------------------------------------------------------------
   MODE 1 (default) — BrAInix Web Services
   ------------------------------------------------------------------ */
const services = {
  id: 'services',
  label: 'Web Services',
  short: 'Studio',
  icon: Briefcase,
  nav: [
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#work', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#studio', label: 'Studio' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Design · Build · Deploy',
    titleTop: 'Websites that feel',
    titleAccent: 'engineered',
    titleBottom: 'not templated.',
    lede:
      'BrAInix is a product studio building custom websites, platforms and APIs — glass-crisp interfaces on top of architecture that holds up in production. From first wireframe to zero-downtime launch.',
    primary: { label: 'Start a project', action: 'modal' },
    secondary: { label: 'See what we build', href: '#work' },
    badges: [
      { icon: Rocket, text: 'Ship in 2–6 weeks' },
      { icon: ShieldCheck, text: 'Secure by default' },
      { icon: Gauge, text: '95+ Lighthouse target' },
    ],
    chips: [
      { icon: Layers, title: 'Figma → Code', sub: 'pixel-faithful' },
      { icon: GitBranch, title: 'CI/CD', sub: 'auto-deploy on push' },
      { icon: Gauge, title: '0.9s', sub: 'median load' },
    ],
  },
  marquee: [
    { icon: Code2, label: 'React' },
    { icon: Boxes, label: 'Next.js' },
    { icon: Server, label: 'Node' },
    { icon: Database, label: 'PostgreSQL' },
    { icon: Cloud, label: 'AWS' },
    { icon: Boxes, label: 'Docker' },
    { icon: Sparkles, label: 'Three.js' },
    { icon: PenTool, label: 'Figma' },
    { icon: Network, label: 'GraphQL' },
    { icon: Bot, label: 'OpenAI API' },
  ],
  features: {
    eyebrow: 'Capabilities',
    title: 'Everything under one roof',
    lede:
      'No handoffs between agencies. Design, engineering, infrastructure and aftercare come from the same small team that answers your messages.',
    items: [
      { icon: Sparkles, title: 'Premium Visual Design', text: 'Glassmorphism, considered gradients, motion with intent and typography that carries a brand rather than decorating it.' },
      { icon: Terminal, title: 'State-of-the-Art Code', text: 'Modular React / Next.js / Node architectures. Readable, typed, and structured so your next developer thanks you.' },
      { icon: ShieldCheck, title: 'Enterprise Security', text: 'Hardened headers, encrypted data at rest, scoped secrets and dependency auditing on every build.' },
      { icon: Gauge, title: 'Performance Tuning', text: 'Core Web Vitals budgets, lazy media, edge caching and bundle discipline — speed as a feature, not an afterthought.' },
      { icon: Headset, title: 'Direct Line Support', text: 'You talk to the architects who wrote the code. Weekly demos, transparent timelines, no account-manager telephone game.' },
      { icon: Boxes, title: 'Clean Handoff', text: 'Documentation, repo access, host delegation and a runbook — you own everything the day we launch.' },
    ],
  },
  offers: {
    eyebrow: 'Services',
    title: 'Pick where you need us',
    lede: 'Engagements scoped to your stage — a landing page that converts, a full platform, or the infrastructure underneath it.',
    items: [
      {
        icon: Globe,
        badge: 'Core Service',
        tags: ['Web Development', 'React & Next.js'],
        name: 'Custom Web Development',
        desc: 'Bespoke marketing sites, SaaS dashboards and web portals — responsive to the pixel, fast on a mid-range phone, built to grow.',
        price: 'Custom Quote',
        meta: 'Figma design · Clean code · SEO ready',
      },
      {
        icon: Server,
        badge: 'DevOps & Cloud',
        tags: ['Deployment', 'AWS / GCP / Vercel'],
        name: 'Production Deployment',
        desc: 'Multi-environment cloud architecture with CI/CD pipelines, SSL, container images, log aggregation and health monitoring.',
        price: 'Custom Quote',
        meta: 'Zero downtime · Dockerized · Monitored',
      },
      {
        icon: Palette,
        badge: 'Brand Identity',
        tags: ['Logo & UI Design', 'Vector Systems'],
        name: 'Logo & Creative Identity',
        desc: 'Vector brandmarks, colour and type systems, stationery and layout rules — a cohesive identity with the source files to match.',
        price: 'Custom Quote',
        meta: '3 drafts · Brand manual · Source files',
      },
      {
        icon: Terminal,
        badge: 'Custom APIs',
        tags: ['Backend Systems', 'Automation'],
        name: 'Custom Web & API Solutions',
        desc: 'REST and GraphQL services, schema design, scraping pipelines, scheduled jobs and third-party integrations that stay up.',
        price: 'Custom Quote',
        meta: 'REST/GraphQL · Hardened · Postgres/Mongo',
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'How a project runs',
    lede: 'Four stages, visible progress at each one. You always know what is being built and what comes next.',
    items: [
      { icon: MessagesSquare, title: 'Scope & Consultation', text: 'A call to align on aesthetics, features, timeline and budget — followed by a written scope you approve before anything is built.' },
      { icon: Palette, title: 'Interactive Mockups', text: 'High-fidelity Figma screens or a coded prototype. We iterate on colour, layout and motion until it feels right.' },
      { icon: Terminal, title: 'Agile Production', text: 'Two-week build cycles with a live staging URL from day one, so you watch the product assemble in real time.' },
      { icon: Rocket, title: 'Zero-Downtime Launch', text: 'DNS, SSL, database migration and monitoring configured, then a clean cutover — plus 30 days of post-launch support.' },
    ],
  },
  stats: [
    { num: '100%', label: 'Satisfaction Rate' },
    { num: '10+', label: 'Projects Delivered' },
    { num: '4.9★', label: 'Client Rating' },
    { num: '24/7', label: 'Architect Support' },
  ],
  // NOTE: placeholder testimonials — swap for real, attributable client quotes
  // before this goes live.
  testimonials: {
    eyebrow: 'Client Words',
    title: 'What partners say',
    items: [
      { av: 'RK', quote: 'They rebuilt our storefront in five weeks and it loads faster than anything our old agency shipped in a year. The handoff docs alone were worth it.', name: 'Rahul K.', role: 'Founder, D2C Retail' },
      { av: 'PN', quote: 'What sold me was the staging link on day two. I could see the thing being built instead of waiting for a big reveal at the end.', name: 'Priya N.', role: 'Product Lead, Fintech' },
      { av: 'SM', quote: 'Our API integration had been stuck for months. BrAInix scoped it on Monday and had it in production the following week.', name: 'Suresh M.', role: 'CTO, Logistics SaaS' },
    ],
  },
  cta: {
    title: 'Have something in mind? Let us scope it.',
    lede: 'Send over a rough idea — even a paragraph. You will get a realistic timeline, a fixed quote and an honest answer about whether we are the right fit.',
    primary: 'Start a project',
    secondary: 'Talk to us',
  },
};

/* ------------------------------------------------------------------
   MODE 2 — BrAInix Edu
   ------------------------------------------------------------------ */
const edu = {
  id: 'edu',
  label: 'Edu Tech',
  short: 'Academy',
  icon: GraduationCap,
  nav: [
    { href: '#capabilities', label: 'Platform' },
    { href: '#work', label: 'Courses' },
    { href: '#process', label: 'How it works' },
    { href: '#studio', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Adaptive AI Learning',
    titleTop: 'Learn the way',
    titleAccent: 'your brain',
    titleBottom: 'actually works.',
    lede:
      'BrAInix Edu maps what you know in real time and serves the next thing you need — with live mentors, hands-on labs and verifiable certificates at the end of it.',
    primary: { label: 'Enroll now', action: 'modal' },
    secondary: { label: 'Browse courses', href: '#work' },
    badges: [
      { icon: Award, text: 'Verified certificates' },
      { icon: Users, text: 'Live mentor sessions' },
      { icon: Zap, text: 'Project-first syllabus' },
    ],
    chips: [
      { icon: Brain, title: 'Adaptive path', sub: 'rebuilt weekly' },
      { icon: FlaskConical, title: '3D labs', sub: 'learn by doing' },
      { icon: Award, title: '95%', sub: 'completion rate' },
    ],
  },
  marquee: [
    { icon: Bot, label: 'AI / ML' },
    { icon: Code2, label: 'Python' },
    { icon: Cloud, label: 'FullStack' },
    { icon: Cpu, label: 'Core Java' },
    { icon: Network, label: 'MERN' },
    { icon: TrendingUp, label: 'IoT' },
    { icon: Database, label: 'DSA' },
    { icon: Brain, label: 'Neural Nets' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Award, label: 'Certification' },
  ],
  features: {
    eyebrow: 'The Platform',
    title: 'Built around how people learn',
    lede:
      'Video libraries are not a curriculum. Every part of BrAInix Edu exists to get you from confused to capable in the fewest possible hours.',
    items: [
      { icon: Brain, title: 'Adaptive AI Curriculum', text: 'The engine maps your knowledge graph as you work and surfaces exactly the next concept — no wasted revision, no gaps left open.' },
      { icon: Zap, title: 'Live Mentor Sessions', text: 'One-on-one and cohort sessions with working practitioners. Real code review, real feedback, real breakthroughs.' },
      { icon: FlaskConical, title: 'Immersive 3D Labs', text: 'Interactive sandboxes for data science, systems and hardware — run experiments and watch the result instead of reading about it.' },
      { icon: BarChart3, title: 'Progress Intelligence', text: 'Learning velocity, retention and mastery per topic, visualised weekly so you know precisely where to spend the next hour.' },
      { icon: Award, title: 'Verified Credentials', text: 'Tamper-proof certificates with a public verification link your recruiter can check in one click.' },
      { icon: Users, title: 'Peer Learning Network', text: 'Cohort channels, pair-programming rooms and group projects — the accountability that makes people actually finish.' },
    ],
  },
  offers: {
    eyebrow: 'Courses',
    title: 'Seven tracks, one flat price',
    lede: 'Every track is project-led, mentor-backed and priced so that cost is never the reason you stopped learning.',
    items: [
      { icon: Bot, badge: 'Most Popular', tags: ['AI & ML', 'Beginner'], name: 'AI/ML Fundamentals', desc: 'Machine learning algorithms, neural networks and the mathematics under them — built up from zero.', price: '₹999', was: '₹2500', meta: '40 hrs · 15 projects' },
      { icon: Code2, badge: 'Trending', tags: ['Python', 'Beginner'], name: 'Python Essentials', desc: 'Language fundamentals, data structures, idiomatic style and the tooling professionals actually use.', price: '₹999', was: '₹2500', meta: '35 hrs · 12 projects' },
      { icon: Cloud, badge: 'New', tags: ['FullStack', 'Intermediate'], name: 'Python FullStack Web Dev', desc: 'Complete applications end to end — Django/Flask services, databases, frontends and deployment.', price: '₹999', was: '₹2500', meta: '56 hrs · 20 projects' },
      { icon: Cpu, badge: 'Popular', tags: ['Java', 'Intermediate'], name: 'Core Java Programming', desc: 'OOP done properly, collections, concurrency and the enterprise patterns interviewers ask about.', price: '₹999', was: '₹2500', meta: '48 hrs · 18 projects' },
      { icon: Network, badge: 'Trending', tags: ['MERN', 'Advanced'], name: 'MERN Stack Development', desc: 'MongoDB, Express, React and Node — authentication, state, testing and scalable project structure.', price: '₹999', was: '₹2500', meta: '60 hrs · 25 projects' },
      { icon: TrendingUp, badge: 'New', tags: ['IoT', 'Advanced'], name: 'IoT & Embedded Systems', desc: 'Connected devices, sensor pipelines, MQTT and real-time data processing on constrained hardware.', price: '₹999', was: '₹2500', meta: '50 hrs · 16 projects' },
      { icon: Database, badge: 'Essential', tags: ['DSA', 'Intermediate'], name: 'Data Structures & Algorithms', desc: 'Complexity, core structures and the pattern library that turns interview problems into routine work.', price: '₹999', was: '₹2500', meta: '45 hrs · 20 projects' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'From assessment to offer letter',
    lede: 'A structured path with checkpoints, so progress is something you can see rather than something you hope for.',
    items: [
      { icon: Brain, title: 'Discover Your Path', text: 'A five-minute skill assessment. The AI turns it into a personalised roadmap aimed at the role you actually want.' },
      { icon: FlaskConical, title: 'Learn Through Doing', text: 'Interactive labs, graded projects and live mentor feedback — not a playlist of videos and a multiple-choice quiz.' },
      { icon: BarChart3, title: 'Track & Adapt', text: 'Weekly progress reports rebuild your roadmap around what stuck and what did not, keeping the difficulty honest.' },
      { icon: Award, title: 'Earn & Launch', text: 'Graduate with a verified certificate, a portfolio of shipped projects and introductions to our hiring network.' },
    ],
  },
  stats: [
    { num: '52', label: 'Active Learners' },
    { num: '95%', label: 'Completion Rate' },
    { num: '7', label: 'Expert Courses' },
    { num: '4.9★', label: 'Average Rating' },
  ],
  // NOTE: placeholder testimonials carried over from the previous site — replace
  // with real learner quotes before launch.
  testimonials: {
    eyebrow: 'Learner Words',
    title: 'What students say',
    items: [
      { av: 'AK', quote: 'The adaptive system felt like a tutor that understood how my brain works. I landed an ML role four months after starting.', name: 'Aisha Khan', role: 'ML Engineer' },
      { av: 'MR', quote: 'I had tried every other platform and quit every time. This was the first one where the mentor sessions kept me going.', name: 'Marcus Rivera', role: 'Cloud Architect' },
      { av: 'SL', quote: 'The 3D labs made abstract concepts click instantly. Running the experiment beats reading about it every single time.', name: 'Sophie Liu', role: 'Data Scientist' },
    ],
  },
  cta: {
    title: 'Your next skill is one assessment away.',
    lede: 'Take the five-minute placement, get a roadmap built for your goal, and start the first project the same day.',
    primary: 'Enroll now',
    secondary: 'Ask a question',
  },
};

export const CONTENT = { services, edu };

/* Shared "studio / about" section content, phrased per mode */
export const ABOUT = {
  services: [
    {
      key: 'mission',
      eyebrow: 'Our Mission',
      title: 'Software that earns its place',
      text: 'We build a small number of projects properly rather than a large number quickly. Every engagement gets senior attention, honest timelines and code we would be happy to inherit.',
      points: ['Senior-only delivery team', 'Fixed, transparent quotes', 'You own the repository from day one'],
    },
    {
      key: 'vision',
      eyebrow: 'Our Vision',
      title: 'A studio you keep calling back',
      text: 'The goal is not a single launch. It is being the team you message two years later for the next feature — because the foundation we left behind is still holding.',
      points: ['Maintainable architecture', 'Documentation written for humans', 'Long-term support plans'],
    },
    {
      key: 'why',
      eyebrow: 'Why BrAInix',
      title: 'Design sense plus engineering depth',
      text: 'Most teams do one well. We run interface craft and production infrastructure in the same room, which is why the pretty version and the fast version are the same version.',
      points: ['Motion and 3D done natively', 'Security reviewed before launch', 'Performance budgets enforced in CI'],
    },
  ],
  edu: [
    {
      key: 'mission',
      eyebrow: 'Our Mission',
      title: 'Make good teaching affordable',
      text: 'World-class instruction should not cost a semester of salary. Every BrAInix track is priced at ₹999 and carries the same mentor access, labs and certification.',
      points: ['One flat price across all tracks', 'Lifetime access to course material', 'No prerequisites for entry tracks'],
    },
    {
      key: 'vision',
      eyebrow: 'Our Vision',
      title: 'Learning that adapts to you',
      text: 'A curriculum should rearrange itself around the learner, not the other way around. Our engine rebuilds your path every week from what you actually demonstrated.',
      points: ['Real-time knowledge mapping', 'Difficulty tuned to your pace', 'Weekly personalised reports'],
    },
    {
      key: 'why',
      eyebrow: 'Why Learners Stay',
      title: 'Finishing is the hard part',
      text: 'Most platforms are measured by signups. We are measured by the 95% who finish — which is what mentors, cohorts and project deadlines are really for.',
      points: ['Live human mentors, not bots', 'Cohort accountability', 'Portfolio-ready final projects'],
    },
  ],
};

export const FOOTER_LINKS = {
  services: [
    { h: 'Services', items: ['Web Development', 'Deployment & Cloud', 'Logo & Identity', 'Custom APIs'] },
    { h: 'Studio', items: ['Process', 'Capabilities', 'Contact'] },
  ],
  edu: [
    { h: 'Courses', items: ['AI/ML Fundamentals', 'Python Essentials', 'MERN Stack', 'DSA'] },
    { h: 'Academy', items: ['How it works', 'Platform', 'Contact'] },
  ],
};
