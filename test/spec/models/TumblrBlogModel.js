(function() {
	'use strict';

	var root = this;

	root.define([
		'models/TumblrBlogModel'
		],
		function( Tumblrblogmodel ) {

			describe('Tumblrblogmodel Model', function () {

				it('should be an instance of Tumblrblogmodel Model', function () {
					var TumblrBlogModel = new Tumblrblogmodel();
					expect( TumblrBlogModel ).to.be.an.instanceof( Tumblrblogmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );