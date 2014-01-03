define([
	'backbone',
	'hbs!tmpl/item/DropdownItemView_tmpl'
],
function( Backbone, DropdownitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Dropdownitemview ItemView");
		},
		
		tagName: 'li',

    	template: DropdownitemviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
