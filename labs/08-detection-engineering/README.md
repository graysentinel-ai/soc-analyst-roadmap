# Lab 08: Detection Engineering

## Overview

This practical lab introduces detection engineering for aspiring SOC Analysts.

Learners will understand how security detection rules work, examine suspicious activity patterns, write basic Sigma detection rules and learn how detection logic helps identify potential security threats.

**Level:** Beginner to Intermediate  
**Category:** Blue Team / Detection Engineering  
**Focus:** Security Detection Rules

## Learning Objectives

By completing this lab, learners should understand how to:

- Understand the purpose of security detection rules.
- Identify suspicious activity patterns.
- Understand basic Sigma rule structure.
- Write simple detection logic.
- Recognize potential false positives.
- Improve detection descriptions and conditions.
- Document detection engineering findings.

## Prerequisites

Basic understanding of:

- Security event logs.
- Windows process activity.
- Authentication events.
- Common cybersecurity threats.
- Basic YAML syntax.

## Lab Environment

Required resources:

- A text editor.
- The sample Sigma detection rule provided in the `rules` directory.
- Basic knowledge of YAML.

All examples are educational and intended for authorized defensive security activities.

## Practical Tasks

### Task 1: Understand Detection Engineering

Learn why detection rules are used in security monitoring.

Understand:

- Security events.
- Detection conditions.
- Event fields.
- Matching logic.
- Alert generation.

### Task 2: Understand Sigma Rules

Study the structure of a basic Sigma rule.

Identify:

- Rule title.
- Rule identifier.
- Description.
- Log source.
- Detection selection.
- Condition.
- Severity level.
- Tags.

### Task 3: Analyse the Sample Detection Rule

Open the sample detection rule.

Identify:

- What activity the rule is designed to detect.
- Which event fields are used.
- What conditions trigger a match.
- Why the activity may require investigation.

### Task 4: Understand False Positives

Consider situations where legitimate activity may match a detection rule.

Identify:

- Normal administrative activity.
- Authorized scripting.
- Legitimate system processes.
- Context required to investigate an alert.

### Task 5: Improve Detection Logic

Review the supplied detection rule and consider:

- Whether the selection conditions are appropriate.
- Whether additional event fields would improve context.
- Whether the rule description is clear.
- Whether the severity level is reasonable.

Do not assume that a matching event automatically confirms malicious activity.

### Task 6: Document Detection Findings

Prepare a short detection analysis containing:

- Detection objective.
- Activity being monitored.
- Relevant event fields.
- Detection conditions.
- Potential false positives.
- Recommended investigation steps.

## Investigation Questions

1. What is the purpose of a Sigma detection rule?
2. Which event fields are used in the supplied rule?
3. What activity can trigger the detection?
4. Why might legitimate activity generate an alert?
5. What additional context would help an analyst investigate the alert?
6. How could the detection be improved?

## Expected Deliverables

Prepare the following:

1. Sigma rule analysis notes.
2. Explanation of detection logic.
3. List of relevant event fields.
4. Potential false-positive scenarios.
5. Detection improvement recommendations.

## Expected Learning Outcome

After completing this lab, learners should be able to understand basic detection rules, interpret Sigma logic, identify potential false positives and explain how detection engineering supports SOC operations.

## Safety Guidelines

- Use detection rules for authorized defensive monitoring.
- Do not deploy unreviewed detection rules in production environments.
- Protect sensitive log data.
- Document assumptions and limitations.
- Treat detection matches as investigation leads, not confirmed incidents.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
