/**
 * Created by hzjs170511 on 2017/5/17.
 */
var app=angular.module("app3",[]);
app.controller("controllerDemo3",function ($scope,$http) {
    $http.get("demo3.json").then(function (req) {
        $scope.demo3=req.data.data;
    })
});