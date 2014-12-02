;(function(window, undefined){
	"use strict";

	window.app = window.app || {};

	var UserStory = Backbone.Firebase.Model.extend({
		firebase: new  Firebase("https://writwrite.firebaseio.com/story"),
		defaults: {}
	});

	app.UserStory = UserStory;

})(window, undefined);