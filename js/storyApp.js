var authorGroup = new app.Authors([{
	"author1": {
		"name": "",
		"img": "./images/",
		"email": "",
		"website": "",
		"bio": "",
		"link": "author1"
	},
	"author2": {
		"name": "",
		"img": "./images/",
		"email": "",
		"website": "",
		"bio": "",
		"link": "author2"
	},
	"author3": {
		"name": "",
		"img": "./images/",
		"email": "",
		"website": "",
		"bio": "",
		"link": "author3"
	},
	"author4": {
		"name": "",
		"img": "./images/",
		"email": "",
		"website": "",
		"bio": "",
		"link": "author4"
	}
}]);

var authorGroupView = new app.AuthorsView({
	collection: authorGroup
});

var authorStoryGroup = new app.AuthorStory([{
	"author1": {
		"story": ""
	},
	"author2": {
		"story": ""
	},
	"author3": {
		"story": ""
	},
	"author4": {
		"story": ""
	}
}]);

var authorStoryGroupView = new app.AuthorStoryView({
	collection: authorStoryGroup
});