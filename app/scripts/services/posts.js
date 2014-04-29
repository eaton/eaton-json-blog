'use strict';

angular.module('eatonJsonBlogApp')
  .factory('$posts', ['$resource', function ($resource) {
    var serviceUrl = 'json/posts.json';

    // Public API here
    return $resource(serviceUrl, {}, {
      'query' : {
        method: 'GET',
        isArray: true
      }
    });
  }]);
