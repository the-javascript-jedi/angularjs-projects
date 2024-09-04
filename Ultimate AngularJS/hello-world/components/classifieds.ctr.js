(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    // inject the classifieds factory
    .controller(
      "classifiedsCtrl",
      function (
        $scope,
        $http,
        classifiedsFactory,
        $mdSidenav,
        $mdToast,
        $mdDialog
      ) {
        $scope.message = "AngularJS";
        // mock an api call
        classifiedsFactory.getClassifieds().then(function (data) {
          console.log("data", data);
          $scope.classifieds = data.data;
          // get categories from each of the array objects
          $scope.categories = getCategories(data.data);
        });
        // dummy contact
        var contact = {
          name: "Ryan Chenkie",
          phone: "(555) 555 5555",
          email: "ryanchenkie@gmail.com",
        };

        // sidenav button open
        $scope.openSidebar = function () {
          $mdSidenav("left").open();
        };
        // sidenav close
        $scope.closeSidebar = function () {
          $mdSidenav("left").close();
        };
        // save form data
        $scope.saveClassified = function (classified) {
          if (classified) {
            // attach dummy contact to form data
            classified.contact = contact;
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSidebar();
            // show toast notification
            showToast("Classification Saved");
          }
        };

        $scope.editClassified = function (classifiedForEditing) {
          // set a flag for editing
          $scope.editing = true;
          $scope.openSidebar();
          $scope.classified = classifiedForEditing;
        };

        // after editing - close sidebar functionality
        $scope.saveEdit = function () {
          $scope.editing = false;
          $scope.classified = {};
          $scope.closeSidebar();
          showToast("Edit Saved");
        };
        // delete classified and also show a confirm modal
        $scope.deleteClassified = function (event, classified) {
          var confirm = $mdDialog
            .confirm()
            .title("Are you sure you want to delete " + classified.title + "?")
            .ok("Yes")
            .cancel("No")
            .targetEvent(event);

          $mdDialog.show(confirm).then(function () {
            var index = $scope.classifieds.indexOf(classified);
            $scope.classifieds.splice(index, 1);
            //ns approach
            //  let indexToDelte = $scope.classifieds.findIndex(function (data) {
            //    return classified.id == data.id;
            //  });
            //  console.log("indexToDelte", indexToDelte);
            //  $scope.classifieds.splice(parseInt(indexToDelte), 1);
          });
        };
        function showToast(message) {
          $mdToast.show(
            $mdToast
              .simple(message)
              .content()
              .position("top, right")
              .hideDelay(3000)
          );
        }
        //get the categories for dropdown
        function getCategories(classifieds) {
          var categories = [];
          // the data is in an array of objects and each category will be repeated so we want to loop over the items and keep only unique items
          angular.forEach(classifieds, function (item) {
            angular.forEach(item.categories, function (category) {
              categories.push(category);
            });
          });
          return _.uniq(categories);
        }
      }
    );
})();
