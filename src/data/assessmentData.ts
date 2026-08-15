import { AssessmentQuestion, AssessmentResult } from '../types';

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    category: 'Cloud',
    question: 'How are your primary production workloads currently hosted and managed?',
    description: 'Understanding your infrastructure baseline helps determine migration and modernization velocity.',
    options: [
      {
        label: 'Legacy on-premises data center or VMware environment with manual operations',
        score: 15,
        insight: 'High migration and cost optimization opportunity via automated Cloud Migration Factories.',
      },
      {
        label: 'Lift-and-shifted virtual machines in AWS/Azure with limited cloud-native automation',
        score: 45,
        insight: 'Prime candidate for containerization (EKS/AKS), serverless refactoring, and FinOps optimization.',
      },
      {
        label: 'Hybrid cloud setup with some containerized microservices and automated CI/CD',
        score: 75,
        insight: 'Solid foundation ready for platform engineering golden paths and advanced multi-cloud governance.',
      },
      {
        label: 'Fully cloud-native Kubernetes/Serverless architecture with complete Infrastructure as Code (IaC)',
        score: 95,
        insight: 'Mature architecture ready for advanced GenAI agent integration and real-time AIOps.',
      },
    ],
  },
  {
    id: 2,
    category: 'AI',
    question: 'What is your organization\'s current stage of Generative AI adoption?',
    description: 'Assessing your AI strategy from exploratory prompts to enterprise-grade production RAG.',
    options: [
      {
        label: 'Informal use of public web ChatGPT tools by individual employees with no enterprise governance',
        score: 20,
        insight: 'Urgent need for enterprise AI policy, private VPC LLM access, and data privacy guardrails.',
      },
      {
        label: 'Active experimentation or simple developer prototypes using open APIs',
        score: 45,
        insight: 'Ready to build production-ready RAG with enterprise vector search and role-based access control.',
      },
      {
        label: 'Piloting an internal knowledge assistant or specialized prompt pipeline',
        score: 75,
        insight: 'Poised to scale to multi-agent architectures, automated evaluation benchmarks, and tool-use pipelines.',
      },
      {
        label: 'Production RAG and AI Agents deployed with automated guardrails, latency monitoring & FinOps',
        score: 95,
        insight: 'Leading-edge setup; focus on multi-modal orchestration and autonomous operational workflows.',
      },
    ],
  },
  {
    id: 3,
    category: 'DevOps',
    question: 'How are infrastructure provisioning and deployments executed?',
    description: 'Infrastructure automation directly dictates time-to-market and operational stability.',
    options: [
      {
        label: 'Manual configuration via cloud consoles or legacy shell scripts with frequent configuration drift',
        score: 15,
        insight: 'High risk of drift and outage. Modular Terraform / OpenTofu adoption is top priority.',
      },
      {
        label: 'Basic CI/CD pipelines for application code, but infrastructure is provisioned semi-manually',
        score: 50,
        insight: 'Standardizing GitOps for infrastructure will immediately reduce deployment lead times.',
      },
      {
        label: 'Comprehensive Terraform/IaC with automated pull-request validation and testing pipelines',
        score: 80,
        insight: 'Strong foundation; next step is Internal Developer Platform (IDP) with self-service golden paths.',
      },
      {
        label: 'GitOps-driven platform engineering with self-service developer portals and automated policy enforcement',
        score: 100,
        insight: 'Tier-1 velocity and resilience with automated compliance and policy-as-code.',
      },
    ],
  },
  {
    id: 4,
    category: 'Governance',
    question: 'How do you monitor and optimize cloud spending (FinOps) and security posture?',
    description: 'Visibility into unit economics and zero-trust security prevents surprise cost overruns and breaches.',
    options: [
      {
        label: 'Reactive review of monthly cloud invoices with minimal resource tagging or cost allocation',
        score: 20,
        insight: 'Potential 25–40% immediate savings through automated waste identification and FinOps tagging.',
      },
      {
        label: 'Standard cloud budget alerts with occasional manual cleanup of idle resources',
        score: 50,
        insight: 'Automating Compute Savings Plans and storage lifecycle policies will yield significant savings.',
      },
      {
        label: 'Defined cost allocation tags, scheduled rightsizing reviews, and central security logging',
        score: 80,
        insight: 'Mature posture ready for continuous anomaly detection and real-time unit economics metrics.',
      },
      {
        label: 'Real-time FinOps dashboards, automated anomaly alerts, and continuous Zero-Trust compliance scoring',
        score: 100,
        insight: 'Enterprise-grade financial and security governance maintaining maximum capital efficiency.',
      },
    ],
  },
];

export function calculateAssessmentResult(answers: Record<number, number>): AssessmentResult {
  const scores = Object.values(answers);
  const total = scores.reduce((acc, curr) => acc + curr, 0);
  const avgScore = Math.round(total / assessmentQuestions.length);

  if (avgScore < 40) {
    return {
      score: avgScore,
      maturityLevel: 'Foundational',
      summary:
        'Your infrastructure and AI capabilities have substantial immediate headroom for modern cloud migration, automated IaC, and secure foundational GenAI governance.',
      keyStrengths: [
        'Significant rapid ROI potential from infrastructure consolidation',
        'Clean slate to adopt modern cloud-native standards without legacy refactoring debt',
      ],
      priorityGaps: [
        'Lack of automated Infrastructure as Code (IaC) creates operational drift',
        'Absence of private, secure GenAI boundaries risks IP exposure',
        'Reactive cloud spend management leads to avoidable infrastructure waste',
      ],
      recommendedActions: [
        'Schedule a 30-Minute Cloud Architecture Assessment to evaluate migration readiness',
        'Establish a secure Multi-Account Landing Zone on AWS or Azure with automated Terraform',
        'Deploy a private enterprise GenAI pilot with strict access controls and zero data retention',
      ],
    };
  } else if (avgScore < 70) {
    return {
      score: avgScore,
      maturityLevel: 'Emerging',
      summary:
        'You possess a working cloud presence with active modernization initiatives, but can achieve significant velocity by adopting platform engineering and production-grade GenAI pipelines.',
      keyStrengths: [
        'Active cloud footprint with established development team familiar with basic cloud tools',
        'Early GenAI experimentation indicating strong organizational desire to innovate',
      ],
      priorityGaps: [
        'Semi-automated infrastructure creates release bottlenecks and testing friction',
        'GenAI prototypes lack production-grade vector search, RAG evaluation, and latency controls',
        'Cloud cost optimization is periodic rather than continuous and automated',
      ],
      recommendedActions: [
        'Standardize on a GitOps-driven Kubernetes platform (EKS/AKS) to accelerate delivery',
        'Build a production RAG knowledge assistant with hybrid vector search and guardrails',
        'Implement automated FinOps rightsizing policies and Savings Plan commitment models',
      ],
    };
  } else if (avgScore < 88) {
    return {
      score: avgScore,
      maturityLevel: 'Modernized',
      summary:
        'Your organization demonstrates strong cloud-native maturity. The focus is now on specialized autonomous AI agents, platform self-service, and multi-cloud resilience.',
      keyStrengths: [
        'Robust Infrastructure as Code and automated CI/CD deployment pipelines',
        'Structured cloud governance, cost monitoring, and zero-trust security baselines',
      ],
      priorityGaps: [
        'Operational teams experience alert fatigue from complex distributed microservices telemetry',
        'Opportunity to upgrade basic RAG workflows into autonomous multi-agent tool-use architectures',
      ],
      recommendedActions: [
        'Deploy an AI-Powered IT Operations Assistant (AIOps) for automated root-cause analysis',
        'Implement an Internal Developer Platform (IDP) with self-service golden paths',
        'Fine-tune multi-cloud disaster recovery and automated failover orchestration',
      ],
    };
  } else {
    return {
      score: avgScore,
      maturityLevel: 'Cloud & AI Native',
      summary:
        'You operate at the top tier of enterprise engineering excellence. We can partner with your team on cutting-edge agentic workflows, multi-region resilience, and custom architecture optimizations.',
      keyStrengths: [
        'Fully automated GitOps platforms with self-healing cloud infrastructure',
        'Production GenAI pipelines with continuous observability, guardrails, and FinOps',
      ],
      priorityGaps: [
        'Continuous evaluation of emerging foundation models (Bedrock, Claude 3.5, Gemini 2.0, GPT-4o)',
        'Complex cross-region data synchronization and low-latency global edge distribution',
      ],
      recommendedActions: [
        'Explore autonomous multi-agent systems with tool orchestration and safety verifications',
        'Conduct a specialized Architecture Deep-Dive on advanced vector search and token optimization',
      ],
    };
  }
}
