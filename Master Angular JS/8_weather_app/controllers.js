// CONTROLLERS
// inject the custom city service (no need for $)
weatherApp.controller("homeController", [
  "$scope",
  "$location",
  "cityService",
  function ($scope, $location, cityService) {
    $scope.city = cityService.city;
    // establish 2 way binding
    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });

    // form submit function
    $scope.submit = function () {
      // route to the forecast page
      $location.path("/forecast");
    };
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$http",
  "$routeParams",
  "cityService",
  function ($scope, $http, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || "2";
    // $scope.city = cityService.city || "London"; // Fallback city

    const apiKey = "dab0c1237c271094b8379df4181ffa50";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${$scope.city}&appid=${apiKey}&units=metric&days=${$scope.days}`;

    // Only make the API call if $scope.city is defined
    if ($scope.city) {
      // dummy api data
      //   var testResponse = {
      //     list: [
      //       {
      //         temp: {
      //           day: 294,
      //         },
      //         dt: 1725300000,
      //         main: {
      //           temp: 293.49,
      //           feels_like: 293.67,
      //           temp_min: 293.2,
      //           temp_max: 293.49,
      //           pressure: 1010,
      //           sea_level: 1010,
      //           grnd_level: 1007,
      //           humidity: 80,
      //           temp_kf: 0.29,
      //         },
      //         weather: [
      //           {
      //             id: 803,
      //             main: "Clouds",
      //             description: "broken clouds",
      //             icon: "04d",
      //           },
      //         ],
      //         clouds: {
      //           all: 75,
      //         },
      //         wind: {
      //           speed: 3.46,
      //           deg: 202,
      //           gust: 5.91,
      //         },
      //         visibility: 10000,
      //         pop: 0.39,
      //         sys: {
      //           pod: "d",
      //         },
      //         dt_txt: "2024-09-02 18:00:00",
      //       },
      //       {
      //         temp: {
      //           day: 295,
      //         },
      //         dt: 1725310800,
      //         main: {
      //           temp: 293.02,
      //           feels_like: 293.2,
      //           temp_min: 292.08,
      //           temp_max: 293.02,
      //           pressure: 1010,
      //           sea_level: 1010,
      //           grnd_level: 1007,
      //           humidity: 82,
      //           temp_kf: 0.94,
      //         },
      //         weather: [
      //           {
      //             id: 500,
      //             main: "Rain",
      //             description: "light rain",
      //             icon: "10n",
      //           },
      //         ],
      //         clouds: {
      //           all: 83,
      //         },
      //         wind: {
      //           speed: 2.78,
      //           deg: 200,
      //           gust: 5.9,
      //         },
      //         visibility: 10000,
      //         pop: 0.44,
      //         rain: {
      //           "3h": 0.11,
      //         },
      //         sys: {
      //           pod: "n",
      //         },
      //         dt_txt: "2024-09-02 21:00:00",
      //       },
      //     ],
      //   };
      //   $scope.weatherResult = testResponse;
      // use this method to convert to fahrenheit
      $scope.convertToFahrenheit = function (degK) {
        return Math.round(1.8 * (degK - 273) + 32);
      };
      // convert to date
      $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
      };

      // make api call
      $http.get(url).then(
        function (response) {
          // console.log("response", response);
          // display data based on days route params
          let modifiedResponse = response;
          modifiedResponse.data.list.splice($scope.days);
          $scope.weatherResult = modifiedResponse.data;
          // display all data
          // $scope.weatherResult = response.data;
        },
        function (error) {
          console.error("Error:", error);
        }
      );
    } else {
      console.error("City name is undefined.");
    }
  },
]);
