angular.module('chat.controllers', [])

    .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function () {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
                $state.go('tab.budget');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        }
        $scope.openCreateAccountView = function () {
            $state.go('createAccount');
        }
    })
    .controller('CreateAccountCtrl', function ($scope, $window, $state, CreateAccountService, $ionicPopup) {
        $scope.data = {};

        $scope.createAccount = function () {
            CreateAccountService.createUser($scope.data.username, $scope.data.password, $scope.data.accountNumber, $scope.data.email, $scope.data.budget, $scope.data.partyNights).success(function (data) {
                $state.go('tab.budget');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Account creation failed!',
                    template: 'Something went wrong. Check your input.'
                });
            });
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
        var d = new Date();
        $scope.date = d.getMonth()+"/"+ d.getDate()+"/"+d.getFullYear();

    })
    .controller('AccountCtrl', function ($scope) {

    })
;
