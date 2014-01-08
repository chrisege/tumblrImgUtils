define([
	'backbone',
	'models/DashboardModel'
],
function( Backbone, DashboardModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function(models, options) {
			// this.postType = options && options.postType || 'image'; // might be problematic to default to image. doing it for now anyway.
			this.on('add', this.updateOffset, this);
			this.updateOffset();

		},

		buildGetParams : function(){
			var params = {data: {}};

			if (this.postType) {params.data.type = this.postType;}
			if (this.offset) {params.data.offset = this.offset;}
			if (this.sinceId)  {params.data.since_id = this.sinceId}
			// params.data.limit = 10;

			return params;
		},

		updateOffset: function(){
			if (_.isUndefined(this.offset) || _.isNaN(this.offset)) {
				this.offset = 0;
			} else {
				this.offset = this.length;
			}
		},

		updateSinceId: function(){
			// var last = this.last();

			// if (last && last.id) {
			// 	this.sinceId = last.id
			// } else {
			// 	this.sinceId = undefined;
			// }
		},

		url: '/tumblr/user/dashboard',

		fetch: function() {
			Backbone.Collection.prototype.fetch.call(this, this.buildGetParams());
		},

		loadMore: function(){
			this.updateOffset();
			this.fetch({
				offset: this.offset
			});
		},

		parse: function(data){
			return data.response.posts;
		},

		model: DashboardModel
		
	});
});
