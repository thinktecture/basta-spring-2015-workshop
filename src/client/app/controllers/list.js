!function () {
    "use strict";

    /**
     * @constructor
     * @param $scope
     * @param $location
     * @param {ProductsService} productsService
     */
    function ListController($scope, $location, productsService) {
        productsService.getProducts()
            .then(function (response) {
                $scope.products = response.data.Items;
            });

        $scope.details = function (id) {
            $location.path('/detail/' + id);
        };
    }

    app.module.controller('listController', ListController);
}();
