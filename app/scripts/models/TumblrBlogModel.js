define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Tumblrblogmodel model");
		},

		setActive: function(){
			if (this.collection && this.collection.setActive) {
				this.collection.setActive(this.cid);
			} else {
				this.set({active: true});
			}
		},

		defaults: {
			active: false
		},

    });
});
