(function () {
	var app = angular.module('userModule', []);
        var ans;
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                          ans = 'El usuario ' + $scope.user.firstName + " " + $scope.user.lastName + ' nació el ' + $scope.user.date;
                          document.getElementById("msj").innerHTML = ans;
			};
                        
		}]);
 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
                                
			};
		}]);
})();

