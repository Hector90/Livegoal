var loged=readCookie("LoginLivegoal");


var paises = angular.module("paises", []); 
paises.controller('PaisesCtrl', ['$scope', 'PaisesService', 
                                 function ($scope, PaisesService) { //Inyecta los atributos
	paises.baseURI = 'http://localhost:8080/Livegoal/paises/';

	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 
	


	$scope.paises = PaisesService.retrieveAll()
	.success(function(data){
		$scope.paises = data.pais;	
	});
	


	self.retrieveContact = function(nombre) {
	
		window.location.href="http://localhost:8080/Livegoal/html/index.html?pais="+nombre;	
	};


}]);



paises.service('PaisesService', ['$http', function($http) {

	this.retrieveAll = function() {
		var url = paises.baseURI;
		
		return $http.get(url);
	}
	



}]);
