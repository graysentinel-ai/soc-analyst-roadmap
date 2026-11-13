# Network Traffic Analysis: Investigation Notes

**GraySentinel Lab 01 | GS-LAB-001**

## 1. Investigation Information

Complete this section before beginning the analysis.

| Field | Details |
|---|---|
| Candidate Name | |
| Candidate ID | |
| Investigation Date | |
| Lab ID | GS-LAB-001 |
| PCAP Filename | |
| Dataset Source | |
| Operating System | |
| Wireshark Version | |
| tcpdump Version (if used) | |
| Analysis Status | Not Started |

**Important:** Use only an authorized packet capture or traffic generated within your own lab environment.

---

## 2. Investigation Objective

The objective of this investigation is to examine network traffic and understand communication between systems.

The candidate must:

1. Inspect packet structure.
2. Identify network protocols.
3. Examine source and destination addresses.
4. Analyse communication patterns.
5. Investigate DNS activity.
6. Examine TCP communication.
7. Identify unusual observations.
8. Document evidence-backed findings.

The objective is not to label every unfamiliar connection as malicious. Conclusions must be supported by evidence.

---

## 3. Dataset Information

Record the details of the packet capture used.

| Field | Observation |
|---|---|
| PCAP Filename | |
| File Format | |
| File Size | |
| Capture Start Time | |
| Capture End Time | |
| Total Packets | |
| Capture Duration | |
| Dataset Description | |
| Dataset Authorization | |

If a field cannot be determined, write `Not Available`.

Do not invent missing dataset information.

---

## 4. Task 01: Packet Structure Analysis

**Objective:** Understand the information contained in individual packets.

### Observations

Select relevant packets and examine their details.

| Field | Observation |
|---|---|
| Packet Number | |
| Timestamp | |
| Source Address | |
| Destination Address | |
| Protocol | |
| Packet Length | |
| Relevant Packet Details | |

### Questions

1. What information does the source address provide?
2. What information does the destination address provide?
3. What does the protocol field indicate?
4. Why is packet timing important during an investigation?

### Candidate Notes

Write your explanation:

**[Enter your observations here]**

### Evidence Reference

- Evidence ID: EV-02
- Screenshot Filename: `EV-02-packet-inspection.png`

---

## 5. Task 02: Protocol Analysis

**Objective:** Identify the protocols present in the capture.

Use:

Wireshark → Statistics → Protocol Hierarchy

### Protocol Inventory

| Protocol | Packet Count | Observation |
|---|---:|---|
| TCP | | |
| UDP | | |
| DNS | | |
| HTTP | | |
| TLS | | |
| ICMP | | |
| Other | | |

Only record protocols actually observed in the dataset.

### Questions

1. Which protocols were identified?
2. Which protocol had the highest packet count?
3. What is the difference between TCP and UDP?
4. What role does DNS play in network communication?

### Candidate Notes

**[Enter your observations here]**

### Evidence Reference

- Evidence ID: EV-03
- Screenshot Filename: `EV-03-protocol-analysis.png`

---

## 6. Task 03: IP Communication Analysis

**Objective:** Understand which systems communicate with each other.

Use:

Wireshark → Statistics → Conversations

### Communication Inventory

| Source IP | Destination IP | Protocol | Packets | Bytes |
|---|---|---|---:|---:|
| | | | | |
| | | | | |
| | | | | |

### Questions

1. Which addresses communicate most frequently?
2. Which communication pair exchanged the most data?
3. Were repeated communication patterns observed?
4. What additional context would help explain the traffic?

### Candidate Notes

**[Enter your observations here]**

### Evidence Reference

- Evidence ID: EV-04
- Screenshot Filename: `EV-04-ip-communication.png`

---

## 7. Task 04: Wireshark Display Filters

**Objective:** Isolate relevant traffic for investigation.

Test the following display filters:

| Filter | Purpose | Result |
|---|---|---|
| `tcp` | Display TCP packets | |
| `udp` | Display UDP packets | |
| `dns` | Display DNS packets | |
| `http` | Display HTTP packets | |
| `icmp` | Display ICMP packets | |
| `tcp.port == 443` | Display TCP traffic using port 443 | |

### Additional Filter

Record one filter created during your own investigation.

**Filter:**

```text
[Enter your filter here]
```

**Purpose:**

[Explain why you used this filter.]

**Result:**

[Describe the packets displayed.]

### Questions

1. Which filter was most useful?
2. Did any filter return zero results?
3. Why might a filter return no matching packets?
4. How do display filters improve investigation efficiency?

### Evidence Reference

- Evidence ID: EV-05
- Screenshot Filename: `EV-05-display-filters.png`

---

## 8. Task 05: DNS Investigation

**Objective:** Examine domain name resolution activity.

Apply:

```text
dns
```

### DNS Query Inventory

| Timestamp | Source IP | DNS Query | Query Type | Response Code |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Questions

1. Which domain names were queried?
2. Which DNS query types were observed?
3. Were any queries unsuccessful?
4. Were there repeated queries?
5. Is any activity unusual enough to require further investigation?

### Candidate Notes

**[Enter your observations here]**

### Investigation Caution

An unfamiliar domain or failed DNS query does not automatically indicate malicious activity.

Consider the dataset context and supporting evidence before reaching a conclusion.

### Evidence Reference

- Evidence ID: EV-06
- Screenshot Filename: `EV-06-dns-investigation.png`

---

## 9. Task 06: TCP Investigation

**Objective:** Understand TCP connection behaviour.

Test these filters:

**TCP SYN packets**

```text
tcp.flags.syn == 1
```

**TCP reset packets**

```text
tcp.flags.reset == 1
```

**TCP SYN packets without ACK**

```text
tcp.flags.syn == 1 && tcp.flags.ack == 0
```

### TCP Observations

| Packet Number | Source IP | Destination IP | TCP Flags | Observation |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

### Questions

1. What is the purpose of a SYN packet?
2. What does a SYN-ACK response indicate?
3. What does a TCP RST packet indicate?
4. Can a single TCP reset packet prove that an attack occurred?
5. What evidence would help establish whether repeated connection attempts are abnormal?

### Candidate Notes

**[Enter your observations here]**

### Evidence Reference

- Evidence ID: EV-07
- Screenshot Filename: `EV-07-tcp-investigation.png`

---

## 10. Task 07: Unusual Traffic Investigation

**Objective:** Identify communication patterns that deserve additional investigation.

Look for:

- Repeated connection attempts.
- Unexpected destination ports.
- Unusual DNS queries.
- Repeated connection failures.
- Unexpected communication volumes.
- Unfamiliar communication endpoints.

### Observation Register

| Observation ID | Activity Observed | Supporting Evidence | Possible Explanation | Further Investigation |
|---|---|---|---|---|
| OBS-01 | | | | |
| OBS-02 | | | | |
| OBS-03 | | | | |

### Investigation Questions

1. What exactly happened?
2. When did it happen?
3. Which systems were involved?
4. Which packet numbers support the observation?
5. Could there be a legitimate explanation?
6. What additional evidence is needed?

### Finding Classification

Use one of the following labels:

- **Informational:** Normal or contextual activity worth recording.
- **Requires Review:** An observation that needs more context.
- **Potentially Suspicious:** An observation supported by evidence that warrants deeper investigation.
- **Inconclusive:** Available evidence is insufficient to determine what happened.

Do not use the label `Confirmed Malicious` without adequate evidence and an appropriate validation process.

### Candidate Notes

**[Enter your observations here]**

### Evidence Reference

- Evidence ID: EV-08
- Screenshot Filename: `EV-08-traffic-observations.png`

---

## 11. Investigation Findings Summary

Summarize the investigation in this section.

| Finding ID | Finding | Evidence Reference | Confidence |
|---|---|---|---|
| FIND-01 | | | |
| FIND-02 | | | |
| FIND-03 | | | |

Use the following confidence descriptions:

- **High:** Directly supported by clear and relevant evidence.
- **Medium:** Supported by evidence but requires additional context.
- **Low:** Based on limited observations or incomplete information.

Confidence describes the strength of the evidence, not the severity of the activity.

---

## 12. Investigation Limitations

Document anything that affected your analysis.

Examples:

- Incomplete packet capture.
- Encrypted application traffic.
- Missing DNS responses.
- Unavailable endpoint information.
- Unknown network topology.
- Limited capture duration.
- Missing timestamps or metadata.

**Limitations identified:**

[Enter your observations here]

---

## 13. Further Investigation Recommendations

Based on your observations, suggest appropriate next steps.

Examples:

- Examine related packets.
- Review additional authorized network logs.
- Compare communication patterns against an approved baseline.
- Investigate endpoint logs.
- Validate unusual DNS activity using trusted sources.
- Collect additional traffic from an authorized environment.

**Recommendations:**

[Enter your recommendations here]

---

## 14. Candidate Reflection

Answer briefly:

1. What was the most difficult part of this investigation?
2. Which Wireshark feature did you find most useful?
3. What did you learn about network communication?
4. Which finding required the most reasoning?
5. What would you improve in your next investigation?

**Reflection:**

[Enter your response here]

---

## 15. Final Submission Checklist

- [ ] Dataset information documented.
- [ ] Packet structure examined.
- [ ] Protocol inventory completed.
- [ ] IP communication analysed.
- [ ] Display filters tested.
- [ ] DNS activity investigated.
- [ ] TCP communication examined.
- [ ] Unusual observations documented.
- [ ] Evidence references added.
- [ ] Investigation limitations recorded.
- [ ] Recommendations documented.
- [ ] Candidate reflection completed.
- [ ] Findings supported by actual evidence.

---

## 16. Submission Standard

A completed investigation must demonstrate:

1. Technical understanding.
2. Correct use of analysis tools.
3. Evidence-based reasoning.
4. Clear investigation documentation.
5. Awareness of uncertainty and limitations.
6. Responsible handling of network data.

Incomplete or unsupported observations must not be presented as verified findings.

**GraySentinel Evaluation Principle:**

We evaluate what a candidate can demonstrate, explain and defend with evidence.

**Proof Over Certificates.**

*Security Skills. Shown, Not Claimed.*

**GraySentinel Cyber Defence Lab**
