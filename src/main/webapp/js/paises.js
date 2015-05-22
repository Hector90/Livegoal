var loged=readCookie("LoginLivegoal");
//if(loged==="admin"){
	

var paises = angular.module("paises", []); 
paises.controller('PaisesCtrl', ['$scope', 'PaisesAService', 
                                 function ($scope, PaisesAService) { //Inyecta los atributos
	paises.baseURI = 'http://localhost:8080/Livegoal/paises/';

	var self = this;
	
	//$scope.username = 
	  
	

	$scope.resetForm = function(user){ 
		var defaultForm = {
				nombre:"", bandera:"", abreviatura:""
		};
		$scope.createForm.$setPristine();
		$scope.user = defaultForm;
	};


//	Comprueba en tiempo real si el pais introducido ya existe
	$scope.comprobar = function(nombre){

		PaisesAService.retrieveContact(nombre).success(function(data){
			$scope.createForm.nombre.$setValidity("nombre", false);
			$scope.updateForm.nombreU.$setValidity("nombreU", false);
		}).error(function(){
			$scope.createForm.nombre.$setValidity("nombre", true);
			$scope.updateForm.nombreU.$setValidity("nombreU", true);
		});
	};

	
	$scope.paises = PaisesAService.retrieveAll()
	.success(function(data){
		$scope.paises = data.pais;	
	});
	self.create = function (nombre,bandera,abreviatura) {			
			PaisesAService.create(nombre,bandera,abreviatura)
			.success(function (data) {
				//borraCampos($scope);
				PaisesAService.retrieveAll()
				.success(function (data) {
					$scope.paises = data.pais;
					$scope.createForm.$setPristine(); 
				});
			});
			$('#create').modal('hide');
	};


	self.retrieveContact = function(nombre) {
		PaisesAService.retrieveContact(nombre)
		.success(function(data) {
			
			$scope.CurrentPais = data.pais;

		});
	};

	self.update = function() {
		PaisesAService.update($scope.CurrentPais)
			.success(function(data) {
				PaisesAService.retrieveAll()
				.success(function (data) {
					$scope.paises = data.pais;

				});
				$('#actualizar').modal('hide');
			});

	};
	self.remove=function(nombre){
		PaisesAService.remove(nombre)
		.success(function(data) {
			PaisesAService.retrieveAll()
			.success(function (data) {
				$scope.paises = data.pais;

			});
			
		});
	};
	

}]);



//FUNCION SERVICIOS WEB PAISES
paises.service('PaisesAService', ['$http', function($http) {

	this.create = function(nombre,bandera,abreviatura) {
		dato = {'pais': {'nombre': nombre, 'bandera': bandera, 'abreviatura': abreviatura}};
		
		var url = paises.baseURI + nombre;
		return $http.post(url, dato);
	}

	this.retrieveAll = function() {
		var url = paises.baseURI;
		return $http.get(url);
	}
	
	
	

	this.retrieveContact = function(nombre) {
		var url = paises.baseURI + nombre;
		
		return $http.get(url);
	}

	this.remove = function(nombre){
		var url = paises.baseURI + nombre;
		return $http.delete(url);
	}
	
	this.update = function (pais, antiguo) {
		var url = paises.baseURI +"actualizar/" + antiguo;
		dato = {'pais': pais};
		return $http.put(url, dato);
	};
}]);
//}else{
//	window.location.href="http://localhost:8080/Livegoal/html/index.html";	
//}