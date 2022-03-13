(function () {
  var OrdersController = function ($scope, $routeParams, customersFactory) {
    var customerId = $routeParams.customerId;
    console.log("customerId ", customerId);
    console.log("customerId decodeUIR", decodeURI(customerId));

    $scope.customer = null;

    function init() {
      // Make a call to the getCustomer factory method
      // Search the customers for the customerId
      customersFactory.getCustomer(customerId).then(function (customer) {
        $scope.customer = customer.data;
        console.log("$scope.customer--service", $scope.customer.data);
      });
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

  OrdersController.$inject = ["$scope", "$routeParams", "customersFactory"];

  angular
    .module("customersApp")
    .controller("OrdersController", OrdersController);
})();
