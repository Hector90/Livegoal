var loged=readCookie("LoginLivegoal");
//if(loged==="admin"){
	

var equipos = angular.module("equipos", []); 
equipos.controller('EquiposCtrl', ['$scope', 'EquiposAService', 
                                 function ($scope, EquiposAService) { //Inyecta los atributos
	equipos.baseURI = 'http://localhost:8080/Livegoal/equipos/';

	var self = this;
	
	//$scope.username = 
	  
	

	$scope.resetForm = function(user){ 
		var defaultForm = {
				nombre:"", escudo:"", pais:{}, aficionados:""
		};
		$scope.createForm.$setPristine();
		$scope.user = defaultForm;
	};


//	Comprueba en tiempo real si el equipo introducido ya existe
	$scope.comprobar = function(nombre){

		EquiposAService.retrieveContact(nombre).success(function(data){
			$scope.createForm.nombre.$setValidity("nombre", false);
			$scope.updateForm.nombreU.$setValidity("nombreU", false);
		}).error(function(){
			$scope.createForm.nombre.$setValidity("nombre", true);
			$scope.updateForm.nombreU.$setValidity("nombreU", true);
		});
	};

	
	

	



	$scope.equipos = EquiposAService.retrieveAll()
	.success(function(data){
		$scope.equipos = data.equipo;	
	});
	$scope.paises = EquiposAService.retrieveAllPaises()
	.success(function(data){
		$scope.paises = data.pais;	
	});
	self.create = function (nombre,escudo,pais, aficionados) {			
			EquiposAService.create(nombre,escudo,pais, aficionados)
			.success(function (data) {
				EquiposAService.retrieveAll()
				.success(function (data) {
					$scope.equipos = data.equipo;
					$scope.createForm.$setPristine(); 
				});
			});
			$('#create').modal('hide');
	};


	self.retrieveContact = function(nombre) {
		EquiposAService.retrieveContact(nombre)
		.success(function(data) {
			$scope.nombreUpdate=nombre;
			$scope.CurrentEquipo = data.equipo;

		});
	};

	self.update = function() {
		for (var x=0;x<$scope.paises.length;x++){
			if($scope.CurrentEquipo.pais.nombre==$scope.paises[x].nombre){
				$scope.CurrentEquipo.pais=$scope.paises[x];
			}
		}
		EquiposAService.update($scope.CurrentEquipo,$scope.nombreUpdate)
			.success(function(data) {
				EquiposAService.retrieveAll()
				.success(function (data) {
					$scope.equipos = data.equipo;

				});
				$('#actualizar').modal('hide');
			});

	};
	self.remove=function(nombre){
		EquiposAService.remove(nombre)
		.success(function(data) {
			EquiposAService.retrieveAll()
			.success(function (data) {
				$scope.equipos = data.equipo;

			});
			
		});
	};
	

}]);



//FUNCION SERVICIOS WEB EQUIPOS
equipos.service('EquiposAService', ['$http', function($http) {

	this.create = function(nombre,escudo,pais, aficionados) {
		dato = {'equipo': {'nombre': nombre, 'escudo': escudo, 'pais': pais, 'aficionados':aficionados}};
		debugger;
		var url = equipos.baseURI + nombre;
		return $http.post(url, dato);
	}

	this.retrieveAll = function() {
		var url = equipos.baseURI;
		return $http.get(url);
	}
	
	this.retrieveAllPaises = function() {
		var url = 'http://localhost:8080/Livegoal/paises/';
		return $http.get(url);
	}
	

	this.retrieveContact = function(nombre) {
		var url = equipos.baseURI + nombre;
		
		return $http.get(url);
	}

	this.remove = function(nombre){
		var url = equipos.baseURI + nombre;
		return $http.delete(url);
	}
	


	this.update = function (equipo,antiguo) {
		var url = equipos.baseURI +"actualizar/" + antiguo;
		dato = {'equipo': equipo};
		return $http.put(url, dato);
	};
}]);
//}else{
//	window.location.href="http://localhost:8080/Livegoal/html/index.html";	
//}