/**
 * Central Brand and Business Configuration
 * Easy 1-click updates for company brand name, founder info, and credentials.
 */

export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  supportingMessage: string;
  logoUrl?: string;
  logoIconUrl?: string;
  founder: {
    name: string;
    title: string;
    experienceYears: string;
    summary: string;
    specialties: string[];
    linkedIn: string;
  };
  contact: {
    email: string;
    phone: string;
    calendlyUrl: string;
    linkedInUrl: string;
    regions: string[];
  };
  navigation: {
    label: string;
    href: string;
    subItems?: { label: string; href: string; desc: string }[];
  }[];
}

export const siteConfig: SiteConfig = {
  companyName: "Devyai Technology Services",
  shortName: "Devyai Tech",
  tagline: "Cloud & AI Transformation for Modern Enterprises",
  logoUrl: "/logo.svg",
  logoIconUrl: "/logo-icon.svg",
  supportingMessage:
    "We help organizations modernize their cloud infrastructure, adopt Generative AI, and build scalable digital platforms across AWS, Azure and Google Cloud.",
  founder: {
    name: "[FOUNDER NAME]",
    title: "Founder & Principal Architect",
    experienceYears: "17+",
    summary:
      "Combining 17+ years of deep enterprise architecture, cloud engineering, DevOps, and Generative AI expertise to help organizations turn complex technology initiatives into practical, reliable, and high-ROI digital platforms.",
    specialties: [
      "Enterprise Multi-Cloud Architecture",
      "VMware to AWS/Azure Modernization",
      "Generative AI & RAG Engineering",
      "Platform Engineering & Kubernetes",
      "Infrastructure as Code & FinOps",
      "High-Availability & Disaster Recovery",
    ],
    linkedIn: "[LINKEDIN URL]",
  },
  contact: {
    email: "[EMAIL ADDRESS]",
    phone: "[PHONE NUMBER]",
    calendlyUrl: "[CALENDLY_URL]",
    linkedInUrl: "[LINKEDIN URL]",
    regions: [
      "India",
      "United States",
      "United Kingdom",
      "Australia",
      "Singapore",
      "UAE",
      "Europe",
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      subItems: [
        {
          label: "Cloud Transformation",
          href: "/services/cloud-transformation",
          desc: "Migration, VMware modernization, landing zones, FinOps & governance",
        },
        {
          label: "AI & Generative AI",
          href: "/services/ai-genai",
          desc: "RAG systems, AI agents, enterprise knowledge & secure LLM pipelines",
        },
        {
          label: "Platform Engineering",
          href: "/services/platform-engineering",
          desc: "Kubernetes, Terraform IaC, automated CI/CD & internal developer platforms",
        },
      ],
    },
    { label: "Solutions & Architectures", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
