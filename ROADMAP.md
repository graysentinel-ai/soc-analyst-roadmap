
# GraySentinel SOC Analyst Roadmap

**Security Skills. Shown, Not Claimed.**

A structured, practical learning roadmap for developing foundational and intermediate Security Operations Centre (SOC) capabilities.

Maintained by **GraySentinel Cyber Defence Lab**.

---

# 1. About This Roadmap

A Security Operations Centre (SOC) helps an organisation monitor its digital environment, identify suspicious activity, investigate security alerts and coordinate incident response.

A SOC Analyst works with security events, logs, network activity, endpoint information and security monitoring tools to understand potential threats.

This roadmap provides a structured learning sequence for people who want to understand defensive cybersecurity and develop practical SOC investigation skills.

The roadmap moves through eight learning modules:

1. Networking Foundations
2. Operating Systems
3. Security Fundamentals
4. Log Analysis
5. SOC Operations
6. SIEM Fundamentals
7. Incident Response
8. Detection Engineering

The objective is not simply to finish topics.

The objective is to understand concepts, perform safe exercises, document evidence and explain technical decisions.

---

# 2. Who Should Follow This Roadmap?

This roadmap is designed for:

- Students interested in cybersecurity.
- Recent graduates exploring SOC Analyst roles.
- Beginners entering defensive security.
- IT support and networking professionals transitioning into cybersecurity.
- Security learners strengthening their Blue Team fundamentals.
- Working professionals who want to understand SOC workflows.

## Recommended prerequisites

No previous SOC employment is required.

However, learners should be comfortable using a computer, browsing technical documentation and following basic instructions.

Basic familiarity with computers and networking is useful but can be developed during the roadmap.

---

# 3. Learning Paths

The roadmap supports three learning paths.

## Path A: Foundation

**Audience:** Beginners.

Focus areas:

- Networking basics.
- Linux and Windows fundamentals.
- Basic security concepts.
- Understanding logs.
- Introduction to SOC operations.

Expected outcome:

The learner should be able to explain basic networking and operating system concepts and understand what common security events represent.

## Path B: Practitioner

**Audience:** Learners with foundational knowledge.

Focus areas:

- Event analysis.
- Authentication investigations.
- Alert triage.
- SIEM searches.
- Incident documentation.
- Basic detection logic.

Expected outcome:

The learner should be able to investigate controlled sample events, explain findings and document a repeatable investigation process.

## Path C: Builder

**Audience:** Learners with stronger technical foundations.

Focus areas:

- Detection engineering.
- Detection rule development.
- Event correlation.
- Investigation automation.
- Testing and validation.
- Technical documentation.

Expected outcome:

The learner should be able to build, test and document defensive security content in a controlled environment.

These paths are learning recommendations, not professional qualification levels.

---

# 4. Complete Learning Sequence

| Module | Topic | Main Learning Outcome |
|---|---|---|
| 01 | Networking Foundations | Understand network communication |
| 02 | Operating Systems | Understand Linux and Windows |
| 03 | Security Fundamentals | Understand threats and defensive concepts |
| 04 | Log Analysis | Interpret security events |
| 05 | SOC Operations | Understand monitoring and alert triage |
| 06 | SIEM Fundamentals | Understand security monitoring platforms |
| 07 | Incident Response | Investigate and document incidents |
| 08 | Detection Engineering | Create and validate detection logic |

---

# 5. Module 01: Networking Foundations

## Objective

Understand how devices communicate and how network traffic can provide useful information during security investigations.

## Topics

### 5.1 Networking Concepts

- What is a computer network?
- LAN, WAN and internet.
- Client-server communication.
- IP addresses.
- Public and private IP addresses.
- MAC addresses.
- Network gateways.

### 5.2 Networking Models

- OSI model.
- TCP/IP model.
- Encapsulation.
- Network layers and their responsibilities.

### 5.3 Common Protocols

- TCP.
- UDP.
- HTTP.
- HTTPS.
- DNS.
- DHCP.
- SSH.
- SMTP.
- FTP and SFTP.

### 5.4 Ports and Services

- What is a port?
- Common service ports.
- Listening services.
- Connection states.
- Basic firewall concepts.

### 5.5 Network Traffic

- Packet structure.
- Source and destination addresses.
- Source and destination ports.
- TCP handshake.
- DNS queries.
- Basic packet inspection.

## Practical Exercises

1. Identify your device's local IP configuration.
2. Inspect DNS resolution for a permitted domain.
3. Examine a sample TCP connection.
4. Identify common protocols in a supplied packet capture.
5. Document the difference between TCP and UDP.

## Evidence to Produce

- Networking fundamentals notes.
- Protocol reference sheet.
- Packet analysis worksheet.
- Screenshot or exported evidence from an authorised lab.

## Completion Check

The learner should be able to explain how a device communicates with another system and identify basic network information in a packet capture.

---

# 6. Module 02: Operating Systems

## Objective

Understand the operating system components and events that SOC Analysts commonly investigate.

## Part A: Linux Fundamentals

### Topics

- Linux distributions.
- Filesystem structure.
- Basic terminal commands.
- Users and groups.
- File permissions.
- Processes.
- Services.
- System logs.
- Package management.
- SSH fundamentals.

### Commands to Understand

- `pwd`
- `ls`
- `cd`
- `cat`
- `less`
- `grep`
- `find`
- `ps`
- `top`
- `who`
- `id`
- `chmod`
- `chown`
- `systemctl`
- `journalctl`

## Part B: Windows Fundamentals

### Topics

- Windows architecture basics.
- Local users and groups.
- Processes and services.
- Windows Event Viewer.
- Windows Defender.
- PowerShell fundamentals.
- Event channels.
- Security event logging.

### Important Event Concepts

- Logon activity.
- Account management.
- Process creation.
- Service activity.
- Security policy changes.

## Practical Exercises

1. Inspect running Linux processes.
2. Identify active system services.
3. Explore Linux authentication logs.
4. Open Windows Event Viewer.
5. Identify selected Windows Security events.
6. Document the difference between a process and a service.

## Evidence to Produce

- Linux command reference.
- Windows event exploration notes.
- Process investigation worksheet.
- Sample log observations.

## Completion Check

The learner should be able to navigate basic Linux and Windows environments and identify where relevant system events are recorded.

---

# 7. Module 03: Security Fundamentals

## Objective

Understand the security principles and common attack patterns that form the foundation of defensive security operations.

## Topics

### 7.1 Core Security Principles

- Confidentiality.
- Integrity.
- Availability.
- Authentication.
- Authorisation.
- Accountability.
- Least privilege.
- Defence in depth.

### 7.2 Common Security Threats

- Phishing.
- Credential theft.
- Password attacks.
- Malware.
- Ransomware.
- Denial of Service.
- Unauthorised access.
- Privilege escalation.
- Data exfiltration.

### 7.3 Security Concepts

- Vulnerability.
- Threat.
- Risk.
- Exploit.
- Indicator of Compromise.
- Attack surface.
- Security control.
- Security incident.

### 7.4 Threat Intelligence Fundamentals

- Indicators of Compromise.
- Indicators of Attack.
- IP addresses and domains.
- File hashes.
- URLs.
- Basic threat context.
- MITRE ATT&CK framework.

## Practical Exercises

1. Classify a set of fictional security scenarios.
2. Identify potential indicators in a sample incident.
3. Map selected attack behaviours to relevant MITRE ATT&CK techniques.
4. Explain the difference between a vulnerability and a threat.
5. Prepare a basic threat observation report.

## Evidence to Produce

- Security terminology reference.
- Threat classification worksheet.
- IOC analysis report.
- MITRE ATT&CK mapping notes.

## Completion Check

The learner should be able to recognise common threat patterns and explain why an observed activity may require investigation.

---

# 8. Module 04: Log Analysis

## Objective

Understand how logs record system and security activity and how analysts use event data during investigations.

## Topics

### 8.1 Log Fundamentals

- What is a log?
- Log sources.
- Event records.
- Timestamps.
- Hostnames.
- User identities.
- Source and destination addresses.
- Event identifiers.
- Log severity.

### 8.2 Windows Logs

- Security logs.
- System logs.
- Application logs.
- Authentication events.
- Account activity.
- Process-related events.

### 8.3 Linux Logs

- Authentication logs.
- System logs.
- Kernel messages.
- Service logs.
- SSH-related events.
- Journal entries.

### 8.4 Investigation Techniques

- Event filtering.
- Timestamp analysis.
- User activity analysis.
- Source IP analysis.
- Event correlation.
- Identifying unusual patterns.
- Recognising missing context.

## Practical Exercises

1. Analyse a supplied authentication event dataset.
2. Identify repeated failed login attempts.
3. Examine successful logins following failed attempts.
4. Identify unusual login timing in a fictional scenario.
5. Build a simple event timeline.
6. Explain which additional evidence would help confirm a hypothesis.

## Evidence to Produce

- Log analysis worksheet.
- Authentication investigation report.
- Event timeline.
- Documented investigation findings.

## Completion Check

The learner should be able to read sample log records, extract relevant fields and explain what the available evidence does and does not establish.

---

# 9. Module 05: SOC Operations

## Objective

Understand how a SOC team monitors systems, evaluates alerts, investigates suspicious activity and escalates incidents.

## Topics

### 9.1 SOC Fundamentals

- What is a SOC?
- SOC objectives.
- SOC monitoring.
- Security monitoring lifecycle.
- SOC Analyst responsibilities.
- Tier 1, Tier 2 and Tier 3 concepts.

### 9.2 Alert Management

- Alert generation.
- Alert classification.
- Alert severity.
- Alert prioritisation.
- False positives.
- Duplicate alerts.
- Escalation.

### 9.3 Investigation Workflow

- Understand the alert.
- Identify affected assets.
- Establish event context.
- Collect supporting evidence.
- Validate or reject hypotheses.
- Record findings.
- Escalate when necessary.

### 9.4 SOC Documentation

- Investigation notes.
- Case records.
- Escalation reports.
- Shift handover notes.
- Incident summaries.

## Practical Exercises

1. Review a fictional SOC alert.
2. Classify alert severity using a supplied policy.
3. Identify relevant evidence sources.
4. Investigate a simulated authentication alert.
5. Prepare a structured escalation note.
6. Document why an alert may be a false positive.

## Evidence to Produce

- Alert triage worksheet.
- Investigation notes.
- Escalation report.
- SOC shift handover document.

## Completion Check

The learner should be able to describe a basic alert triage workflow and communicate investigation findings clearly.

---

# 10. Module 06: SIEM Fundamentals

## Objective

Understand how Security Information and Event Management platforms collect, organise, search and analyse security events.

## Topics

### 10.1 SIEM Concepts

- What is SIEM?
- Log collection.
- Data ingestion.
- Parsing.
- Field extraction.
- Normalisation.
- Correlation.
- Alert generation.

### 10.2 SIEM Architecture

- Data sources.
- Forwarders and agents.
- Collectors.
- Indexing.
- Search.
- Dashboards.
- Alerts.

### 10.3 Search and Investigation

- Search fundamentals.
- Field-based filtering.
- Time-range selection.
- Aggregation.
- Event correlation.
- Search result interpretation.

### 10.4 Security Monitoring

- Authentication monitoring.
- Endpoint monitoring.
- Network monitoring.
- Suspicious activity detection.
- Dashboard interpretation.

### 10.5 SIEM Platforms

Learners may explore platforms such as:

- Splunk.
- Wazuh.
- Microsoft Sentinel.
- Elastic Security.

Platform-specific functionality and licensing may differ.

## Practical Exercises

1. Explore a local or authorised SIEM environment.
2. Identify available data sources.
3. Search for authentication events.
4. Filter events by user or host.
5. Create a basic monitoring dashboard.
6. Document a simple alert investigation.

## Evidence to Produce

- SIEM environment documentation.
- Search query collection.
- Dashboard screenshots.
- Alert investigation report.

## Completion Check

The learner should understand the purpose of a SIEM and be able to perform basic searches in an authorised training environment.

---

# 11. Module 07: Incident Response

## Objective

Understand the fundamentals of investigating security incidents and documenting evidence in a structured manner.

## Topics

### 11.1 Incident Response Fundamentals

- What is a security incident?
- Incident identification.
- Initial analysis.
- Containment concepts.
- Eradication concepts.
- Recovery.
- Lessons learned.

### 11.2 Investigation Process

- Understand the incident scope.
- Identify affected systems.
- Establish a timeline.
- Correlate available evidence.
- Record investigative hypotheses.
- Document findings.
- Identify limitations.

### 11.3 Digital Evidence

- Evidence sources.
- Evidence integrity.
- File hashes.
- Timestamp handling.
- Chain of custody concepts.
- Safe evidence storage.

### 11.4 Incident Reporting

- Executive summary.
- Incident description.
- Timeline.
- Evidence.
- Impact assessment.
- Response actions.
- Recommendations.

## Practical Exercises

1. Review a fictional incident scenario.
2. Create an incident timeline.
3. Correlate supplied endpoint and authentication events.
4. Identify evidence gaps.
5. Prepare an incident investigation report.
6. Write practical defensive recommendations.

## Evidence to Produce

- Incident timeline.
- Investigation worksheet.
- Evidence register.
- Final incident report.

## Completion Check

The learner should be able to organise supplied evidence into a clear investigation narrative and distinguish confirmed facts from assumptions.

---

# 12. Module 08: Detection Engineering

## Objective

Understand how defensive detection logic is developed, tested, evaluated and improved.

## Topics

### 12.1 Detection Fundamentals

- What is a detection rule?
- Detection objectives.
- Event conditions.
- Detection logic.
- Data dependencies.
- Alert context.

### 12.2 Detection Development

- Identify the behaviour to detect.
- Identify relevant telemetry.
- Define detection conditions.
- Write detection logic.
- Validate expected matches.
- Evaluate false positives.
- Document limitations.

### 12.3 Sigma Fundamentals

- Sigma rule structure.
- Log sources.
- Detection selections.
- Conditions.
- Metadata.
- Rule validation.
- Rule maintenance.

### 12.4 Detection Quality

- Detection coverage.
- False positives.
- False negatives.
- Rule tuning.
- Testing.
- Documentation.

## Practical Exercises

1. Understand an existing Sigma rule.
2. Identify its log source and detection conditions.
3. Create a basic rule for a controlled scenario.
4. Test the rule using safe sample events.
5. Record expected and unexpected results.
6. Document tuning recommendations.

## Evidence to Produce

- Detection rule.
- Test dataset.
- Validation notes.
- Detection documentation.
- Known limitations.

## Completion Check

The learner should be able to explain detection logic, identify its data dependencies and demonstrate how it was tested.

---

# 13. Practical Portfolio Projects

The following projects help learners combine concepts from multiple modules.

## Project 01: Authentication Event Investigation

**Objective:** Investigate a fictional authentication dataset.

Expected deliverables:

- Dataset description.
- Investigation methodology.
- Relevant event records.
- Event timeline.
- Findings.
- Limitations.
- Final report.

## Project 02: Suspicious Process Analysis

**Objective:** Review safe sample endpoint telemetry.

Expected deliverables:

- Process observations.
- Relevant event fields.
- Investigation hypotheses.
- Supporting evidence.
- Final findings.

## Project 03: Detection Rule Development

**Objective:** Develop and test a defensive detection rule.

Expected deliverables:

- Detection objective.
- Rule source.
- Test events.
- Expected results.
- Actual results.
- False-positive observations.
- Limitations.

## Project 04: SOC Investigation Report

**Objective:** Prepare an investigation report from a supplied fictional incident.

Expected deliverables:

- Incident summary.
- Scope.
- Timeline.
- Evidence register.
- Investigation findings.
- Recommendations.
- Final report.

All project scenarios must use synthetic, sanitised or otherwise authorised data.

---

# 14. Evidence and Documentation Standard

Practical work should be documented in a way that another learner or reviewer can understand and reproduce.

Every major practical submission should include:

| Evidence Element | What to Document |
|---|---|
| Objective | What you intended to investigate |
| Environment | Lab and tool information |
| Methodology | Steps performed |
| Evidence | Logs, outputs and observations |
| Analysis | What the evidence indicates |
| Findings | Conclusions supported by evidence |
| Limitations | What could not be established |
| Recommendations | Relevant defensive improvements |

Screenshots alone are not sufficient evidence.

The learner should explain the method, reasoning and results.

Never publish credentials, private logs, customer information or confidential data.

---

# 15. Suggested Assessment Approach

Learning can be reviewed across five dimensions.

| Dimension | What Is Evaluated |
|---|---|
| Technical Knowledge | Understanding of security concepts |
| Evidence Quality | Relevance and reproducibility of evidence |
| Logical Understanding | Ability to explain technical reasoning |
| Problem Solving | Ability to investigate and resolve problems |
| Communication | Quality of documentation and explanation |

A learning assessment should distinguish between:

- What the learner knows.
- What the learner can demonstrate.
- What evidence supports the conclusion.
- What requires further practice.

Completing the roadmap does not automatically establish job readiness.

---

# 16. Recommended Learning Habits

- Study concepts before attempting complex exercises.
- Practise regularly in safe environments.
- Maintain a technical notebook.
- Document mistakes and corrections.
- Read official product documentation.
- Verify information before using it.
- Explain practical work in your own words.
- Review previous investigations.
- Keep portfolio repositories organised.
- Never claim work you did not perform.

---

# 17. Safety and Authorisation

Cybersecurity learning must be conducted responsibly.

All practical activity must be limited to:

- Systems owned by the learner.
- Isolated local environments.
- Intentionally vulnerable training environments.
- Systems covered by explicit written authorisation.

Do not:

- Scan unauthorised public systems.
- Access third-party accounts.
- Collect private information without permission.
- Deploy malware against real systems.
- Publish credentials or sensitive evidence.
- Use training exercises as justification for unauthorised activity.

When a lab requires special permission or scope, document that scope before beginning.

---

# 18. Recommended Official Resources

Use maintained documentation and primary references wherever possible.

## Networking

- Cisco Skills for All: https://skillsforall.com/
- Cloudflare Learning Center: https://www.cloudflare.com/learning/

## Operating Systems

- Linux Manual Pages: https://man7.org/linux/man-pages/
- Microsoft Learn: https://learn.microsoft.com/

## Security Fundamentals

- NIST: https://www.nist.gov/cybersecurity
- CISA: https://www.cisa.gov/
- MITRE ATT&CK: https://attack.mitre.org/

## SIEM and Detection

- Splunk Documentation: https://docs.splunk.com/
- Wazuh Documentation: https://documentation.wazuh.com/
- Sigma: https://sigmahq.io/

Check the current version and licence of each external resource before using it.

---

# 19. How to Use This Repository

1. Start with the learning module appropriate to your knowledge.
2. Read the learning objectives.
3. Review the recommended resources.
4. Complete the practical exercises.
5. Record your evidence.
6. Complete the relevant assessment.
7. Create or improve a portfolio artifact.
8. Review your work and identify gaps.

Module-specific content, exercises and assessment materials are organised in the repository directories.

---

# 20. About GraySentinel

**GraySentinel Cyber Defence Lab**

Philosophy: Proof Over Certificates.

Mission: Build practical, verifiable cybersecurity capability through learning, execution and evidence.

Website: https://cyberdefencelab.co.in

Programmes: https://cyberdefencelab.co.in/tracks

Free Skill Check: https://form.svhrt.com/69ce8645001e39939d471236

Proof Score: https://cyberdefencelab.co.in/proof-score

Talent & Contributor Network:
https://surveyheart.com/form/69c44a4912230713173b9ba7

---

# 21. Contribution

Contributors can help improve:

- Learning documentation.
- Practical exercises.
- Safe lab scenarios.
- Detection examples.
- Assessment questions.
- Technical research.
- Portfolio templates.
- Documentation quality.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a contribution.

All contributions are subject to review.

---

**Learn Together. Build Together. Prove Together.**

© 2026 GraySentinel Cyber Defence Lab.
