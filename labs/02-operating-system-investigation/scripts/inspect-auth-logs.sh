
#!/usr/bin/env bash

# GraySentinel Cybersecurity Labs
# Lab 02: Operating System Investigation
# Script: inspect-auth-logs.sh
#
# Purpose:
# Inspect available Linux authentication logs.
#
# This script:
# - Reads available authentication logs.
# - Searches for authentication-related events.
# - Displays recent matching entries.
# - Does not modify system logs or configurations.

set -u

LINES="${1:-50}"

if ! [[ "$LINES" =~ ^[0-9]+$ ]] || [ "$LINES" -lt 1 ]; then
    echo "Usage: $0 [number_of_lines]"
    exit 1
fi

echo "========================================"
echo " GRAYSENTINEL - LAB 02"
echo " Authentication Log Investigation"
echo "========================================"

echo "Collection time: $(date '+%Y-%m-%d %H:%M:%S %Z')"
echo "Requested entries: $LINES"

echo
echo "========================================"
echo "1. JOURNAL AUTHENTICATION EVENTS"
echo "========================================"

if command -v journalctl >/dev/null 2>&1; then

    if journalctl -b -n "$LINES" --no-pager \
        --output=short-iso 2>/dev/null |
        grep -iE 'authentication|session|sudo|failed|accepted|invalid user'; then
        :
    else
        echo "No matching entries found or journal access unavailable."
    fi

else
    echo "journalctl is not available."
fi

echo
echo "========================================"
echo "2. AUTHENTICATION LOG FILES"
echo "========================================"

FOUND_LOG=false

for LOG_FILE in /var/log/auth.log /var/log/secure; do

    if [ -f "$LOG_FILE" ] && [ -r "$LOG_FILE" ]; then

        FOUND_LOG=true

        echo
        echo "Log file: $LOG_FILE"

        grep -iE \
            'authentication|session|sudo|failed|accepted|invalid user' \
            "$LOG_FILE" 2>/dev/null |
            tail -n "$LINES" ||
            echo "No matching entries found."

    fi

done

if [ "$FOUND_LOG" = false ]; then
    echo "No readable authentication log file found."
fi

echo
echo "========================================"
echo "3. INVESTIGATION REMINDERS"
echo "========================================"

echo "- Review timestamps of relevant events."
echo "- Identify repeated authentication failures."
echo "- Check whether successful logins follow failures."
echo "- Examine sudo-related activity."
echo "- Consider legitimate explanations."
echo "- Do not classify isolated events as attacks."
echo
echo "========================================"
echo " INVESTIGATION COMPLETE"
echo "========================================"

echo "Review and document findings before submission."
echo "GraySentinel | Proof Over Certificates"
