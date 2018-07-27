var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"home.html"

  }).when("/packages",{
    controller:"myController",
    templateUrl:"packages.html"
  })
});
app.controller("myController",function($scope,$http){
    $http.get("http://localhost:3000/packages").then(function(response){
        $scope.datas=response.data;

    });

    $scope.submitFeedback=function(){
      let data={
        name:$scope.name,
        email:$scope.email,
        phone:$scope.phone,
        address:$scope.address
          }

          $http.post("http://localhost:3000/feedback",data).then(function(){

            
          });

    }
});
