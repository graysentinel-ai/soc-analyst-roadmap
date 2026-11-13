# GraySentinel SOC Analyst Learning Roadmap

**From Cybersecurity Foundations to Practical Defensive Security**

**Philosophy: Proof Over Certificates.**

---

## 1. Roadmap Overview

The GraySentinel SOC Analyst Roadmap provides a structured learning journey for individuals who want to develop practical cybersecurity and defensive security capabilities.

The roadmap progresses through eight learning modules, supported by practical exercises, technical investigations, assessments and portfolio development.

The objective is not simply to complete learning material.

The objective is to demonstrate what you understand, what you can execute and what evidence supports your work.

### Learning Framework

**Learn → Practise → Investigate → Document → Validate → Build Your Portfolio**

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

Directory: `modules/01-networking/`

Learning areas:

- Networking fundamentals.
- TCP/IP architecture.
- OSI model.
- IP addressing and subnetting.
- DNS and DHCP.
- Common network protocols.
- Ports and services.
- Basic network traffic analysis.

Expected capability:

Understand basic network communication and interpret common network activity.

### Module 02: Operating Systems

Directory: `modules/02-operating-systems/`

Learning areas:

- Linux fundamentals.
- Windows fundamentals.
- Users and permissions.
- Processes and services.
- File systems.
- System administration.
- Operating system events.
- Basic command-line operations.

Expected capability:

Understand how operating systems function and identify important system-level information.

---

## 4. Stage 02: Security Knowledge

**Objective:** Understand common security problems and learn how to investigate security-related information.

### Module 03: Security Fundamentals

Directory: `modules/03-security-fundamentals/`

Learning areas:

- Information security principles.
- Confidentiality, Integrity and Availability.
- Threats and vulnerabilities.
- Common attack types.
- Security controls.
- Risk fundamentals.
- Indicators of Compromise.
- Defensive security principles.

Expected capability:

Understand common cybersecurity threats and the fundamentals of protecting systems and information.

### Module 04: Log Analysis

Directory: `modules/04-log-analysis/`

Learning areas:

- Log fundamentals.
- Windows event logs.
- Linux system logs.
- Authentication events.
- Event timestamps.
- Log filtering and searching.
- Event correlation.
- Investigation timelines.

Expected capability:

Read security events, identify unusual activity and document investigation findings.

---

## 5. Stage 03: Defensive Security

**Objective:** Understand how organizations protect networks and endpoints.

### Module 05: Network Security

Directory: `modules/05-network-security/`

Learning areas:

- Network security fundamentals.
- Firewall concepts.
- Network segmentation.
- Packet inspection.
- Network monitoring.
- Intrusion detection concepts.
- Secure network configuration.
- Network threat investigation.

Expected capability:

Understand network security controls and investigate suspicious network activity.

### Module 06: Endpoint Security

Directory: `modules/06-endpoint-security/`

Learning areas:

- Endpoint security fundamentals.
- Endpoint protection.
- Process monitoring.
- Windows and Linux endpoint events.
- Suspicious process activity.
- Endpoint detection concepts.
- Malware behaviour fundamentals.
- Endpoint investigation.

Expected capability:

Understand endpoint activity and identify behaviour that may require security investigation.

---

## 6. Stage 04: Access and Detection

**Objective:** Develop knowledge of identity security and security detection development.

### Module 07: Identity & Access Management

Directory: `modules/07-identity-access-management/`

Learning areas:

- Identity fundamentals.
- Authentication and authorization.
- Access control models.
- User lifecycle management.
- Multi-factor authentication.
- Privileged access management.
- Identity security risks.
- Access reviews and auditing.

Expected capability:

Understand how identities and permissions are managed and identify common access-related security risks.

### Module 08: Detection Engineering

Directory: `modules/08-detection-engineering/`

Learning areas:

- Detection engineering fundamentals.
- Security telemetry.
- Detection development lifecycle.
- MITRE ATT&CK mapping.
- Sigma detection rules.
- SIEM query development.
- False-positive analysis.
- Detection validation and documentation.

Expected capability:

Develop, test, explain and document basic security detection logic.

---

## 7. Practical Learning and Lab Execution

Learning concepts should be supported by practical execution.

The Labs directory provides the foundation for hands-on exercises.

Directory: `labs/`

Every practical exercise should define:

1. Scenario and security context.
2. Learning objective.
3. Required tools and environment.
4. Execution instructions.
5. Expected observations.
6. Evidence requirements.
7. Evaluation criteria.

### Practical Learning Workflow

| Step | Activity | Outcome |
|---|---|---|
| 01 | Understand the scenario | Problem identification |
| 02 | Prepare the environment | Ready-to-use lab |
| 03 | Execute the exercise | Practical experience |
| 04 | Analyse observations | Technical understanding |
| 05 | Capture evidence | Verifiable artifacts |
| 06 | Document findings | Investigation report |
| 07 | Review results | Identified improvements |

Practical exercises must use authorized systems, isolated environments or synthetic datasets.

---

## 8. Portfolio Development

A technical portfolio should demonstrate practical work rather than simply list completed courses.

As learners progress, they should build projects demonstrating their knowledge.

### Suggested Portfolio Projects

These are proposed project directions. Individual project instructions and directories will be developed separately.

| No. | Project | Related Skills |
|---|---|---|
| 01 | Network Traffic Analysis | Networking and packet analysis |
| 02 | Operating System Investigation | Linux and Windows |
| 03 | Security Log Investigation | Log analysis |
| 04 | Network Security Review | Network defence |
| 05 | Endpoint Activity Investigation | Endpoint monitoring |
| 06 | Identity Access Review | IAM and access control |
| 07 | SIEM Detection Development | SIEM queries |
| 08 | Detection Rule Validation | Sigma and detection engineering |

### Portfolio Evidence

Each project should contain relevant artifacts such as:

- Source files and scripts.
- Sanitized datasets.
- Configuration files.
- Investigation notes.
- Detection rules.
- Query results.
- Screenshots with explanations.
- Testing documentation.
- Final technical reports.

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
├── 03-log-investigation/
│   ├── README.md
│   ├── datasets/
│   └── report.md
│
├── 04-network-security/
│
├── 05-endpoint-investigation/
│
├── 06-identity-access-review/
│
├── 07-siem-detection/
│
└── 08-detection-validation/
```

This is a suggested portfolio organization, not an existing directory structure in this repository.

---

## 9. Assessment and Skill Validation

Knowledge assessments help evaluate conceptual understanding.

Practical submissions help evaluate execution and technical reasoning.

Both are important.

### Assessment Areas

| Area | Evaluation Focus |
|---|---|
| Technical Understanding | Understanding of core concepts |
| Practical Execution | Ability to perform assigned activities |
| Investigation | Ability to interpret technical evidence |
| Problem Solving | Ability to identify and explain issues |
| Documentation | Quality and clarity of reports |
| Evidence Quality | Authenticity and reproducibility |

### Completion Criteria

A learner should demonstrate:

- Understanding of the module objectives.
- Completion of required exercises.
- Relevant supporting evidence.
- Ability to explain the methodology.
- Understanding of findings and limitations.
- Completion of applicable assessments.

Completing a module or passing a knowledge quiz alone does not establish practical competency.

---

## 10. Recommended Learning Progress

Follow this sequence:

| Milestone | Required Work |
|---|---|
| Milestone 01 | Complete Networking Foundations |
| Milestone 02 | Complete Operating Systems |
| Milestone 03 | Complete Security Fundamentals |
| Milestone 04 | Complete Log Analysis |
| Milestone 05 | Complete Network Security |
| Milestone 06 | Complete Endpoint Security |
| Milestone 07 | Complete Identity & Access Management |
| Milestone 08 | Complete Detection Engineering |
| Milestone 09 | Execute relevant practical labs |
| Milestone 10 | Build and document portfolio projects |
| Milestone 11 | Review assessments and practical evidence |

Progress should be based on completed work and reviewed evidence rather than time spent reading.

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

Additional references are maintained in [RESOURCES.md](./RESOURCES.md).

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
| Contribution Guidelines | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| Code of Conduct | [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) |
| Security Policy | [SECURITY.md](./SECURITY.md) |

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
