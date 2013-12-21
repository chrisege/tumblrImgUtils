(function() {
	'use strict';

	var root = this;

	root.define([
		'models/DashboardModel'
		],
		function( Dashboardmodel ) {

			describe('Dashboardmodel Model', function () {

				it('should be an instance of Dashboardmodel Model', function () {
					var DashboardModel = new Dashboardmodel();
					expect( DashboardModel ).to.be.an.instanceof( Dashboardmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );