var loged=readCookie("LoginLivegoal");
if(loged==="admin"){
	

var ligas = angular.module("ligas", []); 
ligas.controller('LigasCtrl', ['$scope', 'LigasAService', 
                                 function ($scope, LigasAService) { //Inyecta los atributos
	ligas.baseURI = 'http://localhost:8080/Livegoal/ligas/';

	var self = this;
	
	$scope.username = loged;
	  
	

	$scope.resetForm = function(user){ 
		var defaultForm = {
				nombre:"",  pais:{}
		};
		$scope.createForm.$setPristine();
		$scope.user = defaultForm;
	};


//	Comprueba en tiempo real si la liga introducido ya existe
	$scope.comprobar = function(nombre){

		LigasAService.retrieveContact(nombre).success(function(data){
			$scope.createForm.nombre.$setValidity("nombre", false);
			$scope.updateForm.nombreU.$setValidity("nombreU", false);
		}).error(function(){
			$scope.createForm.nombre.$setValidity("nombre", true);
			$scope.updateForm.nombreU.$setValidity("nombreU", true);
		});
	};

	
	

	



	$scope.ligas = LigasAService.retrieveAll()
	.success(function(data){
		$scope.ligas = data.liga;	
	});
	$scope.paises = LigasAService.retrieveAllPaises()
	.success(function(data){
		$scope.paises = data.pais;	
	});
	self.create = function (nombre,pais) {			
			LigasAService.create(nombre,pais)
			.success(function (data) {
				LigasAService.retrieveAll()
				.success(function (data) {
					$scope.ligas = data.liga;
					$scope.createForm.$setPristine(); 
				});
			});
			$('#create').modal('hide');
	};


	self.retrieveContact = function(nombre) {
		LigasAService.retrieveContact(nombre)
		.success(function(data) {
			$scope.nombreUpdate=nombre;
			$scope.CurrentLiga = data.liga;

		});
	};

	self.update = function() {
		for (var x=0;x<$scope.paises.length;x++){
			if($scope.CurrentLiga.pais.nombre==$scope.paises[x].nombre){
				$scope.CurrentLiga.pais=$scope.paises[x];
			}
		}
		LigasAService.update($scope.CurrentLiga,$scope.nombreUpdate)
			.success(function(data) {
				LigasAService.retrieveAll()
				.success(function (data) {
					$scope.ligas = data.liga;

				});
				$('#actualizar').modal('hide');
			});

	};
	self.remove=function(nombre){
		LigasAService.remove(nombre)
		.success(function(data) {
			LigasAService.retrieveAll()
			.success(function (data) {
				$scope.ligas = data.liga;

			});
			
		});
	};
	

}]);



//FUNCION SERVICIOS WEB LIGAS
ligas.service('LigasAService', ['$http', function($http) {

	this.create = function(nombre,pais) {
		dato = {'liga': {'nombre': nombre,  'pais': pais}};

		
		var url = ligas.baseURI + nombre;
		return $http.post(url, dato);
	}

	this.retrieveAll = function() {
		var url = ligas.baseURI;
		return $http.get(url);
	}
	
	this.retrieveAllPaises = function() {
		var url = 'http://localhost:8080/Livegoal/paises/';
		return $http.get(url);
	}
	

	this.retrieveContact = function(nombre) {
		var url = ligas.baseURI + nombre;
		
		return $http.get(url);
	}

	this.remove = function(nombre){
		var url = ligas.baseURI + nombre;
		return $http.delete(url);
	}
	


	this.update = function (liga,antiguo) {
		var url = ligas.baseURI +"actualizar/" + antiguo;
		dato = {'liga': liga};
		return $http.put(url, dato);
	};
}]);
}else{
	window.location.href="http://localhost:8080/Livegoal/html/index.html";	
}