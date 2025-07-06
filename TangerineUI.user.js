// ==UserScript==
// @name        TangerineUI 🍊 for Mastodon
// @namespace   TangerineUI for Mastodon by @nileane
// @match       https://mamot.fr/*
// @match       https://mastodon.social/*
// @match       https://piaille.fr/*
// @match       https://eldritch.cafe/*
// @match       https://h-i.social/*
// @match       https://diaspodon.fr/*
// @match       https://AddYourInstanceUrlHere.tld/*
// @downloadURL https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js
// @updateURL   https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js
// @homepageURL https://github.com/Write/TangerineUI-Userscript
// @grant       none
// @version     2.2.3.1
// @author      @Write on Github for the UserScript
// @author      @nileane for TangerineUI's CSS
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVR4AZXOA2xeUQAF4BvNW8xGi7WFY227v81otu0Fs23btq3attunvrN7//bOPMmX98414bFa4edyda12u7te0m8d1UKhRyNVT32idrtcGE6+jdMpBzjtUjOFf2KTZJddchKWsWPR22HprKLATBwnYOM6CfNni+Bjs2d0j02ZKLDOCVZrhx9xGNuT7aY2MAvmdKCjQwXP0UMidm4ToPYMiSKwcmkn+Hqbsd1L7LqWqTZ9M5injyXf4oN7O3HkQCdkGRAEFWdOCNi9vROKAnx8L4Ovt+uaZhCbpn6eTVsPpjBfRkN9F3ivLFfQ0qJ+6SXFCupqv86zvcSWVjPTml4DprhQRm21At7ZgbU1X3tBnoxGegHvlvSa2cSaUjXWklIJhh/Ae2Ge5DuA94JcyfdC3q2plVOJObncYU4qA1NcIPkO4H2soxLjXZW80wNEesDXeVNSqYcY44s1pvhiMDcvt+LB7Tbw/qPrF1rx+F77l25IKh1KjNEFw40xBfhfhpiCs4RFE/JxgDEqR6Xwj5qptZaot/0JjyE867UhPBOcMeJThCH8U6QhLNNgjMj06iMyjfQ/0RSROSQ2Nrc3+TG60I/J+tAPKgWfsI/7NaMe9SXfxBSbO4j8Kdrgdx5d0FuBQrd3zbrgN28Y2quofPK3aILeDtb6v1yt8X/5Suv/qo0Sdf6vijT+r05q/F9Hkl/kM/y+SpUd6mHfAAAAAElFTkSuQmCC
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';

    /* ----------------
     *   SETTINGS
     * ---------------- */

    /* colorScheme used for older (< 4.3) instances */
    /* Either 'tangerine' or 'purple' */
    const legacyColorScheme = 'tangerine';

    /* colorScheme used for new (>= 4.3) instances */
    /* Either 'tangerine', 'purple', 'cherry' or 'lagoon' */
    const colorScheme = 'cherry';

    /* Github tag to use for mastodon instance < 4.3 and >= 4.3
    /* To find tags name, go here : https://github.com/nileane/TangerineUI-for-Mastodon/releases
    /* and look at the tag name in the left sidebar of the release
     * */
    const tag_below_4_3_0 = "v1.9.5"
    const tag_above_or_equals_4_3_0 = "v2.3"

    /* ----------------
     *   HELPERS
     * ----------------
     * */
    const currentPagepath       = window.location.pathname;
    const placeholder           = 'TangerineUI 🍊';
    const log                   = (str) => console.log("* " + placeholder + " : " + str + " *");
    const theme                 = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const timeout               = 1000;

    const tangerine_below_4_3_0             = '//cdn.jsdelivr.net/gh/nileane/TangerineUI-for-Mastodon@' + tag_below_4_3_0 + '/TangerineUI'
    const tangerine_above_or_equals_4_3_0   = '//cdn.jsdelivr.net/gh/nileane/TangerineUI-for-Mastodon@' + tag_above_or_equals_4_3_0 + '/TangerineUI'

    /*
     * As long as no version is detected, styleUrl is set for version < 4.3.0
     * */
    let styleUrl = tangerine_below_4_3_0
    if (legacyColorScheme == 'purple') {
        styleUrl = tangerine_below_4_3_0 + "-purple.min.css"
    } else {
        styleUrl = tangerine_below_4_3_0 + ".min.css"
    }

    const isPurpleLegacy = legacyColorScheme.includes('purple') ? true : false;
    const isPurple = colorScheme.includes('purple') ? true : false;
    const isCherry = colorScheme.includes('cherry') ? true : false;
    const isLagoon = colorScheme.includes('lagoon') ? true : false;

    const onElemAvailable = async selector => {
        while (document.querySelector(selector) === null) {
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    };

    function createStyleNode(nonce) {
        var node = document.createElement('link');
        log("Injected theme URI is : " + styleUrl)
        node.href = styleUrl;
        node.nonce = nonce;
        node.rel = 'stylesheet';
        node.media = 'all',
        node.type = 'text/css';
        return node;
    }

    /* ----------------
     *   CODE
     * ----------------
     * */
    var isInjected = false;
    let backColor;
    let nChanges = 0;
    let timeoutExist = false;
    let mutationStatus = true;
    let isVersionDetected = false;
    let nonce;

    function isVersionAtLeast(version, minVersion) {
        const parseVersion = (v) => v.split('.').map(num => parseInt(num, 10));
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

    /* Version detection */
    onElemAvailable('script[id^=initial-state]').then((selector) => {
        isVersionDetected = true;
        const mastodonVersion = JSON.parse(selector.innerText).meta.version
        log("Mastodon Version Detected is : " + mastodonVersion);
        if (isVersionAtLeast(mastodonVersion, '4.3.0')) {
            log("Version above or equal 4.3.0 found.")
            if (isPurple)
              styleUrl = tangerine_above_or_equals_4_3_0 + "-purple.min.css"
            else if (isCherry)
              styleUrl = tangerine_above_or_equals_4_3_0 + "-cherry.min.css"
            else if (isLagoon)
              styleUrl = tangerine_above_or_equals_4_3_0 + "-lagoon.min.css"
            else
              styleUrl = tangerine_above_or_equals_4_3_0 + ".min.css"
        } else {
            log("Version below 4.3.0 found.")
        }
    });

    if (theme == 'light')
        backColor = "#ffffff";
    else
        backColor = "#030303";

    /* Prevent script from running on pages that are not styled by TangerineUI anyway.
     * */
    if (currentPagepath.startsWith("/auth") ||
        currentPagepath.startsWith("/settings") ||
        currentPagepath.startsWith("/relationships") ||
        currentPagepath.startsWith("/filters") ||
        currentPagepath.startsWith("/oauth"))
    {
      return;
    }

    /* Temporarily set <html> background's color to match that match the host system color-scheme.
     * This is to avoid flashing issues where main's theme background
     * is shown first, before TangerineUI had time to load.
     * */

    /*
    document.querySelector('html').style.setProperty("background", backColor, "important");
    setTimeout(function() {
        document.querySelector('html').style.background = '';
    }, timeout);
    */

    /* Observe and detect changes in the DOM
     * Usually only works on Firefox, and it's faster than requestAnimationFrame
     * in this case, hence why I keep this piece of code that kinda look like powerhouse but hey...
     * */
    new MutationObserver((mutations, observer) => {
        mutations.forEach(function(mutation) {

            var node, nodeType, href;

            if (mutation.addedNodes.length > 0) {

                node = mutation.addedNodes[0];
                nodeType = node.nodeName.toLowerCase();

                if (nodeType == 'meta') {
                  if (node.name.includes('style-nonce')) {
                      nonce = node.content;
                  }
                }
                else if (nodeType == 'script') {
                  if (node.id == 'initial-state') {
                      isVersionDetected = true;
                      const mastodonVersion = JSON.parse(node.innerText).meta.version
                      log("(mutationObserver) Mastodon Version Detected is : " + mastodonVersion);
                      if (isVersionAtLeast(mastodonVersion, '4.3.0')) {
                          log("(mutationObserver) Version above or equal 4.3.0 found.")
                          if (isPurple)
                            styleUrl = tangerine_above_or_equals_4_3_0 + "-purple.min.css"
                          else if (isCherry)
                            styleUrl = tangerine_above_or_equals_4_3_0 + "-cherry.min.css"
                          else if (isLagoon)
                            styleUrl = tangerine_above_or_equals_4_3_0 + "-lagoon.min.css"
                          else
                            styleUrl = tangerine_above_or_equals_4_3_0 + ".min.css"
                      } else {
                          log("(mutationObserver) Version below 4.3.0 found.")
                      }
                  }
                }
                else if (nodeType == 'link') {
                    if (node.href !== undefined) {
                        href = node.href;
                        const rChunk = /\/packs\/css\/mastodon.*\.chunk\.css/
                        const rCustom = /custom\.css/
                        const rCustomWithHash = /custom-[a-f0-9]+\.css/
                        /* Inject after custom.css (old or new format) or mastodon.*.chunk.css, whichever is detected first
         * On my system mastodon.*.chunk.css wasn't detected on Chrome
         */
                        if ((href.match(rCustom) || href.match(rCustomWithHash) || href.match(rChunk)) && !isInjected) {
                            if (nonce && isVersionDetected) {
                                nChanges++;
                                isInjected = true;
                                document.head.appendChild(createStyleNode(nonce));
                                log('Nonce found is ' + nonce);
                                log('(MutationObserver) custom.css or mastodon.*.chunk.css detected, injected TangerineUI\'s css asap.');
                            }
                        }
                    }
                }
                else if (nodeType == 'body') {
                    nChanges++;
                    /*
                    if (!isInjected) {
                      node.style.setProperty("background", backColor, "important");
                      node.style.setProperty("background-color", backColor, "important");
                      setTimeout(function() {
                          node.style.background = '';
                          node.style.backgroundColor = '';
                      }, timeout);
                    }
                    */
                }

            }

           /* All mutations wanted are done (two changes)
            * > disconnect the observer
            * */
            if (nChanges >= 2 && mutationStatus) {
                mutationStatus = false;
                observer.disconnect();
            }

           /* In some cases, mutation never disconnect ; for example in Safari :
            * when it doesn't detect .css file, and use it requestAnimationFrame's API instead,
            * This timeout helps to be sure the MutationObserver is disconnected to avoid performance issues
            * */
            if (!timeoutExist) {
                timeoutExist = true;
                setTimeout(function() {
                    if (mutationStatus) {
                        observer.disconnect();
                    }
                }, 3000);
            }

        });
    }).observe(document.documentElement, { childList: true, subtree: true });

    /* Workaround if MutationObserver couldn't detect the item
     * Usually in Safari and Chrome (for Chrome, the first load seems to use MutationObserver, but anyway)
     * */
    onElemAvailable('link[rel="stylesheet"][href*="custom"]').then((elem) => {
        if (elem.href.includes('custom.css') || elem.href.match(/custom-[a-f0-9]+\.css/)) {
            if (!isInjected) {
                if (nonce) {
                    document.head.appendChild(createStyleNode(nonce));
                    isInjected = true;
                    log("(requestAnimationFrame) custom.css detected, injected TangerineUI's css asap");
                }
                else {
                    isInjected = true;
                    onElemAvailable('meta[name^=style\\-nonce]').then((selector) => {
                        let nonce_fallback = selector.content;
                        document.head.appendChild(createStyleNode(nonce_fallback));
                        log("Nonce was lookedup with requestAnimationFrame as MutationObserver didn't catch it.");
                        log('Nonce found is ' + nonce_fallback);
                        log("(requestAnimationFrame) custom.css detected, injected TangerineUI's css asap");
                    });
                }
            }
        }
    });

    onElemAvailable('meta[name^=style\\-nonce]').then((selector) => {
        nonce = selector.content;
        log("Nounce found (requestAnimationFrame) " + nonce)
    });

})();
