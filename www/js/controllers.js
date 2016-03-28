angular.module('chat.controllers', [])

    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function() {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                $state.go('tab.budget');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        }
        $scope.openCreateAccountView=function(){
            $state.go('createAccount');
        }
    })
    .controller('CreateAccountCtrl', function ($scope, $window,$state) {
       $scope.createAccount=function(){
            console.log('new account created');
            $state.go('tab.budget');
       }
    })
    .controller('DashCtrl', function ($scope, $window) {
        $scope.launch = function (url) {
            $window.open(url, "_system", "location=yes");
            return false;
        }
    })
    .controller('BudgetCtrl', function ($scope) {

    })
    .controller('AccountCtrl', function ($scope) {

    })
;
