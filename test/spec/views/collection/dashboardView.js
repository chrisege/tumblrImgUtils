(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/dashboardView'
		],
		function( Dashboardview ) {

			describe('Dashboardview Collectionview', function () {

				it('should be an instance of Dashboardview Collectionview', function () {
					var dashboardView = new Dashboardview();
					expect( dashboardView ).to.be.an.instanceof( Dashboardview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );