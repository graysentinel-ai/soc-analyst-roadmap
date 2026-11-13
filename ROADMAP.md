# GraySentinel SOC Analyst Learning Roadmap

**From Cybersecurity Foundations to Practical Defensive Security**

**Philosophy: Proof Over Certificates.**

---

## 1. Roadmap Overview

The GraySentinel SOC Analyst Roadmap provides a structured learning journey for individuals who want to develop practical cybersecurity and defensive security capabilities.

The roadmap progresses through eight learning modules, supported by eight practical labs, technical investigations and portfolio development.

The objective is not simply to complete learning material.

The objective is to understand cybersecurity concepts, apply practical knowledge and demonstrate technical work through documented evidence.

### Learning Framework

**Learn → Practise → Investigate → Document → Build Your Portfolio**

---

## 2. Roadmap Structure

The learning journey is divided into four stages.

| Stage | Focus | Modules |
|---|---|---|
| Stage 01 | Technical Foundations | 01–02 |
| Stage 02 | Security Knowledge | 03–04 |
| Stage 03 | Defensive Security | 05–06 |
| Stage 04 | Access and Detection | 07–08 |

Each stage builds on the knowledge and capabilities developed in the previous stage.

---

## 3. Stage 01: Technical Foundations

**Objective:** Understand how computer systems communicate and operate.

### Module 01: Networking Foundations

Directory: [`modules/01-networking/`](./modules/01-networking/)

Learning areas:

- Networking fundamentals.
- TCP/IP architecture.
- OSI model.
- IP addressing and subnetting.
- DNS and DHCP.
- Common network protocols.
- Ports and services.
- Basic network traffic analysis.

**Expected capability:**

Understand basic network communication and interpret common network activity.

**Related Practical Lab:**

[Lab 01: Network Traffic Analysis](./labs/01-network-traffic-analysis/)

### Module 02: Operating Systems

Directory: [`modules/02-operating-systems/`](./modules/02-operating-systems/)

Learning areas:

- Linux fundamentals.
- Windows fundamentals.
- Users and permissions.
- Processes and services.
- File systems.
- System administration.
- Operating system events.
- Basic command-line operations.

**Expected capability:**

Understand how operating systems function and identify important system-level information.

**Related Practical Lab:**

[Lab 02: Operating System Investigation](./labs/02-operating-system-investigation/)

---

## 4. Stage 02: Security Knowledge

**Objective:** Understand common security problems and learn how to investigate security-related information.

### Module 03: Security Fundamentals

Directory: [`modules/03-security-fundamentals/`](./modules/03-security-fundamentals/)

Learning areas:

- Information security principles.
- Confidentiality, Integrity and Availability.
- Threats and vulnerabilities.
- Common attack types.
- Security controls.
- Risk fundamentals.
- Indicators of Compromise.
- Defensive security principles.

**Expected capability:**

Understand common cybersecurity threats and the fundamentals of protecting systems and information.

**Related Practical Lab:**

[Lab 03: Security Event Analysis](./labs/03-security-event-analysis/)

### Module 04: Log Analysis

Directory: [`modules/04-log-analysis/`](./modules/04-log-analysis/)

Learning areas:

- Log fundamentals.
- Windows event logs.
- Linux system logs.
- Authentication events.
- Event timestamps.
- Log filtering and searching.
- Event correlation.
- Investigation timelines.

**Expected capability:**

Read security events, identify unusual activity and document investigation findings.

**Related Practical Labs:**

- [Lab 03: Security Event Analysis](./labs/03-security-event-analysis/)
- [Lab 06: Identity and Access Investigation](./labs/06-identity-access-investigation/)
- [Lab 07: SIEM Alert Triage](./labs/07-siem-alert-triage/)

---

## 5. Stage 03: Defensive Security

**Objective:** Understand how organizations protect networks and endpoints.

### Module 05: Network Security

Directory: [`modules/05-network-security/`](./modules/05-network-security/)

Learning areas:

- Network security fundamentals.
- Firewall concepts.
- Network segmentation.
- Packet inspection.
- Network monitoring.
- Intrusion detection concepts.
- Secure network configuration.
- Network threat investigation.

**Expected capability:**

Understand network security controls and investigate suspicious network activity.

**Related Practical Labs:**

- [Lab 01: Network Traffic Analysis](./labs/01-network-traffic-analysis/)
- [Lab 04: Network Security Investigation](./labs/04-network-security-investigation/)

### Module 06: Endpoint Security

Directory: [`modules/06-endpoint-security/`](./modules/06-endpoint-security/)

Learning areas:

- Endpoint security fundamentals.
- Endpoint protection.
- Process monitoring.
- Windows and Linux endpoint events.
- Suspicious process activity.
- Endpoint detection concepts.
- Malware behaviour fundamentals.
- Endpoint investigation.

**Expected capability:**

Understand endpoint activity and identify behaviour that may require security investigation.

**Related Practical Lab:**

[Lab 05: Endpoint Investigation](./labs/05-endpoint-investigation/)

---

## 6. Stage 04: Access and Detection

**Objective:** Develop knowledge of identity security and security detection development.

### Module 07: Identity & Access Management

Directory: [`modules/07-identity-access-management/`](./modules/07-identity-access-management/)

Learning areas:

- Identity fundamentals.
- Authentication and authorization.
- Access control models.
- User lifecycle management.
- Multi-factor authentication.
- Privileged access management.
- Identity security risks.
- Access reviews and auditing.

**Expected capability:**

Understand how identities and permissions are managed and identify common access-related security risks.

**Related Practical Lab:**

[Lab 06: Identity and Access Investigation](./labs/06-identity-access-investigation/)

### Module 08: Detection Engineering

Directory: [`modules/08-detection-engineering/`](./modules/08-detection-engineering/)

Learning areas:

- Detection engineering fundamentals.
- Security telemetry.
- Detection development lifecycle.
- MITRE ATT&CK mapping.
- Sigma detection rules.
- SIEM query development.
- False-positive analysis.
- Detection documentation.

**Expected capability:**

Understand and develop basic security detection logic and explain how detection rules identify potentially suspicious activity.

**Related Practical Labs:**

- [Lab 07: SIEM Alert Triage](./labs/07-siem-alert-triage/)
- [Lab 08: Detection Engineering](./labs/08-detection-engineering/)

---

## 7. Practical Learning and Lab Execution

Learning concepts should be supported by practical exercises.

The repository provides eight practical labs covering important SOC investigation activities.

### Available Practical Labs

| No. | Practical Lab | Learning Focus | Directory |
|---|---|---|---|
| 01 | Network Traffic Analysis | Packet and protocol investigation | [Open Lab](./labs/01-network-traffic-analysis/) |
| 02 | Operating System Investigation | Linux system information and authentication logs | [Open Lab](./labs/02-operating-system-investigation/) |
| 03 | Security Event Analysis | Security events and authentication patterns | [Open Lab](./labs/03-security-event-analysis/) |
| 04 | Network Security Investigation | Firewall and network connection analysis | [Open Lab](./labs/04-network-security-investigation/) |
| 05 | Endpoint Investigation | Process and endpoint activity | [Open Lab](./labs/05-endpoint-investigation/) |
| 06 | Identity and Access Investigation | Authentication and account activity | [Open Lab](./labs/06-identity-access-investigation/) |
| 07 | SIEM Alert Triage | Alert analysis and prioritization | [Open Lab](./labs/07-siem-alert-triage/) |
| 08 | Detection Engineering | Sigma detection rules | [Open Lab](./labs/08-detection-engineering/) |

### Practical Learning Workflow

| Step | Activity | Outcome |
|---|---|---|
| 01 | Understand the scenario | Problem identification |
| 02 | Review the required resources | Preparation |
| 03 | Complete the exercise | Practical experience |
| 04 | Analyse observations | Technical understanding |
| 05 | Document findings | Investigation record |
| 06 | Prepare relevant artifacts | Portfolio material |
| 07 | Review the outcome | Identified improvements |

### Practical Resources

Depending on the exercise, learners may work with:

- Synthetic security datasets.
- Network packet captures.
- Linux investigation scripts.
- Firewall logs.
- Endpoint event records.
- Identity and authentication records.
- SIEM alert datasets.
- Sigma detection rules.

All practical activities must use authorized systems, controlled environments or supplied educational datasets.

For the complete lab directory, visit [`labs/README.md`](./labs/README.md).

---

## 8. Portfolio Development

A technical portfolio should demonstrate practical work rather than simply list completed courses.

Learners can use the practical labs in this repository as the foundation for developing their cybersecurity portfolios.

### Suggested Portfolio Projects

| No. | Project | Related Lab | Skills |
|---|---|---|---|
| 01 | Network Traffic Analysis | Lab 01 | Networking and packet analysis |
| 02 | Operating System Investigation | Lab 02 | Linux and system investigation |
| 03 | Security Event Investigation | Lab 03 | Security log analysis |
| 04 | Network Security Investigation | Lab 04 | Firewall and network defence |
| 05 | Endpoint Activity Investigation | Lab 05 | Endpoint monitoring |
| 06 | Identity Access Investigation | Lab 06 | IAM and authentication |
| 07 | SIEM Alert Triage | Lab 07 | Security monitoring and alert analysis |
| 08 | Detection Rule Development | Lab 08 | Sigma and detection engineering |

### Portfolio Evidence

As learners complete their practical work, they can organize relevant artifacts such as:

- Source files and scripts.
- Sanitized datasets.
- Configuration files.
- Investigation notes.
- Detection rules.
- Query results.
- Screenshots with explanations.
- Technical findings.
- Final investigation reports.

### Suggested Portfolio Structure

```text
cybersecurity-portfolio/
│
├── README.md
│
├── 01-network-analysis/
│   ├── README.md
│   ├── evidence/
│   └── report.md
│
├── 02-system-investigation/
│   ├── README.md
│   ├── evidence/
│   └── report.md
│
├── 03-security-event-analysis/
│   ├── README.md
│   └── report.md
│
├── 04-network-security/
│   ├── README.md
│   └── report.md
│
├── 05-endpoint-investigation/
│   ├── README.md
│   └── report.md
│
├── 06-identity-access/
│   ├── README.md
│   └── report.md
│
├── 07-siem-alert-triage/
│   ├── README.md
│   └── report.md
│
└── 08-detection-engineering/
    ├── README.md
    └── rules/
```

This is a suggested organization for an individual learner's portfolio, not an additional directory structure required inside this repository.

---

## 9. Assessment and Skill Development

Knowledge assessments help evaluate conceptual understanding.

Practical exercises help learners apply their knowledge and develop technical reasoning.

### Assessment Areas

| Area | Learning Focus |
|---|---|
| Technical Understanding | Understanding core concepts |
| Practical Execution | Performing assigned activities |
| Investigation | Interpreting technical evidence |
| Problem Solving | Identifying and explaining issues |
| Documentation | Organizing technical findings |
| Evidence Quality | Supporting conclusions with relevant artifacts |

### Learning Completion Criteria

Learners should aim to demonstrate:

- Understanding of the module objectives.
- Completion of relevant practical exercises.
- Ability to explain their investigation methodology.
- Clear documentation of findings.
- Understanding of limitations and uncertainties.
- Ability to communicate technical observations.

Completing a module or reading a learning resource alone does not establish practical competency.

---

## 10. Recommended Learning Progress

Follow this sequence:

| Milestone | Required Learning |
|---|---|
| 01 | Networking Foundations |
| 02 | Operating Systems |
| 03 | Security Fundamentals |
| 04 | Log Analysis |
| 05 | Network Security |
| 06 | Endpoint Security |
| 07 | Identity & Access Management |
| 08 | Detection Engineering |
| 09 | Complete relevant practical labs |
| 10 | Organize investigation findings |
| 11 | Build a cybersecurity portfolio |

Progress should be based on learning and completed work rather than time spent reading.

No fixed completion duration or employment outcome is guaranteed.

---

## 11. Recommended Learning Resources

Use official documentation and reputable resources alongside the modules.

- [MITRE ATT&CK](https://attack.mitre.org/)
- [OWASP](https://owasp.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [Wireshark Documentation](https://www.wireshark.org/docs/)
- [Microsoft Learn](https://learn.microsoft.com/)
- [Sigma](https://sigmahq.io/)
- [Linux Kernel Documentation](https://docs.kernel.org/)

Additional references are maintained in [`RESOURCES.md`](./RESOURCES.md).

---

## 12. Responsible Learning and Security

All practical cybersecurity activities must be performed responsibly.

- Work only on systems you own or have explicit authorization to assess.
- Use isolated and controlled lab environments.
- Do not access unauthorized systems or information.
- Never publish credentials, API keys or private data.
- Follow the defined scope of every exercise.
- Handle security evidence carefully.
- Report discovered vulnerabilities responsibly.

Read the [Security Policy](./SECURITY.md) for reporting procedures.

---

## 13. Repository Navigation

| Resource | Location |
|---|---|
| Main Introduction | [README.md](./README.md) |
| Learning Modules | [modules/README.md](./modules/README.md) |
| Practical Labs | [labs/README.md](./labs/README.md) |
| Learning Resources | [RESOURCES.md](./RESOURCES.md) |
| Website | [index.html](./index.html) |
| Contribution Guidelines | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| Code of Conduct | [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) |
| Security Policy | [SECURITY.md](./SECURITY.md) |

### Learning Modules

1. [Networking Foundations](./modules/01-networking/)
2. [Operating Systems](./modules/02-operating-systems/)
3. [Security Fundamentals](./modules/03-security-fundamentals/)
4. [Log Analysis](./modules/04-log-analysis/)
5. [Network Security](./modules/05-network-security/)
6. [Endpoint Security](./modules/06-endpoint-security/)
7. [Identity & Access Management](./modules/07-identity-access-management/)
8. [Detection Engineering](./modules/08-detection-engineering/)

---

## 14. About GraySentinel

**GraySentinel Cyber Defence Lab**

**Philosophy: Proof Over Certificates.**

GraySentinel focuses on practical cybersecurity capability, evidence-based evaluation and transparent skill validation.

We believe that technical capability should be demonstrated through actual work, verifiable evidence and the ability to explain technical decisions.

Website: https://cyberdefencelab.co.in

Explore Programmes: https://cyberdefencelab.co.in/tracks

Free Skill Check: https://form.svhrt.com/69ce8645001e39939d471236

Proof Score: https://cyberdefencelab.co.in/proof-score

---

**Learn Together. Build Together. Prove Together.**

*GraySentinel Cyber Defence Lab*

*Practical Cybersecurity. Verifiable Capability.*
