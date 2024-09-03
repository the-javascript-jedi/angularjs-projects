// ROUTES
weatherApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix(""); // Disable the "!" prefix
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "homeController",
    })
    .when("/forecast", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController",
    })
    .when("/forecast/:days", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController",
    });
});
