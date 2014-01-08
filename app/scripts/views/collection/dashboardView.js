define([
	'backbone',
	'views/item/dashboardItemView',
	'freewall',
	'hbs!tmpl/composite/DashboardView_tmpl'
],
function( Backbone, Dashboarditemview, freewall, DashboardTmpl ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CompositeView.extend({

		tagName: 'ul',
		className: 'small-block-grid-3',

		initialize: function() {
			console.log("initialize a Dashboardview CollectionView");
			this.on('show', this.onShow, this);
		},
		
    	itemView: Dashboarditemview,

    	itemViewContainer: 'ul',

    	template: DashboardTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
			'click .load-more': 'loadMore'
		},

		loadMore: function(){
			this.collection.loadMore();
		},

		/* on render callback */
		onShow: function() {
			// var self=this;
			// this.wall = new window.freewall(this.$el);
			// this.wall.reset({
			// 	selector: '.dashboard-item',
			// 	animate: true,
			// 	cellW: 20,
			// 	cellH: 200,
			// 	onResize: function() {
			// 		self.wall.fitWidth();
			// 	}
			// });
			// this.wall.fitWidth();
		}
	});

});
