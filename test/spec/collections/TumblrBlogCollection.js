(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/TumblrBlogCollection'
		],
		function( Tumblrblogcollection ) {

			describe('Tumblrblogcollection Collection', function () {

				it('should be an instance of Tumblrblogcollection Collection', function () {
					var TumblrBlogCollection = new Tumblrblogcollection();
					expect( TumblrBlogCollection ).to.be.an.instanceof( Tumblrblogcollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );