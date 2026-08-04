import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ShieldCheck,
  Radar,
  Database,
} from "lucide-react";

export const profile = {
  name: "Tahsinur Rahman",
  firstName: "Tahsinur",
  role: "Detection Engineer | Data Engineer",
  tagline:
    "Detection engineer working where cybersecurity meets data - I build detection logic, data pipelines and the analytics that back them, with roots in AI training and ML research.",
  summary:
    "I sit at the intersection of cybersecurity and data engineering. My core work is detection engineering - writing and tuning detections, wrangling security telemetry into reliable pipelines, and turning noisy data into signal. That's reinforced by hands-on AI training and published ML research, so I'm as comfortable with a threat model as with a data model.",
  location: "Melbourne, Victoria, Australia",
  email: "tahsinur72@gmail.com",
  socials: {
    github: "https://github.com/tahsinurRahman72",
    linkedin: "https://www.linkedin.com/in/tahsinur-r-674345181/",
  },
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "Triskele Labs",
    role: "Associate Detection Engineer",
    location: "Melbourne, VIC · On-site",
    period: "Jun 2025 - Present",
    highlights: [
      "Tune and optimise detection rules across SIEM and EDR platforms to cut false positives and lift fidelity.",
      "Draft and ship custom detections mapped to MITRE ATT&CK from telemetry and emerging-threat analysis.",
      "Run adversary emulation with Atomic Red Team and PowerShell to validate rule coverage on Windows endpoints.",
      "Engineer custom log parsers and XML detection signatures in Rapid7 InsightIDR, suppressing noisy events.",
    ],
    tags: ["SIEM / EDR", "MITRE ATT&CK", "Rapid7 InsightIDR", "Query Tuning"],
  },
  {
    company: "Triskele Labs",
    role: "Detection Engineer Automation Officer · Intern",
    location: "Melbourne, VIC · On-site",
    period: "Mar 2025 - May 2025",
    highlights: [
      "Stood up Windows/Linux VMs in Azure with ELK Stack and Elastic Agent for endpoint telemetry.",
      "Authored Elastic SIEM detections from MITRE ATT&CK mappings, alerting on adversary simulations.",
      "Built a Python harness to randomise and run Atomic Red Team campaigns, generating detection telemetry.",
      "Developed DNS/IP enrichment pipelines with Zeek, WHOIS and Azure Sentinel, persisted to PostgreSQL.",
    ],
    tags: ["Adversary Simulation", "Threat Hunting", "Elastic SIEM", "Python"],
  },
  {
    company: "Invisible Technologies",
    role: "Advanced AI Data Trainer",
    location: "Remote",
    period: "Jul 2022 - Aug 2024",
    highlights: [
      "Progressed AI Data Trainer → Junior Lead → Advanced Trainer across a two-year tenure.",
      "Analysed model behaviour, reported anomalies and applied data methods to improve output quality.",
      "Led team engagement and evaluation approaches to raise AI training consistency.",
    ],
    tags: ["Model Validation", "Datasets", "Scikit-Learn"],
  },
  {
    company: "Daraz",
    role: "Product Management Intern",
    location: "Dhaka, Bangladesh",
    period: "Feb 2022 - May 2022",
    highlights: [
      "Documented GraphQL APIs and explained the codebase's logical calculations for the team.",
      "Verified API behaviour with Postman and tracked work under Git version control.",
    ],
    tags: ["GraphQL", "API Docs", "Postman"],
  },
  {
    company: "Intelligent Machines",
    role: "Data Annotator · Seasonal",
    location: "Dhaka, Bangladesh",
    period: "Mar 2020 - Dec 2021",
    highlights: [
      "Evaluated bulk audio and image data, annotating key features to train AI systems for better user-end performance.",
    ],
    tags: ["Data Annotation", "Audio", "Image"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  detail: string;
  location: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "La Trobe University",
    degree: "Master of Data Science",
    detail: "Specialisation: Artificial Intelligence Analytics",
    location: "Melbourne, Victoria",
    period: "Graduated Jul 2025",
  },
  {
    school: "BRAC University",
    degree: "BSc in Computer Science & Engineering",
    detail: "CGPA 3.39 / 4.00",
    location: "Dhaka, Bangladesh",
    period: "Graduated Mar 2023",
  },
];

export type Publication = {
  title: string;
  venue: string;
  note: string;
};

export const publications: Publication[] = [
  {
    title: "Blockchain and Machine Learning for Fraud Detection",
    venue: "IEEE",
    note: "Hybrid blockchain + ML pipeline reaching 98.93% testing accuracy on fraud detection.",
  },
  {
    title:
      "Interpreting ML / Deep Learning Models for PDF Malware Detection using XAI and SHAP",
    venue: "IEEE",
    note: "Explainable-AI study using the SHAP framework to interpret malware-detection models.",
  },
];

export type SkillGroup = {
  label: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Detection & Security",
    icon: ShieldCheck,
    items: [
      "Detection Engineering",
      "MITRE ATT&CK",
      "Adversary Simulation",
      "Threat Hunting",
      "Purple Teaming",
      "SOAR",
    ],
  },
  {
    label: "Security Tooling",
    icon: Radar,
    items: [
      "Rapid7 InsightIDR",
      "Elastic SIEM / ELK",
      "Azure Sentinel",
      "Atomic Red Team",
      "Zeek",
      "Sysmon / Procmon",
    ],
  },
  {
    label: "Data & Cloud",
    icon: Database,
    items: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Apache Spark",
      "Hadoop",
      "Azure",
      "Docker",
    ],
  },
  {
    label: "Languages & Web",
    icon: Code2,
    items: ["PowerShell", "JavaScript", "Scala", "XML", "Node.js", "GraphQL"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];
