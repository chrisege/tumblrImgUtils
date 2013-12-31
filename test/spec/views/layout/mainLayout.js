(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/mainLayout'
		],
		function( Mainlayout ) {

			describe('Mainlayout Layout', function () {

				it('should be an instance of Mainlayout Layout', function () {
					var mainLayout = new Mainlayout();
					expect( mainLayout ).to.be.an.instanceof( Mainlayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );