// ==UserScript==
// @name         Kpop Group Place
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Kpopgroup on r/place
// @author       ChanhaLzkie
// @match        https://hot-potato.reddit.com/embed*
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/chanhalzkie/kpopplace/main/kpop_dithered.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
