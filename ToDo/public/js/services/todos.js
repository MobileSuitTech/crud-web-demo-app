// js/services/todos.js
angular.module('todoService', [])
//important to note that in this file, we make calls to methods in the 
// routes.js file (which prepare the http requests and return them here)
// and once we get the requests properly formatted returned here, then 
// we send them through http to the database

	// super simple service
	// each function returns a promise object
	.factory('Todos', function($http){
		return {
			get : function(){
				return $http.get('/api/todos');
			},
			create : function(todoData){
				return $http.post('/api/todos', todoData);
			},
			//this here is the change I'm trying to make:
			patch : function(id){
				return $http.patch('/api/todos/' + id);
			},
			delete : function(id){
				return $http.delete('/api/todos/' + id);
			}
		}
	});
