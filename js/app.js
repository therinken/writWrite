
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(

        //basic dependencies
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},

        //firebase stuff..
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"},
        {url: "./bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js"},
        {url: "./bower_components/pathjs/path.min.js"},
        {url: "./js/login.js"},

        //app level
        {url: "./js/storyApp.js"},

        //collections
        {url: "./js/collections/authors.js"},
        {url: "./js/collections/writers.js"},

        //models
        {url: "./js/models/authorStory.js"},
        {url: "./js/models/userStory.js"},

        //views
        {url: "./js/views/appview.js"},
        {url: "./js/views/authorsView.js"},
        {url: "./js/views/authorStoryView.js"},
        {url: "./js/views/userView.js"},
        {url: "./js/views/userStoryView.js"},

        //router
        {url: "./js/routes/storyRouter.js"}

        ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
    });

}
    
