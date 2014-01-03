(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/DropdownItemView'
		],
		function( Dropdownitemview ) {

			describe('Dropdownitemview Itemview', function () {

				it('should be an instance of Dropdownitemview Itemview', function () {
					var DropdownItemView = new Dropdownitemview();
					expect( DropdownItemView ).to.be.an.instanceof( Dropdownitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );