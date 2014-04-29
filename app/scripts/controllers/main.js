'use strict';

angular.module('eatonJsonBlogApp')
  .controller('MainCtrl', ['$scope', '$posts', function ($scope, $posts) {
    $scope.posts = $posts.query();
  }]);
