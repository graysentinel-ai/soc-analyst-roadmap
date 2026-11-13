# Evidence Submission Guide

**GraySentinel Lab 01: Network Traffic Analysis**

## 1. Purpose

This directory contains the evidence collected during the Network Traffic Analysis exercise.

Evidence helps reviewers verify:

- Whether the candidate performed the assigned tasks.
- Whether the correct tools were used.
- Whether the observations are technically accurate.
- Whether conclusions are supported by packet-level evidence.
- Whether the candidate can communicate investigation findings clearly.

**Evidence must be genuine, relevant, readable and produced by the candidate.**

---

## 2. Required Evidence

Candidates must submit the following evidence:

| Evidence ID | Evidence | Description |
|---|---|---|
| EV-01 | Environment Setup | Screenshot showing Wireshark and analysis environment |
| EV-02 | Packet Inspection | Selected packet with packet details visible |
| EV-03 | Protocol Analysis | Protocol Hierarchy results |
| EV-04 | IP Communication | Conversations analysis |
| EV-05 | Display Filters | At least three successfully applied filters |
| EV-06 | DNS Investigation | DNS queries and responses |
| EV-07 | TCP Investigation | TCP connection flags and packet analysis |
| EV-08 | Investigation Findings | Evidence-backed unusual traffic observations |

All screenshots must originate from the candidate's actual authorized analysis environment.

---

## 3. Recommended Directory Structure

Organize your evidence using the following structure:

```text
evidence/
│
├── README.md
│
├── screenshots/
│   ├── EV-01-environment-setup.png
│   ├── EV-02-packet-inspection.png
│   ├── EV-03-protocol-analysis.png
│   ├── EV-04-ip-communication.png
│   ├── EV-05-display-filters.png
│   ├── EV-06-dns-investigation.png
│   ├── EV-07-tcp-investigation.png
│   └── EV-08-traffic-observations.png
│
└── evidence-index.md
```

Create the `screenshots/` directory only when you begin submitting actual evidence.

---

## 4. Screenshot Requirements

Every screenshot must:

1. Clearly show the relevant application or analysis output.
2. Include enough information to understand the observation.
3. Be readable at normal viewing size.
4. Correspond to the task being evaluated.
5. Avoid unnecessary desktop clutter.
6. Avoid fabricated, edited or misleading technical results.

Do not manipulate screenshots to change technical findings.

Cropping for readability is acceptable if the original evidence is preserved and the meaning is not altered.

---

## 5. Evidence Documentation

Every evidence item should include:

| Field | Description |
|---|---|
| Evidence ID | Unique identifier, such as EV-01 |
| Task Reference | Related lab task |
| Filename | Exact evidence filename |
| Description | What the evidence demonstrates |
| Tool Used | Wireshark, tcpdump or another approved tool |
| Observation | What the candidate observed |
| Conclusion | What can reasonably be concluded |

### Example

**Evidence ID:** EV-03

**Task:** Protocol Analysis

**Filename:** `EV-03-protocol-analysis.png`

**Tool:** Wireshark

**Description:** Screenshot of the Protocol Hierarchy window.

**Observation:** The capture contains DNS, TCP and TLS traffic.

**Conclusion:** Multiple network protocols are present. Their presence alone does not establish malicious activity.

Use your actual findings. This example is illustrative, not a claim about a supplied dataset.

---

## 6. Evidence Index Template

Create an `evidence-index.md` file to track submitted evidence.

Use this template:

| Evidence ID | Filename | Task | Status |
|---|---|---|---|
| EV-01 | EV-01-environment-setup.png | Environment Setup | Pending |
| EV-02 | EV-02-packet-inspection.png | Packet Inspection | Pending |
| EV-03 | EV-03-protocol-analysis.png | Protocol Analysis | Pending |
| EV-04 | EV-04-ip-communication.png | IP Communication | Pending |
| EV-05 | EV-05-display-filters.png | Display Filters | Pending |
| EV-06 | EV-06-dns-investigation.png | DNS Investigation | Pending |
| EV-07 | EV-07-tcp-investigation.png | TCP Investigation | Pending |
| EV-08 | EV-08-traffic-observations.png | Traffic Observations | Pending |

Update the status only when the corresponding evidence has actually been collected and checked.

---

## 7. Evidence Quality Standards

### Acceptable Evidence

- Genuine Wireshark screenshots.
- Actual packet inspection results.
- Correctly applied display filters.
- Documented DNS and TCP observations.
- Clear investigation notes.
- Reproducible findings.

### Unacceptable Evidence

- Screenshots copied from tutorials or other candidates.
- Fabricated packet analysis results.
- Screenshots unrelated to the assigned task.
- Unsupported claims presented as confirmed findings.
- Edited screenshots that misrepresent technical output.
- Reports without supporting evidence.

---

## 8. Privacy and Security

Before uploading evidence publicly:

- Remove personal IP addresses where disclosure is unnecessary.
- Sanitize internal hostnames and domain names.
- Remove usernames, email addresses and other personal information.
- Never publish passwords, tokens, session cookies or credentials.
- Do not upload private or unauthorized PCAP files.
- Preserve original evidence securely when required for verification.

If evidence contains sensitive information, submit it through an approved private channel rather than a public GitHub repository.

---

## 9. Reviewer Verification

Reviewers should evaluate each submission against the following questions:

1. Is the evidence genuine and relevant?
2. Does it demonstrate the assigned task?
3. Are the technical observations accurate?
4. Can the candidate explain the evidence?
5. Are conclusions supported by the available data?
6. Are privacy and safety requirements followed?

A screenshot by itself does not prove understanding. Candidates should be able to explain their observations during review.

---

## 10. Submission Checklist

- [ ] All required evidence items are collected.
- [ ] Evidence filenames follow the naming convention.
- [ ] Screenshots are readable.
- [ ] Each item has a clear task reference.
- [ ] Observations are documented.
- [ ] Conclusions are supported by evidence.
- [ ] Sensitive information is sanitized.
- [ ] Evidence index is updated.
- [ ] Files are organized correctly.

---

## 11. GraySentinel Evidence Principle

At GraySentinel, evidence is the foundation of skill validation.

We do not evaluate candidates solely on whether they say they completed a task.

We evaluate what they performed, what they observed, how they reasoned and whether they can demonstrate their understanding.

**Proof Over Certificates.**

*Security Skills. Shown, Not Claimed.*

**GraySentinel Cyber Defence Lab**
