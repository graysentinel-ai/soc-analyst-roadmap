
/* =========================================================
   GRAYSENTINEL SOC ANALYST ROADMAP
   Main JavaScript
   Version: 1.0
   ========================================================= */

"use strict";


/* =========================================================
   01. APPLICATION INITIALISATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initialiseSmoothNavigation();

    initialiseActiveNavigation();

    initialiseRoadmapSearch();

    initialiseLearningProgress();

    initialiseBackToTop();

    initialiseExternalLinks();

    initialiseAccessibility();

});


/* =========================================================
   02. SMOOTH NAVIGATION
   ========================================================= */

function initialiseSmoothNavigation() {

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",

                block: "start"
            });

            history.replaceState(null, "", targetId);

        });

    });

}


/* =========================================================
   03. ACTIVE NAVIGATION
   ========================================================= */

function initialiseActiveNavigation() {

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".main-nav a"
    );

    if (!sections.length || !navigationLinks.length) {
        return;
    }

    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition = window.scrollY + 140;

        sections.forEach(function (section) {

            if (scrollPosition >= section.offsetTop) {
                currentSection = section.id;
            }

        });

        navigationLinks.forEach(function (link) {

            const target = link.getAttribute("href");

            if (target === "#" + currentSection) {

                link.classList.add("active");

                link.setAttribute("aria-current", "location");

            } else {

                link.classList.remove("active");

                link.removeAttribute("aria-current");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();

}


/* =========================================================
   04. ROADMAP SEARCH
   ========================================================= */

/*
   Search is activated only if a search input is added
   to the HTML page with id="roadmapSearch".

   This keeps the existing homepage functional without
   introducing an unnecessary search box.
*/

function initialiseRoadmapSearch() {

    const searchInput = document.getElementById(
        "roadmapSearch"
    );

    const roadmapCards = document.querySelectorAll(
        ".roadmap-card"
    );

    if (!searchInput || !roadmapCards.length) {
        return;
    }

    searchInput.addEventListener("input", function () {

        const query = searchInput.value
            .trim()
            .toLowerCase();

        roadmapCards.forEach(function (card) {

            const content = card.textContent.toLowerCase();

            const matches = content.includes(query);

            card.hidden = !matches;

        });

    });

}


/* =========================================================
   05. LEARNING PROGRESS
   ========================================================= */

/*
   Progress is stored in the current browser's localStorage.

   It is a personal convenience feature, not a verified
   learning record or an official GraySentinel assessment.
*/

function initialiseLearningProgress() {

    const progressCheckboxes = document.querySelectorAll(
        "[data-module-progress]"
    );

    if (!progressCheckboxes.length) {
        return;
    }

    const storageKey = "graysentinel-soc-roadmap-progress";

    let savedProgress = {};

    try {

        const storedData = localStorage.getItem(storageKey);

        savedProgress = storedData
            ? JSON.parse(storedData)
            : {};

        if (
            !savedProgress ||
            typeof savedProgress !== "object" ||
            Array.isArray(savedProgress)
        ) {
            savedProgress = {};
        }

    } catch (error) {

        console.warn(
            "Learning progress could not be loaded.",
            error
        );

        savedProgress = {};

    }


    function saveProgress() {

        try {

            localStorage.setItem(
                storageKey,
                JSON.stringify(savedProgress)
            );

        } catch (error) {

            console.warn(
                "Learning progress could not be saved.",
                error
            );

        }

    }


    progressCheckboxes.forEach(function (checkbox) {

        const moduleId = checkbox.dataset.moduleProgress;

        if (!moduleId) {
            return;
        }

        checkbox.checked = savedProgress[moduleId] === true;

        checkbox.addEventListener("change", function () {

            savedProgress[moduleId] = checkbox.checked;

            saveProgress();

            updateProgressSummary(
                progressCheckboxes,
                savedProgress
            );

        });

    });

    updateProgressSummary(
        progressCheckboxes,
        savedProgress
    );

}


/* =========================================================
   06. PROGRESS SUMMARY
   ========================================================= */

function updateProgressSummary(
    checkboxes,
    savedProgress
) {

    const progressLabel = document.getElementById(
        "progressPercentage"
    );

    const progressBar = document.getElementById(
        "progressBar"
    );

    const completedCount = document.getElementById(
        "completedModules"
    );

    if (!checkboxes.length) {
        return;
    }

    const total = checkboxes.length;

    let completed = 0;

    checkboxes.forEach(function (checkbox) {

        const moduleId = checkbox.dataset.moduleProgress;

        if (
            checkbox.checked &&
            savedProgress[moduleId] === true
        ) {
            completed++;
        }

    });

    const percentage = Math.round(
        (completed / total) * 100
    );

    if (progressLabel) {

        progressLabel.textContent =
            percentage + "%";

    }

    if (completedCount) {

        completedCount.textContent =
            completed + " / " + total;

    }

    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

        progressBar.setAttribute(
            "aria-valuenow",
            String(percentage)
        );

    }

}


/* =========================================================
   07. BACK TO TOP
   ========================================================= */

/*
   Activated only when a button with id="backToTop"
   is added to the HTML.
*/

function initialiseBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) {
        return;
    }

    button.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth"

        });

    });

}


/* =========================================================
   08. EXTERNAL LINK SECURITY
   ========================================================= */

function initialiseExternalLinks() {

    const links = document.querySelectorAll(
        'a[target="_blank"]'
    );

    links.forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

}


/* =========================================================
   09. ACCESSIBILITY ENHANCEMENTS
   ========================================================= */

function initialiseAccessibility() {

    const cards = document.querySelectorAll(
        ".roadmap-card, .project-card"
    );

    cards.forEach(function (card) {

        const heading = card.querySelector("h3");

        if (heading) {

            card.setAttribute(
                "aria-label",
                heading.textContent.trim()
            );

        }

    });

}


/* =========================================================
   10. APPLICATION ERROR HANDLING
   ========================================================= */

window.addEventListener(
    "error",
    function (event) {

        console.error(
            "GraySentinel website error:",
            event.message
        );

    }
);

