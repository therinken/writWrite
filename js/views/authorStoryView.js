;(function(window, undefined){
	"use strict";

	window.app = window.app || {};

	var AuthorStoryView = Backbone.View.extend({
		tagName: "article",
		template: "<span>{name}</span>",
		initialize: function(){
			this.render();
		},
		render: function(){
			this.el.innerHTML = _.template(this.template, this.model.attributes);
		}

		app.AuthorStoryView = AuthorStoryView;
	});
})(window, undefined);