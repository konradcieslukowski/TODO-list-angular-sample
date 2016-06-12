var projektApp = angular.module('projektApp', []);


var tasks = [
    {name: "zrobic zakupy", done: false},
    {name: "posprzatac dom", done: true},
    {name: "wyprowadzic psa", done: false}
];

projektApp.controller("projektCtrl", function ($scope) {


    $scope.zadania = tasks;
    //$scope.added = "";

    $scope.dodajZadanie = function () {
        if ($scope.added.length !== 0) {
            $scope.zadania.push({name: $scope.added});
        }
    };


    $scope.usunZadanie = function (zadanie) {
        var index = $scope.zadania.indexOf(zadanie);
        $scope.zadania.splice(index, 1);
    }
});