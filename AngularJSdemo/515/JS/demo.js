/**
 * Created by hzjs170511 on 2017/5/15.
 */
/*
var app=angular.module("my_App",[]);
app.controller("my_controller",function ($scope) {
    $scope.a1="li";
    $scope.a2="san";
});*/
var app=angular.module('app2',[]);
app.controller('controller2',['$scope',function ($scope) {
    $scope.count=0;
    $scope.fn=function () {
       $scope.count++;
        console.log($scope.count);
    }

}]);