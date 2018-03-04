angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List 2";
    $scope.description = "test Description for Teacher";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Poxos",
            LastName:"Teacher",
            Email:"Teacher@gmail.com",
        },
        {
            FirstName:"Petros",
            LastName:"Teacher",
            Email:"Teacher@gmail.com",
        }
    ];
});