(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/dashboardItemView'
		],
		function( Dashboarditemview ) {

			describe('Dashboarditemview Itemview', function () {

				it('should be an instance of Dashboarditemview Itemview', function () {
					var dashboardItemView = new Dashboarditemview();
					expect( dashboardItemView ).to.be.an.instanceof( Dashboarditemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );