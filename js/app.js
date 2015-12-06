var app = angular.module('myWebsiteApp', []);

app.controller('MainController', function($scope, $http) { 
  $scope.title = "Dana Lee";
  $scope.buttonGuides = [ 
    {info:'About'},
    {info:'Links'},
    {info:'Portfolio'},
    {info:'Projects'},
    {info:"Let's get food!!!"}
  ];
  $scope.greeting = "Hello World!";
  $scope.aboutDescription = "I'm Dana! I'm from the Philippines studying Computer Science at New York University. I love hackathons, coding, coffee, sleep, yoga, design, jokes, and food. When I feel sad I dance to 90/00s music or sing Beyonce songs. I'm also a fan of promoting ladiez in technology. If you're reading this, we should be friends!!";

});
