export const projects = [
  {
    id: "cisco",
    name: "cisco",
    image: "/images/cisco.png",
    gif: "/images/cisco.gif",
    tag: "data intern",
    timeline: "jun - sep 2025",
    role: "data engineer intern",
    org: "business & ops",
    team: "cisco",
    goal: "streamline workforce planning and internal reporting",
    description: "built scalable dashboards and tables to identify workforce trends and inform KPI-driven headcount planning. trained an internal AI tool to auto-generate executive slides, reducing reporting time by 35%. automated email generation improving operational efficiency by 30%.",
    caseStudy: `unlike most intern projects, my time at cisco was made up of several distinct projects — each one solving a real inefficiency for the business & operations team. what made this experience unique was that my manager, knowing my interest in product management, had me lead my own requirements-gathering process for every project i built.

project 1 — headcount data pipeline
the team had months of headcount data sitting in separate, inconsistent spreadsheets. i cleaned, merged, and joined every month of data using r and Excel, then built dashboards in tableau and power bi to surface workforce trends and inform KPI-driven headcount planning.

project 2 — email automation system
this was my favorite project. the team was manually sending out recurring emails, which was tedious and error-prone. i built an end-to-end automation using sharepoint lists and power automate — connecting a form to a master list, filtering the relevant fields, and triggering an email with a single button click. i spent a lot of time perfecting every edge case until it felt completely seamless.

project 3 — executive summary chatbot
i trained cisco's internal chatbot to pull from weekly meeting notes and auto-generate a formatted summary slide for exec presentations each week. this was my first introduction to prompt engineering — i even took a datacamp course mid-internship to do it properly.

bonus — RAG model collaboration
a senior employee i'd asked for power automate training was so impressed by how quickly i picked things up that he pulled me onto his own project — an automated weekly work summary using a RAG model. he formally recognized me on cisco's internal platform and gave me a monetary reward.`,
    takeaway: "the biggest skill i didn't expect to gain was learning how to ask the right questions. my manager introduced me to requirements-gathering as a PM skill. i sat with stakeholders for hours to uncover what they actually needed, not just what they said they wanted. i realized people rarely know how to articulate their needs, and learning to draw that out was more valuable than any technical skill i built.",
    skills: {
      technical: ["R", "Excel", "Tableau", "Power BI", "Power Automate", "SharePoint", "prompt engineering", "RAG models", "data pipelines", "product management"],
      behavioral: ["stakeholder requirements gathering", "cross-functional collaboration", "asking the right questions", "project ownership & initiative"]
    }
  },
  {
    id: "acely",
    name: "acely.ai",
    image: "/images/acely.png",
    gif: "/images/acely.gif",
    tag: "product analytics",
    timeline: "jan 2024 - aug 2025",
    role: "product analytics intern",
    org: "content marketing",
    team: "acely.ai",
    goal: "grow user base through data-driven marketing",
    description: "grew user base by 10k+ through audience trend analysis and A/B testing. produced 10 gen z-targeted tiktoks weekly generating 700k+ views. implemented manychat automation to instantly send resources based on keyword comments.",
    caseStudy: `acely.ai is an ai-powered standardized test prep platform that gives students personalized practice questions for the SAT, ACT, and beyond. i joined as a product analytics intern on the content marketing team with one goal: bring in more users organically and make content that actually resonated with high school and college students.

project 1 — content strategy
i was responsible for creating 10 videos per week across two content buckets: trend-based videos that rode the wave of what was already performing well, and advice-based videos where i shared personal insights on college applications, AP classes, and high school tips. i developed a content calendar, researched trending audio and formats, and wrote scripts for each video. want to see more of my content creation work? check out my creative tab.

project 2 — manychat automation
i built a keyword-triggered automation through manychat so that when users commented specific words on our posts, they'd instantly receive our resource PDFs with no manual effort needed. this turned passive viewers into active leads automatically.

project 3 — data analytics
this is what i'm most proud of. i realized the team couldn't make the right content without data to back it up and instagram didn't have robust analytics yet, so i built my own. i manually pulled views, likes, and shares across all our videos and organized them by target audience, topic, hook type, speaker, props used, and lighting. from that analysis i identified which content formats performed best, which months our audience was most active around SAT season, and what hooks kept viewers watching longest. i brought this data to the team and it completely changed how we approached content.

project 4 — a/b testing
i ran a/b tests on the platform itself, testing whether users preferred seeing practice questions or their past results on the landing screen first. the data showed users strongly preferred seeing their results first, which directly informed a product decision.`,
    takeaway: "you are more than your job title. if you care about the company, you find ways to contribute beyond what's asked. building that analytics system wasn't in my job description but it made our work smarter and made me more invested in every piece of content we made.",
    skills: {
      technical: ["content strategy", "A/B testing", "ManyChat", "data analysis", "Excel", "short-form video", "trend analysis", "product marketing", "video editing", "content creation"],
      behavioral: ["taking initiative", "cross-functional thinking", "going beyond your role", "audience research", "creative direction"]
    }
  },
  {
    id: "uber",
    name: "uber",
    image: "/images/uber.png",
    gif: "/images/uber.gif",
    tag: "product",
    timeline: "mar - jun 2024",
    role: "product manager (contract)",
    org: "uber eats",
    team: "product space",
    goal: "improve uber eats adoption at universities",
    description: "surveyed 300+ UCLA students and conducted 15 interviews to identify pain points in uber eats university adoption. built detailed user personas using pivot tables for market analysis and go-to-market strategy.",
    caseStudy: `as part of a product management contract through Product Space, i worked alongside a team of fellow UCLA students to understand why uber eats wasn't gaining traction among UCLA students despite being on one of the largest university campuses in the US. i surveyed 300+ students and conducted 15 in-depth interviews to find out why.

project 1 — research & discovery
i designed and ran a comprehensive survey across UCLA's student population, covering delivery experience, pricing sensitivity, food theft concerns, and platform awareness. the data was clear: 71 out of 74 students cited expensive fees as their #1 frustration, and 72 out of 74 said pricing was their biggest challenge overall. uber eats wasn't competing on cost with UCLA's already excellent dining halls so it had to compete on something else.

project 2 — qualitative interviews
the interviews added critical nuance the survey couldn't capture. students on the hill (UCLA's residential area) almost never used uber eats because they had access to 8 dining halls, and late night was the only real use case there. students in off-campus apartments told a completely different story: without dining hall access, they relied heavily on delivery apps. this split shaped our entire go-to-market strategy.

project 3 — go-to-market recommendation
based on our findings, we proposed a hub-based delivery model: designated pickup stations across campus, one on the hill for late-night demand, one on campus, and two near the apartment areas where need was highest. drivers would deliver multiple orders to one location at once, cutting delivery costs significantly. we also proposed a reusable container program where students could return containers for money back, adding an eco-friendly incentive that would resonate with the UCLA demographic.`,
    takeaway: "the data told us where to look, but the interviews told us why. students on the hill and students in apartments had completely different relationships with food delivery, and treating them as one user group would have led to the wrong solution entirely.",
    skills: {
      technical: ["survey design", "data analysis", "pivot tables", "market research", "user interviews", "go-to-market strategy"],
      behavioral: ["synthesizing qualitative and quantitative data", "strategic thinking", "user empathy", "stakeholder communication"]
    }
  },
  {
    id: "microsoft",
    name: "microsoft",
    image: "/images/microsoft.png",
    gif: "/images/microsoft.gif",
    tag: "product growth",
    timeline: "jan - mar 2025",
    role: "product growth (contract)",
    org: "microsoft excel",
    team: "product space",
    goal: "increase excel feature adoption among students",
    description: "analyzed 500+ student surveys about excel to identify underutilized features. proposed embedded video tutorials and pre-built academic templates based on student use and learning preferences.",
    caseStudy: `as part of a product growth contract through Product Space, i worked alongside a team of UCLA students to help Microsoft understand why college students weren't fully adopting Excel despite already using it. our driving question: how might we enhance the Microsoft Excel Student Ambassador Program to better engage and empower U.S. college students?

project 1 — research & discovery
we surveyed 107 students across southern California campuses and conducted user interviews to understand Excel sentiment, pain points, and use cases. 86% of students cited lack of advanced knowledge (pivot tables, macros) as their biggest pain point, and 64% said Excel was too time-consuming to learn. despite this, only 6.5% had never used Excel at all, meaning the problem wasn't awareness, it was engagement and depth of knowledge.

project 2 — user interviews & affinity mapping
interviews revealed three core themes: perceived complexity (Excel feels harder to learn than Google Sheets), lack of differentiation (students defaulted to Google Sheets for collaboration), and absence of marketing (students had never seen any Excel marketing efforts on campus). we organized findings into an affinity map to identify patterns across responses.

project 3 — ambassador program analysis
we conducted a full SWOT analysis of the existing Excel Student Ambassador Program across recruiting, workshop curriculum, Instagram presence, and LinkedIn presence. key findings: the program had high churn, low participation, and minimal output, largely due to unclear expectations, no structured guidance, and insufficient support for ambassadors.

project 4 — final recommendations
our core hypothesis: more guidance equals more success. we recommended three things: clearly define ambassador roles and success metrics (what), implement a structured year-long calendar aligned to student milestones like finals, career fairs, and club recruitment (when), and provide toolkits, training, and consistent mentorship (how). we also proposed specific events including an Excel 101 crash course, a data tournament, and an Excel + Copilot AI workshop, along with redesigned marketing templates for ambassadors to use.`,
    takeaway: "the problem wasn't that students didn't use Excel, it was that they didn't know how to use it well, and no one was teaching them in an engaging way. the ambassador program had the infrastructure but needed structure and support to actually work.",
    skills: {
      technical: ["survey design", "user interviews", "affinity mapping", "SWOT analysis", "market research", "go-to-market strategy", "program analysis"],
      behavioral: ["synthesizing qualitative and quantitative data", "strategic thinking", "cross-functional collaboration", "stakeholder communication", "presenting to stakeholders"]
    }
  },
  {
    id: "devx",
    name: "devx @ucla",
    image: "/images/devx.png",
    gif: "/images/devx.gif",
    tag: "president",
    timeline: "mar 2025 - present",
    role: "president",
    org: "student org",
    team: "devx",
    goal: "build ucla's premiere product development community",
    description: "lead a 10-team executive board to run club operations for 70+ students. improved club health by refocusing mission to entrepreneurship and increasing active attendance from 40% to 85%.",
    caseStudy: `i first joined DevX as a marketing manager my freshman year. the club was disorganized: no whole-club meetings, team meetings that constantly got cancelled, and no real support beyond pairing students into project teams. my sophomore year, the president saw potential in me and asked me to take on a product manager role, where i led my own project team to build BLink (see next card). but even then, i felt alone, devx wasn't checking in, wasn't providing resources, and wasn't living up to what it could be.

when i became president, i knew exactly what needed to change because i had lived through what wasn't working.

project 1 — rebuilding club culture
i introduced whole-club general meetings, resume workshops, and team leadership sessions that hadn't existed before. i also set up biweekly check-ins with all product managers so no PM would feel as isolated as i had. i wanted every member to feel supported, not just matched to a team and left alone. active attendance went from 40% to 85%.

project 2 — speaker & recruiter program
i reached out to recruiters and industry professionals to come speak to our members about tech careers, internships, and building products. we brought in speakers from companies like Coinbase to give students real exposure to the industry and make devx feel like more than just a club.

project 3 — rebranding the mission
a major issue was that people thought devx was a dev-only club because of its name. in reality it was always meant for anyone in tech, PMs, designers, marketers, engineers. i worked with our marketing board to reposition and advertise devx as an entrepreneurship and product-building club open to all. this directly contributed to stronger recruitment and more diverse teams.

project 4 — operations & funding
i ran weekly board meetings across all functions (marketing, EVP, IVP, web dev, finance) and pushed to raise funds so PMs could deploy their projects without paying out of pocket. building a sustainable operational structure was one of the hardest and most rewarding parts of the role.`,
    takeaway: "the best leaders fix the problems they once experienced. i knew what devx was missing because i had felt it firsthand. becoming president wasn't just a title, it was a chance to build the club i wished i'd had.",
    skills: {
      technical: ["program management", "event planning", "recruiting", "marketing strategy", "product operations"],
      behavioral: ["leadership", "organizational culture building", "empathy-driven decision making", "cross-functional team management", "public speaking"]
    }
  },
  {
    id: "blink",
    name: "blink",
    image: "/images/blink.png",
    gif: "/images/blink.gif",
    tag: "pm/creator",
    timeline: "oct 2024 - present",
    role: "product manager",
    org: "campus events",
    team: "blink",
    goal: "centralize campus events for students",
    description: "lead 12-member cross-functional team of designers, engineers, and marketers to build an app for on-campus events. deploy real-time event data and push notifications to boost student participation among 5,000+ monthly active users.",
    caseStudy: `blink was born out of a personal frustration. at UCLA, in the middle of los angeles, there are constantly events happening on campus, companies like lululemon, google, nike, and openai giving out free products to gain student traction, clubs selling boba and snacks from restaurants miles away, holiday bouquets and trinkets on bruin walk. but there was no way to know about any of it unless you happened to walk by or heard from a friend. i was missing things i genuinely wanted because i just didn't know they existed. so i built blink.

project 1 — product vision & team building
blink is a centralized platform where students and clubs can post their popups, fundraisers, and campus events for everyone to see. the app has a home feed of active events and a live map showing where each popup is located relative to where you are on campus. i led a 12-member cross-functional team of designers, engineers, and marketers, coordinating across all functions to take the app from an idea to a live product with 5,000+ monthly active users.

project 2 — design iterations
watching blink's design evolve has been one of the most rewarding parts of this project. we started with a dark-themed mid-fi last year, moved into low-fi wireframes this year, explored multiple color directions, and landed on a clean gradient version that felt approachable and modern. each iteration taught me something new about how design decisions affect user behavior and perception.

project 3 — growth & social media
we grew our user base largely through social media. our content team created videos that went genuinely viral, and our instagram page got shared widely across UCLA student communities. seeing organic growth from content we made ourselves was one of the most exciting parts of building blink.

project 4 — fundraising
to fund the app's development and deployment, we ran fundraisers on campus including a dubai chocolate fundraiser that brought real energy and community around the project. raising money as a student org taught me a lot about scrappy resourcefulness.`,
    takeaway: "blink was my first time truly owning a product from scratch. i felt every high and every setback personally because this was mine. no one handed me a problem statement or a roadmap. i found the problem, assembled the team, and built the solution. it taught me what it actually feels like to care about what you're building.",
    skills: {
      technical: ["product management", "UX design", "figma", "user research", "social media growth", "content strategy", "app development coordination"],
      behavioral: ["product ownership", "leading cross-functional teams", "scrappy resourcefulness", "iterative thinking", "community building"]
    }
  },
  {
    id: "bruin-tank",
    name: "bruin tank",
    image: "/images/bruin-tank.png",
    gif: "/images/bruin-tank.gif",
    tag: "executive director",
    timeline: "may 2025 - present",
    role: "executive director",
    org: "sigma eta pi",
    team: "bruin tank",
    goal: "run socal's premiere college venture pitch competition",
    description: "led team using agile methodologies to manage event planning and ensure smooth execution. directed outreach to 200+ judges, sponsors, and student founders, increasing stakeholder participation.",
    caseStudy: `as co-vice president of professional affairs for Sigma Eta Pi, UCLA's coed entrepreneurship fraternity, my role came with being co-executive director of Bruin Tank, SoCal's largest student-led pitch competition. 16 founders from SoCal schools pitch to a panel of 8 judges and venture capitalists. i was the full lead for the event.

project 1 — outreach & sponsorships
i led the outreach team to build and send a sponsorship packet, reaching out to companies and VCs to secure partnerships. we landed sponsors including Figma, Notion, ElevenLabs, Perplexity, and Monster. i coordinated all communication, follow-ups, and logistics around each partnership.

project 2 — operations & logistics
i built the event website on Framer, created the application form on Tally, designed marketing assets on Figma, coordinated the application review process, made interview Zoom links, recruited interviewers from within the club, evaluated the startups, and selected the finalists. most of these tools were ones i had never used before. i learned them on the fly because i had to.

project 3 — leading through adversity
midway through planning, i found myself navigating an unexpected leadership challenge that left me responsible for far more than originally scoped. rather than let it derail the event, i recalibrated quickly, redistributed the workload, and stepped into a more independent leadership role than i had anticipated. it was my first real test of leading under pressure with high stakes and tight timelines, and it taught me more about crisis management and adaptability than any planned experience could have.`,
    takeaway: "no matter how much you plan ahead, things go wrong last minute. those are the moments that actually define you as a leader. i learned that i can hold things together under pressure, adapt fast, and deliver even when the conditions are far from ideal.",
    skills: {
      technical: ["Figma", "Framer", "Tally", "sponsorship decks", "event logistics", "application management", "VC outreach"],
      behavioral: ["crisis leadership", "conflict navigation", "self-sufficiency", "working under pressure", "cross-functional coordination"]
    }
  },
  {
    id: "notion",
    name: "notion",
    image: "/images/notion.png",
    gif: "/images/notion.gif",
    tag: "campus leader",
    timeline: "2024 - present",
    role: "campus leader",
    org: "notion",
    team: "campus ambassador",
    goal: "grow notion adoption on campus",
    description: "served as notion's campus representative at UCLA, promoting workspace tools and collaboration features to students and student organizations.",
    caseStudy: `as a Notion Campus Ambassador at UCLA, i represent Notion within the student community, working directly with Notion's campus leadership team to bring the product to life on campus in an organic and student-facing way.

project 1 — campus events & presentations
i secured a Notion booth at Bruin Tank, SoCal's largest student-led pitch competition, giving Notion direct exposure to founders and tech-oriented students. i also partnered with DevX to run a general meeting for 80+ students, leading a hands-on presentation on how to use Notion to plan and manage their projects. across all events and outreach, i have helped introduce Notion to over 1,000 students on campus.

project 2 — content creation
i created videos for Notion's social media aimed at showing students practical ways to use the product in their day to day lives. i also built a public Notion page for my matcha account @chugofmatcha, a curated guide to the best matcha spots in LA, SoCal, and New York. people started reaching out specifically asking about the site, proving that the best product demos don't feel like demos at all.

project 3 — brand building on campus
my goal as an ambassador has been to shift how students think about Notion, from a tool they've heard of to one they actually use. through events, content, and personal outreach, i've worked to make Notion feel relevant and accessible to the UCLA student community specifically.`,
    takeaway: "being a campus ambassador taught me how to market a product authentically. the most effective moments weren't the formal presentations, they were the organic ones, like someone discovering my matcha guide on Notion and wanting to know more.",
    skills: {
      technical: ["content creation", "event planning", "public speaking", "product marketing", "Notion"],
      behavioral: ["community building", "organic marketing", "brand representation", "ambassador relations", "student outreach"]
    }
  }
];
