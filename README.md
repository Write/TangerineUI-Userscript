# TangerineUI-Userscript
An userscript to load [TangerineUI Redesign for Mastodon's Web UI](https://github.com/nileane/TangerineUI-for-Mastodon) by [@nileane](https://github.com/nileane) 🍊🐘 on whichever instance you'd like !

# Usage
- Install either [ViolentMonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/), then click on this [link](https://github.com/Write/TangerineUI-Userscript/raw/main/TangerineUI.user.js).
- The userscript manager of your choice should offer you to install it.
- Add a @match rule for each mastodon instance you want the theme to be enabled on.
- Change the styleUrl if you would like to try out the purple variant.
- Enjoy :) !

# Changelog

### Release 1.3.0
+ ✨ Full support for Mastodon >= 4.1.6 ✨
+ Mastodon's enhanced their CSP restriction which made the userscript not working on instance above or equals >= 4.1.6
+ I was kinda scared I couldn't find a workaround that, but thankfully mastodon expose a meta header, of the name "style-nonce", that you can fetch and   then inject the styling url with that nonce value. This, of course, add a penalty delay before theme's injection. I'd hapilly takes PR if you find a way around that. 

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
