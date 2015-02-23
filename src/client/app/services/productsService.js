!function () {
    "use strict";

    /**
     * @constructor
     */
    function ProductsService($http, apiUrl) {
        this.getProducts = function () {
            return $http.get(apiUrl + "articlesdemo");
        };

        this.getProduct = function (id) {
            return $http.get(apiUrl + "articlesdemo/" + id);
        };
    }

    app.module.service('productsService', ProductsService);
}();
