define([
	'backbone',
	'models/TumblrBlogModel'
],
function( Backbone, TumblrBlogModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({

		model: TumblrBlogModel,

		initialize: function() {
			console.log("initialize a Tumblrblogcollection collection");
		},

		getActive: function() {
			return this.findWhere({active: true}) || this.at(0);
		},

		setActive: function(id){
			this.each(function(model){
				model.set({active: false});
			});

			this.get(id).set({active: true});
			console.log('id set to active: '+ id);
		}
	});
});
