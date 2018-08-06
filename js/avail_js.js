var myApp=angular.module("myApp",["ngRoute"]);




myApp.controller("myControllerFeed",function($scope,$http){
$http.get("http://localhost:3000/feedback").then(function(response){


});
$scope.givefeedback=function(){

     let feedback={
       review:$scope.rating,
       comments:$scope.comments,
       name:$scope.name,
       email:$scope.email
       }
       console.log(feedback);
       $http.post("http://localhost:3000/feedback",feedback).then(function(response){
           console.log(response.data);
           $scope.msg=response.data;
           $scope.email="";
           $scope.name="";
           $scope.comments="";
           $scope.review="";
           alert("Thank you for your feedback");


       })



}
});



myApp.controller("myControllerContact",function($scope,$http){
$http.get("http://localhost:3000/contact").then(function(response){


});
$scope.giveContact=function(){

     let contact={
       name:$scope.name,
       email:$scope.email,
       mobile:$scope.mobile,
       requirement:$scope.address
       }
       console.log(contact);
       $http.post("http://localhost:3000/contact",contact).then(function(response){
           console.log(response.data);
           $scope.msg=response.data;
           $scope.email="";
           $scope.name="";
           $scope.mobile="";
           $scope.address="";
           alert("Thank you for contacting us");
       })



}
});

myApp.controller("myControllerRegister",function($scope,$http,$routeParams){
// $http.get("http://localhost:3000/banglore").then(function(response){
//
//
// });
$scope.members=1;
$scope.package=0;
console.log("current route");
console.log($routeParams);
$scope.givesbanglore=function(){
     let banglore={
       firstname:$scope.fname,
       lastname:$scope.lastname,
       mailid:$scope.mailid,
       members:$scope.members,
       package:$scope.package,
       arrivaldate:$scope.arrivaldate,
       phoneno:$scope.phone,
       address:$scope.address,
       price:$scope.members * $scope.package
       }
       console.log(banglore);

       $http.post("http://localhost:3000/bangalore",banglore).then(function(response){
console.log("----bangalore------");
           console.log(response.data);
           $scope.msg=response.data;
           $scope.fname="";
           $scope.lname="";
           $scope.members="";
            $scope.arrivaldate="";
           $scope.mailid="";
           $scope.address="";
           $scope.phone="";
           alert("Thank you for registration");
       })



}
});
