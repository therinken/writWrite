;(function(window, undefined) {
	"use strict";

	window.app = window.app || {};

	var Authors = Backbone.Firebase.Collection.extend({
		model: AuthorStory,
		firebase: new Firebase("https://writwrite.firebaseio.com/author")
	});

	app.Authors = Authors;

})(window, undefined);