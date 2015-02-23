!function () {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $routeParams
     * @param $location
     * @param {ProductsService} productsService
     * @param imageUrl
     */
    function DetailController($scope, $routeParams, $location, productsService, imageUrl) {
        var id = $routeParams.id;
        productsService.getProduct(id)
            .then(function (response) {
                $scope.product = response.data;
                $scope.image = imageUrl + $scope.product.ImageUrl;
            });

        $scope.back = function () {
            $location.path('/');
        };
    }

    app.module.controller('detailController', DetailController);
}();
