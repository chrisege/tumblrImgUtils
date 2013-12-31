(function() {
	'use strict';

	var root = this;

	root.define([
		'models/TumblrUserInfo'
		],
		function( Tumblruserinfo ) {

			describe('Tumblruserinfo Model', function () {

				it('should be an instance of Tumblruserinfo Model', function () {
					var TumblrUserInfo = new Tumblruserinfo();
					expect( TumblrUserInfo ).to.be.an.instanceof( Tumblruserinfo );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );