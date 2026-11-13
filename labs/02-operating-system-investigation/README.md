# Lab 02: Operating System Investigation

**GraySentinel Cybersecurity Labs**

**Proof Over Certificates | Practical Security Skills | Verifiable Evidence**

| Lab Information | Details |
|---|---|
| Lab ID | GS-LAB-002 |
| Difficulty | Beginner |
| Domain | Operating System Security |
| Related Module | 02 Operating Systems |
| Primary Platform | Linux |
| Tools | Linux Terminal, Bash |
| Environment | Local Linux VM or authorized lab |
| Expected Deliverable | Operating System Investigation Report |

---

## 1. Lab Overview

Operating systems manage processes, users, permissions, services, files and system activity.

Security analysts must understand how an operating system works so they can investigate unusual processes, review user accounts, inspect file permissions and examine system logs.

In this practical lab, you will investigate a Linux system using built-in command-line tools.

You will collect system information, examine running processes, inspect user accounts, review file permissions and analyse available system logs.

**Important:** Perform all activities on your own Linux machine or an authorized virtual machine. Do not modify system files or terminate processes as part of this exercise.

---

## 2. Learning Objectives

By completing this lab, you should be able to:

1. Identify operating system information.
2. Understand Linux directory structure.
3. Identify logged-in users and user accounts.
4. Inspect running processes.
5. Understand process IDs and ownership.
6. Examine running services.
7. Understand file and directory permissions.
8. Locate and inspect system logs.
9. Identify unusual system activity requiring further investigation.
10. Document findings with verifiable evidence.

---

## 3. Prerequisites

You should understand:

- Basic computer operating system concepts.
- Files and directories.
- Basic command-line usage.
- User accounts.
- Basic permissions.

### Required Environment

Use one of the following:

- Ubuntu Linux virtual machine.
- Debian Linux virtual machine.
- Another supported Linux distribution.
- Windows Subsystem for Linux, where commands are supported.

Recommended: Ubuntu running inside VirtualBox or another virtual machine platform.

---

## 4. Tools Required

| Tool | Purpose |
|---|---|
| Linux Terminal | Execute investigation commands |
| Bash | Command-line shell |
| ps | Inspect processes |
| top | Monitor running processes |
| systemctl | Inspect system services |
| id | Inspect user identity |
| ls | Inspect files and permissions |
| stat | Examine file metadata |
| journalctl | Inspect system logs |
| grep | Search text and log entries |

Most of these tools are included in standard Linux installations.

---

## 5. Lab Scenario

You are working as a junior security analyst.

Your team wants a basic security review of an authorized Linux workstation.

You have been asked to investigate:

- Which operating system is running?
- Which users are present?
- Which processes are active?
- Which services are running?
- What permissions are assigned to important files?
- What information is available in system logs?
- Is there any activity that requires further investigation?

Your responsibility is to collect technical evidence and document your observations.

You must distinguish unusual activity from confirmed malicious activity.

---

## 6. Practical Tasks

### Task 01: Identify Operating System Information

**Objective:** Identify the operating system and basic system configuration.

Execute:

```bash
uname -a
```

```bash
cat /etc/os-release
```

```bash
hostname
```

```bash
uptime
```

### Record the following:

- Operating system name.
- Distribution version.
- Kernel version.
- Hostname.
- System uptime.

### Questions

1. What is the purpose of the Linux kernel?
2. What information does `/etc/os-release` contain?
3. Why is system uptime useful during an investigation?

**Expected Evidence:** Screenshot of command output and documented system information.

---

### Task 02: Examine Linux Users

**Objective:** Understand user accounts and the current user context.

Execute:

```bash
whoami
```

```bash
id
```

```bash
who
```

```bash
getent passwd
```

Inspect the output and identify:

- Current username.
- User ID (UID).
- Group ID (GID).
- Logged-in sessions.
- Available account entries.

For account information, examine:

```bash
getent passwd root
```

### Questions

1. What is a UID?
2. What is a GID?
3. Why does Linux use different user accounts?
4. Why should privileged accounts be monitored carefully?

**Safety:** Do not modify user accounts or attempt unauthorized privilege escalation.

**Expected Evidence:** Screenshot of user and identity command results.

---

### Task 03: Investigate Running Processes

**Objective:** Identify processes currently executing on the system.

Execute:

```bash
ps aux
```

For a process tree:

```bash
ps -ef --forest
```

For real-time process monitoring:

```bash
top
```

Exit `top` using `q`.

Identify:

- Process ID (PID).
- User or process owner.
- CPU usage.
- Memory usage.
- Process command.

### Questions

1. What is a process?
2. What is a PID?
3. What is the difference between a process and a service?
4. Why is process ownership important?
5. Can high CPU usage alone establish malicious activity?

**Expected Evidence:** Screenshot showing process information and a short analysis.

---

### Task 04: Inspect System Services

**Objective:** Understand how Linux services operate.

Execute:

```bash
systemctl list-units --type=service --state=running
```

Inspect a specific service:

```bash
systemctl status cron
```

Note: The service name may differ across Linux distributions. If `cron` is unavailable, inspect another service that exists on your system.

Record:

- Service name.
- Current state.
- Description.
- Whether it is active.

### Questions

1. What is a system service?
2. What is the difference between an active and inactive service?
3. Why should analysts understand services running on a system?
4. Can an unfamiliar service automatically be classified as malicious?

**Expected Evidence:** Screenshot of running services and one service status.

---

### Task 05: Examine File and Directory Permissions

**Objective:** Understand Linux file permissions and ownership.

Create a temporary investigation directory:

```bash
mkdir -p ~/graysentinel-lab02
```

Create a sample file:

```bash
touch ~/graysentinel-lab02/sample.txt
```

Inspect permissions:

```bash
ls -l ~/graysentinel-lab02
```

Inspect metadata:

```bash
stat ~/graysentinel-lab02/sample.txt
```

### Understand Permission Types

| Permission | Meaning |
|---|---|
| r | Read |
| w | Write |
| x | Execute |

### Example

```text
-rw-r--r--
```

This indicates:

- Owner: Read and write.
- Group: Read.
- Others: Read.

### Questions

1. What does `chmod` do?
2. What does `chown` do?
3. What is the difference between file ownership and file permissions?
4. Why can incorrect permissions create security risks?

**Expected Evidence:** Screenshot of file permissions and metadata.

Do not change permissions on system files during this exercise.

---

### Task 06: Investigate System Logs

**Objective:** Understand how Linux records system activity.

Inspect available journal entries:

```bash
journalctl -n 50 --no-pager
```

Inspect logs from the current boot:

```bash
journalctl -b -n 50 --no-pager
```

For authentication-related logs, try:

```bash
journalctl -b --no-pager | grep -iE 'authentication|session|sudo|failed'
```

Some distributions may use different logging configurations or restrict access to certain entries.

If available, inspect:

```bash
ls /var/log
```

### Record:

- Log timestamps.
- Relevant services.
- Authentication-related events.
- Error messages.
- Unusual or repeated entries.

### Questions

1. Why are system logs important?
2. What information can authentication logs provide?
3. Why should timestamps be considered during investigations?
4. What additional evidence might be required to investigate a failed login?

**Expected Evidence:** Screenshot of relevant log entries and written observations.

---

### Task 07: Identify Unusual System Activity

**Objective:** Develop basic operating system investigation skills.

Review the information collected in previous tasks.

Look for observations such as:

- Unexpected running processes.
- Unfamiliar service names.
- Unexpected privileged accounts.
- Unusual file permissions.
- Repeated authentication failures.
- Unexpected resource consumption.
- Unusual service activity.

For each observation, document:

1. What was observed?
2. Where was it observed?
3. When was it observed?
4. Which command or log supports it?
5. What are the possible explanations?
6. What additional investigation is needed?

### Finding Classification

| Classification | Meaning |
|---|---|
| Informational | Normal activity worth documenting |
| Requires Review | More context is needed |
| Potentially Suspicious | Evidence justifies further investigation |
| Inconclusive | Available information is insufficient |

Do not label a process or account malicious simply because its name is unfamiliar.

**Expected Evidence:** Investigation notes with supporting command output.

---

## 7. Investigation Worksheet

Complete this table using your actual Linux environment.

| Investigation Item | Your Findings |
|---|---|
| Operating System | |
| Distribution Version | |
| Kernel Version | |
| Hostname | |
| Current User | |
| UID | |
| GID | |
| Running Processes Reviewed | |
| Running Services Reviewed | |
| File Permissions Reviewed | |
| Log Entries Reviewed | |
| Unusual Observations | |
| Further Investigation Required | |

Do not invent missing information.

---

## 8. Evidence Submission Requirements

Submit evidence for the following:

| Evidence ID | Deliverable |
|---|---|
| EV-01 | Operating system information |
| EV-02 | User account investigation |
| EV-03 | Running process investigation |
| EV-04 | Service investigation |
| EV-05 | File permission analysis |
| EV-06 | System log investigation |
| EV-07 | Unusual activity assessment |

Screenshots must show genuine command output from your own authorized environment.

Every screenshot must be accompanied by a short explanation of what it demonstrates.

Do not submit copied tutorial screenshots as personal practical evidence.

---

## 9. Investigation Report

Prepare a report containing:

### A. Executive Summary

Explain the purpose and overall result of your investigation.

### B. System Information

Document the operating system, kernel and environment.

### C. User Investigation

Summarize user identities and account observations.

### D. Process Investigation

Document relevant running processes and ownership.

### E. Service Investigation

Summarize services reviewed.

### F. Permission Analysis

Explain the file permissions examined and their security implications.

### G. Log Analysis

Document relevant system and authentication events.

### H. Findings

List evidence-backed observations and their confidence levels.

### I. Limitations

Document unavailable logs, permission restrictions and missing context.

### J. Recommendations

Suggest appropriate further investigation or defensive improvements.

---

## 10. Evaluation Criteria

Suggested lab-level assessment:

| Evaluation Area | Weight |
|---|---:|
| Operating System Identification | 10% |
| User Investigation | 15% |
| Process Analysis | 15% |
| Service Investigation | 10% |
| File Permission Analysis | 15% |
| System Log Investigation | 15% |
| Investigation Reasoning | 10% |
| Evidence and Report Quality | 10% |
| **Total** | **100%** |

These are proposed Lab 02 evaluation weights, not the official GraySentinel Proof Score.

---

## 11. Completion Checklist

- [ ] Linux environment prepared.
- [ ] Operating system identified.
- [ ] User accounts examined.
- [ ] Running processes reviewed.
- [ ] System services examined.
- [ ] File permissions inspected.
- [ ] System logs reviewed.
- [ ] Unusual activity assessed.
- [ ] Evidence collected.
- [ ] Investigation report completed.
- [ ] Findings supported by actual observations.

---

## 12. Safety and Responsible Use

This exercise is intended for authorized educational environments.

- Use your own Linux machine or authorized virtual machine.
- Do not modify production system configurations.
- Do not terminate processes as part of this exercise.
- Do not attempt unauthorized privilege escalation.
- Do not access another user's private files.
- Do not expose passwords or sensitive log information.
- Do not publish confidential system information.

Use read-only investigation commands wherever possible.

---

## 13. Learning Resources

- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Linux Manual Pages](https://man7.org/linux/man-pages/)
- [Linux Kernel Documentation](https://docs.kernel.org/)
- [Microsoft Learn: Linux on WSL](https://learn.microsoft.com/windows/wsl/)

---

## 14. Lab Completion

You have completed this lab when you can explain how a Linux system manages users, processes, services, permissions and logs.

You must demonstrate your understanding through actual command execution, accurate observations and verifiable evidence.

**Do not just show that you ran commands. Explain what the output tells you and why it matters for security.**

---

**GraySentinel Cyber Defence Lab**

**Proof Over Certificates.**

*Practical Cybersecurity. Verifiable Capability.*
