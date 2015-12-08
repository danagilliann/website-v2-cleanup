var app = angular.module('myWebsiteApp', []);

app.controller('MainController', function($scope, $http) { 
  $scope.title = "Dana Lee";
  $scope.buttonGuides = [ 
    {title:'About', id:"about"},
    {title:'Links', id:"links"},
    {title:'Portfolio', id:"portfolio"},
    {title:'Projects', id:"projects"},
    {title:"Let's get food!!!", id:"contact"}
  ];
  $scope.greeting = "Hello World!";
  $scope.linkHeader = "Links:";
  $scope.linkList = [ 
    {title:'Twitter', id:'twitter', href:'https://twitter.com/danagilliann'},
    {title:'Resume', id: 'resume', href: 'resume.pdf'},
    {title:'Instagram', id: 'instagram', href: 'https://instagram.com/danagilliann/'},
    {title: 'Github', id: 'github', href: 'https://github.com/danagilliann'},
    {title: 'LinkedIn', id: 'linkedin', href: 'https://www.linkedin.com/in/danagilliann'}
  ];
  $scope.aboutDescription = "I'm Dana! I'm from the Philippines studying Computer Science at New York University. I love hackathons, coding, coffee, sleep, yoga, design, jokes, and food. When I feel sad I dance to 90/00s music or sing Beyonce songs. I'm also a fan of promoting ladiez in technology. If you're reading this, we should be friends!!";

});
