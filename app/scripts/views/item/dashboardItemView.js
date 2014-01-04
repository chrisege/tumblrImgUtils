define([
	'backbone',
	'hbs!tmpl/item/dashboardItemView_tmpl'
],
function( Backbone, DashboarditemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		tagName: 'li',
		className: 'dashboard-item',
		
		initialize: function() {
			console.log("initialize a Dashboarditemview ItemView");
		},
		
    	template: DashboarditemviewTmpl,
        
    	serializeData: function(){
    		var data = this.model.toJSON() || {};

    		// pick the first image and grab the first size. 
    		// TODO: something fancier here.
    		data.mainImage = data.photos && data.photos.length > 0 ? data.photos[0].alt_sizes[0].url : '';

    		return data;
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
