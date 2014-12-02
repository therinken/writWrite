;(function(window, undefined){
	"use strict";

	window.app = window.app || {};

	var AuthorStory = Backbone.Firebase.Model.extend({
		firebase: new Firebase("https://writwrite.firebaseio.com/stories"),
		defaults: {
			text: ""
		}
	});

	app.AuthorStory = AuthorStory;

})(window, undefined);