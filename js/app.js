
window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(

        //css
        {url: "./bower_components/normalize.css/normalize.css"},
        {url: "./bower_components/typeplate-starter-kit/css/typeplate.css"},
        {url: "./bower_components/bootstrap/dist/css/bootstrap.min.css"},
        // {url: "./bower_components/firepad/dist/firepad.css"},
        {url: "./dist/style.css"},

        //basic dependencies
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},

        //firebase stuff..
        {url: "./bower_components/firebase/firebase.js"},
        {url: "./bower_components/backfire/dist/backbonefire.js"},
        {url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"},
        {url: "./bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js"},
        // {url: "./js/login.js"},

        //app level
        // {url: "./js/storyApp.js"},

        //collections
        // {url: "./js/collections/authors.js"},
        // {url: "./js/collections/writers.js"},

        //models
        // {url: "./js/models/authorStory.js"},
        // {url: "./js/models/userStory.js"},

        //views
        // {url: "./js/views/appview.js"},
        // {url: "./js/views/authorsView.js"},
        // {url: "./js/views/authorStoryView.js"},
        // {url: "./js/views/userView.js"},
        // {url: "./js/views/userStoryView.js"},

        //router
        {url: "./js/routes/storyRouter.js"}

    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
        
        window.router = new app.StoryRouter();
    });
}
    
