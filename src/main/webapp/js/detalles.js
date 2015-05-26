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
detalles.controller('detallesCtrl', ['$scope', 'detallesService', 'detallesService' ,
                                 function ($scope, detallesService) { //Inyecta los atributos
	detalles.baseURI = 'http://localhost:8080/Livegoal/partidos/';
	detalles.baseURIC = 'http://localhost:8080/Livegoal/comentarios/';
	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 

	var nombre1=getVariable("e1");
	var nombre2=getVariable("e2");
	$scope.partido = detallesService.retrieve(nombre1,nombre2)
	.success(function(data){
		$scope.partido = data.partido;	


$scope.comentarios = detallesService.retrieveAllC($scope.partido.id).success(function(data){
					$scope.comentarios=data.comentario;



					CalcularMedia = function(){
						var total = 0;
						for (var i = 0; i < $scope.comentarios.length; i++) {
							total = total + $scope.comentarios[i].puntuacion;
						}
						$scope.pMedia = total/i;
					};
					CalcularMedia();

				});

				self.createComent = function (contenido,puntuacion) {
					
					if ($scope.username === undefined || $scope.username==="") {
						alert("Registrate para comentar este partido");
						}else{
						
						detallesService.createC($scope.partido.id,$scope.username,contenido,puntuacion)
						.success(function (data) {
							debugger
							detallesService.retrieveAllC($scope.partido.id)
							.success(function (data) {
								$scope.comentarios = data.comentario;
								$scope.comentarForm.$setPristine(); 
								document.getElementById("comentarCont").value="";
	
	
							});
						});
						}
					};
				debugger;
				self.deleteComent = function (id) {
					detallesService.removeC(id)
					.success(function (data) {
						detallesService.retrieveAllC()
						.success(function (data) {
							$scope.comentarios = data.comentario;
						});
					});
				};
//				/ fin comentarios      

	});
}]);




detalles.service('detallesService', ['$http', function($http) {

	this.retrieve = function(nombre1,nombre2) {
		var url = detalles.baseURI+nombre1+"/"+nombre2;
		
		return $http.get(url);
	}
	
	this.retrieveAllC = function(idPartido) {
			var url = detalles.baseURIC + "P/"+idPartido;
			return $http.get(url);
		};


		this.createC = function(idPartido,nombreU,contenido,puntuacion) {
			dato = {'comentario': {'idPartido': idPartido, 'nombreU': nombreU, 'contenido': contenido, 
				'puntuacion':puntuacion}};

			var url = detalles.baseURIC + idPartido;
			return $http.put(url, dato);
		};

		this.removeC = function(id) {
			var url = detalles.baseURIC + id;
			return $http["delete"](url);
		};

}]);

