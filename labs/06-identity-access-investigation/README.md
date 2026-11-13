# Lab 06: Identity and Access Investigation

## Overview

This practical lab introduces Identity and Access Management (IAM) investigation for aspiring SOC Analysts.

Learners will examine authentication and access events, identify unusual login patterns, understand account activity and investigate potentially suspicious access behaviour.

**Level:** Beginner  
**Category:** Blue Team / Identity and Access Management  
**Focus:** Authentication and Account Activity Investigation

## Learning Objectives

By completing this lab, learners should understand how to:

- Read and interpret identity event records.
- Identify successful and failed login attempts.
- Understand authentication and authorization.
- Recognize repeated login failures.
- Identify unusual account access patterns.
- Investigate privileged account activity.
- Document identity-related security findings.

## Prerequisites

Basic understanding of:

- User accounts and passwords.
- Authentication and authorization.
- Operating systems.
- IP addresses and timestamps.
- Basic cybersecurity concepts.

## Lab Environment

Required resources:

- A text editor or spreadsheet application.
- The sample identity event dataset provided in the `datasets` directory.
- Basic knowledge of CSV files.

All supplied records are synthetic and intended for educational use.

## Practical Tasks

### Task 1: Understand Identity Events

Open the sample dataset and identify:

- Event timestamp.
- Username.
- Source IP address.
- Authentication method.
- Event type.
- Authentication status.

### Task 2: Analyse Login Activity

Review authentication records.

Identify:

- Successful logins.
- Failed login attempts.
- Repeated failures.
- Accounts with unusual login activity.

### Task 3: Investigate Account Behaviour

Look for:

- Multiple login failures for one account.
- Login activity from different source addresses.
- Unusual login times.
- Privileged account usage.
- Unexpected account access patterns.

### Task 4: Understand Access Control

Identify events related to:

- User authentication.
- Access authorization.
- Privileged access.
- Access denial.
- Account status changes.

Understand the difference between authentication and authorization.

### Task 5: Prepare Investigation Findings

Document:

- Accounts requiring attention.
- Relevant authentication events.
- Unusual access patterns.
- Potential security concerns.
- Recommended follow-up investigation.

## Investigation Questions

1. Which accounts have successful authentication events?
2. Which accounts show repeated login failures?
3. Are any accounts associated with multiple source IP addresses?
4. Is privileged account activity present?
5. Which access events require further investigation?
6. What additional evidence would help confirm suspicious account activity?

## Expected Deliverables

Prepare the following:

1. Identity event analysis notes.
2. List of relevant authentication events.
3. Account activity summary.
4. Identification of unusual access patterns.
5. Short identity investigation report.

## Expected Learning Outcome

After completing this lab, learners should be able to interpret basic identity and authentication records, recognize potentially suspicious account activity and document their findings clearly.

## Safety Guidelines

- Use only the synthetic dataset supplied with this lab.
- Never publish real usernames, passwords or authentication secrets.
- Do not attempt unauthorized account access.
- Treat unusual login activity as an investigation lead, not confirmed compromise.
- Perform all cybersecurity activities in authorized environments.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
