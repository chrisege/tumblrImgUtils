(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/DashboardCollection'
		],
		function( Dashboardcollection ) {

			describe('Dashboardcollection Collection', function () {

				it('should be an instance of Dashboardcollection Collection', function () {
					var DashboardCollection = new Dashboardcollection();
					expect( DashboardCollection ).to.be.an.instanceof( Dashboardcollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );