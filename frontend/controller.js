var projektApp = angular.module('projektApp', []);


// STWORZENIE DOMYŚLNEJ LISTY ZADAŃ

var tasks = [
    {name: "zrobic zakupy", done: false},
    {name: "posprzatac dom", done: true},
    {name: "wyprowadzic psa", done: false}
];

// STWORZENIE KONTROLERA

projektApp.controller("projektCtrl", function ($scope) {

// UDOSTĘPNIENIE ELEMENTÓW Z LISTY tasks DO WIDOKU

    $scope.zadania = tasks;
    //$scope.added = "";

//FUNKCJA UMOŻLIWIAJĄCA DODANIE ZADANIA DO LISTY

    $scope.dodajZadanie = function () {
        if ($scope.added.length !== 0) {
            $scope.zadania.push({name: $scope.added});
        }
    };

//FUNKCJA UMOŻLIWIAJĄCA USUNIĘCIE ZADANIA Z LISTY

    $scope.usunZadanie = function (zadanie) {
        var index = $scope.zadania.indexOf(zadanie);
        $scope.zadania.splice(index, 1);
    }
});
