/**
 * Created by hzjs170511 on 2017/5/16.
 */
var app=angular.module("app4",[]);
app.controller("controller4",function ($scope,$http) {
    $http.get("demo2.json").then(function (req) {
        $scope.list=req.data.data;
        console.log(req.data.data);
    });

})