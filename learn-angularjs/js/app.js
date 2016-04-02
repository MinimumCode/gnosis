(function(){
	var app = angular.module( 'gemStore', [] );
	
	app.controller( 'StoreController', function(){
		this.products=gems;
	});
	
	app.controller( 'PanelController', function(){
		this.tab = 1;
		
		this.setTab = function( tab ) {
			this.tab = tab;
		};
		
		this.isSelectedTab = function( tab ){
			return this.tab === tab;
		};
	});

	app.controller('ReviewController',function(){
		this.review = {};

		this.addProductReview = function( prod ) {
			prod.reviews.push( this.review );
			this.review = {};
		};

	});

	app.directive ('formReview',function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/form-review.html',
		}
	});

})();