// js/controllers/ListController.js
angular.module('todoController', [])

    .controller('ListController', function($scope, $http, Todos) 
    {
      $scope.formData = {};

      // $scope.items = [
      //   { detail: 'Get up', stat: 'Complete'},
      //   { detail: 'Wash face', stat: 'Active'},
      //   { detail: 'Eat breakfast', stat: 'Active'}
      // ];
      
      // GET =====================================================================
      // when landing on the page, get all todos and show them
      // use the service to get all the todos
      Todos.get()
          .success(function(data) {
              $scope.todos = data;
          });

      $scope.addItem = function () {
        // $scope.items.push(
        //   {
        //     detail: $scope.newItem.detail,
        //     stat: 'Active'
        //   });
        //  $scope.newItem.detail = [];
         
         //Todos.create($scope.items[0]);

            // people can't just hold enter to keep adding the same to-do anymore
        if (!$.isEmptyObject($scope.formData)) {

            // call the create function from our service (returns a promise object)
            Todos.create($scope.formData)
            
                // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.todos = data; // assign our new list of todos
                });
        }
      }

      $scope.deleteItem = function (id) {
        // var index = $scope.items.indexOf(item);
        // $scope.items.splice(index, 1);

          Todos.delete(id)
              // if successful creation, call our get function to get all the new todos
              .success(function(data) {
              $scope.todos = data; // assign our new list of todos
        });    
      }

      $scope.completeItem = function (id){
        item.stat = 'Complete';
      }

    });

    function changeTab(index)
    {
    switch(index)
    {
    case 1:
      document.getElementById("all_list_wrapper").style.display = "block";
      document.getElementById("active_list_wrapper").style.display = "none";
      document.getElementById("complete_list_wrapper").style.display = "none";
      break;
    case 2:
      document.getElementById("all_list_wrapper").style.display = "none";
      document.getElementById("active_list_wrapper").style.display = "block";
      document.getElementById("complete_list_wrapper").style.display = "none";
      break;
    case 3:
      document.getElementById("all_list_wrapper").style.display = "none";
      document.getElementById("active_list_wrapper").style.display = "none";
      document.getElementById("complete_list_wrapper").style.display = "block";
      break;
    default:;
    }
}