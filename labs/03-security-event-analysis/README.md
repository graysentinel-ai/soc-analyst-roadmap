# Lab 03: Security Event Analysis

## Overview

This practical lab introduces security event analysis for aspiring Security Operations Centre (SOC) Analysts.

Learners will examine security events, understand event fields, identify suspicious activity and prepare a basic investigation summary.

**Level:** Beginner  
**Category:** Blue Team / SOC Operations  
**Focus:** Security Event Investigation

## Learning Objectives

By completing this lab, learners should understand how to:

- Read and interpret security event records.
- Identify timestamps, event sources and event types.
- Recognize failed and successful authentication events.
- Identify unusual activity patterns.
- Organize events into a basic incident timeline.
- Document investigation findings.

## Prerequisites

Basic understanding of:

- Operating systems.
- User accounts and authentication.
- Log files and timestamps.
- Basic cybersecurity concepts.

## Lab Environment

Required resources:

- A text editor.
- The sample security event dataset provided in the `datasets` directory.
- Basic knowledge of CSV or log file formats.

All supplied events are synthetic and intended for educational use.

## Practical Tasks

### Task 1: Understand Security Events

Open the sample dataset and identify:

- Event timestamp.
- Event ID.
- Username.
- Source IP address.
- Event description.
- Event status.

Understand what each field represents.

### Task 2: Identify Authentication Activity

Review the authentication-related events.

Identify:

- Failed login attempts.
- Successful login attempts.
- Repeated authentication failures.
- Accounts involved in unusual activity.

### Task 3: Identify Suspicious Patterns

Look for:

- Multiple failed login attempts.
- Repeated activity from the same source IP.
- Unexpected login activity.
- Unusual sequences of authentication events.

Do not automatically classify every failed login as an attack. Consider the available evidence.

### Task 4: Build an Event Timeline

Arrange relevant events chronologically.

Record:

- First observed event.
- Repeated events.
- Successful authentication, if present.
- Last observed event.

### Task 5: Prepare Investigation Findings

Summarize the activity observed in the dataset.

Separate confirmed observations from assumptions.

## Expected Deliverables

Prepare the following:

1. Security event analysis notes.
2. List of relevant event records.
3. Chronological event timeline.
4. Identification of suspicious patterns.
5. Short investigation summary.

## Investigation Questions

1. Which event types appear in the dataset?
2. Which accounts show repeated authentication failures?
3. Are multiple events associated with the same source IP?
4. Does any successful login follow repeated failures?
5. Which observations require further investigation?
6. What additional evidence would help confirm suspicious activity?

## Expected Learning Outcome

After completing this lab, learners should be able to read basic security event records, identify potentially suspicious authentication patterns and document their observations clearly.

## Safety Guidelines

- Use only the synthetic dataset supplied with this lab.
- Do not upload real authentication logs containing private information.
- Do not expose usernames, credentials or sensitive system details.
- Treat suspicious patterns as investigation leads, not confirmed incidents without supporting evidence.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
