import type {
  ServiceDef, CaseStudy, TeamMember, BlogPost,
  JobRole, Milestone, Stat, Testimonial, Perk, ProcessStep
} from './types'

// ─── Site-wide SEO defaults ────────────────────────────────────────────────
export const SITE_URL      = 'https://xdevs.io'
export const SITE_NAME     = 'XDEVS'
export const SITE_TAGLINE  = 'Elite Engineering for Ambitious Companies'
export const SITE_DESC     = 'XDEVS delivers world-class software engineering, data engineering, AI/ML integration, cloud & DevOps, business intelligence, and API integration services. 120+ products shipped globally.'
export const TWITTER_HANDLE = '@xdevsio'
export const OG_IMAGE       = `${SITE_URL}/og-default.png`

// ─── Nav ───────────────────────────────────────────────────────────────────
export const SERVICES_NAV = [
  { href: '/services/software-engineering',  label: 'Software Engineering'  },
  { href: '/services/data-engineering',      label: 'Data Engineering'      },
  { href: '/services/business-intelligence', label: 'Business Intelligence' },
  { href: '/services/ai-ml',                 label: 'AI & ML Integration'   },
  { href: '/services/api-integrations',      label: 'API & Integrations'    },
  { href: '/services/cloud-devops',          label: 'Cloud & DevOps'        },
]

export const COMPANY_NAV = [
  { href: '/about',        label: 'About Us'    },
  { href: '/our-story',    label: 'Our Story'   },
  { href: '/process',      label: 'Our Process' },
  { href: '/case-studies', label: 'Case Studies'},
  { href: '/careers',      label: 'Careers'     },
  { href: '/blog',         label: 'Blog'        },
]

// ─── Services ──────────────────────────────────────────────────────────────
export const SERVICE_DEFS: ServiceDef[] = [
  {
    slug: 'software-engineering',
    label: 'Software Engineering',
    icon: '⚙',
    tagline: 'Software that stands the test of time.',
    description: 'Full-stack solutions, scalable architectures, and robust software products built for the long run.',
    capabilities: ['Full-Stack Web Applications','Mobile Development (iOS/Android)','Microservices Architecture','Real-Time Systems','Performance Optimization','Legacy Modernization'],
    approach: 'Our engineering teams follow battle-tested methodologies: domain-driven design, clean architecture, and continuous delivery. Every line of code is written with longevity in mind.',
    tech: ['React','Node.js','Python','Go','Rust','PostgreSQL','Redis','Kafka'],
    seoTitle: 'Software Engineering Services | XDEVS',
    seoDesc: 'Expert software engineering services — full-stack apps, microservices, mobile development, and legacy modernization. XDEVS builds software that scales.',
  },
  {
    slug: 'data-engineering',
    label: 'Data Engineering',
    icon: '🔄',
    tagline: 'Turn raw data into your most valuable asset.',
    description: 'Pipelines, warehouses, and data lakes built for reliability, speed, and scale.',
    capabilities: ['Data Pipeline Architecture','ETL/ELT Workflows','Data Lake & Warehouse Design','Stream Processing','Data Quality & Governance','Real-Time Analytics'],
    approach: 'We design data architectures that scale from gigabytes to petabytes without breaking a sweat. Modern data stack tooling, cloud-native by default.',
    tech: ['Apache Spark','dbt','Airflow','Snowflake','BigQuery','Delta Lake','Kafka','Flink'],
    seoTitle: 'Data Engineering Services | XDEVS',
    seoDesc: 'End-to-end data engineering: pipelines, ETL/ELT, data lakes, warehouses, and real-time analytics. XDEVS builds data infrastructure that scales to petabytes.',
  },
  {
    slug: 'business-intelligence',
    label: 'Business Intelligence',
    icon: '📈',
    tagline: 'Crystal-clear decisions from complex data.',
    description: 'Dashboards, analytics, and insights that executives trust and teams actually use.',
    capabilities: ['Executive Dashboards','Self-Service Analytics','KPI Framework Design','Predictive Reporting','Data Storytelling','BI Tool Implementation'],
    approach: "We don't just build dashboards — we architect insight ecosystems. From data modeling to visualization strategy, every BI solution drives measurable outcomes.",
    tech: ['Tableau','Power BI','Looker','Metabase','Superset','dbt','SQL','Python'],
    seoTitle: 'Business Intelligence Services | XDEVS',
    seoDesc: 'Business intelligence solutions: executive dashboards, self-service analytics, KPI frameworks, and BI tool implementation. Turn data into decisions with XDEVS.',
  },
  {
    slug: 'ai-ml',
    label: 'AI & ML Integration',
    icon: '🤖',
    tagline: 'Embed intelligence into your product.',
    description: 'From generative AI to predictive models — we make AI practical, scalable, and production-ready.',
    capabilities: ['Generative AI Integration','Custom LLM Fine-tuning','Computer Vision','NLP & Text Analytics','Recommendation Engines','MLOps & Model Monitoring'],
    approach: 'We bridge the gap between AI research and production reality. Our ML engineers build systems that perform in notebooks and at scale in the real world.',
    tech: ['PyTorch','TensorFlow','OpenAI','LangChain','Hugging Face','MLflow','Vertex AI','SageMaker'],
    seoTitle: 'AI & ML Integration Services | XDEVS',
    seoDesc: 'AI and machine learning integration services: generative AI, LLM fine-tuning, computer vision, NLP, recommendation engines, and MLOps. Production-ready AI with XDEVS.',
  },
  {
    slug: 'api-integrations',
    label: 'API & Integrations',
    icon: '🔌',
    tagline: 'Connect everything, flawlessly.',
    description: 'Seamless connectivity across platforms, services, and ecosystems.',
    capabilities: ['REST & GraphQL APIs','Third-Party Integrations','iPaaS Solutions','Webhook Architecture','Event-Driven Systems','API Security & Rate Limiting'],
    approach: 'Modern businesses run on connected systems. We design API ecosystems that are secure, documented, versioned, and built to outlast vendor changes.',
    tech: ['REST','GraphQL','gRPC','Zapier','MuleSoft','AWS API Gateway','Kong','OAuth2'],
    seoTitle: 'API & Integration Services | XDEVS',
    seoDesc: 'API development and systems integration: REST, GraphQL, third-party integrations, event-driven architecture. XDEVS connects your entire tech stack.',
  },
  {
    slug: 'cloud-devops',
    label: 'Cloud & DevOps',
    icon: '☁',
    tagline: 'Ship faster, sleep better.',
    description: 'AWS, Azure, GCP infrastructure, CI/CD pipelines, and cloud-native solutions.',
    capabilities: ['Cloud Architecture (AWS/Azure/GCP)','Kubernetes & Container Orchestration','CI/CD Pipeline Design','Infrastructure as Code','Security & Compliance','Cost Optimization'],
    approach: 'We treat infrastructure like software — versioned, tested, and deployed automatically. Faster releases, greater reliability, lower operational cost.',
    tech: ['AWS','Terraform','Kubernetes','Docker','GitHub Actions','ArgoCD','Prometheus','Datadog'],
    seoTitle: 'Cloud & DevOps Services | XDEVS',
    seoDesc: 'Cloud architecture and DevOps: AWS/Azure/GCP, Kubernetes, CI/CD, infrastructure as code, and cloud cost optimisation. Ship faster with XDEVS.',
  },
]

// ─── Case Studies ──────────────────────────────────────────────────────────
export const CASE_STUDIES: CaseStudy[] = [
  { tag:'AI & ML',              client:'Global FinTech',          title:'Real-Time Fraud Detection Engine',  description:'Multi-model fraud detection system processing 50,000 transactions/second with sub-10ms latency.', result:'↓ 89% false positives · $12M annual savings', icon:'🔐' },
  { tag:'Data Engineering',     client:'Fortune 500 Retailer',    title:'Enterprise Data Lake Migration',    description:'Migrated 8 petabytes from legacy Hadoop to a modern cloud lakehouse with zero data loss.',         result:'↑ 12x query speed · ↓ 60% infra cost',        icon:'🏗' },
  { tag:'Cloud & DevOps',       client:'SaaS Platform',           title:'Zero-Downtime Global Deployment',  description:'Redesigned CI/CD pipeline enabling 50+ deployments per day across 3 regions.',                    result:'99.99% uptime · 40% faster deploys',           icon:'☁' },
  { tag:'Business Intelligence',client:'Healthcare Network',      title:'Executive Analytics Dashboard',    description:'Real-time BI platform unifying 12 source systems for C-suite decision-making.',                   result:'↑ 40% decision velocity',                      icon:'📊' },
  { tag:'Software Engineering', client:'Digital Health Startup',  title:'Patient Engagement Platform',      description:'HIPAA-compliant mobile platform from zero to production in 5 months.',                           result:'↑ 3x user retention · 100K+ DAU',              icon:'🏥' },
  { tag:'API & Integrations',   client:'E-Commerce Platform',     title:'Marketplace API Ecosystem',        description:'API gateway handling the entire partner ecosystem with 99.9% reliability.',                      result:'200+ integrations · 5B+ API calls/month',     icon:'🔌' },
]

// ─── Team ──────────────────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  { name:'Alex Chen',    initials:'AC', role:'CEO & Co-Founder',    expertise:'Systems Architecture'  },
  { name:'Priya Kapoor', initials:'PK', role:'CTO',                 expertise:'AI & Machine Learning' },
  { name:'Marcus Webb',  initials:'MW', role:'Head of Data',        expertise:'Data Engineering'      },
  { name:'Sofia Reyes',  initials:'SR', role:'Head of DevOps',      expertise:'Cloud Infrastructure'  },
  { name:'Jordan Ellis', initials:'JE', role:'Head of Engineering', expertise:'Full-Stack Systems'    },
  { name:'Aisha Omar',   initials:'AO', role:'Head of BI',          expertise:'Analytics & Insights'  },
]

// ─── Blog ──────────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  { slug:'building-production-llm-apps',    tag:'AI & ML',           title:'Building Production-Ready LLM Applications: Lessons from the Field', date:'Feb 2026', readTime:'8 min',  icon:'🤖', excerpt:'Deploying LLMs in production is fundamentally different from a demo. Here is what we learned.' },
  { slug:'why-your-data-pipeline-fails',    tag:'Data Engineering',  title:'Why Your Data Pipeline is Failing (And How to Fix It)',               date:'Jan 2026', readTime:'6 min',  icon:'🔄', excerpt:'The five most common architectural mistakes we see — and the patterns that fix them.' },
  { slug:'zero-downtime-deployments',       tag:'Cloud & DevOps',    title:'Zero-Downtime Deployments at Scale: A Practical Guide',               date:'Jan 2026', readTime:'10 min', icon:'☁',  excerpt:'Blue-green, canary, feature flags — a real-world breakdown of when to use each.' },
  { slug:'microservices-vs-monolith-2026',  tag:'Architecture',      title:'Microservices vs Monolith in 2026: What Actually Matters',            date:'Dec 2025', readTime:'7 min',  icon:'⚙',  excerpt:'The debate is not about architecture style. It is about team topology and deployment velocity.' },
  { slug:'modern-bi-stack',                 tag:'BI',                title:'The Modern BI Stack: dbt, Snowflake, and Looker in Practice',         date:'Dec 2025', readTime:'5 min',  icon:'📊', excerpt:'How we set up semantic layers that analysts love and executives can actually navigate.' },
  { slug:'engineering-culture-at-xdevs',   tag:'Engineering Culture',title:'How We Run Engineering at XDEVS: Principles That Scale',             date:'Nov 2025', readTime:'4 min',  icon:'🎯', excerpt:'The principles, rituals, and anti-patterns we learned building 120+ products.' },
]

// ─── Careers ───────────────────────────────────────────────────────────────
export const JOB_ROLES: JobRole[] = [
  { title:'Senior Data Engineer',  team:'Data',                 location:'Remote',          type:'Full-time' },
  { title:'ML Engineer',           team:'AI & ML',              location:'Remote / London', type:'Full-time' },
  { title:'Cloud Architect',       team:'DevOps',               location:'Remote',          type:'Full-time' },
  { title:'Full-Stack Engineer',   team:'Software',             location:'Remote / Lagos',  type:'Full-time' },
  { title:'BI Developer',          team:'Business Intelligence',location:'Remote',          type:'Full-time' },
  { title:'API Integration Lead',  team:'API',                  location:'Remote',          type:'Full-time' },
]

// ─── Our Story ─────────────────────────────────────────────────────────────
export const MILESTONES: Milestone[] = [
  { year:'2016', title:'Founded',              description:"Three engineers, a shared vision, and a determination to build differently." },
  { year:'2017', title:'First Product Launch', description:"Shipped our first SaaS platform, validating the team's ability to deliver end-to-end." },
  { year:'2018', title:'Enterprise Client',    description:"Landed our first Fortune 500 engagement — a data platform for a global insurer." },
  { year:'2019', title:'AI Practice Launch',   description:"Built our dedicated AI/ML team, delivering predictive models at scale." },
  { year:'2021', title:'Global Expansion',     description:"Opened engineering hubs across three continents to serve clients 24/7." },
  { year:'2023', title:'100+ Clients',         description:"Crossed the milestone of 100 clients served across 6 continents." },
  { year:'2025', title:'Today',                description:"50+ engineers, 120+ projects, and still growing. The best is yet to come." },
]

// ─── Process ───────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  { n:'01', title:'Discovery',    description:'We start by understanding your business deeply — goals, constraints, users, and competitive landscape. No assumptions, just listening and rigorous analysis.' },
  { n:'02', title:'Architecture', description:'We design scalable systems before writing a single line of code. Clear technical blueprints with explicit trade-offs documented and shared.' },
  { n:'03', title:'Build',        description:'Agile sprints with weekly demos. You see progress constantly. Clean code principles, automated testing, and continuous integration throughout.' },
  { n:'04', title:'Review',       description:'Rigorous code reviews, security audits, performance testing, and accessibility checks. We catch issues before they become your problems.' },
  { n:'05', title:'Deploy',       description:'Zero-downtime deployments via automated pipelines. We monitor every release and can roll back in seconds if anything looks wrong.' },
  { n:'06', title:'Evolve',       description:"We don't disappear after launch. Post-release support, performance monitoring, and iterative improvements keep your product ahead of the curve." },
]

// ─── Homepage ──────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value:120, suffix:'+',    label:'Projects Delivered'  },
  { value:50,  suffix:'+',    label:'Global Clients'      },
  { value:8,   suffix:' yrs', label:'In Business'         },
  { value:99,  suffix:'%',    label:'Client Satisfaction' },
]

export const TESTIMONIALS: Testimonial[] = [
  { quote:'XDEVS delivered a fraud detection system that cut our losses by 90% in the first quarter. Exceptional engineering and true partners.',             author:'CTO',     company:'Global FinTech',         flag:'🇬🇧' },
  { quote:'Their data engineering team migrated our entire lakehouse in 6 weeks with zero data loss. We still cannot believe it happened that fast.',         author:'VP Data', company:'E-Commerce Enterprise',  flag:'🇺🇸' },
  { quote:'The AI integration they built became a competitive advantage overnight. Every deliverable was early, under budget, and over spec.',               author:'CEO',     company:'InsurTech Startup',       flag:'🇩🇪' },
]

export const PERKS: Perk[] = [
  { icon:'🌍', title:'Remote First',    description:'Work from anywhere. We optimise for talent, not geography.'             },
  { icon:'📚', title:'Learning Budget', description:'$2,000/year for courses, conferences, and books.'                       },
  { icon:'⚡', title:'Fast Growth',     description:'Small enough to matter, big enough to scale your career.'              },
  { icon:'🤝', title:'Equity',          description:'We share ownership with the people who build what we sell.'            },
  { icon:'🏖', title:'Flexible PTO',    description:'Unlimited vacation. Take what you need to do your best work.'          },
  { icon:'💻', title:'Top Equipment',   description:'MacBook Pro, 4K monitor, and any tools you need to excel.'             },
]
