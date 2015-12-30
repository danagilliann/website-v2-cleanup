var app = angular.module('myWebsiteApp', []);

app.controller('MainController', function($scope, $http) { 
  /* functions */
  function tumblrJSON() { 
    return "http://api.tumblr.com/v2/blog/dana-lee-graphics.tumblr.com/posts/photo?api_key=GCXjNaLltIgQ0LQC9K8eS4xg1xwHEwmEcaPK9OYnVcnDLbqyaN&limit=6";
  }
  
  function fetch() { 
    var tumblrCall = tumblrJSON();
    $http.get(tumblrCall)
      .success(function(res) { 
        console.log(res.response.posts[0].photos[0].original_size.url); /* Photos is always 0 */
      });
  }

  fetch();

  /* Main row */
  $scope.title = "Dana Lee";
  $scope.buttonGuides = [ 
    {
      title:'About', 
      id:"about"
    },
    {
      title:'Links', 
      id:"links"
    },
    {
      title:'Portfolio', 
      id:"portfolio"
    },
    {
      title:'Projects', 
      id:"projects"
    },
    {
      title:"Let's get food!!!",
      id:"contact"
    }
  ];

  /* About row */
  $scope.aboutHead = "Hello World!";
  $scope.aboutDescription = "I'm Dana Lee! I'm from the Philippines studying Computer Science at New York University. I love hackathons, coding, coffee, sleep, yoga, design, jokes, and food. When I feel sad I dance to 90/00s music or sing Beyonce songs. I'm also a fan of promoting ladiez in technology. If you're reading this, we should be friends!!";

  /* Links row */
  $scope.linkHeader = "Links:";
  $scope.linkList = [ 
    {
      title:'Twitter', 
      id:'twitter', 
      href:'https://twitter.com/danagilliann'
    },
    {
      title:'Resume', 
      id: 'resume', 
      href: 'resume.pdf'
    },
    {
      title:'Instagram', 
      id: 'instagram', 
      href: 'https://instagram.com/danagilliann/'
    },
    {
      title: 'Github', 
      id: 'github', 
      href: 'https://github.com/danagilliann'
    },
    {
      title: 'LinkedIn', 
      id: 'linkedin', 
      href: 'https://www.linkedin.com/in/danagilliann'
    }
    /*
    {
      title: 'Press',
      id: 'press',
      href: '/'
    }
    */
  ];

  /* Features and talks row */
  $scope.featTalksHeader = "Features & Talks";

  /* Porfolio row */
  $scope.portfolioHeader = "Portfolio:";
  $scope.viewLink = "http://dana-lee-graphics.tumblr.com/";
  $scope.viewText = "View More >>";

  /* Making the API call to Tumblr */
  /* TO DO: Make new .js file which contains only the API call */

  /* Project row */
  $scope.projectHeader = "Projects:";
  $scope.projects = [
  {
    title: 'Myout',
    id: 'myout',
    desc: 'Counts your reps while you work out',
    href: 'https://www.hackerleague.org/hackathons/hackcooper-2015/hacks/myout',
  },
  {
    title: 'PlayPerf',
    id: 'playperf',
    desc: 'Curates your perfect playlist',
    href: 'https://www.hackerleague.org/hackathons/hackru-spring-2015/hacks/play-perf'
  },
  {
    title: 'The Periodical',
    id: 'the-periodical',
    desc: 'Learn about that time of the month',
    href: 'http://terriburns.com/the-periodical'
  },
  { 
    title: 'Meyow',
    id: 'meyow',
    desc: 'Helps women who have been catcalled',
    href: 'https://github.com/danagilliann/Meyow'
  },
  {
    title: 'Beyonce Heart Rater',
    id: 'beyonce-heart-rater',
    desc: 'Gifs + Beyonce + Emojis',
    href: 'http://danagilliann.me/beyonce-heart-rater'
  },
  { 
    title: 'Git Committed',
    id: 'git-committed',
    desc: 'Helps you commit while Git-ing',
    href: 'http://gitcommitted.co'
  }];

  /* Contacts row */
  $scope.contactHeader = "Let's meet IRL.";
  $scope.contactSubHeader = "(or through the Internet)";
  $scope.contactDesc = "Wanna grab some coffee? Pizza? Dessert? Tea? Send me an email! We'll be BFFs";
  $scope.contactEmailHref = "mailto:hello@danagilliann.me";
  $scope.contactEmail = "hello@danagilliann.me";

});
