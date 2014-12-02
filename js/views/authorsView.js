;
(function(window, undefined) {
    "use strict";

    window.app = window.app || {};

    var AuthorsView = Backbone.View.extend({
        tagName: "div",
        className: "authors grid grid-2-400 grid-4-600 squarify grid",
        render: function() {
        	this.el.innerHTML = "";
        	var self = this;
        	this.collection.forEach(function(m){
        		var
        	})
        }
    });

    app.AuthorsView = AuthorsView;

})(window, undefined);
