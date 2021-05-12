const URL = "https://covid19.mathdro.id/api";

var app = angular.module("myapp",[]);
app.controller('myctrl',function($scope,$http){
    $scope.title = "Stay Home Stay Safe";
    $http.get(URL).then(function(response){
        console.log(response.data);
        $scope.all_data = response.data;
    },function(error){
        console.log(error);
    });
    $scope.get_c_data = function(){
        var country = $scope.c;
        if (country==''){
            $scope.c_data=undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`).then(function(response){
            console.log(response.data);
            $scope.c_data=response.data;
        }
        ,function(error){
            console.log(error);
        });
    };
});