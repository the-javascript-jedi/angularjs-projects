var app = angular.module("validationAndBinding", []);

app.controller("usersController", function ($scope, $http) {
  //API request
  $http
    .get("https://jsonplaceholder.typicode.com/users")
    .success(function (result) {
      $scope.users = result;
    });
  //Create a Edited user scope variable
  $scope.editedUser = undefined;
  //EDIT function
  $scope.edit = function (user) {
    $scope.currentUser = user;
    //display the error info
    $scope.editedUser = { name: "" };
    $scope.editedUser.name = user.name;
  };
  //SAVE Function
  $scope.save = function (editedUser) {
    $scope.currentUser.name = editedUser.name;
    //hide the error info
    $scope.editedUser = undefined;
  };
});
