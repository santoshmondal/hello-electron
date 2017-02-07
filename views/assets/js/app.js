/**
 * Created by santosh on 2/7/17.
 */
var path = require('path');
var utils = require('../secured/utils');
var app = angular.module("app", []);

app.controller("main", ['$scope', function($scope){

    var pathname = path.dirname(path.dirname(__filename));
    $scope.name = utils;

    $scope.userName = "Affixus";

    $scope.saveUser = function() {
      console.log($scope.userName);

      utils.dml.demoInsert($scope.userName);
    };

}]);

