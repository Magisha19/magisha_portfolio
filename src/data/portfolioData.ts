import {
  Project,
  Experience,
  SkillCategory,
  Certificate,
  EducationRecord,
  Achievement,
} from '../types/portfolio';

const BASE_URL = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
export const getAssetUrl = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
};

export const PERSONAL_INFO = {
  name: 'Magisha N',
  title: 'Cybersecurity Enthusiast',
  degree: 'B.E. Computer Science and Engineering (Cyber Security)',
  college: 'Sriram Engineering College, Chennai',
  location: 'Tiruttani, Tamil Nadu, India',
  phone: '+91 9500169239',
  email: 'magisha049@gmail.com',
  linkedin: 'https://linkedin.com/in/magisha-n-147740359',
  linkedinDisplay: 'linkedin.com/in/magisha-n-147740359',
  github: 'https://github.com/Magisha19',
  githubDisplay: 'github.com/Magisha19',
  photoUrl: getAssetUrl('/assets/aistudio/photo-original_c79cbc86.png'),
  resumePdfUrl: getAssetUrl('/assets/aistudio/magisha_resume_e832e907.pdf'),
  cgpa: '8.7',
  graduationExpected: 'Expected June 2027',
  shortSummary:
    'Final-year B.E. Computer Science and Engineering (Cyber Security) student with hands-on experience in security monitoring, log and event analysis, LLM security testing, and intrusion detection research. Completed four internships and a Mastercard cybersecurity job simulation, and presented an IDS research paper at an international conference. Seeking an internship or entry-level role in cybersecurity (SOC), AI safety, or AI testing and evaluation.',
  targetRoles: [
    'SOC Analyst (L1)',
    'Security Analyst',
    'Cybersecurity Analyst',
    'Security Operations Associate',
    'Information Security Analyst',
    'Vulnerability Management Associate',
    'Junior Security Administrator',
  ],
  stats: [
    { label: 'Academic CGPA', value: '8.7 / 10' },
    { label: 'Department Rank', value: '2nd Rank' },
    { label: 'Completed Internships', value: '4 + 1 Sim' },
    { label: 'Conference Research Paper', value: 'ICCET 2026' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neurofence',
    title: 'NeuroFence',
    subtitle: 'AI Security and Reliability Testing Suite',
    category: 'AI Safety',
    period: '2026',
    image: getAssetUrl('/assets/projects/neurofence.jpg'),
    technologies: ['Python', 'PyQt5', 'LLM Evaluation', 'Prompt Engineering', 'Git', 'GitHub'],
    featured: true,
    overview:
      'NeuroFence is an AI security testing tool built to evaluate large language model (LLM) robustness against prompt injection, jailbreaking, and hallucination failure modes through systematic, multi-run test suites and an analytical desktop interface.',
    problemStatement:
      'Modern LLM deployments in enterprise applications are vulnerable to indirect prompt injections, jailbreaks, and unsafe outputs that traditional perimeter security tools cannot detect or remediate.',
    objective:
      'To build a structured red-teaming and prompt-based safety testing pipeline that simulates adversarial interactions, analyzes model compliance, categorizes risk severity, and surfaces telemetry through a SOC-style desktop application.',
    myContribution: [
      'Designed and executed structured prompt-based test suites to identify unsafe, non-compliant, and unexpected LLM failure cases.',
      'Analyzed an empirical test set of 36 distinct adversarial prompts across 252 automated evaluation runs.',
      'Developed a standardized risk categorization matrix (Critical, High, Medium, Low) and documented failure patterns.',
      'Improved testing execution workflows and collaborated with team members on a PyQt5 SOC-style desktop interface using GitHub version control.',
    ],
    keyFeatures: [
      '36-Prompt Adversarial Test Matrix spanning prompt injection, system prompt extraction, and policy bypasses.',
      'Automated multi-run evaluation executing 252 test passes with reproducible pass/fail criteria.',
      'Risk Severity Matrix categorizing vulnerabilities by exploitability and impact.',
      'SOC-style PyQt5 desktop dashboard providing run telemetry, safety scores, and violation codes.',
    ],
    implementationDetails: [
      'Engineered structured test payloads mimicking OWASP Top 10 for LLM Applications vulnerabilities.',
      'Structured execution logging with timestamped prompt-response pairs, categorization flags, and safety violation indicators.',
      'Designed PyQt5 desktop UI widgets to display run history, threat distribution graphs, and detailed test case inspection panels.',
    ],
    resultsAndOutcomes: [
      'Identified 100% of high-severity jailbreak attempts in the evaluation batch with granular failure categorization.',
      'Produced comprehensive issue documentation and testing reports for reproducible bug tracking.',
      'Demonstrated practical intersection of offensive testing methodology and modern AI safety standards.',
    ],
    metrics: [
      { label: 'Test Suite Size', value: '36 Prompts' },
      { label: 'Evaluation Passes', value: '252 Runs' },
      { label: 'Interface Architecture', value: 'PyQt5 SOC' },
    ],
    githubUrl: 'https://github.com/Magisha19',
  },
  {
    id: 'voltguard',
    title: 'VoltGuard',
    subtitle: 'Industrial Equipment Monitoring and Security',
    category: 'Industrial Security',
    period: '2025 – 2026',
    image: getAssetUrl('/assets/projects/voltguard.jpg'),
    technologies: ['Python', 'C++', 'PyQt5', 'Scapy', 'Modbus/TCP', 'Network Packet Analysis'],
    featured: true,
    overview:
      'VoltGuard is a specialized industrial SCADA monitoring and security monitoring framework designed for critical infrastructure, inspecting Modbus/TCP packets and analyzing sensor telemetry for operational anomalies and network tampering.',
    problemStatement:
      'Industrial automation systems and Operational Technology (OT) networks frequently lack encrypted transport and protocol-level authentication, leaving pumps, turbines, and sensors vulnerable to packet injection and out-of-bounds telemetry spoofing.',
    objective:
      'To build an integrated industrial monitoring application that reads live sensor metrics (RPM, pressure, flow rate) over Modbus/TCP, analyzes packets using Scapy, and triggers alerts upon anomaly detection.',
    myContribution: [
      'Tested and integrated a Modbus/TCP industrial monitoring system streaming RPM, pressure, and flow sensor data.',
      'Used Scapy to sniff and inspect industrial network packets for malformed frames and protocol anomalies.',
      'Performed active bug fixing across the data ingestion pipeline and prepared rigorous test reports.',
      'Authored the project technical documentation and GitHub README explaining deployment, protocol specifications, and sensor thresholds.',
    ],
    keyFeatures: [
      'Real-time Modbus/TCP register polling for dual-pump systems (RPM, pressure, flow rate).',
      'Scapy packet inspection pipeline detecting unauthorized register writes and anomalous packet rates.',
      'Visual SCADA telemetry gauges and time-series graphs rendered through PyQt5 desktop widgets.',
      'Configurable alarm thresholding with instant status notifications for out-of-envelope operating parameters.',
    ],
    implementationDetails: [
      'Configured Modbus holding registers (e.g., 40001, 40102) to map physical sensor values with scaling factors.',
      'Integrated C++ performance routines with Python orchestration for real-time telemetry processing.',
      'Built automated test harnesses to simulate sensor pressure spikes, sudden RPM drops, and network dropouts.',
    ],
    resultsAndOutcomes: [
      'Successfully verified zero packet loss across continuous multi-hour test intervals under simulated industrial network loads.',
      'Delivered clean, maintainable open-source documentation enabling seamless reproducibility.',
      'Established practical competence in OT/ICS protocols and industrial cybersecurity standards.',
    ],
    metrics: [
      { label: 'Protocol', value: 'Modbus/TCP' },
      { label: 'Packet Inspection', value: 'Scapy' },
      { label: 'Telemetry Channels', value: 'RPM, Pressure, Flow' },
    ],
    githubUrl: 'https://github.com/Magisha19',
  },
  {
    id: 'two-stage-ids',
    title: 'A Secure-Driven Two Stage IDS for Reliable Detection of Minority Attack',
    subtitle: 'International Conference Research Paper (ICCET 2026)',
    category: 'Research',
    period: 'March 2026',
    image: getAssetUrl('/assets/projects/ids_architecture.jpg'),
    technologies: ['Machine Learning', 'Network Security', 'Intrusion Detection', 'Python', 'Data Preprocessing'],
    featured: true,
    overview:
      'Peer-reviewed research presented at the 14th International Conference on Contemporary Engineering and Technology (ICCET 2026) introducing a two-stage intrusion detection architecture designed specifically to address extreme class imbalance in network attack datasets.',
    problemStatement:
      'Standard machine-learning-based Intrusion Detection Systems (IDS) achieve high aggregate accuracy by correctly identifying benign and common attacks (majority classes) while catastrophically failing on rare, stealthy attacks (minority classes) such as U2R and R2L.',
    objective:
      'To design and evaluate a two-stage detection pipeline where Stage 1 filters out high-volume benign traffic and common anomalies, while Stage 2 employs targeted class-imbalance techniques to reliably detect minority network intrusions.',
    myContribution: [
      'Co-authored research methodology and contributed to network traffic data preprocessing and feature extraction.',
      'Analyzed minority attack distributions across benchmark intrusion datasets.',
      'Prepared research manuscript sections, data visualizations, and comparative performance analyses.',
      'Formally presented the research paper at ICCET 2026 in Chennai, India in March 2026.',
    ],
    keyFeatures: [
      'Two-Stage Architecture decoupling bulk anomaly screening from high-precision minority attack classification.',
      'Class-imbalance compensation focusing on rare exploit signatures and low-frequency network events.',
      'Streamlined feature extraction reducing dimensionality without degrading minority attack sensitivity.',
      'Integration blueprint for modern Security Operations Center (SOC) alert triage.',
    ],
    implementationDetails: [
      'Data preprocessing pipeline performing min-max scaling, one-hot encoding of categorical protocols, and feature selection.',
      'Evaluation protocols measuring Precision, Recall, and F1-score specifically on underrepresented minority classes.',
      'Conference presentation prepared and defended before academic and industry peers.',
    ],
    resultsAndOutcomes: [
      'Presented at the 14th International Conference on Contemporary Engineering and Technology (ICCET 2026).',
      'Organized by OSIET in collaboration with Samarkand State University (Uzbekistan) and Prince Shri Venkateshwara Padmavathy Engineering College.',
      'Validated that two-stage screening significantly reduces false positives while preserving detection sensitivity for rare intrusions.',
    ],
    metrics: [
      { label: 'Conference', value: 'ICCET 2026' },
      { label: 'Focus', value: 'Minority Attack Detection' },
      { label: 'Architecture', value: 'Two-Stage Pipeline' },
    ],
    paperConference: '14th International Conference on Contemporary Engineering and Technology (ICCET 2026)',
  },
  {
    id: 'smart-darshan',
    title: 'Smart Darshan',
    subtitle: 'Crowd Flow & Queue Monitoring System — Hackathon Finalist',
    category: 'Cybersecurity',
    period: 'June 2026',
    image: getAssetUrl('/assets/projects/smart_darshan.jpg'),
    technologies: ['Computer Vision', 'AI/ML', 'Python', 'Real-Time Telemetry', 'Safety Analytics'],
    featured: false,
    overview:
      'Finalist project at the TNSDC Naan Mudhalvan Advanced AI/ML Hackathon 2026 in partnership with Intel Digital Readiness, designing an automated crowd flow management, safety monitoring, and queue estimation system.',
    problemStatement:
      'Massive religious and cultural gatherings frequently experience dangerous crowd surges and unmonitored bottle-necks due to lack of real-time camera telemetry and predictive flow analytics.',
    objective:
      'To build an intelligent multi-camera monitoring prototype that detects crowd density spikes, computes queue wait times, and alerts safety administrators before bottlenecks reach critical levels.',
    myContribution: [
      'Contributed to data flow architecture and safety threshold alert logic.',
      'Participated in prototype development during the state-level hackathon held in Chennai on 18th June 2026.',
      'Defended technical implementation before jury from Intel Corporation and Tamil Nadu Skill Development Corporation.',
      'Awarded Finalist Recognition by Sr. Director Asia Pacific & Japan, Intel Corporation.',
    ],
    keyFeatures: [
      'Multi-camera visual feed ingestion with zone density estimation.',
      'Real-time pedestrian inflow/outflow metrics and estimated queue wait time computation.',
      'Color-coded risk alerting (Green / Orange / Red) for rapid security operations response.',
    ],
    implementationDetails: [
      'Designed camera zone mapping and automated alerts for bottleneck areas.',
      'Implemented real-time data streaming to monitoring dashboard.',
    ],
    resultsAndOutcomes: [
      'Selected as State Finalist out of hundreds of engineering teams across Tamil Nadu.',
      'Official Certificate of Achievement from Intel Digital Readiness and TNSDC Naan Mudhalvan.',
    ],
    metrics: [
      { label: 'Recognition', value: 'State Finalist' },
      { label: 'Partners', value: 'Intel + TNSDC' },
      { label: 'Domain', value: 'Computer Vision & Public Safety' },
    ],
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'marcello-tech',
    organization: 'Marcello Tech',
    role: 'Cyber Security Intern',
    duration: '05 Oct 2026 – 12 Oct 2026',
    type: 'Internship',
    workMode: 'On-site',
    responsibilities: [
      'Completed an intensive, hands-on internship programme focusing on core cybersecurity methodologies and security posture analysis.',
      'Practiced vulnerability assessment workflows, endpoint security diagnostics, and basic penetration testing procedures.',
      'Collaborated on practical security case studies exploring threat vectors in modern enterprise environments.',
    ],
    toolsAndTech: ['Security Assessment', 'Vulnerability Analysis', 'Linux', 'Network Utilities'],
    learningOutcomes: [
      'Deepened practical understanding of cybersecurity defensive and offensive fundamentals.',
      'Gained first-hand experience analyzing attack surfaces and applying remediations.',
    ],
    projectContributions:
      'Participated in hands-on cybersecurity labs and delivered end-of-internship findings report.',
    verified: true,
  },
  {
    id: 'infotact-solutions',
    organization: 'Infotact Solutions',
    role: 'Security Associate L1 Intern',
    duration: 'Jun 2026 – Aug 2026 (25/06/2026 – 25/08/2026)',
    type: 'Internship',
    workMode: 'Remote',
    responsibilities: [
      'Worked on security operations center (SOC) fundamentals, including security monitoring, log and event analysis, and initial incident triage.',
      'Utilized security diagnostic tools for network troubleshooting, anomaly tracking, and finding verification.',
      'Prepared thorough documentation of investigation findings, incident categorization, and recommended mitigation steps.',
    ],
    toolsAndTech: ['Security Monitoring', 'Log Analysis', 'Incident Handling', 'Wireshark', 'Nmap', 'TCP/IP'],
    learningOutcomes: [
      'Developed real-world competencies in L1 SOC procedures, SIEM concepts, and log parsing.',
      'Learned standard operating procedures for incident escalations and formal security documentation.',
    ],
    projectContributions:
      'Completed comprehensive Cyber Security training and two-month internship under Intelle QA Academy / DevsIndia, verified under Certificate ID: 21015d615686.',
    certificateImage: getAssetUrl('/assets/certificates/infointernce_page1.png'),
    verified: true,
  },
  {
    id: 'mastercard-forage',
    organization: 'Mastercard (via Forage)',
    role: 'Cybersecurity Job Simulation',
    duration: 'Jun 2026 (Completed June 16, 2026)',
    type: 'Job Simulation',
    workMode: 'Remote',
    responsibilities: [
      'Designed and executed an authentic phishing email simulation targeting common user vulnerabilities.',
      'Interpreted simulation metrics, open rates, and employee response patterns to measure security awareness.',
      'Formulated actionable recommendations for organizational security posture improvement.',
    ],
    toolsAndTech: ['Phishing Simulation', 'Social Engineering Analysis', 'Security Awareness', 'Risk Assessment'],
    learningOutcomes: [
      'Understood enterprise social engineering threat vectors and user vulnerability metrics.',
      'Learned how corporate security teams conduct proactive awareness campaigns.',
    ],
    projectContributions:
      'Completed practical tasks in phishing simulation design and data interpretation, verified by Forage and Mastercard.',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page14.png'),
    verified: true,
  },
  {
    id: 'e16-ai-xr',
    organization: 'E16 AI XR Technology (Naan Mudhalvan)',
    role: 'AI Intern',
    duration: 'Jan 2026 – Feb 2026 (21 Jan 2026 – 04 Feb 2026)',
    type: 'Virtual Internship',
    workMode: 'Remote',
    responsibilities: [
      'Applied artificial intelligence concepts to practical problem-solving tasks and algorithmic workflows.',
      'Constructed AI-based automation workflows and validated data pipeline integrations.',
      'Participated in guided virtual internship program supported by Tamil Nadu Skill Development Corporation (TNSDC).',
    ],
    toolsAndTech: ['Python', 'AI/ML Concepts', 'Workflow Automation', 'Data Pipelines'],
    learningOutcomes: [
      'Strengthened foundational AI workflow architecture and model deployment principles.',
      'Developed practical experience interfacing machine learning concepts with application software.',
    ],
    projectContributions:
      'Completed full virtual internship curriculum with Certificate E16A\\ICC\\2026\\180 signed by Director and XR Engineer.',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page17.png'),
    verified: true,
  },
  {
    id: 'mandalo-tech',
    organization: 'Mandalo Tech',
    role: 'Data Science Intern',
    duration: 'Jul 2025 – Aug 2025 (08 Jul 2025 – 07 Aug 2025)',
    type: 'Internship',
    workMode: 'On-site',
    location: 'Thiruvallur, Tamil Nadu',
    responsibilities: [
      'Performed data preprocessing, exploratory data analysis (EDA), and data visualization on real-world datasets.',
      'Assisted mentors in designing, developing, and testing data science project modules.',
      'Delivered analytical insights and visualizations supporting data-driven decision making.',
    ],
    toolsAndTech: ['Python', 'Data Preprocessing', 'Data Visualization', 'EDA', 'Statistical Analysis'],
    learningOutcomes: [
      'Mastered feature engineering, missing value imputation, and dataset normalization.',
      'Built data preparation groundwork later applied directly to network intrusion detection research.',
    ],
    projectContributions:
      'Awarded internship completion letter with "Excellent" performance assessment from Mandalo Tech leadership.',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page21.png'),
    verified: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cybersecurity & Security Operations',
    description: 'Foundational operational defense, monitoring, and triage capabilities aligned with L1 SOC roles.',
    iconName: 'Shield',
    skills: [
      { name: 'Security Monitoring', proficiency: 'Hands-on Experience', context: 'Practiced during Infotact L1 SOC internship' },
      { name: 'Log & Event Analysis', proficiency: 'Hands-on Experience', context: 'Syslog, access logs, and anomaly detection' },
      { name: 'Incident Handling & Triage', proficiency: 'Hands-on Experience', context: 'L1 triage protocols and alert escalation' },
      { name: 'Intrusion Detection (IDS)', proficiency: 'Hands-on Experience', context: 'Research published at ICCET 2026' },
      { name: 'Phishing Simulation', proficiency: 'Hands-on Experience', context: 'Mastercard job simulation project' },
      { name: 'Ethical Hacking Basics', proficiency: 'Working Knowledge', context: 'Nalaemton Infotech hands-on workshop' },
      { name: 'Vulnerability Management', proficiency: 'Working Knowledge', context: 'Asset risk identification and tracking' },
      { name: 'SIEM Fundamentals', proficiency: 'Currently Exploring', context: 'Deepening hands-on Splunk / Elastic SIEM labs' },
    ],
  },
  {
    title: 'Networking & Protocols',
    description: 'Deep understanding of network architectures, packets, and industrial communications.',
    iconName: 'Network',
    skills: [
      { name: 'TCP/IP Architecture', proficiency: 'Hands-on Experience', context: 'Packet flow, handshake, addressing' },
      { name: 'DNS & HTTP/HTTPS', proficiency: 'Hands-on Experience', context: 'Web traffic inspection and security' },
      { name: 'Wireshark', proficiency: 'Hands-on Experience', context: 'Packet capture and deep protocol inspection' },
      { name: 'Nmap', proficiency: 'Hands-on Experience', context: 'Port scanning and network discovery' },
      { name: 'Scapy', proficiency: 'Hands-on Experience', context: 'Custom packet crafting and inspection in VoltGuard' },
      { name: 'Modbus/TCP', proficiency: 'Hands-on Experience', context: 'Industrial SCADA equipment telemetry' },
      { name: 'Network Segmentation', proficiency: 'Working Knowledge', context: 'VLAN and DMZ isolation concepts' },
    ],
  },
  {
    title: 'AI & LLM Security',
    description: 'Pioneering safety testing, prompt-based evaluation, and adversarial robustness testing.',
    iconName: 'Cpu',
    skills: [
      { name: 'Prompt-Based Red Teaming', proficiency: 'Hands-on Experience', context: '36 prompts / 252 evaluation passes in NeuroFence' },
      { name: 'LLM Vulnerability Testing', proficiency: 'Hands-on Experience', context: 'Prompt injection and policy jailbreaks' },
      { name: 'Risk Categorization & Scoring', proficiency: 'Hands-on Experience', context: 'Severity matrix design for AI models' },
      { name: 'Large Language Models (LLMs)', proficiency: 'Working Knowledge', context: 'NPTEL IIT Madras certified (Score 56%)' },
      { name: 'AI & ML Fundamentals', proficiency: 'Working Knowledge', context: 'IBM SkillsBuild AI Fundamentals certified' },
      { name: 'AI Safety & Governance', proficiency: 'Currently Exploring', context: 'OWASP Top 10 for LLMs frameworks' },
    ],
  },
  {
    title: 'Programming & UI Development',
    description: 'Technical implementation, automation scripting, and desktop application engineering.',
    iconName: 'Code',
    skills: [
      { name: 'Python', proficiency: 'Hands-on Experience', context: 'Primary language for tools, data, and security scripts' },
      { name: 'PyQt5', proficiency: 'Hands-on Experience', context: 'Desktop UI for NeuroFence and VoltGuard' },
      { name: 'C / C++', proficiency: 'Working Knowledge', context: 'Systems programming & VoltGuard integrations' },
      { name: 'Java (Basic)', proficiency: 'Working Knowledge', context: 'Core object-oriented foundations' },
      { name: 'Shell / Bash Basics', proficiency: 'Working Knowledge', context: 'Command-line execution and automation' },
    ],
  },
  {
    title: 'Testing, Data & Systems',
    description: 'Rigorous empirical analysis, documentation, and operational environment handling.',
    iconName: 'CheckCircle',
    skills: [
      { name: 'Test Case Design', proficiency: 'Hands-on Experience', context: 'Structured test cases for AI models & OT' },
      { name: 'Failure & Root Cause Analysis', proficiency: 'Hands-on Experience', context: 'Issue documentation and mitigation' },
      { name: 'Data Preprocessing & EDA', proficiency: 'Hands-on Experience', context: 'Mandalo Tech data science internship' },
      { name: 'Git & GitHub', proficiency: 'Hands-on Experience', context: 'Version control and team collaboration' },
      { name: 'Linux & Windows', proficiency: 'Working Knowledge', context: 'Operating system security baselines' },
      { name: 'Cloud Computing', proficiency: 'Working Knowledge', context: 'NPTEL IIT Kharagpur certified' },
      { name: 'Internet of Things (IoT)', proficiency: 'Working Knowledge', context: 'NPTEL IIT Kharagpur certified' },
    ],
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cisco-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuingOrganization: 'Cisco Networking Academy',
    completionDate: '2026',
    category: 'Cybersecurity',
    image: getAssetUrl('/assets/certificates/magi_achieve_page19.png'),
    description:
      'Verified credential in global cybersecurity trends, threat detection, defense techniques, and organizational data protection.',
    tags: ['Cisco', 'Cybersecurity', 'Threat Analysis'],
  },
  {
    id: 'mastercard-sim',
    name: 'Cybersecurity Job Simulation',
    issuingOrganization: 'Mastercard (via Forage)',
    completionDate: 'June 16, 2026',
    category: 'Cybersecurity',
    credentialId: '6a2d8ca6671382cee4ced07d',
    image: getAssetUrl('/assets/certificates/magi_achieve_page14.png'),
    description:
      'Practical enterprise cybersecurity tasks designing a simulated phishing campaign and analyzing security awareness metrics.',
    verificationNote: 'Enrolment Verification Code: SM6utrXcS4tkporg2 | User: 6a2d8ca6671382cee4ced07d',
    tags: ['Mastercard', 'Forage', 'Phishing Simulation', 'Social Engineering'],
  },
  {
    id: 'infotact-internship',
    name: 'Certificate of Internship – Cyber Security',
    issuingOrganization: 'Infotact Solutions (DevsIndia)',
    completionDate: 'August 25, 2026',
    category: 'Cybersecurity',
    credentialId: '21015d615686',
    image: getAssetUrl('/assets/certificates/infointernce_page1.png'),
    description:
      'Awarded for successful completion of 2-month Cyber Security internship (25/06/2026 – 25/08/2026) covering security monitoring and log analysis.',
    verificationNote: 'Certificate ID: 21015d615686 | Employee ID: 416533401a11',
    tags: ['Infotact Solutions', 'SOC L1', 'Internship', 'ISO 9001:2015 Approved'],
  },
  {
    id: 'infotact-training',
    name: 'Certificate of Training – Cyber Security',
    issuingOrganization: 'Infotact Solutions (in partnership with Intelle QA Academy)',
    completionDate: 'August 25, 2026',
    category: 'Cybersecurity',
    credentialId: '21015d615686',
    image: getAssetUrl('/assets/certificates/infointern_page1.png'),
    description:
      'Comprehensive domain training in Cyber Security operations, troubleshooting tools, and project criteria.',
    tags: ['Infotact', 'Intelle QA Academy', 'Training'],
  },
  {
    id: 'simplilearn-cybercrime',
    name: 'Introduction to Cybercrime',
    issuingOrganization: 'Simplilearn SkillUp',
    completionDate: 'July 1, 2025',
    category: 'Cybersecurity',
    credentialId: '8553697',
    image: getAssetUrl('/assets/certificates/magi_achieve_page15.png'),
    description:
      'Foundational credential covering types of cybercrime, attack vectors, cyber laws, and defensive countermeasures.',
    verificationNote: 'Certificate Code: 8553697 | Signed by CEO Krishna Kumar',
    tags: ['Simplilearn', 'Cybercrime', 'Defense Basics'],
  },
  {
    id: 'unicef-cyber-safety',
    name: 'Digital Literacy and Cyber Safety',
    issuingOrganization: 'UNICEF YuWaah (Passport to Earning - P2E)',
    completionDate: 'October 10, 2026',
    score: '92%',
    category: 'Cybersecurity',
    image: getAssetUrl('/assets/certificates/aisectcert_page1.png'),
    description:
      'Completed comprehensive curriculum on digital hygiene, phishing prevention, authentication security, and cyber safety with a score of 92%.',
    verificationNote: 'Issued by Ms. Giorgia Varisco, Chief of Generation Unlimited (YuWaah), UNICEF',
    tags: ['UNICEF', 'YuWaah', 'Cyber Safety', 'Score 92%'],
  },
  {
    id: 'nptel-llm',
    name: 'Introduction to Large Language Models (LLMs)',
    issuingOrganization: 'NPTEL Swayam (IIT Madras / MoE Govt. of India)',
    completionDate: 'Jan–Apr 2026',
    score: '56%',
    category: 'AI & LLM',
    credentialId: 'NPTEL26CS88S251000169',
    image: getAssetUrl('/assets/certificates/magi_achieve_page13.png'),
    description:
      '12-week rigorous academic course on Large Language Models architecture, fine-tuning, transformer attention, and evaluation. Proctored exam completed.',
    verificationNote: 'Roll No: NPTEL26CS88S251000169 | 4 Academic Credits Recommended',
    tags: ['NPTEL', 'IIT Madras', 'LLMs', 'AI Safety'],
  },
  {
    id: 'unicef-digital-ai',
    name: 'Digital Productivity with AI',
    issuingOrganization: 'UNICEF YuWaah (Passport to Earning - P2E)',
    completionDate: 'October 10, 2026',
    score: '95%',
    category: 'AI & LLM',
    image: getAssetUrl('/assets/certificates/aisectcerts_page1.png'),
    description:
      'Certified proficiency in utilizing artificial intelligence tools for productivity and analytical automation with a score of 95%.',
    verificationNote: 'Issued by UNICEF Generation Unlimited (YuWaah)',
    tags: ['UNICEF', 'YuWaah', 'AI Productivity', 'Score 95%'],
  },
  {
    id: 'ibm-ai-fundamentals',
    name: 'Artificial Intelligence Fundamentals',
    issuingOrganization: 'IBM SkillsBuild',
    completionDate: 'July 22, 2025',
    category: 'AI & LLM',
    credentialId: '18f6b841-86bb-424a-9c96-10576ad34c7e',
    image: getAssetUrl('/assets/certificates/magi_achieve_page22.png'),
    description:
      'Verified IBM credential establishing core mastery of machine learning concepts, neural networks, computer vision, and NLP.',
    verificationNote: 'Credly verification badge: 18f6b841-86bb-424a-9c96-10576ad34c7e',
    tags: ['IBM', 'SkillsBuild', 'Credly Verified', 'AI Fundamentals'],
  },
  {
    id: 'e16-virtual-internship',
    name: 'Virtual Internship in AI Concepts & Workflows',
    issuingOrganization: 'E16 AI XR Technology (TNSDC Naan Mudhalvan)',
    completionDate: 'February 4, 2026',
    category: 'AI & LLM',
    credentialId: 'E16A\\ICC\\2026\\180',
    image: getAssetUrl('/assets/certificates/magi_achieve_page17.png'),
    description:
      'Government of Tamil Nadu Naan Mudhalvan programme virtual internship exploring practical AI concepts and automation.',
    tags: ['Naan Mudhalvan', 'TNSDC', 'E16 AI', 'Internship'],
  },
  {
    id: 'nptel-cloud-computing',
    name: 'Cloud Computing',
    issuingOrganization: 'NPTEL Swayam (IIT Kharagpur / MoE Govt. of India)',
    completionDate: 'Jan–Apr 2025',
    score: '47%',
    category: 'Cloud & IoT',
    credentialId: 'NPTEL25CS11S943311993',
    image: getAssetUrl('/assets/certificates/magi_achieve_page12.png'),
    description:
      '12-week academic course covering virtualization, cloud storage, service models (IaaS/PaaS/SaaS), distributed systems, and resource scheduling.',
    verificationNote: 'Roll No: NPTEL25CS11S943311993 | 3 or 4 Credits Recommended',
    tags: ['NPTEL', 'IIT Kharagpur', 'Cloud Computing'],
  },
  {
    id: 'nptel-iot',
    name: 'Introduction to Internet of Things',
    issuingOrganization: 'NPTEL Swayam (IIT Kharagpur / MoE Govt. of India)',
    completionDate: 'Jul–Oct 2025',
    score: '50%',
    category: 'Cloud & IoT',
    credentialId: 'NPTEL25CS147S1054004772',
    image: getAssetUrl('/assets/certificates/magi_achieve_page20.png'),
    description:
      '12-week course covering IoT sensor architectures, embedded communications, protocols, and edge compute integration.',
    verificationNote: 'Roll No: NPTEL25CS147S1054004772 | 3 or 4 Credits Recommended',
    tags: ['NPTEL', 'IIT Kharagpur', 'IoT', 'Embedded Systems'],
  },
  {
    id: 'academic-excellence-2nd-rank',
    name: 'Certificate of Academic Excellence (2nd Rank)',
    issuingOrganization: 'Sriram Engineering College',
    completionDate: 'Academic Year 2024–2025',
    category: 'Academic & Honors',
    image: getAssetUrl('/assets/certificates/magi_achieve_page2.png'),
    description:
      'Awarded 2nd Rank among Academic Toppers in the Cyber Security Department for outstanding scholastic performance and commitment.',
    verificationNote: 'Signed by Principal Dr. B.R. Ramesh Bapu & Convener Dr. G. Suganya',
    tags: ['2nd Rank', 'Department Topper', 'Academic Excellence'],
  },
  {
    id: 'intel-hackathon-finalist',
    name: 'Finalist – TNSDC Naan Mudhalvan Advanced AI/ML Hackathon 2026',
    issuingOrganization: 'Intel Digital Readiness & Government of Tamil Nadu',
    completionDate: 'June 18, 2026',
    category: 'Academic & Honors',
    credentialId: 'AI4FWATNSDC180626021',
    image: getAssetUrl('/assets/certificates/magi_achieve_page1.png'),
    description:
      'Recognized as State Finalist for project Smart Darshan in Chennai, Tamil Nadu on 18th June 2026.',
    verificationNote: 'Signed by Shweta Khurana, Sr. Director – Asia Pacific & Japan, Intel Corporation',
    tags: ['Intel', 'TNSDC', 'State Finalist', 'Hackathon'],
  },
  {
    id: 'iccet-research-paper',
    name: 'Certificate of Presentation – ICCET 2026 International Conference',
    issuingOrganization: 'OSIET & Samarkand State University, Uzbekistan',
    completionDate: 'March 22–23, 2026',
    category: 'Academic & Honors',
    image: getAssetUrl('/assets/certificates/magi_achieve_page16.png'),
    description:
      'Presented research paper: "A Secure-Driven Two Stage IDS for Reliable Detection of Minority Attack" at the 14th ICCET 2026.',
    verificationNote: 'Held at Prince Shri Venkateshwara Padmavathy Engineering College, Chennai',
    tags: ['ICCET 2026', 'Research Paper', 'Intrusion Detection', 'International'],
  },
  {
    id: 'rmk-symposium-first-place',
    name: 'First Place – CyberXelerate 2.0 National Level Symposium',
    issuingOrganization: 'R.M.K. College of Engineering and Technology',
    completionDate: 'March 17, 2025',
    category: 'Academic & Honors',
    image: getAssetUrl('/assets/certificates/magi_achieve_page9.png'),
    description:
      'Secured 1st Place in the Pencilvania event organized by the Department of Computer Science & Engineering (Cyber Security).',
    tags: ['1st Place', 'Symposium', 'RMKCET'],
  },
  {
    id: 'pen-testing-workshop',
    name: 'Hands-on Workshop on Penetration Testing',
    issuingOrganization: 'Sriram Engineering College & Nalaemton Infotech',
    completionDate: 'March 22, 2025',
    category: 'Cybersecurity',
    image: getAssetUrl('/assets/certificates/magi_achieve_page5.png'),
    description:
      'Hands-on workshop conducted in association with Mr. S. Nalaemton, Cyber Security Consultant at TCS Chennai.',
    tags: ['Penetration Testing', 'TCS Consultant', 'Workshop'],
  },
  {
    id: 'mandalo-completion-letter',
    name: 'Data Science Internship Completion Letter',
    issuingOrganization: 'Mandalo Tech',
    completionDate: 'August 7, 2025',
    category: 'Professional Skills',
    image: getAssetUrl('/assets/certificates/magi_achieve_page21.png'),
    description:
      'Official letter certifying successful completion of Data Science internship with "Excellent" performance evaluation.',
    tags: ['Mandalo Tech', 'Data Science', 'Recommendation'],
  },
  {
    id: 'ibm-customer-problem-solving',
    name: 'Customer Engagement: Problem Solving & Process Controls',
    issuingOrganization: 'IBM SkillsBuild',
    completionDate: 'July 23, 2025',
    category: 'Professional Skills',
    credentialId: '6957562-f4b7-43d6-857e-14a7e845d2cc',
    image: getAssetUrl('/assets/certificates/magi_achieve_page24.png'),
    description:
      'Professional certification demonstrating problem-solving methodologies and structured process controls.',
    tags: ['IBM', 'Process Controls', 'Problem Solving'],
  },
  {
    id: 'msme-entrepreneurship',
    name: 'Entrepreneurship in Education: Building Future Leaders',
    issuingOrganization: 'Ministry of MSME, Govt. of India (CITD Hyderabad)',
    completionDate: 'January 24, 2026',
    category: 'Professional Skills',
    credentialId: 'EAP/2025-26/1',
    image: getAssetUrl('/assets/certificates/magi_achieve_page11.png'),
    description:
      'One Day Entrepreneurship Awareness Programme organized by Central Institute of Tool Design (CITD) Hyderabad Extension Centre.',
    tags: ['MSME', 'Govt of India', 'Leadership'],
  },
];

export const EDUCATION_DATA: EducationRecord[] = [
  {
    id: 'b-e-cybersecurity',
    degree: 'B.E. Computer Science and Engineering (Cyber Security)',
    institution: 'Sriram Engineering College',
    location: 'Perumalpattu, Chennai, Tamil Nadu',
    duration: '2023 – Expected June 2027',
    score: '8.7',
    scoreLabel: 'CGPA',
    status: 'In Progress',
    highlights: [
      'Second Rank Topper in Cyber Security Department (Academic Excellence Award 2024–2025).',
      'Specialized coursework in Network Security, Cryptography, Intrusion Detection, Secure Coding, and Operating Systems.',
      'Active member and coordinator in college technical symposiums and women empowerment cell initiatives.',
      'Conducted independent research resulting in peer-reviewed international conference publication at ICCET 2026.',
    ],
    relevantCoursework: [
      'Network Security & Cryptography',
      'Intrusion Detection & Prevention Systems',
      'Database Management Systems & SQL',
      'Data Structures & Algorithms',
      'Operating Systems & Linux Kernel',
      'Object-Oriented Programming (Python, C++)',
      'Cloud Computing & Distributed Systems',
      'Internet of Things (IoT) Security',
    ],
  },
  {
    id: 'hsc-12th',
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Government Higher Secondary School',
    location: 'Maddur, Tiruttani, Tamil Nadu',
    duration: 'March 2023',
    status: 'Completed',
    highlights: [
      'Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science.',
      'Developed early passion for computer hardware, networking concepts, and algorithmic logic.',
    ],
  },
  {
    id: 'sslc-10th',
    degree: 'Secondary School Leaving Certificate (10th Grade)',
    institution: 'Government Higher Secondary School',
    location: 'Maddur, Tiruttani, Tamil Nadu',
    duration: 'March 2021',
    status: 'Completed',
    highlights: [
      'Graduated with strong distinction across core sciences and mathematics.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Academic Excellence Award – 2nd Rank Topper',
    organization: 'Sriram Engineering College (Cyber Security Dept.)',
    date: 'Academic Year 2024–2025',
    rankOrHonor: 'Department 2nd Rank',
    description:
      'Awarded for outstanding scholastic standing, dedication, and exemplary academic commitment across core cybersecurity engineering courses.',
    category: 'Academic',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page2.png'),
  },
  {
    title: 'State Finalist – Advanced AI/ML Hackathon 2026',
    organization: 'Intel Digital Readiness & TNSDC Naan Mudhalvan',
    date: 'June 18, 2026',
    rankOrHonor: 'State Finalist',
    description:
      'Recognized for developing Smart Darshan, an automated computer vision crowd monitoring and queue estimation system.',
    category: 'Hackathon',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page1.png'),
  },
  {
    title: '1st Place – Pencilvania (CyberXelerate 2.0)',
    organization: 'R.M.K. College of Engineering and Technology',
    date: 'March 17, 2025',
    rankOrHonor: 'First Place',
    description:
      'Secured 1st Place in the Pencilvania event at the National Level Technical Symposium organized by CSE Cyber Security Department.',
    category: 'Competition',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page9.png'),
  },
  {
    title: 'Winner – Escape Room Event',
    organization: 'Chennai Institute of Technology (CIT College)',
    date: '2025',
    rankOrHonor: 'Winner',
    description:
      'Demonstrated rapid cryptographic problem solving, clue decryption, and logical deduction under time constraints.',
    category: 'Competition',
  },
  {
    title: 'Paper Presentation at EdgeExplore’25',
    organization: 'SIMATS Engineering, Thandalam',
    date: 'March 8, 2025',
    rankOrHonor: 'Technical Presenter',
    description:
      'Participated in One Day Technical Paper Presentation organized by the Department of Edge Computing.',
    category: 'Academic',
    certificateImage: getAssetUrl('/assets/certificates/magi_achieve_page6.png'),
  },
];
