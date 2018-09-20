var EVerifyModule = angular.module('EVerifyModule', ['angularFileUpload', 'ui.bootstrap', 'angularUtils.directives.dirPagination']);

EVerifyModule.controller('EVerifyController', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {

       var EmployeeInfo = [ {
        "name": "Daniel Cho",
        "hireDate": "03/11/2016",
        "responseDate": "03/01/2016",
        "submitDate": "03/12/2016",
        "authStatus": "Authorized",
        "caseSatus": "Closed",
        "phone": "+1 (213) 382-1115",
        "authorized": true
    }
];

       $scope.EmployeeInfo = EmployeeInfo;

        angular.element(document).ready(function () {
            initConfigurationClosedCases();
            showOptionsMenu('J', 'Jobs', 'glyphicon glyphicon-th-list');
        });

        function initConfigurationClosedCases() {
            sessionStorage.ModuleSelected = 'Closed Cases';
            LoadMenuInformation();
        }

        $scope.sortdata = function (keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }

        $scope.dateRangeFilter = function (property, startDate, endDate) {
            return function (item) {
                if (item[property] === null) return false;

                var itemDate = moment(item[property]);
                var s = moment(startDate, "DD-MM-YYYY");
                var e = moment(endDate, "DD-MM-YYYY");

                if (itemDate >= s && itemDate <= e) return true;
                return false;
            }
        }
}]);