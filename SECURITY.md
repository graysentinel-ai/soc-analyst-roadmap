
# Security Policy

## GraySentinel Cyber Defence Lab

GraySentinel Cyber Defence Lab takes the security of its repositories, learning resources and project infrastructure seriously.

We appreciate responsible security research and encourage individuals to report vulnerabilities that could affect this repository or its associated project resources.

This policy explains which issues are in scope, how to report them and what to expect during the review process.

---

# 1. Supported Projects

This policy currently applies to:

- GraySentinel SOC Analyst Roadmap repository.
- Files and documentation maintained within this repository.
- Scripts and code examples maintained within this repository.
- Repository-specific GitHub Pages content, if deployed.
- Project-controlled configurations and workflows associated with this repository.

This policy does not automatically cover third-party platforms, external websites, software products or infrastructure that GraySentinel does not own or administer.

---

# 2. What Should Be Reported?

Examples of security issues worth reporting include:

- Exposed credentials, API keys or access tokens.
- Accidentally committed sensitive information.
- Insecure GitHub Actions or repository workflow configurations.
- Unsafe scripts or code examples.
- Vulnerabilities in project-maintained applications.
- Insecure handling of user-provided information.
- Unintended disclosure of private project data.
- Malicious or compromised dependencies introduced into the repository.
- Other security weaknesses that could affect project users or maintainers.

If you are unsure whether an issue qualifies, report the concern privately rather than publishing sensitive details.

---

# 3. Out-of-Scope Activities

This repository is an educational cybersecurity project.

Do not test systems outside the scope of your explicit authorisation.

The following activities are not authorised by this policy:

- Scanning or attacking unrelated public systems.
- Attempting to access third-party accounts.
- Testing infrastructure that GraySentinel does not own or administer.
- Conducting denial-of-service attacks.
- Social engineering project members.
- Accessing, modifying or deleting another person's data.
- Exfiltrating information to demonstrate impact.
- Publishing credentials or private information.
- Performing destructive testing.
- Exploiting a vulnerability beyond what is necessary to establish its existence safely.

The existence of a security learning repository does not provide permission to test external systems.

---

# 4. How to Report a Vulnerability

**Do not report sensitive security vulnerabilities through public GitHub issues or pull requests.**

Use GitHub's private vulnerability reporting feature for this repository, if it is enabled:

1. Open the repository's GitHub Security tab.
2. Look for the option to report a vulnerability.
3. Submit the report privately.
4. Include the relevant technical details and reproduction steps.

Repository URL:

https://github.com/graysentinel-ai/soc-analyst-roadmap

If private vulnerability reporting is unavailable, do not publish exploit details or sensitive information publicly.

Contact the repository maintainers through an independently verified official GraySentinel communication channel and request a private security reporting route.

Official website:

https://cyberdefencelab.co.in

**Important:** Do not assume that a public issue, direct message or unverified email address is a secure reporting channel.

---

# 5. What to Include in a Report

A useful vulnerability report should include:

### Basic Information

- Vulnerability title.
- Affected file, component or workflow.
- Repository branch or commit, if known.
- Date of discovery.

### Technical Details

- Description of the suspected vulnerability.
- Steps to reproduce safely.
- Expected behaviour.
- Actual behaviour.
- Potential security impact.
- Relevant screenshots or logs, with sensitive information removed.

### Additional Context

- Whether the issue is reproducible.
- Any relevant dependencies or configurations.
- Suggested remediation, if known.
- Whether the issue may have exposed sensitive information.

Please share only the minimum information necessary to establish the issue.

Do not include real credentials, personal information or unrelated confidential data.

---

# 6. Responsible Disclosure Expectations

We ask security researchers to:

- Act in good faith.
- Avoid accessing data that does not belong to them.
- Avoid modifying or deleting information.
- Avoid disrupting project services.
- Avoid public disclosure before maintainers have had a reasonable opportunity to investigate.
- Share sufficient information for safe reproduction.
- Stop testing when the issue has been established.

GraySentinel asks researchers not to use vulnerabilities as leverage, threaten project members or demand unrelated benefits.

---

# 7. What Happens After a Report?

The intended handling process is:

1. **Receipt:** The report is received through an available private reporting channel.
2. **Initial Review:** Maintainers assess the report's relevance and potential impact.
3. **Validation:** The issue is safely reviewed where sufficient information is available.
4. **Remediation:** Appropriate corrective action is considered.
5. **Verification:** Changes are reviewed and tested where possible.
6. **Closure:** The reporter may receive an update when communication is possible and appropriate.

Response times depend on the severity, complexity, available evidence and maintainer capacity.

No fixed response or remediation timeline is guaranteed by this policy.

---

# 8. Severity and Prioritisation

Security reports may be prioritised using the following general categories.

| Priority | General Description |
|---|---|
| Critical | Severe compromise or exposure with significant security impact |
| High | Serious vulnerability with substantial potential impact |
| Medium | Meaningful security weakness with limited or conditional impact |
| Low | Minor issue or weakness with limited security consequences |
| Informational | Security observation or hardening recommendation |

Severity is determined by the actual technical impact, exploitability, affected scope and available evidence.

A report's priority may change after investigation.

---

# 9. Exposed Credentials and Sensitive Information

If you discover credentials, access tokens, private keys or sensitive information in this repository:

- Do not use the credentials.
- Do not test access to unrelated accounts or services.
- Do not copy or redistribute the exposed information.
- Report the exposure privately.
- Preserve only the minimum information necessary to identify the affected location.

Removing a secret from the latest commit does not necessarily remove it from Git history.

Maintainers should assess whether the affected credentials need to be revoked or rotated and whether repository history requires remediation.

---

# 10. Recognition

GraySentinel appreciates responsible security researchers who help improve the safety of its projects.

Recognition may be provided at the discretion of the maintainers.

Reporting a vulnerability does not automatically guarantee:

- A financial reward.
- Employment.
- Internship selection.
- A paid engagement.
- Public acknowledgement.
- A particular response timeline.

Any separate recognition or reward arrangement must be agreed in writing.

---

# 11. Policy Limitations

This document describes the intended security reporting process for this repository.

It does not:

- Grant permission to test third-party systems.
- Create a contractual bug bounty programme.
- Guarantee a security response within a fixed period.
- Guarantee that every reported issue will be accepted as a vulnerability.
- Replace applicable laws, agreements or responsible disclosure requirements.

---

# 12. Policy Updates

GraySentinel may update this policy as the repository, infrastructure and reporting capabilities evolve.

The latest version in the repository is the current reference.

---

**GraySentinel Cyber Defence Lab**

Philosophy: Proof Over Certificates.

Website: https://cyberdefencelab.co.in

Repository: https://github.com/graysentinel-ai/soc-analyst-roadmap

© 2026 GraySentinel Cyber Defence Lab.
