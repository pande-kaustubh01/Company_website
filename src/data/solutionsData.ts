import { ReferenceArchitecture } from '../types';

export const solutionsData: ReferenceArchitecture[] = [
  {
    id: 'vmware-to-aws-migration',
    title: 'Enterprise VMware → AWS Migration Factory',
    category: 'Cloud Migration',
    summary:
      'A structured, automated migration factory pattern to transition on-premises VMware virtual machines to AWS with minimal downtime, dependency mapping, and standardized post-cutover automation.',
    challenge:
      'Large enterprise VMware environments are often tightly coupled with legacy network topologies, complex storage dependencies, and strict uptime SLAs. Migrating hundreds of workloads manually creates high operational risk, downtime bottlenecks, and governance inconsistencies.',
    solution:
      'Design a repeatable, automated AWS Migration Factory leveraging AWS Application Migration Service (MGN), automated Terraform landing zones, Systems Manager post-launch scripts, Direct Connect hybrid networking, and wave-based migration governance.',
    architectureComponents: [
      {
        name: 'AWS Application Migration Service (MGN)',
        description: 'Block-level continuous data replication with zero impact on running on-premises VMs.',
        category: 'Replication & Migration',
      },
      {
        name: 'AWS Systems Manager & Ansible',
        description: 'Automated post-launch configuration, agent installation, OS modernization, and driver verification.',
        category: 'Automation & Post-Cutover',
      },
      {
        name: 'Direct Connect / Site-to-Site VPN',
        description: 'Dedicated high-bandwidth, low-latency hybrid interconnect for data replication and cutover traffic.',
        category: 'Hybrid Networking',
      },
      {
        name: 'AWS Backup & CloudWatch',
        description: 'Automated snapshot lifecycle policies, migration telemetry, and post-migration performance monitoring.',
        category: 'Observability & Resilience',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Discovery & Dependency Mapping',
        details: 'Inventory on-premises VMware hosts, map network dependencies, and group workloads into optimized migration waves.',
      },
      {
        step: '02',
        title: 'Continuous Background Replication',
        details: 'Deploy lightweight MGN replication agents to mirror disk blocks over encrypted AWS Direct Connect links.',
      },
      {
        step: '03',
        title: 'Non-Disruptive Wave Testing',
        details: 'Spin up isolated test instances in AWS VPC to validate application functionality, database integrity, and latency.',
      },
      {
        step: '04',
        title: 'Automated Cutover & DNS Switch',
        details: 'Execute final delta sync during maintenance window, launch EC2 instances, apply Systems Manager scripts, and update DNS.',
      },
    ],
    potentialOutcomes: [
      'Standardized, repeatable migration factory framework',
      'Minimization of application downtime during cutover',
      'Reduced manual infrastructure provisioning effort via Terraform',
      'Comprehensive visibility across all migration waves and dependencies',
      'Instant post-migration baseline compliance with AWS Config and Systems Manager',
    ],
    technologies: [
      'AWS Application Migration Service',
      'AWS Systems Manager',
      'Terraform',
      'AWS Backup',
      'CloudWatch',
      'AWS Config',
      'AWS Direct Connect',
    ],
  },
  {
    id: 'enterprise-genai-knowledge-assistant',
    title: 'Enterprise GenAI Knowledge Assistant & RAG Pipeline',
    category: 'Enterprise AI',
    summary:
      'A secure, production-ready Retrieval-Augmented Generation (RAG) architecture connecting internal unstructured repositories (Confluence, SharePoint, PDF, Jira) to enterprise-grade LLMs with strict role-based access and latency controls.',
    challenge:
      'Enterprise teams struggle with fragmented internal knowledge, hallucinated responses from generic LLMs, and stringent data security regulations that prevent sending confidential IP to public AI services.',
    solution:
      'Architect a modular RAG pipeline using secure embedding services, hybrid vector search (dense + sparse keyword), semantic caching, prompt guardrails, and managed foundation models (AWS Bedrock / Azure OpenAI) running within private VPC boundaries.',
    architectureComponents: [
      {
        name: 'Document Ingestion & Chunking Engine',
        description: 'Hierarchical chunking with metadata extraction and multi-source ETL connectors for enterprise docs.',
        category: 'Data Pipeline',
      },
      {
        name: 'Vector Database & Hybrid Search',
        description: 'Pinecone / pgvector / OpenSearch for high-dimensional vector embeddings and exact BM25 keyword matching.',
        category: 'Retrieval Layer',
      },
      {
        name: 'Enterprise Foundation Model (Bedrock / Azure AI)',
        description: 'Private, SOC2-compliant LLM inference with zero customer data retention for model training.',
        category: 'Inference Engine',
      },
      {
        name: 'Security Guardrails & Semantic Cache',
        description: 'PII scrubbing, prompt injection defense, hallucination verification, and low-latency cache for recurring queries.',
        category: 'Governance & Speed',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Multi-Source Document Ingestion',
        details: 'Extract structured text from PDFs, Confluence, and internal wikis with metadata tagging and semantic chunking.',
      },
      {
        step: '02',
        title: 'Embedding & Vector Storage',
        details: 'Generate high-fidelity embeddings and index vectors in secure enterprise vector database with ACL tags.',
      },
      {
        step: '03',
        title: 'Contextual Retrieval & Reranking',
        details: 'User query triggers hybrid semantic search, context filtering by user permissions, and cross-encoder reranking.',
      },
      {
        step: '04',
        title: 'Guardrailed Synthesis & Citation',
        details: 'LLM synthesizes response with strict source citations, latency monitoring, and zero-hallucination verification.',
      },
    ],
    potentialOutcomes: [
      'Sub-second retrieval over millions of enterprise documents',
      'Strict adherence to enterprise role-based access control (RBAC)',
      'Drastic reduction in internal support and research search hours',
      'Zero model training on confidential customer or IP data',
      'Auditable source attribution with clickable inline citations',
    ],
    technologies: [
      'AWS Bedrock / Azure OpenAI',
      'pgvector / OpenSearch',
      'LangChain / LlamaIndex',
      'FastAPI',
      'Docker',
      'Guardrails AI',
      'CloudWatch Logs',
    ],
  },
  {
    id: 'ai-powered-it-operations-assistant',
    title: 'AI-Powered IT Operations & Incident Assistant',
    category: 'AIOps',
    summary:
      'An autonomous AIOps agentic framework that monitors cloud telemetry, correlates cross-service anomalies, queries log stores, and synthesizes root-cause hypotheses to assist SREs in rapid incident remediation.',
    challenge:
      'Modern microservices emit millions of metric streams and unstructured log lines. During outages, SRE teams face alert fatigue and take hours to correlate distributed traces across decoupled services.',
    solution:
      'Implement an intelligent agent framework integrating CloudWatch, Datadog/Prometheus, and ITSM (Jira/ServiceNow). The agent autonomously parses anomaly spikes, executes read-only diagnostic CLI tools, identifies recent code commits, and suggests verified runbook remediations.',
    architectureComponents: [
      {
        name: 'Telemetry Ingestion & Anomaly Detector',
        description: 'Real-time ingestion of metric streams, distributed traces, and log bursts via EventBridge and Kafka.',
        category: 'Observability Hub',
      },
      {
        name: 'Reasoning Agent & Tool Orchestrator',
        description: 'LLM reasoning engine equipped with scoped read-only diagnostic tools (kubectl, AWS CLI, Log Query).',
        category: 'AIOps Agent Engine',
      },
      {
        name: 'Historical Incident Vector Memory',
        description: 'Knowledge base of past post-mortems, verified runbooks, and architectural topology diagrams.',
        category: 'Contextual Memory',
      },
      {
        name: 'Interactive SRE Collaboration Interface',
        description: 'Slack/Teams bot and web dashboard presenting automated root-cause timeline and single-click remediation proposals.',
        category: 'Human-in-the-Loop',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Anomaly Trigger & Context Gathering',
        details: 'Alert triggers agent to pull 15-minute window of metric deviations, error logs, and recent deployment commits.',
      },
      {
        step: '02',
        title: 'Automated Tool Execution',
        details: 'Agent executes read-only queries against Kubernetes cluster and AWS CloudTrail to locate root failure origin.',
      },
      {
        step: '03',
        title: 'Runbook Matching & Synthesis',
        details: 'Correlates failure signature against internal post-mortem database and crafts prioritized hypothesis.',
      },
      {
        step: '04',
        title: 'SRE Recommendation & Audit Log',
        details: 'Delivers summary in incident Slack channel with recommended rollback/patch commands for human engineer review.',
      },
    ],
    potentialOutcomes: [
      'Up to 60% reduction in Mean Time to Identify (MTTI) during high-severity incidents',
      'Automated triage of noisy false-positive alerts',
      'Institutionalization of tribal engineering knowledge into self-updating runbooks',
      'Zero-trust scoped execution with strict human-in-the-loop approval gates',
    ],
    technologies: [
      'AWS Lambda & EventBridge',
      'Amazon CloudWatch / OpenTelemetry',
      'LangGraph / AI Agent Framework',
      'Amazon Bedrock Claude 3.5',
      'Kubernetes API',
      'Slack Bot SDK',
    ],
  },
  {
    id: 'cloud-cost-finops-optimization',
    title: 'Enterprise Multi-Cloud Cost & FinOps Optimization',
    category: 'FinOps',
    summary:
      'A structured cloud economics and FinOps framework that identifies orphaned infrastructure, optimizes instance sizing, enforces commitment tiering, and implements real-time unit economics governance across AWS and Azure.',
    challenge:
      'Unchecked cloud spending across decoupled development teams often leads to 25–40% wasted budget on over-provisioned compute, unattached storage volumes, unmonitored egress traffic, and lack of commitment planning.',
    solution:
      'Deploy automated cost intelligence scanners, right-sizing algorithms, automated non-production scheduler policies, GP2-to-GP3 storage migrations, and unified multi-cloud FinOps dashboards with anomaly alerting.',
    architectureComponents: [
      {
        name: 'Multi-Account Cost Ingestion & Tagging Engine',
        description: 'AWS Cost and Usage Reports (CUR) and Azure Cost Management data normalization via automated pipelines.',
        category: 'Cost Telemetry',
      },
      {
        name: 'Idle & Zombie Resource Detectors',
        description: 'Automated scans for unattached EBS volumes, idle Elastic IPs, orphaned snapshots, and stale load balancers.',
        category: 'Waste Elimination',
      },
      {
        name: 'Compute Rightsizing & Savings Plan Optimizer',
        description: 'CPU/Memory/Network percentile analytics for right-sizing EC2/RDS instances and modeling 1-yr/3-yr Savings Plans.',
        category: 'Capacity Optimization',
      },
      {
        name: 'Policy-as-Code & FinOps Anomaly Alerts',
        description: 'AWS Budgets, CloudWatch anomaly detection, and Slack notifications alerting teams before budget overruns occur.',
        category: 'Governance & Culture',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Comprehensive Spend & Tag Audit',
        details: 'Ingest 90 days of billing telemetry, evaluate resource allocation tags, and identify immediate leakages.',
      },
      {
        step: '02',
        title: 'Automated Waste Purge',
        details: 'Safely snapshot and decommission orphaned storage volumes, stale snapshots, and unattached network interfaces.',
      },
      {
        step: '03',
        title: 'Architectural & Instance Rightsizing',
        details: 'Modernize legacy instance families (e.g. m5 to m7g Graviton), convert EBS GP2 to GP3, and tune RDS memory.',
      },
      {
        step: '04',
        title: 'Commitment Modeling & Continuous FinOps',
        details: 'Design blended Compute Savings Plans and Reserved Instances coverage for stable base workloads with 95%+ utilization.',
      },
    ],
    potentialOutcomes: [
      'Immediate identification of 15–35% cloud spend reduction opportunities',
      'Establishment of automated tagging and allocation accountability',
      'Optimal compute commitment coverage without lock-in risk',
      'Proactive anomaly detection preventing surprise cloud invoice spikes',
    ],
    technologies: [
      'AWS Cost Explorer & CUR',
      'AWS Compute Optimizer',
      'Azure Cost Management',
      'Terraform',
      'AWS Lambda',
      'QuickSight / Grafana',
    ],
  },
];
