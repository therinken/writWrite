;
(function(window, undefined) {
    "use strict";

    window.app = window.app || {};

    app.Story = Backbone.Model.extend({
    	defaults: {
    		intro: "",
    		date: "",
    		body: "",
    		title: "",
    		img: "./images/dummy.png"
    	}
    })

    app.Stories = Backbone.Firebase.Collection.extend({
    	model: app.Story,
    	url: "https://writwrite.firebaseio.com/stories"
    })

    app.LandingPageView = Backbone.View.extend({
    	className: "main",

    	tagName: 'li',

    	initialize: function(){
    		this.listenTo(app.stories, "sync", this.render);
    		
    	},

    	templateString: "<h1>Landing Page</h1><ul class='grid grid-2-400'></ul>",
    	render: function(){

    		// 1. draw a template to the page
    		// 2. grab the collection of stories
    		// ... 3. for each story, draw a flip card to the screen



    		this.el.innerHTML = this.templateString;
    		var self = this,
    			ul = self.el.querySelector("ul");
    		app.stories.forEach(function(story){
    			// create a new subview for each story
    			var liString = _.template("<a href='#story/"+story.id+"'><img src='{img}'></a>", story.attributes);
    			$(ul).append(liString);
    		})
    	},

    	events: {
    		"mouseenter": "flip",
    		"mouseleave": "backflip"
    	},

    	flip: function(){
    		console.log('bio');
    	},
    	backflip: function(){
    		console.log('Welcome Back!')
    	}
    })

    app.StoryView = Backbone.View.extend({
    	className: "story",
    	initialize: function(){
    		this.listenTo(app.stories, "sync", this.render)
    	},
    	templateString: "<h1>Story Page</h1><ul class='grid grid-2-400'></ul>",
    	render: function(){
    		this.el.innerHTML = this.templateString;
    		var self = this,
    			ul = self.el.querySelector("ul");
    		app.stories.forEach(function(story){
    			var liString = _.template("<div href='#story/"+story.id+"'>{intro}</div>", story.attributes);
    			$(ul).append(liString);
    		})
    	}
    })

    app.CreateStoryView = Backbone.View.extend({
    	className: "create",
    	render: function(){
    		
    	}
    })

    app.StoryRouter = Backbone.Router.extend({
        routes: {
            "story/:id": "story",
            "create": "create",
            "*default": "landing"
        },
        hidePages: function(){
        	this.views.forEach(function(v){
        		v.el.style.display = 'none';
        	})
        },
        landing: function() {
        	this.hidePages();
        	this.landingPageView.el.style.display = 'block';
        	this.landingPageView.render();
        },
        story: function(id) {
        	this.hidePages();
        	this.storyView.el.style.display = 'block';
        	this.storyView.render();
        },
        create: function(){
        	this.hidePages();
        	this.createStoryView.el.style.display = 'block';
        	this.createStoryView.render();
        },
        initialize: function() {

        	// collection
        	this.stories = app.stories = new app.Stories();

        	// views
        	this.landingPageView = new app.LandingPageView();
        	this.storyView = new app.StoryView();
        	this.createStoryView = new app.CreateStoryView();
        	this.views = [this.landingPageView, this.storyView, this.createStoryView];

        	// append views
        	this.views.forEach(function(view){
        		$(document.body).append(view.el);
        	})
        	
        	// start listening on route changes
        	Backbone.history.start();
        }
    })
})(window, undefined);
