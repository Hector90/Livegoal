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

var partidos = angular.module("partidos", []); 
partidos.controller('PartidosCtrl', ['$scope', 'PartidosService', 
                                 function ($scope, PartidosService) { //Inyecta los atributos
	partidos.baseURI = 'http://localhost:8080/Livegoal/partidos/';

	var self = this;
	
	$scope.username = loged;
	$scope.activo = 0; 
	
	var equipo=getVariable("equipo");
	var liga=getVariable("liga");
	var pais=getVariable("pais");
	
	
	
	
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
		debugger;
		if(equipo!=null && equipo!=false){
		
		debugger;
		for (var x=0;x<$scope.partidos.length;x++){
			if(equipo==$scope.partidos[x].equipo1.nombre || equipo==$scope.partidos[x].equipo2.nombre ){
				$scope.aux[x]=$scope.partidos[x];
			}
		}
		$scope.partidos=$scope.aux;
		}
	
	});
	


	self.retrieveContact = function(nombre1,nombre2) {
	
		window.location.href="http://localhost:8080/Livegoal/html/detalles.html?e1="+nombre1+"&e2="+nombre2;	
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


}]);
