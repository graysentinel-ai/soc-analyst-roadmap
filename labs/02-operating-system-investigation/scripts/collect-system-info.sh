
#!/usr/bin/env bash

# GraySentinel Cybersecurity Labs
# Lab 02: Operating System Investigation
# Script: collect-system-info.sh
#
# Purpose:
# Collect basic, read-only Linux system information
# for authorized educational investigation.

set -u

print_section() {
    printf "\n"
    printf '%s\n' "========================================"
    printf '%s\n' "$1"
    printf '%s\n' "========================================"
}

run_check() {
    local description="$1"
    shift

    printf "\n--- %s ---\n" "$description"

    if command -v "$1" >/dev/null 2>&1; then
        "$@" 2>&1 || printf 'Command returned a non-zero status.\n'
    else
        printf 'Command not available: %s\n' "$1"
    fi
}

print_section "GRAY SENTINEL - LAB 02"
printf 'Investigation: Operating System Information\n'
printf 'Collection Time: %s\n' "$(date '+%Y-%m-%d %H:%M:%S %Z')"

print_section "1. OPERATING SYSTEM"

run_check "Kernel Information" uname -a
run_check "Distribution Information" cat /etc/os-release

print_section "2. HOST INFORMATION"

run_check "Hostname" hostname
run_check "System Uptime" uptime

print_section "3. CURRENT USER"

run_check "Current Username" whoami
run_check "User and Group IDs" id
run_check "Logged-in Sessions" who

print_section "4. PROCESS INFORMATION"

run_check "Top Processes" ps -eo pid,user,comm,%cpu,%mem --sort=-%cpu

print_section "5. RUNNING SERVICES"

if command -v systemctl >/dev/null 2>&1; then
    systemctl list-units \
        --type=service \
        --state=running \
        --no-pager \
        --no-legend 2>&1 || \
        printf 'Unable to retrieve service information.\n'
else
    printf 'systemctl is unavailable on this system.\n'
fi

print_section "6. FILE PERMISSION SAMPLE"

SAMPLE_DIR="${HOME}/graysentinel-lab02"

if [ -d "$SAMPLE_DIR" ]; then
    run_check "Sample Directory Permissions" ls -ld "$SAMPLE_DIR"

    if [ -f "$SAMPLE_DIR/sample.txt" ]; then
        run_check "Sample File Permissions" stat "$SAMPLE_DIR/sample.txt"
    else
        printf 'sample.txt does not exist yet.\n'
    fi
else
    printf 'Lab sample directory does not exist yet.\n'
    printf 'Create it using the Lab 02 instructions.\n'
fi

print_section "7. SYSTEM LOG AVAILABILITY"

if command -v journalctl >/dev/null 2>&1; then
    journalctl -b -n 15 --no-pager 2>&1 || \
        printf 'Journal entries unavailable or access restricted.\n'
else
    printf 'journalctl is unavailable on this system.\n'
fi

print_section "8. INVESTIGATION COMPLETE"

printf '%s\n' "System information collection finished."
printf '%s\n' "Review the output before submitting evidence."
printf '%s\n' "No system configuration was intentionally modified."

printf '\n%s\n' "GraySentinel | Proof Over Certificates"
