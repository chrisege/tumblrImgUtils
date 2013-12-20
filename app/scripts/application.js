define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome'
],

function( Backbone, Communicator, Welcome_tmpl ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application(),
		TestView = Backbone.View.extend({
			tagName: 'h1',
			render: function(){
				return this.$el.html('hello');
			}
		}),
		DashboardCollection = Backbone.Collection.extend({
			url: '/tumblr/user/dashboard',
			parse: function(response){
				return response.response.posts;
			}
		}),
		dashboardCollection = new DashboardCollection(),
		testView = new TestView();

	/* Add application regions here */
	App.addRegions({
		mainRegion: '.container'
	});

	/* Add initializers here */
	App.addInitializer( function () {
		dashboardCollection.fetch().done(function(){debugger;});
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
		App.mainRegion.show(testView);
	});

	return App;
});
