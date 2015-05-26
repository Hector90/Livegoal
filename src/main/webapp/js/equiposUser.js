var loged=readCookie("LoginLivegoal");


var equipos = angular.module("equipos", []); 
equipos.controller('EquiposCtrl', ['$scope', 'EquiposService', 
                                 function ($scope, EquiposService) { //Inyecta los atributos
	equipos.baseURI = 'http://localhost:8080/Livegoal/equipos/';

	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 
	


	$scope.equipos = EquiposService.retrieveAll()
	.success(function(data){
		$scope.equipos = data.equipo;	
	});
	


	self.retrieveContact = function(nombre) {
	
		window.location.href="http://localhost:8080/Livegoal/html/index.html?equipo="+nombre;	
	};


}]);



equipos.service('EquiposService', ['$http', function($http) {

	this.retrieveAll = function() {
		var url = equipos.baseURI;
		return $http.get(url);
	}
	



}]);
