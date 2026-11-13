# Lab 04: Network Security Investigation

## Overview

This practical lab introduces network security investigation for aspiring SOC Analysts.

Learners will study firewall events, understand network connection activity, identify unusual traffic patterns and document potentially suspicious network behaviour.

**Level:** Beginner  
**Category:** Blue Team / Network Security  
**Focus:** Firewall Log Investigation

## Learning Objectives

By completing this lab, learners should understand how to:

- Read and interpret firewall log records.
- Identify source and destination IP addresses.
- Understand source and destination ports.
- Recognize allowed and blocked connections.
- Identify repeated connection attempts.
- Investigate unusual network activity.
- Prepare a basic network investigation summary.

## Prerequisites

Basic understanding of:

- IP addressing.
- TCP and UDP.
- Network ports and protocols.
- Firewalls and network security.
- Basic log analysis.

## Lab Environment

Required resources:

- A text editor.
- The sample firewall log dataset provided in the `datasets` directory.
- Basic knowledge of network traffic and connection records.

All supplied records are synthetic and intended for educational use.

## Practical Tasks

### Task 1: Understand Firewall Logs

Open the sample firewall dataset and identify:

- Timestamp.
- Source IP address.
- Destination IP address.
- Source port.
- Destination port.
- Protocol.
- Firewall action.

Understand the difference between allowed and blocked traffic.

### Task 2: Analyse Network Connections

Identify:

- Frequently communicating source addresses.
- Frequently targeted destination addresses.
- Common destination ports.
- TCP and UDP connection activity.

### Task 3: Investigate Blocked Traffic

Review blocked connection records.

Identify:

- Repeated blocked attempts.
- Common source addresses.
- Targeted destination ports.
- Unusual connection patterns.

### Task 4: Identify Potentially Suspicious Activity

Look for:

- Repeated connection attempts.
- Unexpected outbound connections.
- Unusual destination ports.
- Multiple blocked connections from one source.
- Unusual traffic sequences.

Treat suspicious observations as investigation leads, not confirmed attacks.

### Task 5: Prepare Investigation Findings

Document:

- Relevant firewall events.
- Source and destination details.
- Observed connection patterns.
- Potential security concerns.
- Recommended follow-up investigation.

## Investigation Questions

1. Which protocols appear in the dataset?
2. Which connections were allowed?
3. Which connections were blocked?
4. Which source address generated repeated connection attempts?
5. Which destination ports received unusual activity?
6. What additional evidence would help determine whether the activity is malicious?

## Expected Deliverables

Prepare the following:

1. Firewall log analysis notes.
2. List of relevant network events.
3. Identification of unusual connection patterns.
4. Short network investigation report.
5. Recommendations for further investigation.

## Expected Learning Outcome

After completing this lab, learners should be able to interpret basic firewall records, identify potentially suspicious network connections and communicate their findings clearly.

## Safety Guidelines

- Use only the synthetic dataset supplied with this lab.
- Do not investigate networks without authorization.
- Do not expose private network information.
- Do not treat blocked connections as proof of a successful attack.
- Perform all cybersecurity activities within authorized environments.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
