var loged=readCookie("LoginLivegoal");


var ligas = angular.module("ligas", []); 
ligas.controller('LigasCtrl', ['$scope', 'LigasService', 
                                 function ($scope, LigasService) { //Inyecta los atributos
	ligas.baseURI = 'http://localhost:8080/Livegoal/ligas/';

	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 
	


	$scope.ligas = LigasService.retrieveAll()
	.success(function(data){
		$scope.ligas = data.liga;	
	});
	


	self.retrieveContact = function(nombre) {
	
		window.location.href="http://localhost:8080/Livegoal/html/index.html?liga="+nombre;	
	};


}]);



ligas.service('LigasService', ['$http', function($http) {

	this.retrieveAll = function() {
		var url = ligas.baseURI;
		return $http.get(url);
	}
	



}]);
