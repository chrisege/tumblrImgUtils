define([
	'backbone',
	'communicator',
	'hbs!tmpl/layout/mainLayout_tmpl',
	'collections/DashboardCollection',
	'models/TumblrUserInfo',
	'views/collection/dashboardView',
	'views/composite/DropdownView'
],

function( Backbone, Communicator, mainLayout, DashboardCollection, TumblrUserInfo, DashboardView, DropdownView ) {
    'use strict';

	var App = new Backbone.Marionette.Application(),
		mainLayout = mainLayout,

		dashboardCollection = new DashboardCollection(),
		dashboardView = new DashboardView({collection: dashboardCollection}),

		tumblrUserInfo = new TumblrUserInfo();

	dashboardCollection.fetch();
	tumblrUserInfo.fetch();

	/* Add application regions here */
	App.addRegions({
		topbar: ".top-bar-section .right",
		main: "#main"
	});


	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = mainLayout();
		Communicator.mediator.trigger("APP:START");
		App.main.show(dashboardView);

		Communicator.mediator.on('initBlogCollection', function(blogs){
			var blogCollection = new Backbone.Collection(blogs),
				dropdownView = new DropdownView({
					collection: blogCollection,
					tagName: 'li',
					className: 'has-dropdown'
				});
			App.topbar.show(dropdownView);
		});

	});

	return App;
});
