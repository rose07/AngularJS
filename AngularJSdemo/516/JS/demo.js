/**
 * Created by hzjs170511 on 2017/5/16.
 */
var app=angular.module("app",[]);
app.controller("controller",function ($scope,$http) {
   $http({
       method:"get",
       url:"package.json"
   }) .then( function successCallback(res) {
            $scope.name =res.data.data;
            console.log(res.data.data);
   },function errorCallback(res) {

   })
});