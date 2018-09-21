// js/controllers/ListController.js
angular.module('todoController', [])
    
    .controller('ListController', function($scope, $http, Todos) 
    {
      $scope.formData = {};

      var yester = new Date();
      var toda = new Date();
      var tomor = new Date();
      var dayaf = new Date();
      
      toda.setHours(0,0,0,0);

      yester.setDate(yester.getDate() - 1);
      yester.setHours(0,0,0,0);

      tomor.setDate(tomor.getDate() + 1);
      tomor.setHours(0,0,0,0);

      dayaf.setDate(dayaf.getDate() + 2);
      dayaf.setHours(0,0,0,0);

      // console.log("day yesterday: " + yester);
      // console.log("day today: " + toda);
      // console.log("day tomorrow: " + tomor);

      // when landing on the page, get all todos and show them
      // use the service to get all the todos
      Todos.get()
          .success(function(data) {
              $scope.todos = data;
          });

      $scope.addItem = function () {

        if (!$.isEmptyObject($scope.formData)) {

            // here put the date checking code
            // scenarios:
            $scope.formData.duedate.setHours(0,0,0,0);
            console.log("time the user put, after setHours, is: ");
            console.log($scope.formData.duedate);

            if($scope.formData.duedate < toda){
              // 1) the duedate is before today
                $scope.formData.priority = "Overdue";
                console.log("it's less");
            } else {
              // if(($scope.formData.duedate === toda) || ($scope.formData.duedate === tomor)){
              if($scope.formData.duedate < dayaf){
                //2) the duedate is today or tomorrow
                $scope.formData.priority = "Imminent";
              } else {
                // 3) anything else
                $scope.formData.priority = "Normal";
              }
            }
           

            // call the create function from our service (returns a promise object)
            Todos.create($scope.formData)
            
                // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.formData = {}; // clear the form fields so our user is ready to enter another
                    $scope.todos = data; // assign our new list of todos
                });
        }
      }

      $scope.deleteItem = function (id){

        Todos.delete(id)
          // if successful creation, call our get function to get all the new todos
          .success(function(data) {
          $scope.todos = data; // assign our new list of todos
        });    
      }

      $scope.completeItem = function (id){
        console.log("we're in completeItem now!!!");
        //console.log($scope.todos._id.duedate);
        Todos.patch(id)
          .success(function(data){
          $scope.todos = data;
        })
      }

    });


    function changeTab(index)
    {
      console.log("changeTab");
    switch(index)
    {
    case 1:
      document.getElementById("all_list_wrapper").style.display = "block";
      document.getElementById("active_list_wrapper").style.display = "none";
      document.getElementById("complete_list_wrapper").style.display = "none";
      document.getElementById("new_list_wrapper").style.display = "none";
      break;
    case 2:
      document.getElementById("all_list_wrapper").style.display = "none";
      document.getElementById("active_list_wrapper").style.display = "block";
      document.getElementById("complete_list_wrapper").style.display = "none";
      document.getElementById("new_list_wrapper").style.display = "none";
      break;
    case 3:
      document.getElementById("all_list_wrapper").style.display = "none";
      document.getElementById("active_list_wrapper").style.display = "none";
      document.getElementById("complete_list_wrapper").style.display = "block";
      document.getElementById("new_list_wrapper").style.display = "none";
      break;
    case 4:   
      document.getElementById("all_list_wrapper").style.display = "none";
      document.getElementById("active_list_wrapper").style.display = "none";
      document.getElementById("complete_list_wrapper").style.display = "none";
      document.getElementById("new_list_wrapper").style.display = "block";
      
      //make the css changes here still so that we actually see a new tab...
      break;
    default:;
    }
}