;(function(window, undefined){
	"use strict";

	window.app = window.app || {};

	var StoryRouter = Backbone.Router.extend({
	routes: {
		"stories/:id": "page2",
		"*default": "page1"
	},
	page1: function(){
		this.AuthorsView.render();
	},
	page2: function(id){
		var authorstorymodel = this.
	}
	})
	app.StoryRouter = StoryRouter;
})(window, undefined);