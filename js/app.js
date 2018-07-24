var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/",{
    templateUrl:"home.html"

  }).when("/packages",{
    controller:"myController",
    templateUrl:"packages.html"
  })
});
app.controller("myController",function($scope){

  $scope.datas=[{
    places:"Mysore",
    packages:"Mysore,Banglore",
    price:5000,
    days:3
    },{
      places:"Manglore",
      packages:"Manglore,chikmanglur",
      price:4000,
      days:2
  },{
    places:"Mysore",
    packages:"Mysore,Mandya",
    price:3000,
    days:2
  },{
    places:"Manglore",
    packages:"Manglore,Udapi",
    price:5000,
    days:3
  }]

});
