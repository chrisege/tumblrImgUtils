(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/DropdownView'
		],
		function( Dropdownview ) {

			describe('Dropdownview Compositeview', function () {

				it('should be an instance of Dropdownview Compositeview', function () {
					var DropdownView = new Dropdownview();
					expect( DropdownView ).to.be.an.instanceof( Dropdownview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );