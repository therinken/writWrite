;(function(window, undefined){
	"use strict";

	window.app = window.app || {};

	var UserStoryView = Backbone.View.extend({
		tagname: "",
		template: "",
		initialize: function(){
			this.render();
		},
		render: function(){
			this.el.innerHTML = _.template(this.template, this.model.attributes);
		}

		app.UserStoryView = UserStoryView;
	});
})(window, undefined);