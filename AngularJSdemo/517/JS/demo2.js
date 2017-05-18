/**
 * Created by hzjs170511 on 2017/5/17.
 */
var app=angular.module("app2",[]);
app.controller("controller2",function ($scope) {
    $scope.name="zhangSan";
    $scope.name4="lihua";
    /*lowercase 转为小写*/
    $scope.name2=angular.lowercase($scope.name);
    /*uppercase 转为大写*/
    $scope.name3=angular.uppercase($scope.name4);

});
/*判断给定的值是不是数字，是就是true*/
app.controller("controller3",function ($scope) {
    $scope.tel=12121415678;
    $scope.tel2="1212131345";
    $scope.num2=angular.isNumber($scope.tel);
    $scope.num3=angular.isNumber($scope.tel2);
});
/*判断给定的值是不是字符串，是就是true*/
app.controller("controller4",function ($scope) {
    $scope.string="String ";
    $scope.num4=angular.isString($scope.string);
})

