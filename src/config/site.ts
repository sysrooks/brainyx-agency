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
      company: "Nexus Financial",
      industry: "Fintech",
      title: "70% Faster Customer Support",
      description: "Implemented an intelligent chatbot that handles 85% of customer inquiries autonomously, reducing response time from hours to seconds.",
      metrics: [
        { value: "85%", label: "Queries Automated" },
        { value: "70%", label: "Faster Response" },
        { value: "$2.4M", label: "Annual Savings" }
      ],
      tags: ["Chatbot", "NLP", "Integration"]
    },
    {
      company: "Velocity Logistics",
      industry: "Supply Chain",
      title: "End-to-End Process Automation",
      description: "Built a comprehensive automation layer connecting 12 different systems, eliminating manual data entry and reducing errors by 94%.",
      metrics: [
        { value: "12", label: "Systems Integrated" },
        { value: "94%", label: "Error Reduction" },
        { value: "3,200+", label: "Hours Saved/Year" }
      ],
      tags: ["Automation", "Integration", "RPA"]
    },
    {
      company: "Apex Research",
      industry: "Market Research",
      title: "Autonomous Research Agent",
      description: "Deployed an AI agent that conducts independent market research, synthesizes findings, and generates actionable reports without human intervention.",
      metrics: [
        { value: "10x", label: "Faster Research" },
        { value: "24/7", label: "Operation" },
        { value: "98%", label: "Accuracy Rate" }
      ],
      tags: ["AI Agent", "Automation", "Analytics"]
    }
  ],
  
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's discuss how AI can drive real results for your organization.",
    primaryCta: "Schedule a Call",
    secondaryCta: "View Case Studies"
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
