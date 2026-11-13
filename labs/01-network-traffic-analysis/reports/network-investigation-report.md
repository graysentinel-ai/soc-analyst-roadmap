# Network Traffic Investigation Report

**GraySentinel Cybersecurity Labs | Lab 01**

**Lab ID:** GS-LAB-001  
**Domain:** Network Traffic Analysis  
**Report Type:** Technical Investigation Report

---

## 1. Report Information

| Field | Details |
|---|---|
| Candidate Name | |
| Candidate ID | |
| Investigation Date | |
| Report Version | 1.0 |
| Lab ID | GS-LAB-001 |
| Dataset Filename | |
| Dataset Source | |
| Operating System | |
| Wireshark Version | |
| Report Status | Draft / Submitted / Reviewed |

---

## 2. Executive Summary

### Investigation Overview

Briefly explain why the network traffic was analysed and what the investigation covered.

**Candidate Response:**

[Write a short summary of the investigation.]

### Key Observations

List the most important observations from the packet capture.

1. [Observation 1]
2. [Observation 2]
3. [Observation 3]

### Overall Assessment

Select the most appropriate assessment:

- [ ] No unusual activity identified in the analysed traffic.
- [ ] Some activity requires additional review.
- [ ] Potentially suspicious activity identified.
- [ ] Investigation was inconclusive due to insufficient evidence.

**Assessment Explanation:**

[Explain your selection using actual evidence.]

---

## 3. Investigation Scope

### Objectives

The investigation aimed to:

- Examine captured network packets.
- Identify network protocols.
- Understand communication between systems.
- Analyse DNS activity.
- Examine TCP connection behaviour.
- Identify unusual communication patterns.
- Document evidence-backed findings.

### Scope Limitations

This investigation covers only the supplied or authorized packet capture.

It does not establish the security status of the entire network or prove that all malicious activity would be visible in the captured traffic.

---

## 4. Investigation Environment

| Component | Details |
|---|---|
| Operating System | |
| Analysis Tool | Wireshark |
| Wireshark Version | |
| Additional Tool | |
| Dataset Format | |
| Dataset Size | |
| Capture Duration | |
| Total Packets | |
| Analysis Date | |

### Dataset Integrity

Record the source of the packet capture and any available integrity information.

**Dataset Source:**

[Describe where the capture came from.]

**File Integrity:**

[Record a SHA-256 hash if available.]

Example command:

```bash
sha256sum network-analysis.pcap
```

On Windows PowerShell:

```powershell
Get-FileHash .\network-analysis.pcap -Algorithm SHA256
```

Do not claim that integrity was verified unless the hash was actually calculated and recorded.

---

## 5. Investigation Methodology

Describe the steps followed during the investigation.

### Step 1: Dataset Inspection

Explain how the PCAP file was opened and reviewed.

### Step 2: Packet Analysis

Describe how individual packets and packet details were examined.

### Step 3: Protocol Analysis

Explain how the Protocol Hierarchy feature was used.

### Step 4: Communication Analysis

Describe how IP addresses, conversations, packet counts and transferred bytes were examined.

### Step 5: DNS Investigation

Explain how DNS queries and responses were reviewed.

### Step 6: TCP Investigation

Describe how TCP flags and connection behaviour were analysed.

### Step 7: Evidence Collection

Explain how screenshots, packet references and investigation notes were collected.

**Methodology Notes:**

[Document your actual methodology.]

---

## 6. Protocol Analysis Results

Record the protocols identified in the capture.

| Protocol | Packet Count | Observed Purpose | Notes |
|---|---:|---|---|
| TCP | | | |
| UDP | | | |
| DNS | | | |
| HTTP | | | |
| TLS | | | |
| ICMP | | | |
| Other | | | |

Only include protocols actually identified.

### Analysis

Answer:

1. Which protocols were most frequently observed?
2. What communication patterns were visible?
3. Were any expected protocols absent?
4. What might explain the observed protocol distribution?

**Analysis:**

[Enter findings.]

**Evidence Reference:** EV-03

---

## 7. IP Communication Analysis

Document the communication observed between systems.

| Source IP | Destination IP | Protocol | Packets | Bytes |
|---|---|---|---:|---:|
| | | | | |
| | | | | |
| | | | | |

### Analysis

Describe:

- Frequently communicating systems.
- High-volume communication pairs.
- Repeated communication patterns.
- Any unusual communication requiring further review.

**Analysis:**

[Enter findings.]

**Evidence Reference:** EV-04

---

## 8. DNS Investigation Results

Document the DNS activity observed.

| Timestamp | Queried Domain | Query Type | Response Code | Observation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Analysis

Answer:

1. Which domains were queried?
2. Were DNS responses successful?
3. Were repeated queries observed?
4. Did any activity require further investigation?
5. What additional context would help validate the observations?

**Analysis:**

[Enter findings.]

**Evidence Reference:** EV-06

---

## 9. TCP Investigation Results

Record relevant TCP communication.

| Packet Number | Source IP | Destination IP | TCP Flags | Observation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Analysis

Describe:

- TCP connection initiation.
- SYN and SYN-ACK behaviour.
- TCP reset packets.
- Repeated connection attempts, if observed.
- Any connection patterns requiring further investigation.

**Analysis:**

[Enter findings.]

**Evidence Reference:** EV-07

---

## 10. Unusual Activity Assessment

Document observations that require additional investigation.

| Observation ID | Activity | Supporting Evidence | Classification |
|---|---|---|---|
| OBS-01 | | | |
| OBS-02 | | | |
| OBS-03 | | | |

### Classification Guide

| Classification | Meaning |
|---|---|
| Informational | Activity worth documenting for context |
| Requires Review | Additional information is needed |
| Potentially Suspicious | Evidence supports further security investigation |
| Inconclusive | Available evidence is insufficient |

### Investigation Details

For each observation, explain:

**What happened?**

[Describe the activity.]

**When did it happen?**

[Record timestamps or packet references.]

**Which systems were involved?**

[Identify relevant source and destination addresses.]

**What evidence supports the observation?**

[Reference packets, screenshots or analysis output.]

**What are the possible explanations?**

[Describe reasonable interpretations.]

**What further investigation is required?**

[Describe the next investigative steps.]

Do not classify unfamiliar traffic, failed connections or isolated TCP reset packets as confirmed attacks without supporting evidence.

---

## 11. Key Findings

Summarize the most important findings.

| Finding ID | Finding Description | Evidence Reference | Confidence |
|---|---|---|---|
| FIND-01 | | | |
| FIND-02 | | | |
| FIND-03 | | | |

### Confidence Levels

- **High:** Directly supported by clear and relevant evidence.
- **Medium:** Supported by evidence but requires additional context.
- **Low:** Based on limited or incomplete observations.

Confidence represents evidence strength, not incident severity.

---

## 12. Evidence Register

List all supporting evidence submitted with the report.

| Evidence ID | Filename | Description |
|---|---|---|
| EV-01 | | Environment setup |
| EV-02 | | Packet inspection |
| EV-03 | | Protocol analysis |
| EV-04 | | IP communication |
| EV-05 | | Display filters |
| EV-06 | | DNS investigation |
| EV-07 | | TCP investigation |
| EV-08 | | Traffic observations |

All evidence must be genuine and correspond to the actual investigation.

---

## 13. Investigation Limitations

Document factors that may affect the reliability or completeness of the investigation.

Examples:

- Incomplete packet capture.
- Encrypted network communication.
- Missing packet data.
- Limited capture duration.
- Unknown network topology.
- Missing endpoint logs.
- Insufficient historical baseline.
- Unavailable context about communicating systems.

**Limitations Identified:**

[Document your limitations.]

### Impact of Limitations

Explain how these limitations affect your conclusions.

[Enter your explanation.]

---

## 14. Recommendations

Based on the actual findings, suggest appropriate next steps.

Possible recommendations include:

- Review related network logs.
- Investigate unusual DNS activity.
- Examine relevant endpoint logs.
- Compare traffic with an approved network baseline.
- Collect additional authorized packet captures.
- Review network access controls.
- Escalate supported suspicious findings for further investigation.

**Candidate Recommendations:**

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

Recommendations should be relevant to the evidence, not generic security advice.

---

## 15. Conclusion

Summarize what the investigation established.

Your conclusion should answer:

1. What did you investigate?
2. What did you observe?
3. Which findings were supported by evidence?
4. What remains uncertain?
5. What should happen next?

**Final Conclusion:**

[Write your conclusion.]

---

## 16. Candidate Learning Reflection

Answer the following:

1. What was the most important technical concept you learned?
2. Which Wireshark feature was most useful?
3. Which investigation task was most challenging?
4. What would you investigate further with additional data?
5. What would you improve in your analysis process?

**Reflection:**

[Enter your response.]

---

## 17. Final Submission Checklist

- [ ] Report information completed.
- [ ] Investigation scope documented.
- [ ] Environment details recorded.
- [ ] Dataset source documented.
- [ ] Methodology explained.
- [ ] Protocol analysis completed.
- [ ] IP communication analysed.
- [ ] DNS investigation documented.
- [ ] TCP investigation documented.
- [ ] Unusual observations assessed.
- [ ] Findings supported by evidence.
- [ ] Limitations documented.
- [ ] Recommendations provided.
- [ ] Evidence register completed.
- [ ] Conclusion written.
- [ ] Sensitive information reviewed.
- [ ] Report checked for accuracy.

---

## 18. Reviewer Assessment

**For GraySentinel Reviewers**

| Evaluation Area | Maximum Weight | Reviewer Score |
|---|---:|---:|
| Technical Understanding | 15 | |
| Protocol Analysis | 15 | |
| IP Communication Analysis | 15 | |
| Wireshark Usage | 15 | |
| DNS Investigation | 15 | |
| TCP Investigation | 10 | |
| Investigation Reasoning | 10 | |
| Report and Evidence Quality | 5 | |
| **Total** | **100** | |

### Reviewer Comments

[Document strengths, technical errors, missing evidence and improvement areas.]

### Review Outcome

- [ ] Accepted
- [ ] Revision Required
- [ ] Incomplete
- [ ] Further Validation Required

**Reviewer Name:**

**Review Date:**

**Review Notes:**

[Enter comments.]

*This is a proposed lab-level evaluation rubric. It is not a substitute for GraySentinel's official Proof Score assessment.*

---

## 19. Responsible Use Declaration

I confirm that:

- The analysed traffic was obtained through an authorized source.
- I have not knowingly included unauthorized private traffic.
- The observations in this report reflect my actual analysis.
- I have not fabricated screenshots or technical findings.
- I have documented limitations and uncertainty honestly.
- I have reviewed the report for sensitive information before submission.

**Candidate Name:**

**Date:**

---

## GraySentinel Evaluation Philosophy

A professional security analyst must do more than identify packets.

They must understand what happened, explain why it matters, distinguish evidence from assumptions and communicate conclusions clearly.

At GraySentinel, practical capability must be demonstrated through verifiable work.

**Proof Over Certificates.**

*Security Skills. Shown, Not Claimed.*

**GraySentinel Cyber Defence Lab**
