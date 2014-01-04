define([
	'backbone',
	'views/item/dashboardItemView',
	'freewall'
],
function( Backbone, Dashboarditemview, freewall ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		tagName: 'ul',
		className: 'small-block-grid-3',

		initialize: function() {
			console.log("initialize a Dashboardview CollectionView");
			this.on('show', this.onShow, this);
		},
		
    	itemView: Dashboarditemview,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

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
