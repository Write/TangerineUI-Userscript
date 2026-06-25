// ==UserScript==
// @name        TangerineUI 🍊 for Mastodon — fork + neue support
// @namespace   TangerineUI for Mastodon — original by @nileane, fork by @mattbirchler, userscript by @Write
// @description TangerineUI for Mastodon by @nileane / Tangerine-Neue fork by @mattbirchler / Userscript by @Write
//
// @match       https://AddYourInstanceUrlHere.tld/*
// @match       https://mamot.fr/*
// @match       https://mastodon.social/*
// @match       https://piaille.fr/*
// @match       https://eldritch.cafe/*
// @match       https://h-i.social/*
// @match       https://diaspodon.fr/*
// @match       https://metalhead.club/*
// @match       https://mastodon.macstories.net/*
// @match       https://aleph.land/*
// @match       https://anticapitalist.party/*
// @match       https://bdx.town/*
// @match       https://burnout.cafe/*
// @match       https://catharsis.cafe/*
// @match       https://djs.social/*
// @match       https://epsilon.social/*
// @match       https://equestria.social/*
// @match       https://eupolicy.social/*
// @match       https://forall.social/*
// @match       https://gayfr.social/*
// @match       https://gemeinsam.bio/*
// @match       https://greenhill.zone/*
// @match       https://h4.io/*
// @match       https://im-in.space/*
// @match       https://lou.lt/*
// @match       https://ludosphere.fr/*
// @match       https://maly.io/*
// @match       https://mas.atmx.ca/*
// @match       https://mastodon.acerbo.me/*
// @match       https://mastodon.art/*
// @match       https://mastodon-belgium.be/*
// @match       https://mastodon.codingfield.com/*
// @match       https://mastodon.ethibox.fr/*
// @match       https://mastodon.fedi.bzh/*
// @match       https://mastodon.fun/*
// @match       https://mastodon.mg/*
// @match       https://mastodon.opportunis.me/*
// @match       https://mastodon.opencloud.lu/*
// @match       https://mastodon.pirateparty.be/*
// @match       https://mastodon.roflcopter.fr/*
// @match       https://mastodon.scop.coop/*
// @match       https://mastodon.tedomum.net/*
// @match       https://mastodon.tn/*
// @match       https://mastodon.top/*
// @match       https://mastodon.xyz/*
// @match       https://mastodon.zaclys.com/*
// @match       https://mastodontech.de/*
// @match       https://mastoot.fr/*
// @match       https://meow.social/*
// @match       https://mstdn.ca/*
// @match       https://mstdn.fr/*
// @match       https://mstdn.io/*
// @match       https://mstdn.social/*
// @match       https://mst3k.interlinked.me/*
// @match       https://mtl.rocks/*
// @match       https://oc.todon.fr/*
// @match       https://oldbytes.space/*
// @match       https://pipou.academy/*
// @match       https://pouet.chapril.org/*
// @match       https://ps.s10y.eu/*
// @match       https://rivals.space/*
// @match       https://shelter.moe/*
// @match       https://social.bim.land/*
// @match       https://social.linux.pizza/*
// @match       https://social.roadfm.fr/*
// @match       https://social.sciences.re/*
// @match       https://social.taker.fr/*
// @match       https://social.targaryen.house/*
// @match       https://sociale.network/*
// @match       https://swiss.social/*
// @match       https://tchafia.be/*
// @match       https://thecanadian.social/*
// @match       https://todon.eu/*
// @match       https://todon.nl/*
// @match       https://tooting.ch/*
// @match       https://ublog.tech/*
// @match       https://yyc.bike/*
//
// @downloadURL https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js
// @updateURL   https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js
// @homepageURL https://github.com/Write/TangerineUI-Userscript
// @grant       none
// @version     2.6.2.1
// @author      nileane (TangerineUI), mattbirchler (Tangerine-Neue fork), Write (Userscript)
// @run-at      document-start
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVR4AZXOA2xeUQAF4BvNW8xGi7WFY227v81otu0Fs23btq3attunvrN7//bOPMmX98414bFa4edyda12u7te0m8d1UKhRyNVT32idrtcGE6+jdMpBzjtUjOFf2KTZJddchKWsWPR22HprKLATBwnYOM6CfNni+Bjs2d0j02ZKLDOCVZrhx9xGNuT7aY2MAvmdKCjQwXP0UMidm4ToPYMiSKwcmkn+Hqbsd1L7LqWqTZ9M5injyXf4oN7O3HkQCdkGRAEFWdOCNi9vROKAnx8L4Ovt+uaZhCbpn6eTVsPpjBfRkN9F3ivLFfQ0qJ+6SXFCupqv86zvcSWVjPTml4DprhQRm21At7ZgbU1X3tBnoxGegHvlvSa2cSaUjXWklIJhh/Ae2Ge5DuA94JcyfdC3q2plVOJObncYU4qA1NcIPkO4H2soxLjXZW80wNEesDXeVNSqYcY44s1pvhiMDcvt+LB7Tbw/qPrF1rx+F77l25IKh1KjNEFw40xBfhfhpiCs4RFE/JxgDEqR6Xwj5qptZaot/0JjyE867UhPBOcMeJThCH8U6QhLNNgjMj06iMyjfQ/0RSROSQ2Nrc3+TG60I/J+tAPKgWfsI/7NaMe9SXfxBSbO4j8Kdrgdx5d0FuBQrd3zbrgN28Y2quofPK3aILeDtb6v1yt8X/5Suv/qo0Sdf6vijT+r05q/F9Hkl/kM/y+SpUd6mHfAAAAAElFTkSuQmCC
// ==/UserScript==
(function () {
    "use strict";

    /* ================================================================
     *  TangerineUI Userscript
     *
     *  Loads TangerineUI (or Tangerine-Neue) CSS on any Mastodon instance
     *  based on the instance's version.
     *
     *  ┌─ Original TangerineUI ──────────────────────────────────────┐
     *  │  by @nileane (https://github.com/nileane/TangerineUI-for-   │
     *  │  Mastodon) — now EOL at v2.5.4-EOL, supports Mastodon ≤ 4.5 │
     *  └─────────────────────────────────────────────────────────────┘
     *
     *  ┌─ Tangerine-Neue fork ───────────────────────────────────────┐
     *  │  by @mattbirchler (https://github.com/mattbirchler/         │
     *  │  Tangerine-Neue-for-Mastodon) — supports Mastodon ≥ 4.6,   │
     *  │  adds the Granite theme.                                    │
     *  └─────────────────────────────────────────────────────────────┘
     *
     *  The script reads the Mastodon version from the page's
     *  initial-state JSON and picks the right CSS from the right repo.
     *  No manual switching — it just works.
     *
     *  Userscript by @Write (https://github.com/Write/TangerineUI-Userscript)
     * ================================================================ */

    /* ================================================
     *   SETTINGS — Edit these to configure your theme
     * ================================================ */

    /* Default themes for hosts not configured in perHostThemes below.
     *
     * These are the fallback themes applied to ANY Mastodon instance
     * that doesn't have a specific entry in perHostThemes.
     *
     * Three version tiers because different theme variants are available
     * depending on the Mastodon version range:
     *
     *   legacy  → Mastodon < 4.3.0     (only tangerine & purple available)
     *   modern  → Mastodon 4.3.x–4.5.x (tangerine, purple, cherry, lagoon)
     *   neue    → Mastodon ≥ 4.6.x     (tangerine, purple, cherry, lagoon, granite)
     *
     * Available themes: 'tangerine', 'purple', 'cherry', 'lagoon', 'granite'
     * Note: Only tangerine & purple work on legacy (< 4.3). Cherry, lagoon
     * and granite are ignored on legacy and fall back to tangerine.
     * Granite is only available on Tangerine-Neue (≥ 4.6). */
    const defaultThemes = {
        legacy: "tangerine", // Default theme for Mastodon < 4.3.0
        modern: "tangerine", // Default theme for Mastodon 4.3.x – 4.5.x
        neue: "tangerine",   // Default theme for Mastodon >= 4.6.0 (Tangerine-Neue fork)
    };

    /* Per-host theme configuration
     *
     * Set specific themes for different Mastodon instances.
     * Each host can override the theme per version tier (legacy / modern / neue).
     * If a tier is not specified for a host, the defaultThemes fallback is used.
     *
     * Example:
     *   "mamot.fr": {
     *       legacy: "tangerine",  // Theme when mamot.fr runs < 4.3
     *       modern: "cherry",     // Theme when mamot.fr runs 4.3.x – 4.5.x
     *       neue: "cherry",       // Theme when mamot.fr runs >= 4.6
     *   } */
    const perHostThemes = {
        "mamot.fr": {
            legacy: "tangerine",
            modern: "cherry",
            neue: "cherry",
        },
        "mastodon.social": {
            legacy: "purple",
            modern: "purple",
            neue: "granite",
        },
        "piaille.fr": {
            legacy: "tangerine",
            modern: "lagoon",
            neue: "lagoon",
        },
        "eldritch.cafe": {
            legacy: "purple",
            modern: "cherry",
            neue: "cherry",
        },
        "h-i.social": {
            legacy: "tangerine",
            modern: "tangerine",
            neue: "tangerine",
        },
        "mastodon.macstories.net": {
            legacy: "tangerine",
            modern: "tangerine",
            neue: "tangerine",
        },
        "diaspodon.fr": {
            legacy: "tangerine",
            modern: "purple",
            neue: "tangerine",
        },
        // Add more hosts as needed
    };

    /* ---------------------------------------------------------------
     *  VERSION TAGS — Which release to load for each Mastodon range
     *
     *  These are the Git tags / release versions used to build the
     *  jsDelivr CDN URLs.
     *
     *  For nileane's TangerineUI (instances < 4.6.0):
     *    → https://github.com/nileane/TangerineUI-for-Mastodon/releases
     *
     *  For mattbirchler's Tangerine-Neue (instances >= 4.6.0):
     *    → https://github.com/mattbirchler/Tangerine-Neue-for-Mastodon/releases
     * --------------------------------------------------------------- */
    const TAG_LEGACY = "v1.9.5";                          // For Mastodon < 4.3.0 — nileane repo
    const TAG_V4_3 = "v2.3";                              // For Mastodon 4.3.x — nileane repo
    const TAG_V4_4 = "v2.4.4";                            // For Mastodon 4.4.x — nileane repo
    const TAG_V4_5 = "v2.5.4-EOL";                        // For Mastodon 4.5.x — nileane repo (final release)
    const TAG_V4_6_PLUS = "2.6.2";                        // For Mastodon >= 4.6.0 — mattbirchler/Tangerine-Neue fork

    /* ---------------------------------------------------------------
     *  CDN BASE URLS
     *
     *  jsDelivr auto-serves any file from a GitHub repo. The .min.css
     *  suffix triggers auto-minification on the fly — no pre-built
     *  minified files needed.
     * --------------------------------------------------------------- */
    const TANGERINEUI_REPO = "nileane/TangerineUI-for-Mastodon";
    const TANGERINE_NEUE_REPO = "mattbirchler/Tangerine-Neue-for-Mastodon";

    /* ----------------
     *   HELPERS
     * ----------------
     */
    const currentPagepath = window.location.pathname;
    const currentHost = window.location.hostname;
    const placeholder = "TangerineUI 🍊";
    const log = (str) => console.log("* " + placeholder + " : " + str + " *");
    const theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const timeout = 1000;

    /* Get the theme name for the current host, based on version category.
     *
     * Categories:
     *   "legacy" → Mastodon < 4.3.0
     *   "modern" → Mastodon 4.3.x – 4.5.x
     *   "neue"   → Mastodon >= 4.6.0 (Tangerine-Neue fork)
     *
     * Falls back from per-host config → defaultThemes → "tangerine". */
    function getThemeForHost(mastodonVersion) {
        let category;
        if (isVersionAtLeast(mastodonVersion, "4.6.0")) {
            category = "neue";
        } else if (isVersionAtLeast(mastodonVersion, "4.3.0")) {
            category = "modern";
        } else {
            category = "legacy";
        }

        const hostConfig = perHostThemes[currentHost];
        if (hostConfig && hostConfig[category]) {
            log(
                `Using ${category} theme '${hostConfig[category]}' for host: ${currentHost}`,
            );
            return hostConfig[category];
        } else {
            const fallbackTheme = defaultThemes[category] || defaultThemes.neue;
            log(
                `Host '${currentHost}' not configured for ${category}, using default: ${fallbackTheme}`,
            );
            return fallbackTheme;
        }
    }

    /* Guard: ensure the selected theme is actually valid for the
     * given Mastodon version range.
     *
     * Granite is only available on Tangerine-Neue (>= 4.6.0).
     * Cherry and lagoon are only available for >= 4.3.0.
     * If the theme is not valid for the version, we fall back to 'tangerine'. */
    function validateThemeForVersion(themeName, mastodonVersion) {
        if (themeName === "granite" && !isVersionAtLeast(mastodonVersion, "4.6.0")) {
            log(
                `Granite theme requires Mastodon >= 4.6.0 (Tangerine-Neue fork). Current version: ${mastodonVersion}. Falling back to tangerine.`,
            );
            return "tangerine";
        }
        if (
            (themeName === "cherry" || themeName === "lagoon") &&
            !isVersionAtLeast(mastodonVersion, "4.3.0")
        ) {
            log(
                `Theme '${themeName}' requires Mastodon >= 4.3.0. Falling back to tangerine.`,
            );
            return "tangerine";
        }
        return themeName;
    }

    /* Build a jsDelivr CDN URL for a given CSS file.
     *
     * jsDelivr pattern: //cdn.jsdelivr.net/gh/{owner}/{repo}@{tag}/{filename}
     * The .min.css extension triggers auto-minification on jsDelivr's end. */
    function buildCssUrl(repo, tag, variant) {
        const base = `//cdn.jsdelivr.net/gh/${repo}@${tag}/TangerineUI`;
        if (variant && variant !== "tangerine") {
            return `${base}-${variant}.min.css`;
        }
        return `${base}.min.css`;
    }

    /* ----------------
     *   VERSION CHECKS
     * ----------------
     * Mastodon exposes its version in the #initial-state JSON.
     * We parse it semantically rather than with string comparison
     * to handle version schemes like "4.3.0-alpha.1" correctly. */
    function isVersionAtLeast(version, minVersion) {
        const parseVersion = (v) =>
            v.split(".").map((num) => parseInt(num, 10));
        const current = parseVersion(version);
        const minimum = parseVersion(minVersion);
        for (let i = 0; i < Math.max(current.length, minimum.length); i++) {
            const currentPart = current[i] || 0;
            const minimumPart = minimum[i] || 0;
            if (currentPart > minimumPart) return true;
            if (currentPart < minimumPart) return false;
        }
        return true; // Equal versions
    }

    function isVersionExactly(version, targetVersion) {
        const parseVersion = (v) =>
            v.split(".").map((num) => parseInt(num, 10));
        const current = parseVersion(version);
        const target = parseVersion(targetVersion);
        if (current.length !== target.length) return false;
        for (let i = 0; i < current.length; i++) {
            if (current[i] !== target[i]) return false;
        }
        return true;
    }

    /* Core logic: given a Mastodon version string, determine which
     * repo + tag + theme variant to load.
     *
     * Version ranges:
     *   < 4.3.0   → nileane/TangerineUI-for-Mastodon @ TAG_LEGACY
     *   4.3.x     → nileane/TangerineUI-for-Mastodon @ TAG_V4_3
     *   4.4.x     → nileane/TangerineUI-for-Mastodon @ TAG_V4_4
     *   4.5.x     → nileane/TangerineUI-for-Mastodon @ TAG_V4_5 (EOL)
     *   >= 4.6.0  → mattbirchler/Tangerine-Neue-for-Mastodon @ TAG_V4_6_PLUS
     *
     * The switch from the original repo to the fork happens at 4.6,
     * which is where nileane stopped maintaining and mattbirchler took over. */
    function getStyleUrlForVersion(mastodonVersion) {
        const themeName = validateThemeForVersion(
            getThemeForHost(mastodonVersion),
            mastodonVersion,
        );

        if (isVersionAtLeast(mastodonVersion, "4.6.0")) {
            log(
                `Version >= 4.6.0 detected — loading from Tangerine-Neue fork (tag: ${TAG_V4_6_PLUS})`,
            );
            return buildCssUrl(TANGERINE_NEUE_REPO, TAG_V4_6_PLUS, themeName);
        } else if (isVersionAtLeast(mastodonVersion, "4.5.0")) {
            log(`Version >= 4.5.0 found, using tag: ${TAG_V4_5}`);
            return buildCssUrl(TANGERINEUI_REPO, TAG_V4_5, themeName);
        } else if (isVersionAtLeast(mastodonVersion, "4.4.0")) {
            log(`Version >= 4.4.0 found, using tag: ${TAG_V4_4}`);
            return buildCssUrl(TANGERINEUI_REPO, TAG_V4_4, themeName);
        } else if (isVersionExactly(mastodonVersion, "4.3.0")) {
            log(`Version 4.3.0 exactly found, using tag: ${TAG_V4_3}`);
            return buildCssUrl(TANGERINEUI_REPO, TAG_V4_3, themeName);
        } else if (isVersionAtLeast(mastodonVersion, "4.3.0")) {
            log(
                `Version >= 4.3.0 but < 4.4.0 found, using tag: ${TAG_V4_3}`,
            );
            return buildCssUrl(TANGERINEUI_REPO, TAG_V4_3, themeName);
        } else {
            log(`Version < 4.3.0 found, using tag: ${TAG_LEGACY}`);
            return buildCssUrl(TANGERINEUI_REPO, TAG_LEGACY, themeName);
        }
    }

    /* ----------------
     *   STATE
     * ----------------
     * Used across the lifecycle: version detection, CSS injection,
     * MutationObserver coordination. */
    var isInjected = false;
    let backColor;
    let nChanges = 0;
    let timeoutExist = false;
    let mutationStatus = true;
    let isVersionDetected = false;
    let nonce;
    let styleUrl;

    /* ----------------
     *   CSS INJECTION
     * ----------------
     * Builds a <link> element for the stylesheet with the correct
     * CSP nonce. Mastodon 4.1.6+ requires a nonce on dynamically
     * injected stylesheets — we extract it from <meta name="style-nonce">. */
    function createStyleNode(nonce) {
        var node = document.createElement("link");
        log("Injected theme URI is : " + styleUrl);
        node.href = styleUrl;
        node.nonce = nonce;
        node.rel = "stylesheet";
        node.media = "all";
        node.type = "text/css";
        return node;
    }

    /* Set the background color pre-emptively to avoid flashing.
     *
     * The flash happens because the theme loads async after the page
     * background is already rendered. By setting it early we prevent
     * a brief white/black flash. */
    if (theme == "light") backColor = "#ffffff";
    else backColor = "#030303";

    /* Prevent the script from running on pages that are not styled
     * by TangerineUI anyway — auth flows, settings, etc. */
    if (
        currentPagepath.startsWith("/auth") ||
        currentPagepath.startsWith("/settings") ||
        currentPagepath.startsWith("/relationships") ||
        currentPagepath.startsWith("/filters") ||
        currentPagepath.startsWith("/oauth")
    ) {
        return;
    }

    /* ----------------
     *   VERSION DETECTION (requestAnimationFrame path)
     * ----------------
     * As soon as the <script id="initial-state"> element exists,
     * parse the Mastodon version from it and determine the correct
     * style URL. This runs alongside the MutationObserver below. */
    const onElemAvailable = async (selector) => {
        while (document.querySelector(selector) === null) {
            await new Promise((resolve) => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    };

    onElemAvailable("script[id^=initial-state]").then((selector) => {
        isVersionDetected = true;
        const mastodonVersion = JSON.parse(selector.innerText).meta.version;
        log("Mastodon Version Detected is : " + mastodonVersion);
        styleUrl = getStyleUrlForVersion(mastodonVersion);
    });

    /* ----------------
     *   MUTATION OBSERVER
     * ----------------
     * Watches the DOM for Mastodon's CSS <link> elements and the
     * style-nonce <meta> tag. On Firefox this is fast and reliable.
     * Chrome also works, though the requestAnimationFrame fallback
     * below is the safety net. Safari's extension API doesn't play
     * well with MutationObserver, so it relies on requestAnimationFrame. */
    new MutationObserver((mutations, observer) => {
        mutations.forEach(function (mutation) {
            var node, nodeType, href;
            if (mutation.addedNodes.length > 0) {
                node = mutation.addedNodes[0];
                nodeType = node.nodeName.toLowerCase();

                /* Capture the CSP nonce from <meta name="style-nonce">
                 * so we can inject our stylesheet with it. */
                if (nodeType == "meta") {
                    if (node.name.includes("style-nonce")) {
                        nonce = node.content;
                    }

                /* Also catch version detection here if the
                 * requestAnimationFrame path didn't run yet. */
                } else if (nodeType == "script") {
                    if (node.id == "initial-state") {
                        isVersionDetected = true;
                        const mastodonVersion = JSON.parse(node.innerText).meta
                            .version;
                        log(
                            "(mutationObserver) Mastodon Version Detected is : " +
                                mastodonVersion,
                        );
                        styleUrl = getStyleUrlForVersion(mastodonVersion);
                    }

                /* Inject our stylesheet right after Mastodon's own CSS
                 * is loaded. We look for:
                 *   - /packs/css/mastodon.*.chunk.css  (webpack bundle)
                 *   - custom.css                       (old format)
                 *   - custom-<hash>.css                (new Vite format)
                 * Whichever loads first triggers the injection. */
                } else if (nodeType == "link") {
                    if (node.href !== undefined) {
                        href = node.href;
                        const rChunk = /\/packs\/css\/mastodon.*\.chunk\.css/;
                        const rCustom = /custom\.css/;
                        const rCustomWithHash = /custom-[a-f0-9]+\.css/;
                        if (
                            (href.match(rCustom) ||
                                href.match(rCustomWithHash) ||
                                href.match(rChunk)) &&
                            !isInjected
                        ) {
                            if (nonce && isVersionDetected) {
                                nChanges++;
                                isInjected = true;
                                document.head.appendChild(
                                    createStyleNode(nonce),
                                );
                                log("Nonce found is " + nonce);
                                log(
                                    "(MutationObserver) custom.css or mastodon.*.chunk.css detected, injected TangerineUI's css asap.",
                                );
                            }
                        }
                    }
                } else if (nodeType == "body") {
                    nChanges++;
                }
            }

            /* Once we've detected two mutations (both the CSS link
             * and the <body> tag), we're done — disconnect to avoid
             * wasting CPU cycles on further DOM changes. */
            if (nChanges >= 2 && mutationStatus) {
                mutationStatus = false;
                observer.disconnect();
            }

            /* Safety net: some browsers (Safari, sometimes Chrome)
             * never detect the CSS file via MutationObserver. This
             * timeout forces disconnection after 3 seconds to prevent
             * the observer from running indefinitely and degrading
             * performance. */
            if (!timeoutExist) {
                timeoutExist = true;
                setTimeout(function () {
                    if (mutationStatus) {
                        observer.disconnect();
                    }
                }, 3000);
            }
        });
    }).observe(document.documentElement, { childList: true, subtree: true });

    /* ----------------
     *   FALLBACK: requestAnimationFrame
     * ----------------
     * If MutationObserver fails (common on Safari, occasional on
     * Chrome first load), this fallback polls for the custom.css
     * <link> element using requestAnimationFrame.
     *
     * It's slower than MutationObserver but reliable across all
     * browsers. */
    onElemAvailable('link[rel="stylesheet"][href*="custom"]').then((elem) => {
        if (
            elem.href.includes("custom.css") ||
            elem.href.match(/custom-[a-f0-9]+\.css/)
        ) {
            if (!isInjected) {
                if (nonce) {
                    document.head.appendChild(createStyleNode(nonce));
                    isInjected = true;
                    log(
                        "(requestAnimationFrame) custom.css detected, injected TangerineUI's css asap",
                    );
                } else {
                    /* If we have the CSS link but the nonce wasn't
                     * captured yet, wait for the <meta> tag and
                     * inject once we have it. */
                    isInjected = true;
                    onElemAvailable("meta[name^=style\\-nonce]").then(
                        (selector) => {
                            let nonce_fallback = selector.content;
                            document.head.appendChild(
                                createStyleNode(nonce_fallback),
                            );
                            log(
                                "Nonce was looked up with requestAnimationFrame as MutationObserver didn't catch it.",
                            );
                            log("Nonce found is " + nonce_fallback);
                            log(
                                "(requestAnimationFrame) custom.css detected, injected TangerineUI's css asap",
                            );
                        },
                    );
                }
            }
        }
    });

    /* Also capture the style-nonce via requestAnimationFrame as a
     * backup, in case the MutationObserver misses it entirely. */
    onElemAvailable("meta[name^=style\\-nonce]").then((selector) => {
        nonce = selector.content;
        log("Nonce found (requestAnimationFrame) " + nonce);
    });
})();
