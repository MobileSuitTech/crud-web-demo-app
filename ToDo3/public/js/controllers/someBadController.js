// js/controllers/ListController.js
angular.module('todoController', [])
    
    $scope.startDate = new Date(2015, 10, 10);
    $scope.endDate = new Date(2015, 10, 31);
    
    .filter('dateRange', function() {
      return function(input, startDate, endDate) {
    
        var retArray = [];
    
        angular.forEach(input, function(obj){
          var duedateObj = obj.duedate;
      
          if(duedateObj >= startDate && duedateObj <= endDate) {
            retArray.push(obj);     
          }
        }); 
    
        return retArray; 
      };
    });

    .controller('ListController', function($scope, $http, Todos) 
    {
      $scope.formData = {};

      var yester = new Date().getDate() - 1;
      console.log("the date of yesterday is " + yester);
      var toda = new Date().getDate();
      var tomor = new Date().getDate() +1;

      // $scope.yestDate = new Date();
      // $scope.yestDate = yester;
      // $scope.todDate = new Date().getDate();
      // // $scope.todDate = toda;
      // $scope.tomDate = new Date().getDate();
      // $scope.tomDate = tomor;



      
      // when landing on the page, get all todos and show them
      // use the service to get all the todos
      Todos.get()
          .success(function(data) {
              $scope.todos = data;
          });

      $scope.addItem = function () {

        if (!$.isEmptyObject($scope.formData)) {
            console.log('something happened');
            console.log('the date was: ' + $scope.formData.duedate);
            console.log("now let's try to see what .getTime() shows us...");
            console.log('the date was: ' + $scope.formData.duedate.getTime());

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