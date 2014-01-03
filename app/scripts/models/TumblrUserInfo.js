define([
	'backbone',
	'communicator',
	'collections/TumblrBlogCollection'
],
function( Backbone, Communicator, TumblrBlogCollection ) {
    'use strict';

    var App = App;

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Tumblruserinfo model");
			this.on('sync', this.initBlogCollection);
		},

		parse: function(resp){
			return resp.response.user;
		},

		url: "/tumblr/user/info",

		initBlogCollection: function(){
			var blogs = this.get('blogs');
			Communicator.mediator.trigger('initBlogCollection', blogs);
		},

		defaults: {},

    });
});
