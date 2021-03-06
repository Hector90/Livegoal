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
	});
	


	self.retrieveContact = function(nombre1,nombre2) {
	
		window.location.href="http://localhost:8080/Livegoal/html/detalles.html?e1="+nombre1+"&e2="+nombre2;	
	};
	
	$scope.filtrados = PartidosService.filtrados()
	.success(function(data){
		
		$scope.filtrados = data.partido;	
		$scope.aux=[];
		var x;
		var i=0;
		if(equipo!=null && equipo!=false){
			document.getElementById('cabe').innerHTML = '';
			document.getElementById('elementosP').innerHTML = '<h4>Partidos del '+equipo+'</h4>';
		for (x=0;x<$scope.filtrados.length;x++){
			
			if(equipo==$scope.filtrados[x].equipo1.nombre || equipo==$scope.filtrados[x].equipo2.nombre ){
				$scope.aux[i]=$scope.filtrados[x];					
				i=i+1;
			}
			
		}
		$scope.partidos=$scope.aux;
		}else if(liga!=null && liga!=false){
			document.getElementById('cabe').innerHTML = '';
			document.getElementById('elementosP').innerHTML = '<h4>Partidos de la liga '+liga+'</h4>';
		for (x=0;x<$scope.filtrados.length;x++){
			if(liga==$scope.filtrados[x].liga.nombre || liga==$scope.filtrados[x].liga.nombre ){
				$scope.aux[i]=$scope.filtrados[x];					
				i=i+1;
			}
			
		}
		$scope.partidos=$scope.aux;
		}else if(pais!=null && pais!=false){
			document.getElementById('cabe').innerHTML = '';
			document.getElementById('elementosP').innerHTML = '<h4>Partidos de '+pais+'</h4>';
		for (x=0;x<$scope.filtrados.length;x++){
			
			if(pais==$scope.filtrados[x].equipo1.pais.nombre || pais==$scope.filtrados[x].equipo2.pais.nombre ){
				$scope.aux[i]=$scope.filtrados[x];					
				i=i+1;
			}
			
		}
		$scope.partidos=$scope.aux;
		debugger;
		}
	
	});
	
}]);




partidos.service('PartidosService', ['$http', function($http) {

	this.retrieveAll = function(activo) {
		var url = partidos.baseURI+"estado/"+activo;
		
		return $http.get(url);
	}
	
	
	this.filtrados = function() {
		var url = partidos.baseURI;
		return $http.get(url);
	}
	this.retrieveAllFecha = function(fecha) {
		var url = partidos.baseURI+"fecha/"+fecha;
		return $http.get(url);
	}


}]);
