var loged=readCookie("LoginLivegoal");

function getVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}	

var detalles = angular.module("detalles", ['angular-input-stars']); 
detalles.controller('detallesCtrl', ['$scope', 'detallesService', 'ComentariosService' ,
                                 function ($scope, detallesService) { //Inyecta los atributos
	detalles.baseURI = 'http://localhost:8080/Livegoal/partidos/';
	detalles.baseURIC = 'http://localhost:8080/Livegoal/comentarios/';
	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 

	var nombre1=getVariable("e1");

	$scope.partido = detallesService.retrieve("Barcelona","Madrid")
	.success(function(data){
		$scope.partido = data.partido;	
	});




}]);




detalles.service('detallesService', ['$http', function($http) {

	this.retrieve = function(nombre1,nombre2) {
		var url = detalles.baseURI+nombre1+"/"+nombre2;
		
		return $http.get(url);
	}

}]);

//	FUNCION SERVICIOS WEB Comentarios


	detalles.service('ComentariosService', ['$http', function($http) {

		this.retrieveAll = function(idPartido) {
			var url = detalles.baseURIC + "P/"+idPartido;
			return $http.get(url);
		};


		this.create = function(idPartido,nombreU,contenido,puntuacion) {
			dato = {'comentario': {'idPartido': idPartido, 'nombreU': nombreU, 'contenido': contenido, 
				'puntuacion':puntuacion}};

			var url = detalles.baseURIC + idPartido;
			return $http.put(url, dato);
		};

		this.remove = function(id) {
			var url = detalles.baseURIC + id;
			return $http["delete"](url);
		};


	}]);
