define([
	'backbone',
	'views/item/dashboardItemView',
	'masonry'
],
function( Backbone, Dashboarditemview, Masonry ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a Dashboardview CollectionView");
		},
		
    	itemView: Dashboarditemview,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			var self = this;
			if (!this.masonry) {
				_.delay(function(){
					self.masonry = new Masonry(self.el, {columnWidth: 350, itemSelector: '.dashboard-item'});
				},200);
			}
		}
	});

});
