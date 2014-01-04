define([
	'backbone',
	'views/item/DropdownItemView',
	'hbs!tmpl/composite/DropdownView_tmpl'
],
function( Backbone, Dropdownitemview, DropdownviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			var self = this;
			console.log("initialize a Dropdownview CompositeView");
			this.on('show', function(){
				self.$el.foundation();
			});
		},
		
    	itemView: Dropdownitemview,
    	
    	template: DropdownviewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: ".f-dropdown",

		/* Ui events hash */
		// events: {},

		/* on render callback */
		onRender: function() {
			// $(document).foundation('dropdown', 'init');
		}
	});

});
