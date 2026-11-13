
# Dataset Information: Sample Network Traffic

**GraySentinel Cybersecurity Labs**

## 1. Dataset Overview

| Field | Details |
|---|---|
| Dataset ID | GS-LAB-001-DATA-01 |
| Lab ID | GS-LAB-001 |
| Lab Name | Network Traffic Analysis |
| Dataset Name | Sample Network Traffic |
| Filename | sample-network-traffic.pcap |
| Format | PCAP |
| Link Type | Ethernet |
| Dataset Type | Synthetic |
| Packet Count | 20 |
| Difficulty | Beginner |
| Primary Tool | Wireshark |
| Purpose | Practical network traffic investigation |

## 2. Dataset Description

This dataset contains synthetic network traffic created specifically for GraySentinel Lab 01.

It is designed to help candidates understand network communication, inspect packets, identify protocols and investigate unusual traffic patterns.

The dataset contains multiple types of network communication, including DNS, TCP, HTTP and ICMP.

It does not contain real user traffic or production network data.

## 3. Included Network Traffic

| No. | Traffic Type | Description |
|---|---|---|
| 01 | DNS Query | Domain name resolution request |
| 02 | DNS Response | Successful DNS response |
| 03 | DNS NXDOMAIN | Unsuccessful domain resolution |
| 04 | TCP Handshake | SYN, SYN-ACK and ACK communication |
| 05 | HTTP Request | HTTP GET request |
| 06 | HTTP Response | HTTP 200 OK response |
| 07 | ICMP Request | Echo request packet |
| 08 | ICMP Response | Echo reply packet |
| 09 | TCP Connection Attempts | Repeated connection attempts to a test service |
| 10 | TCP Reset | RST responses from the simulated test service |

## 4. Network Address Information

The dataset uses documentation-only IPv4 address ranges.

| System | IP Address | Purpose |
|---|---|---|
| Client | 192.0.2.10 | Test workstation |
| DNS Server | 192.0.2.53 | DNS resolution |
| Web Server | 203.0.113.80 | HTTP communication |
| Test Gateway | 198.51.100.1 | ICMP communication |
| Test Service | 198.51.100.30 | TCP connection testing |

These addresses are reserved for documentation and examples. They do not identify real production systems.

## 5. DNS Information

The dataset includes two DNS queries.

### Query 01

| Field | Value |
|---|---|
| Domain | portal.example.test |
| Query Type | A |
| Expected Result | Successful response |
| Resolved Address | 203.0.113.80 |

### Query 02

| Field | Value |
|---|---|
| Domain | missing.example.test |
| Query Type | A |
| Expected Result | NXDOMAIN |
| Meaning | Requested domain does not exist in the simulated DNS response |

Candidates should inspect both queries and compare their responses.

## 6. TCP and HTTP Information

The dataset includes a TCP connection between:

- Client: 192.0.2.10
- Web Server: 203.0.113.80
- Client Port: 51514
- Server Port: 80

The communication includes:

1. TCP SYN.
2. TCP SYN-ACK.
3. TCP ACK.
4. HTTP GET request.
5. HTTP 200 OK response.
6. TCP connection termination.

Candidates should inspect the TCP flags and HTTP communication in Wireshark.

## 7. ICMP Information

The dataset contains:

- One ICMP Echo Request.
- One ICMP Echo Reply.

Candidates can use the following display filter:

```text
icmp
```

The packets demonstrate basic ICMP communication between the simulated client and gateway.

## 8. Repeated TCP Connection Attempts

The dataset includes three connection attempts from:

**Source:** 192.0.2.10

**Destination:** 198.51.100.30

**Destination Port:** 8080

Each attempt receives a TCP RST response.

Candidates should investigate:

- Number of connection attempts.
- Source and destination addresses.
- Destination port.
- TCP flags.
- Timing between attempts.
- Possible explanations for the connection failures.

These packets are intentionally included as a traffic-analysis exercise. They do not represent a confirmed real-world attack.

## 9. Recommended Wireshark Filters

| Filter | Purpose |
|---|---|
| `dns` | Inspect DNS traffic |
| `tcp` | Inspect TCP packets |
| `udp` | Inspect UDP packets |
| `http` | Inspect HTTP communication |
| `icmp` | Inspect ICMP traffic |
| `tcp.flags.syn == 1` | Identify TCP SYN packets |
| `tcp.flags.reset == 1` | Identify TCP reset packets |
| `tcp.port == 8080` | Inspect traffic involving TCP port 8080 |
| `ip.addr == 192.0.2.10` | Inspect traffic involving the client |

## 10. Dataset Integrity

**Filename:** `sample-network-traffic.pcap`

**SHA-256:**

```text
aebbb54ae5ed7c2b3547195480d26755f696d959478c076eec8121188003c28d
```

Verify the dataset using:

### Linux

```bash
sha256sum sample-network-traffic.pcap
```

### Windows PowerShell

```powershell
Get-FileHash .\sample-network-traffic.pcap -Algorithm SHA256
```

The calculated hash should match the value documented above.

## 11. Dataset Authorization and Redistribution

This dataset was synthetically generated for GraySentinel educational use.

It contains:

- Synthetic packet data.
- Documentation-only IPv4 addresses.
- Reserved example domain names.
- No real user credentials.
- No production network traffic.
- No personal communications.

This generated sample may be redistributed with the GraySentinel repository.

## 12. Candidate Learning Outcomes

After analysing this dataset, candidates should be able to:

1. Open and inspect a PCAP file.
2. Identify common network protocols.
3. Understand basic packet structure.
4. Analyse source and destination IP addresses.
5. Examine DNS queries and responses.
6. Understand TCP connection establishment.
7. Inspect HTTP requests and responses.
8. Identify repeated connection attempts.
9. Apply Wireshark display filters.
10. Document evidence-backed observations.

## 13. Reviewer Validation

Before using this dataset for candidate evaluation, reviewers should:

- [ ] Confirm the PCAP file opens successfully.
- [ ] Verify the packet count.
- [ ] Inspect DNS queries and responses.
- [ ] Verify the HTTP request and response.
- [ ] Inspect TCP handshake packets.
- [ ] Verify ICMP request and response.
- [ ] Examine repeated TCP connection attempts.
- [ ] Verify the SHA-256 hash.
- [ ] Confirm expected observations match the actual capture.

**Validation Status:** Pending independent Wireshark verification.

Do not mark this dataset as fully validated until the reviewer has tested it.

## 14. Related Lab Files

- [Lab Instructions](../README.md)
- [Investigation Notes](../analysis/investigation-notes.md)
- [Evidence Submission Guide](../evidence/README.md)
- [Network Investigation Report](../reports/network-investigation-report.md)

---

**GraySentinel Cyber Defence Lab**

**Proof Over Certificates.**

*Security Skills. Shown, Not Claimed.*
