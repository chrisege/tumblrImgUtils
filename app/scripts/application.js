define([
	'backbone',
	'communicator',
	'hbs!tmpl/layout/mainLayout_tmpl',
	'collections/DashboardCollection',
	'views/collection/dashboardView'
],

function( Backbone, Communicator, mainLayout, DashboardCollection, DashboardView ) {
    'use strict';

	var App = new Backbone.Marionette.Application(),
		mainLayout = mainLayout,

		dashboardCollection = new DashboardCollection(),
		dashboardView = new DashboardView({collection: dashboardCollection});

	dashboardCollection.fetch();

	/* Add application regions here */
	App.addRegions({
		topbar: ".top-bar-section",
		main: "#main"
	});


	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = mainLayout();
		Communicator.mediator.trigger("APP:START");
		App.main.show(dashboardView);
	});

	return App;
});
