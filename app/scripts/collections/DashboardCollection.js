define([
	'backbone',
	'models/DashboardModel'
],
function( Backbone, DashboardModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function(models, options) {
			this.postType = options && options.postType || 'image'; // might be problematic to default to image. doing it for now anyway.
			this.on('fetch', this.updateSinceId, this);
		},

		buildGetParams : function(){
			var params = {data: {}};

			if (this.postType) {params.data.type = this.postType;}
			if (this.sinceId)  {params.data.since_id = this.sinceId}

			return params;
		},

		updateSinceId: function(){
			this.sinceId = this.last.id;
		},

		url: '/tumblr/user/dashboard',

		fetch: function() {
			Backbone.Collection.prototype.fetch.call(this, this.buildGetParams());
		},

		model: DashboardModel
		
	});
});
