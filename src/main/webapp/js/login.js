
	

	login.controller('LoginCtrl', ['$scope', '$rootScope', 'LoginService', 
	                               function ($scope, $rootScope, LoginService) { //Inyecta los atributos

		var self = this;
	
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
	
	}]);
	


	//FUNCION SERVICIOS WEB
	login.service('LoginService', ['$http', function($http) {
		this.retrieveUser = function(username, password) {
			var url = login.baseURI + username+"/"+password;
			return $http.get(url);
		};

	}]);
