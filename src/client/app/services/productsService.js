!function () {
    "use strict";

    /**
     * @constructor
     */
    function ProductsService($http, apiUrl) {
        this.getProducts = function (count) {
            var params = count ? { params: { "$top": count } } : undefined;
            return $http.get(apiUrl + "articlesdemo", params);
        };

        this.getProduct = function (id) {
            return $http.get(apiUrl + "articlesdemo/" + id);
        };
    }

    app.module.service('productsService', ProductsService);
}();
