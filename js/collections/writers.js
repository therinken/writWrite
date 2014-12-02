;(function(window, undefined){
	"strict";

	window.app = window.app || {};

	var Writers = Backbone.Firebase.Collection.extend({
	model: UserStory,
	firebase: new Firebase("https://writwrite.firebaseio.com/user"),
	});

	app.Writers = Writers;
	
})(window, undefined);