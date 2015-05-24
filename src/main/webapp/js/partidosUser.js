var loged=readCookie("LoginLivegoal");
//if(loged==="admin"){
	

var partidos = angular.module("partidos", []); 
partidos.controller('PartidosCtrl', ['$scope', 'PartidosService', 
                                 function ($scope, PartidosService) { //Inyecta los atributos
	partidos.baseURI = 'http://localhost:8080/Livegoal/partidos/';

	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 
	
self.buscarPorFecha = function(){
	PartidosService.retrieveAllFecha($scope.SelectedDate)
	.success(function(data){
		$scope.partidos = data.partido;	
	});
}

	self.ChangeActivo = function(x) {
		$scope.activo=x;
		PartidosService.retrieveAll(x)
		.success(function(data){
			$scope.partidos = data.partido;	
		});
	};



	$scope.partidos = PartidosService.retrieveAll($scope.activo)
	.success(function(data){
		$scope.partidos = data.partido;	
	});


	self.retrieveContact = function(nombre) {
		PartidosService.retrieveContact(nombre)
		.success(function(data) {
				//window.location.

		});
	};


}]);




partidos.service('PartidosService', ['$http', function($http) {

	this.retrieveAll = function(activo) {
		var url = partidos.baseURI+"estado/"+activo;
		
		return $http.get(url);
	}
	
	this.retrieveAllFecha = function(fecha) {
		var url = partidos.baseURI+"fecha/"+fecha;
		return $http.get(url);
	}

	this.retrieveContact = function(nombre) {
		var url = partidos.baseURI + nombre;
		
		return $http.get(url);
	}


}]);
//}else{
//	window.location.href="http://localhost:8080/Livegoal/html/index.html";	
//}