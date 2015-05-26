
	

	login.controller('LoginCtrl', ['$scope', '$rootScope', 'LoginService', 
	                               function ($scope, $rootScope, LoginService) { //Inyecta los atributos

		var self = this;
		self.hola=function(){
			alert("hola");
		};
		self.login = function(username, password){
			LoginService.retrieveUser(username, password)
			.success(function (data) {

				createCookie("LoginLivegoal",username);
				if(data.usuario.rol == 1)
				{
					window.location.href="http://localhost:8080/Livegoal/html/admin/gestionarEquipos.html";
				}
				else if (data.usuario.rol == 0){
					window.location.href="http://localhost:8080/Livegoal/html/index.html";
				}
				}).error(function(data){
				$scope.loginForm.password.$setValidity("password", false);
			});
		};


self.create = function (nombre,apellidos,email,username,password) {			
		LoginService.create(nombre,apellidos,email,username,password)
		.success(function (data) {
			$scope.username = data.usuario.username;
			$scope.password = data.usuario.password;
			document.getElementById('usuarioCreado').innerHTML ='<div style="color:green">Usuario Creado, ya puedes logear<br><div>';
			debugger;
		}).error(function(data){
			document.getElementById('usuarioCreado').innerHTML ='<div style="color:red">Usuario no Creado, es posible que el usuario ya exista<br><div>';
		});;
		$('#create').modal('hide');
		
		debugger;
};


	}]);
	


	//FUNCION SERVICIOS WEB
	login.service('LoginService', ['$http', function($http) {
		this.retrieveUser = function(username, password) {
			var url = login.baseURI + username+"/"+password;
			return $http.get(url);
		};


		this.create = function(nombre,apellidos,email,username,password) {
		dato = {'usuario': {'nombre': nombre, 'apellidos': apellidos, 'email': email,'username': username, 'password': password,'estado':1,'rol':0}};
		
		var url = login.baseURI + username;
		debugger;
		return $http.post(url, dato);
		
	}
	}]);
