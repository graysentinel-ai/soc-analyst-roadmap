# Lab 05: Endpoint Investigation

## Overview

This practical lab introduces endpoint security investigation for aspiring SOC Analysts.

Learners will examine endpoint activity records, understand process execution, identify unusual behaviour and document potentially suspicious endpoint events.

**Level:** Beginner  
**Category:** Blue Team / Endpoint Security  
**Focus:** Endpoint Event Investigation

## Learning Objectives

By completing this lab, learners should understand how to:

- Read and interpret endpoint event records.
- Identify process names and executable paths.
- Understand parent and child process relationships.
- Recognize unusual process execution patterns.
- Identify suspicious command-line activity.
- Document endpoint investigation findings.

## Prerequisites

Basic understanding of:

- Windows and Linux operating systems.
- Processes and services.
- Files and executable programs.
- Basic cybersecurity concepts.
- Security event logs.

## Lab Environment

Required resources:

- A text editor.
- The sample endpoint event dataset provided in the `datasets` directory.
- Basic understanding of JSON data.

All supplied records are synthetic and intended for educational use.

## Practical Tasks

### Task 1: Understand Endpoint Events

Open the sample dataset and identify:

- Event timestamp.
- Hostname.
- Username.
- Process name.
- Process ID.
- Executable path.
- Command-line arguments.

### Task 2: Analyse Process Execution

Review process execution records.

Identify:

- Frequently executed processes.
- Unusual executable locations.
- Parent and child process relationships.
- Processes running under privileged accounts.

### Task 3: Identify Suspicious Behaviour

Look for:

- Unusual PowerShell commands.
- Execution from temporary directories.
- Unexpected script execution.
- Unusual parent-child process combinations.
- Commands that require further investigation.

Do not classify a process as malicious based only on its name.

### Task 4: Investigate Endpoint Activity

Correlate related events using:

- Hostname.
- Username.
- Process ID.
- Timestamp.
- Executable path.

Create a chronological sequence of relevant endpoint activity.

### Task 5: Prepare Investigation Findings

Document:

- Relevant endpoint events.
- Processes requiring further investigation.
- Observed execution patterns.
- Potential security concerns.
- Recommended follow-up actions.

## Investigation Questions

1. Which processes appear in the dataset?
2. Which processes have unusual executable paths?
3. Are there suspicious parent-child process relationships?
4. Which command-line arguments require attention?
5. Which user accounts are associated with the events?
6. What additional evidence would help determine whether the activity is malicious?

## Expected Deliverables

Prepare the following:

1. Endpoint event analysis notes.
2. List of relevant process events.
3. Process execution timeline.
4. Identification of suspicious behaviour.
5. Short endpoint investigation summary.

## Expected Learning Outcome

After completing this lab, learners should be able to interpret basic endpoint activity records, identify potentially suspicious process behaviour and document investigation findings.

## Safety Guidelines

- Use only the synthetic dataset supplied with this lab.
- Do not execute suspicious commands from investigation records.
- Do not upload private endpoint logs or sensitive system information.
- Treat suspicious behaviour as an investigation lead, not confirmed malware.
- Perform all security activities in authorized environments.

---

**GraySentinel Cyber Defence Lab**

*Security Skills. Shown, Not Claimed.*
