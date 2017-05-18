/**
 * Created by hzjs170511 on 2017/5/18.
 */
var app=angular.module("app1",[]);
/*provider 提供者 创建service 定义方法进行计算（配置阶段）*/
app.config(function ($provide) {
  $provide.provider("mathServer",function () {
      this.$get=function () {
          var factory={};
          //product 积
          factory.product=function (a,b) {
              var c=a*b;
              return c;
          };
         return factory;
      }
  })
});
/*value 值（配置阶段）*/
app.value("defaultInput",10);
/*工厂*/
app.factory("mathServer",function () {
    var factory={};
    factory.product=function (a,b) {
        return a*b;
    };
    return factory;
});
/*服务*/
/*square 平方*/
app.service("CalcService",function (mathServer) {
    this.square=function (a) {
        return mathServer.product(a,a);
    }
});
app.controller("demo1Controller",function ($scope,CalcService, defaultInput) {
    $scope.num=defaultInput;  //值
    $scope.result=CalcService.square($scope.num);

    $scope.square=function () {
        $scope.result=CalcService.square($scope.num);
    }
});
