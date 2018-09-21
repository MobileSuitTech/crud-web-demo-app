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



      // when landing on the page, get all todos and show them
      // use the service to get all the todos
      Todos.get()
          .success(function(data) {
              $scope.todos = data;
          });


      $scope.addItem = function () {

        if (!$.isEmptyObject($scope.formData)) {

            $scope.formData.duedate.setHours(0,0,0,0);
            // set the priority field of the task
            if($scope.formData.duedate < toda){
              // duedate is before today
                $scope.formData.priority = "Overdue";
            } else {
              if($scope.formData.duedate < dayaf){
              // duedate is today or tomorrow
                $scope.formData.priority = "Imminent";
              } else {
                // anything else
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
        Todos.patch(id)
          .success(function(data){
          $scope.todos = data;
        });
      }


    $scope.runDemo = function (){

      var lsweek = new Date();
      lsweek.setDate(lsweek.getDate() - 7);
      lsweek.setHours(0,0,0,0);
      var nxweek = new Date();
      nxweek.setDate(nxweek.getDate() + 7);
      nxweek.setHours(0,0,0,0);

      $scope.formData.text = "some old overdue task";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = lsweek;
      $scope.formData.priority = "Overdue";
      $scope.addItem();
      $scope.formData = {};

      $scope.formData.text = "a late task";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = yester;
      $scope.formData.priority = "Overdue";
      $scope.addItem();
      $scope.formData = {};

      $scope.formData.text = "today's task";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = toda;
      $scope.formData.priority = "Imminent";
      $scope.addItem();
      $scope.formData = {};

      $scope.formData.text = "a task for tomorrow";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = tomor;
      $scope.formData.priority = "Imminent";
      $scope.addItem();
      $scope.formData = {};

      $scope.formData.text = "some task in 2 days";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = dayaf;
      $scope.formData.priority = "Normal";
      $scope.addItem();
      $scope.formData = {};

      $scope.formData.text = "a task due next week";
      $scope.formData.desc = "dummy description";
      $scope.formData.duedate = nxweek;
      $scope.formData.priority = "Normal";
      $scope.addItem();
      $scope.formData = {};

      console.log("clicked");
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
      break;
    default:;
    }

}