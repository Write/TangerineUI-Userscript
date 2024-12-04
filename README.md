# TangerineUI-Userscript
An userscript to load [TangerineUI Redesign for Mastodon's Web UI](https://github.com/nileane/TangerineUI-for-Mastodon) by [@nileane](https://github.com/nileane) 🍊🐘 on whichever instance you'd like !

# Usage and Installation

## Installing an userscript manager
### Chrome / Firefox
   - Install an userscript manager, either › [ViolentMonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/)
### Safari (iOS / macOS)
   - Install an userscript manager › [Userscripts](https://apps.apple.com/tt/app/userscripts/id1463298887) — ([Github](https://github.com/quoid/userscripts))

## Installing the userscript
- Once the userscript manager is installed, click on this [link](https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js), your userscript manager should offer you to install the script. On Safari, the Userscript extension doesn't offer this automatically, you would need to then click extension icon to be offered to install the userscript.
- After the userscript is installed, edit the userscript to add a @match (at the top of the file) rule for each mastodon instances you want the theme to be enabled on. Respect the same format that is given for pre-defined instances.
- You can change easily switch between the normal, purple or cherry variants by changing colorScheme (instances below 4.3) or newColorScheme (instances equals or above 4.3). Cherry is only available for >= 4.3.
- You can set the tag you want to use for instances strictly below 4.3.0 and for instances >= 4.3.0 by changing tag_below_4_3_0 and tag_above_or_equals_4_3_0 variables. To find tag, look at the left sidebar in the releases of TangerineUI : https://github.com/nileane/TangerineUI-for-Mastodon/releases and change it accordingly.

# Changelog

### Release 2.2.3

+ set default TangerineUI tag to latest release : v2.3

### Release 2.2.1

+ set default TangerineUI tag to latest release : v2.1
+ fix a race condition that injected the theme before mastodon version could be detected
+ "temporarily" remove the workaround that was made to avoid 'flash issues' while loading.

### Release 2.2.0 

+ Bump default tag for v2.0 of TangerineUI. 
+ Add support for lagoon color scheme.

### Release 2.1.0

+ Add support for the new Cherry color scheme, only supported for versions above 4.3.0
+ Since older (<= 4.3.0) instances can't have the Cherry color scheme, I had to create a new variable, hence why there's now legacyColorScheme and newColorScheme var, so you can choose which color scheme to use for the "legacy" and "new" mastodon version.

### Release 2.0.0

![Untitled](https://github.com/Write/TangerineUI-Userscript/assets/541722/e80605da-c301-4381-ac5b-65ddeea2698f)

+ ✨ Support Mastodon >= 4.3.0 ✨
+ Dynamically loads the right CSS based on your instance version
+ Loaded CSS is now minified thanks to jsdelivr

### Release 1.3.0
+ ✨ Full support for Mastodon >= 4.1.6 ✨
+ Mastodon's enhanced their CSP restriction which made the userscript not working on instance above or equals >= 4.1.6
+ I was kinda scared I couldn't find a workaround that, but thankfully mastodon expose a meta header of the name "style-nonce", that you can fetch and use to inject the styling url with. This, of course, add a penalty delay before theme's injection. I'd hapilly takes PR if you find a way around that. 

### Release 1.2.5
+ Disable the script on page not stylized by TangerineUI anyway

### Release 1.2.4
+ Forcefully disconnect MutationObserver after 3 seconds if MutationObserver wasn't disconnect already
   _This fix a performance issue where MutationObserver would be running indefinitely if it never detected the element_
+ Apply background && background-color to \<body> tag yet again
+ Add a configurable timeout after how much time the css applied \<html> and \<body> should be reverted, default to 1 second

### Release 1.2.3
+ Now apply background color pre-emptively on either light or dark mode
   _This fix a flashing issue on load, if the instance main's theme was set as dark mode, but the system was in light mode_
+ The pre-emptively color set to \<html> is now dynamic, based selected theme (for light mode only, as dark mode as same color for both variants)
+ Correctly set background color in dark mode to TangerineUI Color instead of pure black

### Release 1.2.0
- "Production ready" code
- \<html> tag now injected instantly, as it doesn't require to wait for it.
- Moved from requestAnimationFrame to MutationObserver which should inject theme even faster. 
- Hugely improved code's readability
- Compatible with both Firefox and Chrome
- Support Safari, even though injection is slow, limited to requestAnimationFrame API as MutationObserver doesn't work most of the time (except when cache is cleared with CMD + SHIFT + R), certainly a limitation from how Safari handle extensions. Safari extension is : https://apps.apple.com/us/app/userscripts/id1463298887  -- Mac & iOS support. It support UserStyles too, so you could just create one instead.
