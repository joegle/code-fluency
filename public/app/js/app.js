var app = angular.module('fluency', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: "<h1>Nothing here {{'yet' + '!'}} </h1>"
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h1 ng-click="hello()">Its the UI-Router hello world app! also: {{foo}}</h1>',
    controller: function($scope){
      $scope.foo = "foo";

      $scope.hello = function(){
	console.log("clicked, hello");
      }
    }
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $urlRouterProvider.otherwise("/hello");
});
