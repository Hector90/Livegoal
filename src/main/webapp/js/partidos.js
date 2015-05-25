var loged=readCookie("LoginLivegoal");
//if(loged==="admin"){
	

var partidos = angular.module("partidos", []); 
partidos.controller('PartidosCtrl', ['$scope', 'PartidosAService', 
                                 function ($scope, PartidosAService) { //Inyecta los atributos
	partidos.baseURI = 'http://localhost:8080/Livegoal/partidos/';

	var self = this;
	
	$scope.username = loged;
	  
	

	$scope.resetForm = function(user){ 
		var defaultForm = {
				nombre:"", amarillas1:"", amarillas2:"", estado:"",fecha:"" ,
				goles1:"",goles2:"",jornada:"",rojas1:"",rojas2:"",equipo1:{},
				equipo2:{},liga:{}
		};
		$scope.createForm.$setPristine();
		$scope.user = defaultForm;
	};

	$scope.equipos = PartidosAService.retrieveAllEquipos()
	.success(function(data){
		$scope.equipos = data.equipo;	
	});

	$scope.ligas = PartidosAService.retrieveAllLigas()
	.success(function(data){
		$scope.ligas = data.liga;	

	});



	$scope.partidos = PartidosAService.retrieveAll()
	.success(function(data){
		$scope.partidos = data.partido;	
	});

	self.create = function (e1,e2,amarillas1,amarillas2,estado,fecha,
	goles1,goles2,jornada,rojas1,rojas2,equipo1,equipo2,liga) {			
			PartidosAService.create(e1,e2,amarillas1,amarillas2,estado,fecha,
			goles1,goles2,jornada,rojas1,rojas2,equipo1,equipo2,liga)
			.success(function (data) {
				PartidosAService.retrieveAll()
				.success(function (data) {
					$scope.partidos = data.partido;
					$scope.createForm.$setPristine(); 
				});
			});
			$('#create').modal('hide');
	};


	self.retrieveContact = function(nombre1,nombre2) {
		PartidosAService.retrieveContact(nombre1,nombre2)
		.success(function(data) {
			$scope.nombre1Update=nombre1;
			$scope.nombre2Update=nombre2;
			$scope.CurrentPartido = data.partido;

		});
	};

	self.update = function() {
//		for (var x=0;x<$scope.paises.length;x++){
//			if($scope.CurrentPartido.pais.nombre==$scope.paises[x].nombre){
//				$scope.CurrentPartido.pais=$scope.paises[x];
//			}
//		}
		PartidosAService.update($scope.CurrentPartido,$scope.nombre1Update,$scope.nombre2Update)
			.success(function(data) {
				PartidosAService.retrieveAll()
				.success(function (data) {
					$scope.partidos = data.partido;

				});
				$('#actualizar').modal('hide');
			});

	};
	self.remove=function(id){
		PartidosAService.remove(id)
		.success(function(data) {
			PartidosAService.retrieveAll()
			.success(function (data) {
				$scope.partidos = data.partido;

			});
			
		});
	};
	

}]);



//FUNCION SERVICIOS WEB EQUIPOS
partidos.service('PartidosAService', ['$http', function($http) {

	this.create = function(e1,e2,amarillas1,amarillas2,estado,fecha,
	goles1,goles2,jornada,rojas1,rojas2,equipo1,equipo2,liga) {
		dato = {'partido': {"equipo1":e1,"equipo2":e2,"amarillas1":amarillas1,"amarillas2":amarillas2,"estado":estado,"fecha":fecha,
		"goles1":goles1,"goles2":goles2,"jornada":jornada,"rojas1":rojas1,"rojas2":rojas2,"equipo1":equipo1,"equipo2":equipo2,"liga":liga}};

		
		var url = partidos.baseURI + e1.nombre+"/"+e2.nombre;
		debugger;
		return $http.post(url, dato);
	}

	this.retrieveAll = function() {
		var url = partidos.baseURI;
		return $http.get(url);
	}
	
	this.retrieveAllLigas = function() {
		var url = 'http://localhost:8080/Livegoal/ligas/';
		return $http.get(url);
	}
	
		this.retrieveAllEquipos = function() {
		var url = 'http://localhost:8080/Livegoal/equipos/';
		return $http.get(url);
	}
	
	this.retrieveContact = function(nombre) {
		var url = partidos.baseURI + nombre;
		
		return $http.get(url);
	}

	this.remove = function(id){
		var url = partidos.baseURI + id;
		return $http.delete(url);
	}
	


	this.update = function (partido,antiguo) {
		var url = partidos.baseURI +"actualizar/" + antiguo;
		dato = {'partido': partido};
		return $http.put(url, dato);
	};
}]);
//}else{
//	window.location.href="http://localhost:8080/Livegoal/html/index.html";	
//}