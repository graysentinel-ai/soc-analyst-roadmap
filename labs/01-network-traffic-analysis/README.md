# Lab 01: Network Traffic Analysis

**GraySentinel Cybersecurity Labs**

**Proof Over Certificates | Practical Security Skills | Verifiable Evidence**

| Lab Information | Details |
|---|---|
| Lab ID | GS-LAB-001 |
| Difficulty | Beginner |
| Domain | Network Security |
| Related Modules | 01 Networking Foundations, 05 Network Security |
| Primary Tool | Wireshark |
| Additional Tool | tcpdump |
| Environment | Local or authorized lab environment |
| Dataset | Synthetic or authorized PCAP |
| Expected Deliverable | Network Traffic Investigation Report |

---

## 1. Lab Overview

Network traffic analysis is an essential skill in defensive cybersecurity.

Security analysts examine network communication to understand how devices interact, identify unusual traffic patterns and investigate potentially suspicious activity.

In this exercise, you will analyse a network packet capture, identify common protocols, examine communication patterns and document your findings.

You will use Wireshark to inspect network traffic and develop a basic understanding of packet-level investigation.

**Important:** This exercise uses an offline packet capture or traffic generated within an authorized environment. You do not need to scan or access public systems.

---

## 2. Learning Objectives

By completing this lab, you should be able to:

1. Understand the purpose of network packet analysis.
2. Explain the basic structure of a network packet.
3. Identify common network protocols.
4. Recognize source and destination IP addresses.
5. Identify communication ports.
6. Apply basic Wireshark display filters.
7. Examine DNS and HTTP traffic.
8. Identify unusual communication patterns.
9. Document observations using technical evidence.
10. Prepare a basic network investigation report.

---

## 3. Prerequisites

Before starting, you should understand:

- Basic networking concepts.
- IP addresses.
- TCP and UDP.
- Common network ports.
- DNS fundamentals.
- Basic client-server communication.

Recommended preparation:

- [Module 01: Networking Foundations](../../modules/01-networking/)
- [Module 05: Network Security](../../modules/05-network-security/)

---

## 4. Tools Required

### Primary Tool: Wireshark

Wireshark is a network protocol analyser used to capture and inspect network traffic.

Official website:

https://www.wireshark.org/

Documentation:

https://www.wireshark.org/docs/

### Additional Tool: tcpdump

tcpdump is a command-line packet capture and analysis utility.

Official documentation:

https://www.tcpdump.org/manpages/tcpdump.1.html

### Optional Supporting Tools

- Python 3
- Terminal or Command Prompt
- Text editor
- GitHub account for portfolio documentation

You do not need to install every optional tool.

---

## 5. Lab Scenario

You are working as a junior security analyst.

Your team has received a network packet capture from an authorized test environment.

The team wants to understand:

- Which systems communicated?
- Which protocols were used?
- Which DNS queries occurred?
- Were there unusual connection attempts?
- Was there any communication pattern that requires further investigation?

Your responsibility is to examine the available evidence and prepare an investigation report.

You must distinguish observed facts from assumptions.

---

## 6. Lab Environment Setup

### Step 1: Install Wireshark

Download Wireshark from:

https://www.wireshark.org/download.html

Install it using the official installation instructions.

### Step 2: Prepare the Dataset

Use one of the following:

**Option A: Provided Dataset**

Use a synthetic or authorized PCAP file when supplied with the exercise.

**Option B: Generate Your Own Capture**

Capture traffic from your own computer or an isolated lab environment.

For example, on a system with tcpdump installed:

```bash
sudo tcpdump -i any -w network-analysis.pcap
```

Stop the capture using `Ctrl + C`.

On some systems, interface names and capture permissions differ. Select an appropriate local interface and capture only authorized traffic.

### Step 3: Open the Capture

1. Launch Wireshark.
2. Select File.
3. Select Open.
4. Choose your PCAP file.
5. Wait for packet analysis to finish.

You should now see the captured network packets.

**Note:** No pre-generated PCAP file is included in this initial lab directory. A dataset should be added separately before treating this exercise as a fully self-contained dataset-based lab.

---

## 7. Practical Tasks

### Task 01: Understand Packet Structure

**Objective:** Understand the basic information contained in network packets.

Open the PCAP file and examine individual packets.

Identify:

- Packet number.
- Timestamp.
- Source address.
- Destination address.
- Protocol.
- Packet length.
- Packet details.

**Questions:**

1. What is a source IP address?
2. What is a destination IP address?
3. What does the protocol field indicate?
4. Why are timestamps important during an investigation?

**Expected Evidence:**

A screenshot showing a selected packet and its packet details.

---

### Task 02: Identify Network Protocols

**Objective:** Identify protocols present in the captured traffic.

Use Wireshark's Protocol Hierarchy feature:

Statistics → Protocol Hierarchy

Identify the protocols present in the capture.

Common examples include:

| Protocol | Purpose |
|---|---|
| TCP | Reliable transport communication |
| UDP | Connectionless transport communication |
| DNS | Domain name resolution |
| HTTP | Web communication |
| TLS | Encrypted communication |
| ICMP | Network diagnostic messaging |

**Questions:**

1. Which protocols are present?
2. Which protocol appears most frequently?
3. What is the difference between TCP and UDP?
4. Why is DNS important for network investigations?

**Expected Evidence:**

A screenshot of the Protocol Hierarchy window and a short written explanation.

---

### Task 03: Analyse IP Communication

**Objective:** Understand communication between network systems.

Use Wireshark's Conversations feature:

Statistics → Conversations

Review the IPv4 and TCP tabs.

Identify:

- Source IP addresses.
- Destination IP addresses.
- Number of packets.
- Bytes transferred.
- Communication duration, where available.

**Questions:**

1. Which IP addresses communicate most frequently?
2. Which systems exchange the largest amount of data?
3. Are there repeated communication patterns?
4. What additional evidence would be needed to explain the activity?

**Expected Evidence:**

A communication summary with relevant screenshots.

---

### Task 04: Apply Wireshark Display Filters

**Objective:** Learn to isolate specific network traffic.

Try the following display filters:

**TCP traffic**

```text
tcp
```

**UDP traffic**

```text
udp
```

**DNS traffic**

```text
dns
```

**HTTP traffic**

```text
http
```

**ICMP traffic**

```text
icmp
```

**Traffic involving a specific IP**

```text
ip.addr == 192.0.2.10
```

**Traffic involving a specific TCP port**

```text
tcp.port == 443
```

The example IP address belongs to the documentation-only address range. Replace it with an address actually present in your capture.

**Questions:**

1. What changes when you apply a display filter?
2. How does filtering improve investigation efficiency?
3. What happens when a filter does not match any packets?

**Expected Evidence:**

Screenshots showing at least three successfully applied filters and their results.

---

### Task 05: Investigate DNS Traffic

**Objective:** Understand domain name resolution activity.

Apply:

```text
dns
```

Inspect DNS queries and responses.

Identify:

- Queried domain names.
- Query types.
- Response codes.
- Source and destination addresses.
- Whether responses contain resolved addresses.

**Questions:**

1. Which domains were queried?
2. Which DNS query types were observed?
3. Were any queries unsuccessful?
4. Is there any unusual domain activity requiring further investigation?

Do not classify a domain as malicious solely because it looks unfamiliar.

**Expected Evidence:**

A DNS investigation table with relevant packet references.

---

### Task 06: Examine TCP Communication

**Objective:** Understand TCP connection behaviour.

Apply:

```text
tcp.flags.syn == 1
```

Then examine:

```text
tcp.flags.reset == 1
```

Review the relevant packets and understand:

- TCP connection initiation.
- SYN packets.
- SYN-ACK responses.
- RST packets.
- Connection termination.

**Questions:**

1. What is the purpose of the TCP SYN flag?
2. What does a SYN-ACK response indicate?
3. What does a TCP RST packet indicate?
4. Can a single RST packet establish that an attack occurred?

**Expected Evidence:**

Screenshots of selected TCP packets with a short explanation.

---

### Task 07: Identify Unusual Traffic Patterns

**Objective:** Develop basic investigative reasoning.

Review the capture for patterns such as:

- Repeated connection attempts.
- Unexpected destination ports.
- Unusual DNS queries.
- Repeated connection failures.
- Unexpected communication volumes.
- Communication with unfamiliar destinations.

Record suspicious observations without automatically declaring them malicious.

For every observation, document:

1. What happened?
2. When did it happen?
3. Which systems were involved?
4. What packet evidence supports the observation?
5. What alternative explanations exist?
6. What additional investigation is required?

**Expected Evidence:**

A table of observations and investigation notes.

---

## 8. Investigation Worksheet

Complete this table using your actual packet capture.

| Investigation Item | Your Findings |
|---|---|
| PCAP filename | |
| Capture duration | |
| Total packets | |
| Protocols identified | |
| Source IP addresses | |
| Destination IP addresses | |
| DNS queries observed | |
| TCP communication observed | |
| Unusual activity | |
| Additional investigation required | |

Do not invent findings if the relevant traffic is absent from the capture.

---

## 9. Practical Investigation Report

Prepare a report containing the following sections.

### A. Executive Summary

Briefly describe the purpose of the investigation and its overall findings.

### B. Environment

Document:

- Operating system.
- Wireshark version.
- tcpdump version, if used.
- PCAP filename.
- Dataset source.
- Analysis date.

### C. Methodology

Explain how you examined the packet capture.

### D. Observations

Describe the protocols, IP addresses, DNS queries and communication patterns identified.

### E. Findings

Present evidence-backed conclusions.

### F. Limitations

Document:

- Missing traffic.
- Encrypted communication.
- Incomplete capture information.
- Unavailable contextual information.
- Any analysis limitations.

### G. Recommendations

Suggest further investigation or defensive improvements where appropriate.

---

## 10. Evidence Submission Requirements

Submit the following:

| No. | Deliverable | Required |
|---|---|---|
| 01 | Environment documentation | Yes |
| 02 | Packet analysis screenshots | Yes |
| 03 | Protocol analysis | Yes |
| 04 | IP communication analysis | Yes |
| 05 | Wireshark filter examples | Yes |
| 06 | DNS investigation findings | Yes |
| 07 | TCP investigation findings | Yes |
| 08 | Final investigation report | Yes |

### Evidence Quality Standards

- Screenshots must show relevant technical information.
- Findings must be based on actual packet data.
- Explanations must be written in your own words.
- Uncertain conclusions must be identified as uncertain.
- Sensitive information must be removed before publication.
- Original evidence should be preserved securely.

A screenshot without technical reasoning is not sufficient.

---

## 11. Suggested GitHub Submission Structure

```text
01-network-traffic-analysis/
│
├── README.md
│
├── evidence/
│   ├── README.md
│   ├── packet-analysis.png
│   ├── protocol-hierarchy.png
│   ├── ip-conversations.png
│   └── dns-analysis.png
│
├── analysis/
│   └── investigation-notes.md
│
└── reports/
    └── network-investigation-report.md
```

Add the original PCAP only when redistribution is permitted and it contains no sensitive information.

Do not commit private network captures or personal traffic without appropriate authorization and sanitization.

---

## 12. Evaluation Criteria

This lab can be evaluated using the following suggested rubric.

| Evaluation Area | Weight |
|---|---:|
| Understanding packet structure | 10% |
| Protocol identification | 15% |
| IP communication analysis | 15% |
| Wireshark filter usage | 15% |
| DNS investigation | 15% |
| TCP analysis | 10% |
| Investigation reasoning | 10% |
| Report and evidence quality | 10% |
| **Total** | **100%** |

### Evaluation Principles

A strong submission demonstrates:

- Correct technical observations.
- Appropriate use of investigation tools.
- Evidence-backed reasoning.
- Awareness of analysis limitations.
- Clear and reproducible documentation.

These weights are a proposed lab-level rubric, not an official GraySentinel Proof Score.

---

## 13. Knowledge Check

Answer the following questions in your investigation notes.

1. What is the primary purpose of Wireshark?
2. What is the difference between a packet and a protocol?
3. What does DNS do?
4. What information does a source IP address provide?
5. What is the purpose of TCP's SYN flag?
6. What is a Wireshark display filter?
7. Why should unusual traffic not automatically be classified as malicious?
8. Why is evidence preservation important during an investigation?

---

## 14. Completion Checklist

Before submitting your work, confirm:

- [ ] Wireshark is installed and working.
- [ ] An authorized PCAP was opened successfully.
- [ ] Packet structure was examined.
- [ ] Network protocols were identified.
- [ ] IP conversations were analysed.
- [ ] At least three display filters were tested.
- [ ] DNS activity was examined.
- [ ] TCP communication was investigated.
- [ ] Unusual activity was documented.
- [ ] Investigation report was prepared.
- [ ] Evidence was reviewed and sanitized.

---

## 15. Safety and Responsible Use

This exercise is intended for authorized educational use.

- Analyse only captures you own or are permitted to access.
- Do not intercept third-party network traffic.
- Do not capture private communications without authorization.
- Do not publish sensitive packet captures.
- Do not use investigation findings to access unauthorized systems.
- Follow all applicable laws and organizational policies.

---

## 16. Learning Resources

- [Wireshark Official Documentation](https://www.wireshark.org/docs/)
- [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
- [tcpdump Documentation](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [Cloudflare Learning Center](https://www.cloudflare.com/learning/)
- [Cisco Skills for All](https://skillsforall.com/)

---

## 17. Lab Completion

You have completed the exercise when you can demonstrate that you understand the captured traffic, explain your investigation methodology and support your conclusions with verifiable evidence.

Remember:

**Do not just show that you opened Wireshark. Show what you discovered, how you discovered it and why your conclusions are justified.**

---

**GraySentinel Cyber Defence Lab**

**Proof Over Certificates.**

*Practical Cybersecurity. Verifiable Capability.*
