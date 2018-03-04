angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/employee', {
            templateUrl: 'views/employee/list.html',
            controller: 'EmployeeController'
        })
        .when('/employee/create', {
            templateUrl: 'views/employee/create.html',
            controller: 'EmployeeController'
        })
        .when('/student', {
            templateUrl: 'views/student/list.html',
            controller: 'StudentController'
        })
        .when('/Teacher', {
            templateUrl: 'views/Teacher/list.html',
            controller: 'TeacherController'
        })



    $locationProvider.html5Mode(true);

}]);
