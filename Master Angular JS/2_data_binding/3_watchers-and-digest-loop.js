var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };    
    $scope.$watch('handle', function(newValue, oldValue) {        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);        
    });
    
    // use angular timeout function always
    $timeout(function() {       
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');        
    }, 3000);

    // setTimeout(function(){
    // // use $scope.$apply to manually trigger the digest cycle
    //     $scope.$apply(function(){
    //         $scope.handle="newtwitterhandle-settimeout";
    //         console.log("Scope Changed!!!")
    //     })
    // },3000)
}]);