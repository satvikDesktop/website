# rick roll website

### video autoplayer using vanilla Javascript and CSS

## Description :
 **Problem :**<br>
  To autoplay a video on the web on any device , the audio of the video must be muted . This is the autoplay policy followed by almost all browsers<br>
![autoplay meme](https://wd.imgix.net/image/sQ51XsLqKMgSQMCZjIN0B7hlBO02/pl6fnOXI5RWtyXXsfYPg.jpeg?auto=format&w=338)<br>
> The Autoplay Policy launched in Chrome 66 for audio and video elements and is effectively blocking roughly half of unwanted media autoplays in Chrome. For the Web Audio API, the autoplay policy launched in Chrome 71. This affects web games, some WebRTC applications, and other web pages using audio features.

## New behaviors
As you may have noticed, web browsers are moving towards stricter autoplay policies in order to improve the user experience, minimize incentives to install ad blockers, and reduce data consumption on expensive and/or constrained networks. These changes are intended to give greater control of playback to users and to benefit publishers with legitimate use cases.

Chrome's autoplay policies are simple but thise generally hold true for all browsers:

1. Muted autoplay is always allowed.
2. Autoplay with sound is allowed if:
- The user has interacted with the domain (click, tap, etc.).
- On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
- The user has added the site to their home screen on mobile or installed the PWA on desktop.
- Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.

<br>
This make it really difficult to catch people offguard and rickrolling them as soon as they open up our website
<br>
A workaround to this also used by many other rick roll generators is asking the user for cookies , when the user clicks on "accept cookies"  they are actually clicking on a button that will play the rickroll
<br>
This way we have the permission of the user to play the video  without having their permission

**Solution :**<br>

Firstly I have created a simple sort of a landing page that asks the user for permission with the `accept` button<br>
My "landing page" asking for cookies is overlayed over the rick roll video so that it's hidden<br>
```html
<div class="cookies" id="permission">
        <p>This website uses cookies to provide necessary website functionality, improve your experience and analyze our traffic.
           <br>By using our website, you agree to our Privacy Policy and our Cookies Policy.
        </p>
```
I have added an `event listener` listening for a click from the user on the button which then unmuted the previously pause video and the video starts playing when the button is click  <br>
```javascript
cookieConsent.addEventListener('click', () => {
        player.seekTo(0);
        player.unMute();    
    });
```
The `accept` cookies button is actually connect to the `hide()` function in my javascript file which hides the overlay on click of the button <br>
```html
<button onclick="hide()" id="accept">Accept</button></center>
```
I have also disabled any control over the video , you cannot really take off the pause and youtube logo from the embed but again there is a workaround:<br>

I have taken the `iframe` embed and in my css and made it so that the pointer cannot do anything over the video <br>
```css
.ytplayer{
 pointer-events: none;
}
```
And in the end so that its not obvious that the link to my website is some sort of rick roll the name should be totally unrelated .

