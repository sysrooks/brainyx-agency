export const siteConfig = {
  name: "Brainyx",
  tagline: "Intelligence, Engineered.",
  description: "We build AI systems that think, respond, and execute—transforming how businesses operate in the digital age.",
  
  hero: {
    badge: "Now Accepting Clients",
    title: "Intelligence",
    titleAccent: "Engineered",
    subtitle: "We build AI systems that think, respond, and execute. From intelligent chatbots to autonomous agents—transform your business with next-generation AI.",
    cta: { text: "Start Your Project", href: "#contact" },
    secondaryCta: { text: "View Our Work", href: "#case-studies" },
  },
  
  services: [
    {
      id: "chatbots",
      icon: "MessageSquare",
      title: "AI Chatbots",
      subtitle: "Conversational Intelligence",
      description: "Intelligent conversational agents that understand context, learn from interactions, and deliver human-like experiences at scale. 24/7 availability with instant responses.",
      features: [
        "Natural Language Understanding",
        "Multi-platform Integration",
        "Context-aware Conversations",
        "Continuous Learning",
        "Custom Knowledge Bases",
        "Analytics & Insights"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: "automation",
      icon: "Workflow",
      title: "Automation & Integrations",
      subtitle: "Workflow Revolution",
      description: "End-to-end process automation that connects your tools, eliminates manual tasks, and accelerates operations. Work smarter, not harder.",
      features: [
        "Cross-platform Workflows",
        "API Integrations",
        "Data Synchronization",
        "Error Handling & Recovery",
        "Custom Triggers",
        "Performance Monitoring"
      ],
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      id: "agents",
      icon: "Brain",
      title: "AI Agents",
      subtitle: "Autonomous Systems",
      description: "Self-directed AI agents that make decisions, take actions, and achieve complex goals without constant human oversight. The future of autonomous business.",
      features: [
        "Goal-oriented Execution",
        "Multi-step Reasoning",
        "Tool Integration",
        "Memory & Context",
        "Human-in-the-loop",
        "Scalable Architecture"
      ],
      gradient: "from-emerald-500/20 to-cyan-500/20"
    }
  ],
  
  process: {
    title: "How We Work",
    subtitle: "A proven process that delivers results",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your business, understanding your challenges, goals, and opportunities where AI can create real impact."
      },
      {
        number: "02",
        title: "Strategy",
        description: "We design a tailored AI solution architecture, selecting the right technologies and defining clear success metrics."
      },
      {
        number: "03",
        title: "Build",
        description: "Our engineers develop your solution with iterative feedback loops, ensuring alignment with your vision at every step."
      },
      {
        number: "04",
        title: "Deploy",
        description: "We launch your AI system with comprehensive testing, monitoring, and optimization for production-grade performance."
      }
    ]
  },
  
  caseStudies: [
    {
      company: "Example: Customer Support",
      industry: "SaaS",
      title: "AI Chatbot Implementation",
      description: "A typical AI chatbot project can automate routine customer inquiries, reduce response times from hours to seconds, and free up human agents for complex issues.",
      metrics: [
        { value: "85%", label: "Common Queries" },
        { value: "70%", label: "Response Time" },
        { value: "24/7", label: "Availability" }
      ],
      tags: ["Chatbot", "NLP", "Customer Support"]
    },
    {
      company: "Example: Workflow Automation",
      industry: "Operations",
      title: "Process Automation System",
      description: "Automation projects typically connect disparate systems, eliminate manual data entry, reduce human error, and recover thousands of hours annually.",
      metrics: [
        { value: "10+", label: "Systems" },
        { value: "90%+", label: "Error Reduction" },
        { value: "1000s", label: "Hours Saved" }
      ],
      tags: ["Automation", "Integration", "Workflow"]
    },
    {
      company: "Example: Research Agent",
      industry: "Research",
      title: "Autonomous Research System",
      description: "AI agents can conduct ongoing research, monitor data sources, synthesize findings, and deliver insights without constant human oversight.",
      metrics: [
        { value: "10x", label: "Speed" },
        { value: "24/7", label: "Monitoring" },
        { value: "95%+", label: "Accuracy" }
      ],
      tags: ["AI Agent", "Research", "Automation"]
    }
  ],
  
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's discuss how AI can drive real results for your organization.",
    primaryCta: "Schedule a Call",
    secondaryCta: "See What's Possible"
  },
  
  footer: {
    tagline: "Intelligence, Engineered.",
    description: "Building the future of AI-powered business automation.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Contact", href: "#contact" }
    ],
    social: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" }
    ],
    copyright: "© 2025 Brainyx. All rights reserved."
  }
};
