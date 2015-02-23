!function () {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $routeParams
     * @param {ProductsService} productsService
     * @param imageUrl
     */
    function DetailController($scope, $routeParams, productsService, imageUrl) {
        var id = $routeParams.id;
        productsService.getProduct(id)
            .then(function(response){
                $scope.product = response.data;
                $scope.image = imageUrl + $scope.product.ImageUrl;
            });
    }

    app.module.controller('detailController', DetailController);
}();
