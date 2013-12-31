define([
	'backbone',
	'communicator',
	'hbs!tmpl/layout/mainLayout_tmpl'
],

function( Backbone, Communicator, mainLayout ) {
    'use strict';

	var App = new Backbone.Marionette.Application(),
		mainLayout = mainLayout;

		// dashboardCollection = new DashboardCollection;
	
		// dashboardCollection.fetch();

	/* Add application regions here */
	App.addRegions({
		topbar: ".top-bar-section",
		main: "#main"
	});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = mainLayout();
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
