
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/firepad/dist/firepad.js"},
        {url: "./node_modules/codemirror/lib/codemirror.js"},
        {url: "./js/firepad-userlist.js"},
        {url: "./dist/style.css"},
        {url: "./dist/codemirror.css"},
        {url: "./js/userList.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
    });

}
    
