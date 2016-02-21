var app = angular.module('myWebsiteApp', ['ngSanitize']);

app.controller('MainController', function($scope, $http) { 
  /* functions */
  function tumblrJSON() { 
    return "http://api.tumblr.com/v2/blog/dana-lee-graphics.tumblr.com/posts/photo?api_key=GCXjNaLltIgQ0LQC9K8eS4xg1xwHEwmEcaPK9OYnVcnDLbqyaN&limit=6";
  }
  
  function fetch() { 
    var tumblrCall = tumblrJSON();
    var tumblrPhotos = [];
    $scope.tumblrImages= tumblrPhotos;

    $http.jsonp("http://api.tumblr.com/v2/blog/dana-lee-graphics.tumblr.com/posts/photo?api_key=GCXjNaLltIgQ0LQC9K8eS4xg1xwHEwmEcaPK9OYnVcnDLbqyaN&limit=6&callback=JSON_CALLBACK")
    .then(function(res) {
      var posts = res.data.response.posts;
      for (var p in posts) {
        tumblrPhotos.push({ img: posts[p].photos[0].original_size.url, href: posts[p].post_url });
      }
    });
  }

  fetch();

  /* Press page */
  $scope.talks = [ 
    {
      date: 'November 12, 2015',
      title: 'What is Computer Science?',
      href: 'http://nyuwinc.org/program/'
    },
    {
      date: 'October 22, 2015',
      title: 'How I "Git Committed" to Engineering',
      href: 'press.html'
    },
    { 
      date: 'October 10, 2015',
      title: 'Local Hack Day: Animations and Transitions with CSS',
      href: 'https://www.youtube.com/watch?v=6tqPOXhSqog&index=9&list=PLPDgudJ_VDUfjvhrrJY43yIgEiHluJ1yE'
    }
  ];

  $scope.features = [ 
    { 
      title: 'Tech@NYU\'s Lady Leadership is Breaking Industry Barriers',
      href: 'http://nyulocal.com/on-campus/2015/09/10/technyus-lady-leadership-is-breaking-industry-barriers/'
    }
  ];

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
  $scope.aboutDescription = "I'm Dana Lee! I'm from the Philippines studying Computer Science at NYU (New York University). I love hackathons, coding, coffee, sleep, yoga, design, jokes, Beyonce, and food. I'm currently a Student Ambassador for <a href=\"https://www.google.com\">Google</a>, and I used to work at a startup called <a href=\"https://www.beautybooked.com/home\">BeautyBooked</a>. For Summer 2015, I'll be working at <a href=\"http://www.behance.com/\">Adobe Behance</a>. At NYU, I am part of <a href=\"http://techatnyu.org/\">Tech@NYU</a> and <a href=\"http://nyuwinc.org/\">Women in Computing</a>. I love promoting ladiez in technology, and I'm working on being a better intersectional feminist. If you're reading this, we should be friends!!";

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
    },
    {
      title: 'Press',
      id: 'press',
      href: 'press.html'
    }
  ];

  /* Features and talks row */
  $scope.featTalksHeader = "Features & Talks";

  /* Porfolio row */
  $scope.portfolioHeader = "Portfolio:";
  $scope.viewLink = "http://dana-lee-graphics.tumblr.com/";
  $scope.viewText = "View More >>";

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
    href: 'http://tcburning.com/the-periodical'
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
    desc: 'Commit while Git-ing',
    href: 'http://gitcommitted.co'
  },
  {
    title: 'Say It Back',
    id: 'say-it-back',
    desc: 'Kareoke on the Internet',
    href: 'https://sayitback.firebaseapp.com/' 
  },
  { 
    title: 'MedCheck',
    id: 'medcheck',
    desc: 'Helps doctors connect to patients',
    href: 'http://ramen.hackgt.com/ramen-as-a-service/app/submission_view.php?id=564d129244bebd3f4733546c&p_id=564d129244bebd3f47335454&filter=&start_from=0&length=119&from_page=2' // Link to Sushi
  },
  {
    title: 'Sugar Trails',
    id: 'sugar-trails',
    desc: 'Helps Diabetics monitor glucose',
    href: 'http://devpost.com/software/sugar-trails-zou0tb'
  },
  {
    title: 'DemoDays',
    id: 'demodays',
    desc: 'Refactored Tech@NYU site',
    href: 'http://demodays.co/'
  }];

  /* Contacts row */
  $scope.contactHeader = "Let's meet IRL.";
  $scope.contactSubHeader = "(or through the Internet)";
  $scope.contactDesc = "Wanna grab some coffee? Pizza? Dessert? Tea? Send me an email! We'll be BFFs";
  $scope.contactEmailHref = "mailto:hello@danagilliann.me";
  $scope.contactEmail = "hello@danagilliann.me";

});
