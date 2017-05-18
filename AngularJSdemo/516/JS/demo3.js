/**
 * Created by hzjs170511 on 2017/5/16.
 */
var app=angular.module("app3",[]);
app.controller("controller3",function ($scope,$http) {
    $http.get("demo2.json").then(function (req) {
        $scope.list=req.data.data;
        console.log(req.data.data)
    })
});