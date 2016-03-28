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
        //launches links from the in-app browser
        $scope.launch = function (url) {
            $window.open(url, "_system", "location=yes");
            return false;
        }
    })
    .controller('BudgetCtrl', function ($scope) {
        var d = new Date();
        var month = d.getMonth()+1;
        var year = d.getFullYear();
        var date = d.getDate();
        $scope.date = month+"/"+ date+"/"+year;
        function daysInMonth(month,year) {
            return new Date(year, month, 0).getDate();
        }
        var daysThisMonth = daysInMonth(month,year);
        $scope.daysRemaining = "Days Remaining: "+(daysThisMonth-date);

    })
    .controller('AccountCtrl', function ($scope) {
        $scope.data={};
        $scope.updateUserInfo=function (){
            // UpdateInfoService.update($scope.data.budget,$scope.data.partyNights){}
            console.log($scope.data.budget+$scope.data.partyNights);
        }
    })
;
