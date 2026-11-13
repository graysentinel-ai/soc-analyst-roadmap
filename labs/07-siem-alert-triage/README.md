# Lab 07: SIEM Alert Triage

## Overview

This practical lab introduces SIEM alert triage for aspiring SOC Analysts.

Learners will examine security alerts, understand alert severity, identify potentially suspicious activity, prioritize investigations and document triage decisions.

**Level:** Beginner to Intermediate  
**Category:** Blue Team / Security Operations  
**Focus:** SIEM Alert Analysis and Triage

## Learning Objectives

By completing this lab, learners should understand how to:

- Read and interpret SIEM alerts.
- Understand alert severity and priority.
- Identify alert sources and affected assets.
- Recognize suspicious event patterns.
- Correlate related security alerts.
- Distinguish potential false positives from incidents requiring investigation.
- Document alert triage decisions.

## Prerequisites

Basic understanding of:

- Security event logs.
- Authentication and network activity.
- Common cybersecurity threats.
- Security monitoring concepts.
- Basic incident investigation.

## Lab Environment

Required resources:

- A text editor or spreadsheet application.
- The sample SIEM alert dataset provided in the `datasets` directory.
- Basic knowledge of CSV files.

All supplied alerts are synthetic and intended for educational use.

## Practical Tasks

### Task 1: Understand SIEM Alerts

Open the sample dataset and identify:

- Alert ID.
- Timestamp.
- Alert name.
- Severity.
- Source IP address.
- Destination IP address.
- Affected hostname.
- Alert description.

### Task 2: Analyse Alert Severity

Group alerts by severity.

Understand the difference between:

- Critical
- High
- Medium
- Low
- Informational

Identify which alerts should receive the highest investigation priority.

### Task 3: Identify Suspicious Activity

Look for:

- Repeated authentication failures.
- Unusual network connections.
- Suspicious process execution.
- Privileged account activity.
- Multiple alerts involving the same host or user.

### Task 4: Correlate Security Alerts

Identify alerts that may be related using:

- Timestamp.
- Source IP address.
- Hostname.
- Username.
- Alert type.

Build a basic sequence of related security events.

### Task 5: Make Triage Decisions

For each relevant alert, document:

- Whether further investigation is required.
- Why the alert deserves attention.
- What evidence supports the decision.
- What additional information is needed.

Do not automatically classify an alert as a confirmed incident.

### Task 6: Prepare Triage Summary

Create a summary containing:

- High-priority alerts.
- Medium-priority alerts.
- Low-priority alerts.
- Potential false positives.
- Alerts requiring further investigation.
- Recommended next actions.

## Investigation Questions

1. How many alerts appear in the dataset?
2. Which alert has the highest severity?
3. Which host or account appears in multiple alerts?
4. Are there alerts that may be related?
5. Which alerts require immediate investigation?
6. Which alerts may be false positives?
7. What additional evidence would help confirm an incident?

## Expected Deliverables

Prepare the following:

1. SIEM alert analysis notes.
2. Alert severity classification.
3. List of prioritized alerts.
4. Basic alert correlation timeline.
5. Triage decision summary.

## Expected Learning Outcome

After completing this lab, learners should be able to interpret basic SIEM alerts, prioritize suspicious activity, identify related security events and document their triage decisions.

## Safety Guidelines

- Use only the synthetic dataset supplied with this lab.
- Do not expose real security alerts containing sensitive information.
- Do not treat automated alerts as confirmed security incidents.
- Record assumptions and uncertainties.
- Follow authorized incident response procedures.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
