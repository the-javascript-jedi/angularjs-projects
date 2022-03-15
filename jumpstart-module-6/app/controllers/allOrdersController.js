(function () {
  var AllOrdersController = function ($scope, customersFactory) {
    $scope.orders = null;
    $scope.ordersTotal = 0.0;
    $scope.totalType;

    function init() {
      customersFactory.getOrders().then(
        function (response) {
          $scope.orders = response.data;
          console.log("$scope.orders", $scope.orders);
          getOrdersTotal();
        },
        function (data, status, headers, config) {
          //handle error
        }
      );
    }

    function getOrdersTotal() {
      var total = 0;
      for (var i = 0, len = $scope.orders.length; i < len; i++) {
        total += $scope.orders[i].total;
      }
      $scope.ordersTotal = total;
      $scope.totalType = $scope.ordersTotal > 100 ? "success" : "danger";
    }

    init();
  };

  AllOrdersController.$inject = ["$scope", "customersFactory"];

  angular
    .module("customersApp")
    .controller("AllOrdersController", AllOrdersController);
})();
