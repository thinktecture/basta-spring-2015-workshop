!function () {
    "use strict";

    app.module.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/controllers/list.html',
                controller: 'listController'
            })
            .when('/detail/:id', {
                templateUrl: 'app/controllers/detail.html',
                controller: 'detailController'
            });
    });
}();
