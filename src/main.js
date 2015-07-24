function injectScript(path) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.src = chrome.extension.getURL(path);
    script.onload = removeScript;
    (document.head||document.documentElement).appendChild(script);
}

function removeScript() {
    this.parentNode.removeChild(this);
}
injectScript('js/filter.js');


