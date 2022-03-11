(function () {
  var OrdersController = function ($scope, $routeParams, customersService) {
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
      //Search the customers for the customerId
      $scope.customer = customersService.getCustomer(customerId);
      console.log("customer--service", $scope.customer);
      /*{
    "id": 4,
    "joined": "1995-03-28",
    "name": "Dave",
    "city": "Seattle",
    "orderTotal": 101.5,
    "orders": [
        {
            "id": 5,
            "product": "Kindle",
            "total": 101.5,
            "$$hashKey": "object:3"
        }
    ]
    }*/
    }

    init();
  };

  OrdersController.$inject = ["$scope", "$routeParams", "customersService"];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
