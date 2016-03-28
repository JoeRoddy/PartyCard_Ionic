angular.module('chat.services', [])

//CreateAccountService.createUser
    .service('CreateAccountService', function ($q) {
        return {
            createUser: function (user,pw,acctNum,email,budget,partyNights) {
                var thisUser = {userName:user,accountNumber:acctNum,email:email,monthlyBudget:budget,partyNights:partyNights};
                var deferred = $q.defer();
                var promise = deferred.promise;

                //var validName = send thisUser to the server to be validated
                //if (name passes on server):
                if (true) {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    //set currentUser = thisUser
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })
    .service('LoginService', function ($q) {
        return {
            loginUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })
    .factory('CurrentUserService',function(){
        var currentUser;
        return{
            setCurrentUser : function(user){
                currentUser=user;
            },
            getCurrentUser : function(){
                return currentUser;
            }
        }
    })

;
