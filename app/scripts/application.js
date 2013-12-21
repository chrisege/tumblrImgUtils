define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'collections/DashboardCollection'
],

function( Backbone, Communicator, Welcome_tmpl, DashboardCollection ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application(),
		dashboardCollection = new DashboardCollection;
	
		dashboardCollection.fetch();

	/* Add application regions here */
	App.addRegions({
		mainRegion: '.container'
	});

	/* Add initializers here */
	App.addInitializer( function () {
		// dashboardCollection.fetch().done(function(){debugger;});
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
		// App.mainRegion.show(testView);
	});

	return App;
});
