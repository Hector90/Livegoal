var idSesionAux = -1;
var asientos = [];
var markers = [];
var lalo = [];
var events = [];
var cambio = 0;

//validar email.
function verificaMail(email){	
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if ( !expr.test(email) ){
		return false;
	}else{					
		return true;
	}
}

//validaciones
function valtxtEmail(){
	var email = $("#txtEmail").val();
	if( verificaMail(email)==true ){
		$("#infoEmail").hide();	
		$("#txtEmail").removeClass("error");
		return true;
	}else{
		$("#txtEmail").addClass("error");
		$("#infoEmail").show();
		jQuery("#txtEmail").focus();
		return false;
	}
}
function valtxtPass(){
	if(jQuery("#txtPass").val()!==""){
		$("#infoPass").hide();
		$("#txtPass").removeClass("error");
		return true;
	}else{
		$("#txtPass").addClass("error");
		$("#infoPass").show();
		jQuery("#txtPass").focus();
		return false;
	}
}
function valtxtEdNombre(){
	if(jQuery("#txtEdNombre").val()!==""){
		$("#infoEdNombre").hide();
		$("#txtEdNombre").removeClass("error");
		return true;
	}else{
		$("#txtEdNombre").addClass("error");
		$("#infoEdNombre").show();
		jQuery("#txtEdNombre").focus();
		return false;
	}
}
function valtxtEdDireccion(){
	if(jQuery("#txtEdDireccion").val()!==""){
		$("#infoEdDireccion").hide();
		$("#txtEdDireccion").removeClass("error");
		return true;
	}else{
		$("#txtEdDireccion").addClass("error");
		$("#infoEdDireccion").show();
		jQuery("#txtEdDireccion").focus();
		return false;
	}
}
function valtxtSlNombre(){
	if(jQuery("#txtSlNombre").val()!==""){
		$("#infoSlNombre").hide();
		$("#txtSlNombre").removeClass("error");
		return true;
	}else{
		$("#txtSlNombre").addClass("error");
		$("#infoSlNombre").show();
		jQuery("#txtSlNombre").focus();
		return false;
	}
}
function valtxtEsNombre(){
	if(jQuery("#txtEsNombre").val()!==""){
		$("#infoEsNombre").hide();
		$("#txtEsNombre").removeClass("error");
		return true;
	}else{
		$("#txtEsNombre").addClass("error");
		$("#infoEsNombre").show();
		jQuery("#txtEsNombre").focus();
		return false;
	}
}
function valtxtEsPrecio(){
	if(jQuery("#txtEsPrecio").val()!=="" && !isNaN(jQuery("#txtEsPrecio").val())){
		$("#infoEsPrecio").hide();
		$("#txtEsPrecio").removeClass("error");
		return true;
	}else{
		$("#txtEsPrecio").addClass("error");
		$("#infoEsPrecio").show();
		jQuery("#txtEsPrecio").focus();
		return false;
	}
}
function valtxtEsCartel(){
	if(jQuery("#txtEsCartel").val()!==""){
		$("#infoEsCartel").hide();
		$("#txtEsCartel").removeClass("error");
		return true;
	}else{
		$("#txtEsCartel").addClass("error");
		$("#infoEsCartel").show();
		jQuery("#txtEsCartel").focus();
		return false;
	}
}
function valtxtSeEs(){
	if($( "select#txtSeEs option:selected").val()!=-1){
		$("#infoSeEs").hide();
		$("#txtSeEs").removeClass("error");
		return true;
	}else{
		$("#txtSeEs").addClass("error");
		$("#infoSeEs").show();
		jQuery("#txtSeEs").focus();
		return false;
	}
}
function valtxtSeEd(){
	if($( "select#txtSeEd option:selected").val()!=-1){
		$("#infoSeEd").hide();
		$("#txtSeEd").removeClass("error");
		return true;
	}else{
		$("#txtSeEd").addClass("error");
		$("#infoSeEd").show();
		jQuery("#txtSeEd").focus();
		return false;
	}
}
function valtxtSeSa(){
	if($( "select#txtSeSa option:selected").val()!=-1){
		$("#infoSeSa").hide();
		$("#txtSeSa").removeClass("error");
		return true;
	}else{
		$("#txtSeSa").addClass("error");
		$("#infoSeSa").show();
		jQuery("#txtSeSa").focus();
		return false;
	}
}
function valtxtSeDia1(){
	if(jQuery("#txtSeDia1").val()!==""){
		$("#infoSeDia1").hide();
		$("#txtSeDia1").removeClass("error");
		return true;
	}else{
		$("#txtSeDia1").addClass("error");
		$("#infoSeDia1").show();
		jQuery("#txtSeDia1").focus();
		return false;
	}
}
function valtxtSeDia2(){
	if(jQuery("#txtSeDia2").val()!==""){
		$("#infoSeDia2").hide();
		$("#txtSeDia2").removeClass("error");
		return true;
	}else{
		$("#txtSeDia2").addClass("error");
		$("#infoSeDia2").show();
		jQuery("#txtSeDia2").focus();
		return false;
	}
}
function valtxtSeHora1(){
	if(jQuery("#txtSeHora1").val()!==""){
		$("#infoSeHora1").hide();
		$("#txtSeHora1").removeClass("error");
		return true;
	}else{
		$("#txtSeHora1").addClass("error");
		$("#infoSeHora1").show();
		jQuery("#txtSeHora1").focus();
		return false;
	}
}
function valtxtSeHora2(){
	if(jQuery("#txtSeHora2").val()!==""){
		$("#infoSeHora2").hide();
		$("#txtSeHora2").removeClass("error");
		return true;
	}else{
		$("#txtSeHora2").addClass("error");
		$("#infoSeHora2").show();
		jQuery("#txtSeHora2").focus();
		return false;
	}
}

//perder focus
$("#txtEmail").blur(function() {
	valtxtEmail();
});
$("#txtPass").blur(function() {
	valtxtPass();
});
$("#txtEdNombre").blur(function() {
	valtxtEdNombre();
});
$("#txtEdDireccion").blur(function() {
	valtxtEdDireccion();
});
$("#txtSlNombre").blur(function() {
	valtxtSlNombre();
});
$("#txtEsNombre").blur(function() {
	valtxtEsNombre();
});
$("#txtEsPrecio").blur(function() {
	valtxtEsPrecio();
});
$("#txtEsCartel").blur(function() {
	valtxtEsCartel();
});
$(document).on('change','#txtSeEd',function(eEvento){
	$("#txtSeSa option[value=-1]").attr("selected",true);
	aux = $( "select#txtSeEd option:selected").val();
	
	$('option[class ^= opSa]').hide();
	$('option[class ^= opSa'+aux+']').show();
});
/*
$("#txtSeDia1").blur(function() {
	valtxtSeDia1();
});
$("#txtSeDia2").blur(function() {
	valtxtSeDia2();
});
$("#txtSeHora1").blur(function() {
	valtxtSeHora1();
});
$("#txtSeHora2").blur(function() {
	valtxtSeHora2();
});
*/


//limpiar formularios
function limpiarLogin(){
	$("#alertLogin").hide();
	$("#infoEmail").hide();
	$("#txtEmail").removeClass("error");
	$("#infoPass").hide();	
	$("#txtPass").removeClass("error");
}
function limpiar(){
	$('div[id ^= gr]').hide();
	$('li[id ^= active]').removeClass("active");
	$("#txtActual").empty(); 
	$("#txtActual").append("<li><a href=''>Panel</a></li>"); 
}
function limpiarFormEdificios(){
	$('small[id ^= info]').hide();
	$('#infoEdNombre').hide();
	$('#infoEdDireccion').hide();
	$('#txtEdNombre').removeClass("error");
	$('#txtEdDireccion').removeClass("error");
	
}

//cargar pagina
function recargar(grupo){
	limpiar();
	$("#grMenu").show();
	$("#grActual").show();
	if (grupo==1){
		cargarEdificios();
		$("#grEdificios").show();
		$("#activeEdificio").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Edificios</a></li>"); 
		
	}
	if (grupo == 2){
		cargarSalas();
		$("#grSalas").show();
		$("#activeSala").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Salas</a></li>");
		
	}
	if (grupo == 3){
		cargarEspectaculos();
		$("#grEspectaculos").show();	
		$("#activeEspectaculo").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Espectaculos</a></li>"); 
	}
	if (grupo == 4){
		cargarSesiones();
		$("#grSesiones").show();
		$("#activeSesion").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Sesiones</a></li>"); 
	}
	if (grupo == 5){
		$("#grMenu").hide();
		$("#grActual").hide();
		$("#grLogin").show();
		
	}	
	if (grupo == 6){
		cargarEntradas();
		$("#grEntradas").show();	
		$("#activeEntrada").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Vender entradas</a></li>"); 
	}
	if (grupo == 7){
		
		$("#grEstadisticas").show();	
		$("#activeEstadisticas").addClass("active");
		$("#txtActual").append("<li><a class='current' href=''>Estadisticas</a></li>"); 
	}
	
}


//botones
$(document).on('click','#btnLogin',function(eEvento){
	eEvento.preventDefault();
	limpiarLogin();
	if(valtxtEmail()==false){
		return;
	}
	if(valtxtPass()==false){
		return;
	}
	var user = jQuery("#txtEmail").val();
	var pass = jQuery("#txtPass").val();
	var x = $.get("http://localhost:8080/naam/login", {user:user, pass:pass})
	.done(function(resp) {
		if(x.status==200){
			//$("#grLogin").hide();
			recargar(1);
		}
	})
	.fail(function() {
		if( x.status==403){
			$("#alertLogin").text("Usuario o contraseña incorrectos");
			$("#alertLogin").show();
		}else{
			if( x.status==503 || x.status==500){
				$("#alertLoginTexto").text("No tienes permisos de acceso a esta sección.");
				$("#alertLogin").show();
			}else{
				$("#alertLoginTexto").text("No tenemos respuesta del servidor, disculpe las molestias.");
				$("#alertLogin").show();
			}
		}
	})
});

$(document).on('click','.btnEdificios',function(eEvento){
	eEvento.preventDefault();
	recargar(1);
});
$(document).on('click','.btnAddEdificios',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	$("#txtEdId").val("-1");
	$("#txtEdNombre").val("");
	$("#modalFormEdificio").reveal();
});
$(document).on('click','.btnModEdificios',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href').split(";");
	$("#txtEdId").val(str[0]);
	$("#txtEdNombre").val(str[1]);
	$("#txtEdDireccion").val(str[2]);
	$("#txtEdLatitud").val(str[3]);
	$("#txtEdLongitud").val(str[4]);
	
	
	$("#modalFormEdificio").reveal();
});
$(document).on('click','.btnDelEdificios',function(eEvento){
	eEvento.preventDefault();
	str= $(this).attr('href');
	$("#txtEdId").val(str);
	$("#modalDelEdificio").reveal();
});
$(document).on('click','#btnEdBuscarDir',function(eEvento){
	eEvento.preventDefault();
	if(valtxtEdDireccion()==false){
		return;
	}
	codeAddress();
});
$(document).on('click','#btnEdGuardar',function(eEvento){

	eEvento.preventDefault();
	
	if(valtxtEdDireccion()==false){
		return;
	}
	if(valtxtEdNombre()==false){
		return;
	}
	
	
	var id = $("#txtEdId").val();
	var nombre = $("#txtEdNombre").val();
	var direccion = $("#txtEdDireccion").val();
	var latitud = $("#txtEdLatitud").val();
	var longitud = $("#txtEdLongitud").val();
	
	if(isNaN(id)){
		alert("Problemas internos.");
		return;
	}
	
	if(id>-1){
		//Modificar
		var xml = "<Edificio><id>"+id+"</id><nombre>"+nombre+"</nombre><latitud>"+latitud+"</latitud><longitud>"+longitud+"</longitud><direccion>"+direccion+"</direccion></Edificio>";
		$.ajax({
			contentType: "application/xml; charset=utf-8",
			type: "PUT",
			url: "http://localhost:8080/naam/edificio/"+id,
			dataType: 'xml',
			async: false,
			data: xml
		})
		.done(function(resp) {
			addAlertOk("Edificio guardado correctamente.");
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			addAlertError("No se ha podido guardar el edificio.");
		});
		
		
	}else if(id==-1){
		//Nuevo
		if(distancia(latitud,longitud)==1){
			$("#informativosEdForm").append(
				'<div class="alert-box alert" id="gralertError">'+
					'<span id="alertErrorTexto">"Hay otro edificio muy cerca en la ubicación."</span>'+
					'<a href="" class="close">&times;</a>'+
				'</div>'
			);
			return;
		}
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/naam/edificio/",
			data: {nombre:nombre,longitud: longitud, latitud: latitud, direccion: direccion}
		})
		.done(function(resp) {
			addAlertOk("Edificio guardado correctamente");
			$("#btnEdificios").trigger('click');
			$("#btnEdificios").click();
		})
		.fail(function() {
			addAlertError("No se ha podido guardar el edificio.");
		})
	}
	$('#modalFormEdificio').trigger('reveal:close');
	recargar(1);
	
});
$(document).on('click',".btnMapa",function(eEvento){
	eEvento.preventDefault();
	$('html,body').animate({
        scrollTop: $("#mapa").offset().top
    }, 2000);
	
	str= $(this).attr('href').split(",");
	var vina = new google.maps.LatLng(str[0],str[1]);
	//centrar el mapa en el edificio
	map.setZoom(15);
	map.setCenter(vina);
	
});
$(document).on('click',"#btnDelEdificiosConfirm",function(eEvento){
	eEvento.preventDefault();
	var id=$("#txtEdId").val();
	$.ajax({
		url: 'http://localhost:8080/naam/edificio/'+id,
		type: 'DELETE',
	})
	.done(function(resp) {
		addAlertOk("Edificio " +id+ " borrado");
	})
	.fail(function(x) {
		addAlertError("Error: No se ha borrado el edificio " +id);
	});
	$('#modalDelEdificio').trigger('reveal:close');
	recargar(1);

});
$(document).on('click',"#btnDelEdificiosDecline",function(eEvento){
	eEvento.preventDefault();
	$('#modalDelEdificio').trigger('reveal:close');
});


$(document).on('click','.btnSalas',function(eEvento){
	eEvento.preventDefault();
	
	recargar(2);
	
	$("#txtSlFilas").empty();
	$("#txtSlColumnas").empty();
	for ( var i = 0; i < 300; i++ ) {
		$("#txtSlFilas").append("<option value='"+i+"'>"+i+"</option>");
		$("#txtSlColumnas").append("<option value='"+i+"'>"+i+"</option>");
	}
	
});
$(document).on('click','.btnAddSalas',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href');
	$("#txtSlEdId").val(str);
	$("#txtSlId").val("-1");
	$("#txtSlNombre").val("");
	$("#txtSlFilas option[value='0']").attr("selected",true);  
	$("#txtSlColumnas option[value='0']").attr('selected', 'selected');  
	
	$("#modalFormSala").reveal();
});
$(document).on('click','.btnModSalas',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href').split(";");
	$("#txtSlEdId").val(str[0]);
	$("#txtSlId").val(str[1]);
	$("#txtSlNombre").val(str[2]);
	$("#txtSlFilas option[value="+str[3]+"]").attr("selected",true);  
	$("#txtSlColumnas option[value="+str[4]+"]").attr("selected",true);  

	
	$("#modalFormSala").reveal();
});
$(document).on('click','.btnDelSalas',function(eEvento){
	eEvento.preventDefault();
	str= $(this).attr('href');
	str=str.split(";");
	$("#txtSlId").val(str[0]);
	$("#txtSlEdId").val(str[1]);
	$("#modalDelSala").reveal();
});
$(document).on('click',"#btnDelSalasConfirm",function(eEvento){
	eEvento.preventDefault();
	var id=$("#txtSlId").val();
	var idEd=$("#txtSlEdId").val();
	$.ajax({
		url: 'http://localhost:8080/naam/sala/'+idEd+"/"+id,
		type: 'DELETE',
	}).done(function(resp) {
		addAlertOk("Sala " +id+ " borrado");
	})
	.fail(function() {
		addAlertError("Error: No se ha borrado la sala" +id+"--"+idEd);
	});
	
	$('#modalDelSala').trigger('reveal:close');
	recargar(2);
});
$(document).on('click',"#btnDelSalasDecline",function(eEvento){
	eEvento.preventDefault();
	$('#modalDelSala').trigger('reveal:close');
});
$(document).on('click','#btnSlGuardar',function(eEvento){
	eEvento.preventDefault();
	
	if(valtxtSlNombre()==false){
		return;
	}
	
	
	var idEd = $("#txtSlEdId").val();
	var idSl = $("#txtSlId").val();
	var nombre = $("#txtSlNombre").val();
	var filas = $("#txtSlFilas").val();
	var columnas = $("#txtSlColumnas").val();
		
	if(isNaN(idEd) || isNaN(idSl)){
		alert("Problemas internos.");
		return;
	}
	
	if(idSl>-1){
		var xml = "<Sala><idSala>"+idSl+"</idSala><nombre>"+nombre+"</nombre><numFilas>"+filas+"</numFilas><numColumnas>"+columnas+"</numColumnas></Sala>";
		$.ajax({
			contentType: "application/xml; charset=utf-8",
			type: "PUT",
			url: "http://localhost:8080/naam/sala/"+idSl,
			dataType: 'xml',
			async: false,
			data: xml
		})
		.done(function(resp) {
			addAlertOk("Sala guardado correctamente.");
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			addAlertError("No se ha podido guardar la sala.");
		});
		
	}else if(idSl==-1){
		//Nuevo
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/naam/sala/",
			data: {idEdificio:idEd,nombre:nombre,numFilas:filas,numColumnas:columnas}
		})
		.done(function(resp) {
			addAlertOk("Sala guardado correctamente");
		})
		.fail(function() {
			addAlertError("No se ha podido guardar la sala.");
		})
	}
	$('#modalFormSala').trigger('reveal:close');
	recargar(2);
});


$(document).on('click','.btnEspectaculos',function(eEvento){
	eEvento.preventDefault();
	recargar(3);
	
	$("#txtEsHoras").empty();
	for ( var i = 0; i < 24; i++ ) {
		$("#txtEsHoras").append("<option value='"+i+"'>"+i+"</option>");
	}
});
$(document).on('click','.btnAddEspectaculos',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href');
	$("#txtEsId").val("-1");
	$("#txtEsNombre").val("");
	$("#txtEsHoras option[value=0]").attr("selected",true);  
	$("#txtEsPrecio").val("");  
	$("#txtEsDesc").val("");  
	$("#txtEsCartel").val("");  
	$("#modalFormEspectaculo").reveal();
});
$(document).on('click','.btnModEspectaculos',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href').split(";");
	$("#txtEsId").val(str[0]);
	$("#txtEsNombre").val(str[1]);
	$("#txtEsHoras option[value="+str[2]+"]").attr("selected",true);  
	$("#txtEsPrecio").val(str[3]);
	$("#txtEsDesc").val(str[4]);
	$("#txtEsCartel").val(str[5]);
	$("#modalFormEspectaculo").reveal();
});
$(document).on('click','.btnDelEspectaculos',function(eEvento){
	eEvento.preventDefault();
	str= $(this).attr('href');
	$("#txtEsId").val(str);
	$("#modalDelEspectaculo").reveal();
});
$(document).on('click',"#btnDelEspectaculosConfirm",function(eEvento){
	eEvento.preventDefault();
	var id=$("#txtEsId").val();
	$.ajax({
		url: 'http://localhost:8080/naam/espectaculo/'+id,
		type: 'DELETE',
	}).done(function(resp) {
		addAlertOk("Espectaculo " +id+ " borrado");
	})
	.fail(function() {
		addAlertError("Error: No se ha borrado el espectaculo" +id);
	});
	$('#modalDelEspectaculo').trigger('reveal:close');
	recargar(3);
});
$(document).on('click',"#btnDelEspectaculosDecline",function(eEvento){
	eEvento.preventDefault();
	$('#modalDelEspectaculo').trigger('reveal:close');
});
$(document).on('click','#btnEsGuardar',function(eEvento){
	eEvento.preventDefault();
	
	if(valtxtEsNombre()==false){
		return;
	}
	if(valtxtEsPrecio()==false){
		return;
	}
	if(valtxtEsCartel()==false){
		return;
	}
	
	var id = $("#txtEsId").val();
	var nombre = $("#txtEsNombre").val();
	var duracion = $( "select#txtEsHoras option:selected").val();
	var precio = $("#txtEsPrecio").val();
	var cartel = $("#txtEsCartel").val();
	var desc = $("#txtEsDesc").val();
		
	if(isNaN(id)){
		alert("Problemas internos.");
		return;
	}
	
	if(id>-1){
		//Modificar
		var xml = "<Espectaculo><id>"+id+"</id><nombre>"+nombre+"</nombre><duracion>"+duracion+"</duracion><precio>"+precio+"</precio><cartel>"+cartel+"</cartel></Espectaculo>";
		
		$.ajax({
			contentType: "application/xml; charset=utf-8",
			type: "PUT",
			url: "http://localhost:8080/naam/espectaculo/"+id,
			dataType: 'xml',
			async: false,
			data: xml
		})
		.done(function(resp) {
			addAlertOk("Espectaculo guardado correctamente.");
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			addAlertError("No se ha podido guardar el espectaculo.");
		});
		
		
	}else if(id==-1){
		//Nuevo
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/naam/espectaculo/",
			data: {nombre:nombre,duracion:duracion, precio:precio,imagen:cartel,descripcion: desc}
		})
		.done(function(resp) {
			addAlertOk("Espectaculo guardado correctamente");
		})
		.fail(function() {
			addAlertError("No se ha podido guardar el espectaculo.");
		})
	}
	$('#modalFormEspectaculo').trigger('reveal:close');
	recargar(3);
});


$(document).on('click','.btnSesiones',function(eEvento){
	eEvento.preventDefault();
	recargar(4);
});
$(document).on('click','.btnAddSesiones',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	str= $(this).attr('href');
	$("#txtSeId").val("-1");
	$("#txtSeEs option[value=-1]").attr("selected",true);  
	$("#txtSeEd option[value=-1]").attr("selected",true);  
	$("#txtSeSa option[value=-1]").attr("selected",true);  
	$("#txtSeDia1").val("");
	$("#txtSeDia2").val("");
	$("#txtSeHora1").val("");
	$("#txtSeHora2").val("");
		
	$("#modalFormSesion").reveal();
});
$(document).on('click','.btnModSesiones',function(eEvento){
	eEvento.preventDefault();
	limpiarFormEdificios();
	aux= $(this).attr('href').split(";");
	$("#txtSeId").val(aux[4]);
	$("#txtSeEs option[value="+aux[0]+"]").attr("selected",true);  
	$("#txtSeEd option[value="+aux[1]+"]").attr("selected",true);  
	$("#txtSeSa option[value="+aux[2]+"]").attr("selected",true); 	
	$("#txtSeDia2").val("");
	$("#txtSeHora2").val("");
	$("#txtSeDia1").val(aux[3]+"/"+aux[4]+"/"+aux[5]);
	$("#txtSeHora1").val(aux[6]+":"+aux[7]+"..");
	
	
	
	$("#modalFormSesion").reveal();
});
$(document).on('click','.btnDelSesiones',function(eEvento){
	eEvento.preventDefault();
	str= $(this).attr('href');
	str=str.split(";");
	$("#txtSaId").val(str[0]);
	$("#txtSeId").val(str[1]);
	$("#modalDelSesion").reveal();
});
$(document).on('click',"#btnDelSesionesConfirm",function(eEvento){
	eEvento.preventDefault();
	var id=$("#txtSeId").val();
	var idsala=$("#txtSaId").val();
	$.ajax({
		url: 'http://localhost:8080/naam/sesion/'+idsala+'/'+id,
		type: 'DELETE',
	}).done(function(resp) {
		addAlertOk("Sesion " +id+ " borrado");
	})
	.fail(function() {
		addAlertError("Error: No se ha borrado la sesion" +id);
	});
	$('#modalDelSesion').trigger('reveal:close');
	recargar(4);
});
$(document).on('click',"#btnDelSesionesDecline",function(eEvento){
	eEvento.preventDefault();
	$('#modalDelSesion').trigger('reveal:close');
});
$(document).on('click','#btnSeGuardar',function(eEvento){
	eEvento.preventDefault();
	
	if(valtxtSeEs()==false){
		return;
	}
	if(valtxtSeEd()==false){
		return;
	}
	if(valtxtSeSa()==false){
		return;
	}
	
	if(valtxtSeDia1()==false){
		return;
	}
	if(valtxtSeHora1()==false){
		return;
	}
	if(valtxtSeHora2()==false){
		return;
	}
	if(valtxtSeDia2()==false){
		return;
	}	
	
	var idEs = $( "select#txtSeEs option:selected").val();
	var idEd = $( "select#txtSeEd option:selected").val();
	var idSa = $( "select#txtSeSa option:selected").val();
	var idSe = $("#txtSeId").val();
	var dia1 = $("#txtSeDia1").val();
	var dia2 = $("#txtSeDia2").val();
	var hora1 = $("#txtSeHora1").val();
	var hora2 = $("#txtSeHora2").val();
	var aux= dia1.split("/");
	var aux2= hora1.split(":");
	if(idSe>-1){
		//Modificar
		var xml = "<Sesion><idEspectaculo>"+idEs+"</idEspectaculo><idSala>"+idSa+"</idSala><anyo>"+aux[2]+"</anyo><mes>"+aux[0]+"</mes><dia>"+aux[1]+"</dia><hora>"+aux2[0]+"</hora><minuto>"+aux2[1].substring(0, aux[1].length-2)+"</minuto></Sesion>";
		
		$.ajax({
			contentType: "application/xml; charset=utf-8",
			type: "PUT",
			url: "http://localhost:8080/naam/sesion/"+idSe,
			dataType: 'xml',
			data: xml
		})
		.done(function(resp) {
			addAlertOk("Sesion guardado correctamente.");
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown) {
			addAlertError("No se ha podido guardar el espectaculo.");
		});
		
		
	}else if(idSe==-1){
		//Nuevo
		var aux= dia1.split("/");
		var aux2= hora1.split(":");
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/naam/sesion/",
			data: {idEspectaculo:idEs,idSala:idSa, dia:aux[1],mes:aux[0],anyo:aux[2],hora:aux2[0],minuto: aux2[1].substring(0, aux[1].length-2)}
		})
		.done(function(resp) {
			addAlertOk("Sesion guardada correctamente");
		})
		.fail(function() {
			addAlertError("No se ha podido guardar la sesion.");
		})
	}
	$('#modalFormSesion').trigger('reveal:close');
	recargar(4);
});
$(document).on('click','#btnImprimirEntradas',function(eEvento){
	eEvento.preventDefault();
	window.print();
});
$(document).on('click','.btnEntrada',function(eEvento){
	eEvento.preventDefault();
	recargar(6);
	
});


$(document).on('click','.btnEstadisticas',function(eEvento){
	eEvento.preventDefault();
	recargar(7);
	
});

$(document).on('click','.btnSalir',function(eEvento){
	eEvento.preventDefault();
	recargar(5);
});


//cargar seccion
function cargarEdificios(){
	deleteMarkers();

	//Solicitar edificos al servidor
	$("#tablaEdificios tbody").empty();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/edificio",
		dataType: "xml"
	}).done(function(resp) {
		$(resp).find("edificio").each(function(){
		
		var $edificio = $(this);
		var id = $edificio.find("ed_id").text();
		var latitud = $edificio.find("ed_latitud").text();
		var longitud = $edificio.find("ed_longitud").text();
		var nombre = $edificio.find("ed_nombre").text();
		var direccion = $edificio.find("ed_direccion").text();
		
		var location = new google.maps.LatLng(latitud,longitud);
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: companyImage,
			shadow: companyShadow,
			zIndex: 3
		});
		markers.push(marker);
		lalo.push(new google.maps.LatLng(latitud,longitud));
		var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
				'<h4 id="firstHeading" class="firstHeading">'+nombre+'</h4>'+
				'<div id="bodyContent">'+
					'<a href="'+id+';'+nombre+';'+direccion+';'+latitud+';'+longitud+'" class="btnModEdificios"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a  href="'+id+'" class="btnDelEdificios"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a>'+
					'</p>'+
				'</div>'+
			'</div>';
		
		google.maps.event.addListener(marker, 'click', function() {
			new google.maps.InfoWindow({content: contentString}).open(map,marker);
		});
		map.setCenter(location);
		
		

		$("#tablaEdificios").append(''+
			'<tr>'+
				'<td>'+nombre+'</td>'+
				'<td>'+direccion+'</td>'+
				'<td><a href="'+id+';'+nombre+';'+direccion+';'+latitud+';'+longitud+'" class="btnModEdificios"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a  href="'+id+'" class="btnDelEdificios"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a>'+
				'<a  class="btnMapa" href="'+latitud+','+longitud+'"><img src="images/mapa.gif" width="25px" alt="Eliminar"></a></td>'+
			'</tr>'
		);
			
 	});
	})
	.fail(function(resp) {
		
		addAlertError("No hay edificios en la base de datos.");
	});
}
function cargarSalas(){
	//Solicitar edificos al servidor
	$("#txtSlEdificios").empty();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/edificio",
		dataType: "xml"
	})
	.done(function(resp) {
		var aux = 1;
		$(resp).find("edificio").each(function(){
		
			var $edificio = $(this);
			var id = $edificio.find("ed_id").text();
			var nombre = $edificio.find("ed_nombre").text();
			var direccion = $edificio.find("ed_direccion").text();
			var salas = $edificio.find("listaSalas");
			$("#txtSlEdificios").append(
				'<li>'+
					'<div class="title" id=Sl'+nombre.toLowerCase().replace(/\s/g,"")+' >'+
						'<h5>'+nombre+'  - <a class="btnAddSalas" href="'+id+'"><img src="images/sala.png" alt="añadir edificio" width="25px"></a></h5>'+
					'</div>'+
					'<div class="content" id="'+aux+'">'+
					'</div>'+
				'</li>'
			);
			$(salas).find("sala").each(function(){
				var $sl = $(this);
				var slNombre = $sl.find("sa_nombre").text();
				var slId = $sl.find("sa_id").text();
				var slFilas = $sl.find("sa_numFilas").text();
				var slColumnas = $sl.find("sa_numColumnas").text();
				if(slId!=""){
					$("#"+aux+"").append(
					'<fieldset >'+
						'<legend>'+slNombre+'<a class="btnModSalas" href="'+id+';'+slId+';'+slNombre+';'+slFilas+';'+slColumnas+'"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a class="btnDelSalas" href="'+slId+';'+id+'"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a></legend>'+
						'<p>Sala con '+slFilas+' filas y con '+slColumnas+' columnas.</p>'+
					'</fieldset>'
					);
				}
			});
			aux=aux+1;
		});
		
	})
	.fail(function(resp) {
		addAlertError("No hay edificios en la base de datos de los cuales mostrar sus salas.");
	});
}
function cargarEspectaculos(){
	//Solicitar edificos al servidor
	$("#tablaEspectaculos").empty();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/espectaculo",
		dataType: "xml"
	}).done(function(resp) {
		$(resp).find("espectaculos").each(function(){
		
			var $espectaculo = $(this);
			var id = $espectaculo.find("es_id").text();

			var nombre = $espectaculo.find("es_nombre").text();
			var duracion = $espectaculo.find("es_duracion").text();
			var precio = $espectaculo.find("es_precio").text();
			var cartel = $espectaculo.find("es_imageURL").text();
			var desc = $espectaculo.find("es_descripcions").text();
			
			$("#tablaEspectaculos").append(
				'<li>'+
					'<div class="title" id=Es'+nombre.toLowerCase().replace(/\s/g,"")+' >'+
						'<h5>'+nombre+' - <a class="btnModEspectaculos" href="'+id+';'+nombre+';'+duracion+';'+precio+';'+desc+';'+cartel+'"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a class="btnDelEspectaculos" href="'+id+'"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a></h5>'+
					'</div>'+
					'<div class="content">'+
					'<p>Espectaculo '+nombre+'. Duración: '+duracion+'. PVP: '+precio+'</p>'+
					'<img src="'+cartel+'" width="150px" height="100px" alt"=Cartel">'+
					'<p>'+desc+'</p>'+
					
					'</div>'+
				'</li>'
			);
			
		});
		
	})
	.fail(function(resp) {
		addAlertError("No hay espectaculos en la base de datos.");
	});
}
function cargarSesiones(){
	/*var extraEvents = [
		{ "EventID": 10, "Date": "2014-05-04T00:00:00.0000054", "Title": "Sesion sobre espectaculo", "URL": "#", "Description": "Espectaculo <a class='btnModEspectaculos' href=''><img src='images/modificar.png' width='25px'></a><a class='btnDelEspectaculos' href=''><img src='images/borrar.jpg' width='25px' alt='Eliminar'></a>bustcas bla bla",  "CssClass": "Meeting" },
		{ "EventID": 11, "StartDateTime": "2014-05-05", "Title": "El rey leon 9:00-10:00 Sala 1 0 butacas", "URL": "#", "Description": "This is a sample event description", "CssClass": "Meeting" }
	];
	$.jMonthCalendar.AddEvents(extraEvents);
	var events = [
		{ "EventID": 11, "StartDateTime": "2014-05-05", "Title": "El rey leon 9:00-10:00 Sala 1 0 butacas", "URL": "#", "Description": "This is a sample event description", "CssClass": "Meeting" }
	];
    $.jMonthCalendar.ReplaceEventCollection(events);
	*/
	//Solicitar edificos al servidor7
	$("#tablaSeEspectaculos").empty();
	$("#tablaSeSlEdificios").empty();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/espectaculo",
		dataType: "xml"
	}).done(function(resp) {
		$("#txtSeEs").empty();
		$("#txtSeEs").append('<option value="-1">Espectaculo</option>');
		$(resp).find("espectaculos").each(function(){
		
			var $espectaculo = $(this);
			var id = $espectaculo.find("es_id").text();

			var nombre = $espectaculo.find("es_nombre").text();
			$("#txtSeEs").append("<option value='"+id+"'>"+nombre+"</option>");
			
		});
		
	})
	.fail(function(resp) {
		addAlertError("No tenemos respuesta del sevidor. Intentelo mas tarde.");
	});
	events=[];
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/edificio",
		dataType: "xml"
	})
	.done(function(resp) {
		
		var aux = 1;
		$("#txtSeEd").empty();
		$("#txtSeEd").append('<option value="-1">Edificio</option>');
		$("#txtSeSa").empty();
		$("#txtSeSa").append('<option value="-1">Sala</option>');
		
		$(resp).find("edificio").each(function(){
			var $edificio = $(this);
			var id = $edificio.find("ed_id").text();
			var nombre = $edificio.find("ed_nombre").text();
			var direccion = $edificio.find("ed_direccion").text();
			var salas = $edificio.find("listaSalas");
		
			
			$("#txtSeEd").append("<option value='"+id+"'>"+nombre+"</option>");
			$("#tablaSeSlEdificios").append(
				'<li>'+
					'<div class="title" id=SeEd'+nombre.toLowerCase().replace(/\s/g,"")+' >'+
						'<h5>'+nombre+'</h5>'+
					'</div>'+
					'<div class="content" id="ed'+aux+'">'+
					'</div>'+
				'</li>'
			);
			
			
			$(salas).find("sala").each(function(){
				var $sl = $(this);
				var slNombre = $sl.find("sa_nombre").text();
				var slId = $sl.find("sa_id").text();
				var slFilas = $sl.find("sa_numFilas").text();
				var slColumnas = $sl.find("sa_numColumnas").text();
				
				var sesion = $sl.find("listaSesiones");
				
				$("#ed"+aux+"").append(
					'<fieldset >'+
						'<legend>'+slNombre+'</legend>'+
						'<p id="s'+slId+'"></p>'+
					'</fieldset>'
					);
				$("#txtSeSa").append("<option class='opSa"+id+"'value='"+slId+"'>"+slNombre+"</option>");
				$(sesion).find("sesiones").each(function(){	
					var $se = $(this);	
					var seId = $se.find("se_id").text();
					var seDia = $se.find("se_fechaYHoraString").text();
					var seButacas = $se.find("se_butacasDisponibles").text();
					var espectaculo = $se.find("espectaculo");
				
					var esId = $(espectaculo).find("es_id").text();
					var esNombre = $(espectaculo).find("es_nombre").text();
					var esImg = $(espectaculo).find("es_imageURL").text();
					var esPrecio = $(espectaculo).find("es_precio").text();
					var esDuracion = $(espectaculo).find("es_duracion").text();
					var aux2 = seDia.split(";");
					
					
	
					$('#s'+slId).append(
						'<fieldset>'+
						'<legend>Sesion '+seId+' <a class="btnModSesiones" href="'+esId+';'+seId+';'+slId+';'+aux2[0]+';'+aux2[1]+';'+aux2[2]+';'+aux2[3]+';'+aux2[4]+'"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a class="btnDelSesiones" href="'+seId+'"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a></legend>'+
						'<p>Sesion el dia '+aux2[2]+'/'+aux2[1]+'/'+aux2[0]+' a la hora '+aux2[3]+':'+aux2[4]+' proyectando el espectaculo '+esNombre+' con un precio '+esPrecio+' que dura '+esDuracion+' horas. Quedan '+seButacas+' libres.</p>'+
						
						'</fieldset>'
					);
					if ($('#SeEs'+esNombre.toLowerCase().replace(/\s/g,"")).length==0){
						$("#tablaSeEspectaculos").append(
							'<fieldset id=SeEs'+esNombre.toLowerCase().replace(/\s/g,"")+' >'+
							'<legend>Espectaculo  '+esNombre+'</legend>'+
							'<span id="Sesion'+seId+'"> </span>'+
							'</fieldset>'
						);
					}
					$('#Sesion'+seId).append(
						'<fieldset>'+
						'<legend>Sesion '+seId+' <a class="btnModSesiones" href="'+esId+';'+seId+';'+slId+';'+aux2[0]+';'+aux2[1]+';'+aux2[2]+';'+aux2[3]+';'+aux2[4]+'"><img src="images/modificar.png" alt="Modificar" width="25px"></a><a class="btnDelSesiones" href="'+seId+'"><img src="images/borrar.jpg" width="25px" alt="Eliminar"></a></legend>'+
						'<p>Sesion el dia '+aux2[2]+'/'+aux2[1]+'/'+aux2[0]+' a la hora '+aux2[3]+':'+aux2[4]+' proyectando el espectaculo '+esNombre+' con un precio '+esPrecio+' que dura '+esDuracion+' horas. Quedan '+seButacas+' libres.</p>'+
						
						'</fieldset>'
					); 					
				});
			});	
			aux=aux+1;
		});
			
		
		//$.jMonthCalendar.ReplaceEventCollection(events);
		$('option[class ^= opSa]').hide();
	})
	.fail(function(resp) {
		addAlertError("No hay sesiones en la base de datos.");
	});

}
function cargarEntradas(){
	//Solicitar edificos al servidor
	$("#tablaEntradas").empty();
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/edificio",
		dataType: "xml"
	})
	.done(function(resp) {
		var aux = 1;
		$(resp).find("edificio").each(function(){
			var $edificio = $(this);
			var id = $edificio.find("ed_id").text();
			var nombre = $edificio.find("ed_nombre").text();
			var direccion = $edificio.find("ed_direccion").text();
			var salas = $edificio.find("listaSalas");
					
			$("#tablaEntradas").append(
				'<li>'+
					'<div class="title" id=EnEd'+nombre.toLowerCase().replace(/\s/g,"")+' >'+
						'<h5>'+nombre+'</h5>'+
					'</div>'+
					'<div class="content" id="'+aux+'">'+
					'</div>'+
				'</li>'
			);
			
			
			$(salas).find("sala").each(function(){
				var $sl = $(this);
				var slNombre = $sl.find("sa_nombre").text();
				var slId = $sl.find("sa_id").text();
				var slFilas = $sl.find("sa_numFilas").text();
				var slColumnas = $sl.find("sa_numColumnas").text();
				
				var sesion = $sl.find("listaSesiones");
				$('#'+aux).append(
					'<fieldset id=nSa'+slNombre.toLowerCase().replace(/\s/g,"")+' >'+
					'<legend>Sala '+slNombre+'</legend>'+
					'<span id=sa'+slId+'></span>'+
					'</fieldset>'
				);
				
				$(sesion).find("sesiones").each(function(){	
					var $se = $(this);	
					var seId = $se.find("se_id").text();
					var seDia = $se.find("se_dia").text();
					var seHora = $se.find("se_hora").text();
					var seButacas = $se.find("se_butacasDisponibles").text();
					var espectaculo = $se.find("espectaculo");
					
					var seDia = $se.find("se_fechaYHoraString").text();
					var seDia = seDia.split(";");
					
					
					var esId = $(espectaculo).find("es_id").text();
					var esNombre = $(espectaculo).find("es_nombre").text();
					var esImg = $(espectaculo).find("es_imageURL").text();
					var esPrecio = $(espectaculo).find("es_precio").text();
					var esDuracion = $(espectaculo).find("es_duracion").text();
					
					$('#sa'+slId).append(
						'<ul class="accordion" id="n'+seId+'">'+
						'</ul>	'

					);	
					$('#n'+seId).append(
					'<li>'+
						'<div class="title"  >'+
							'<h5>Sesion '+seDia[2]+'/'+seDia[1]+'/'+seDia[0]+' - '+seDia[3]+':'+seDia[4]+'</h5>'+
						'</div>'+
						'<div class="content" id=bu'+seId+'>'+
						'</div>'+
					'</li>');
					var i=1;var j=1;
					$(this).find("se_matrizButacas").each(function(){
						var $item = $(this);	
						$(this).find("item").each(function(){
							val = $(this).text();
							
							$('#bu'+seId).append('<button id="'+seId+'-'+i+'-'+j+'" type="button" class="btn small" onclick="butacas('+seId+','+i+','+j+')"  value="'+val+'">'+i+'-'+j+'</button>');
							if(val==1){
								$('#'+seId+'-'+i+'-'+j+'').addClass("alert");
							}else{							
								$('#'+seId+'-'+i+'-'+j+'').addClass("success");
							}
							j=j+1;
						});
						$('#bu'+seId).append("<br>");
						i=i+1;
						j=1;
					});
					
					$('#bu'+seId).append("<button onclick='comprarEntradas("+seId+")' value='comprar'>Comprar</button>");
					aux =aux+1;
				});
			});			
		});
		
		
	})
	.fail(function(resp) {
		addAlertError("No tenemos respuesta del sevidor. Intentelo mas tarde.");
	});
}

//alerts informativos
function addAlertError(sms){
	$("#informativos").append(
		'<div class="alert-box alert" id="gralertError">'+
			'<span id="alertErrorTexto">'+sms+'</span>'+
			'<a href="" class="close">&times;</a>'+
		'</div>'
	);
}
function addAlertOk(sms){
	$("#informativos").append(
		'<div class="alert-box success" id="gralertOk">'+
			'<span id="alertOkTexto">'+sms+'</span>'+
			'<a href="" class="close">&times;</a>'+
		'</div>'
	);
}
function addAlertNormal(sms){
	$("#informativos").append(
		'<div class="alert-box" id="gralertNormal">'+
			'<span id="alertNormalTexto">'+sms+'</span>'+
			'<a href="" class="close">&times;</a>'+
		'</div>'
	);
}

//texto escrito
$(document).on('keyup',"#txtSlBuscar",function(eEvento){
	//prevenimos el comportamiento normal del enlace
	eEvento.preventDefault();
	var txt = $("#txtSlBuscar").val().toLowerCase().replace(/\s/g,"");
	
	$('div[id ^= Sl ]').hide();
	if(txt.length == 0){
		$('div[id ^= Sl ]').show(1000);
	}else{
		$('div[id ^= Sl]div[id *= '+txt+']').show(1000);
	}
	
	
});
$(document).on('keyup',"#txtEsBuscar",function(eEvento){
	//prevenimos el comportamiento normal del enlace
	eEvento.preventDefault();
	var txt = $("#txtEsBuscar").val().toLowerCase().replace(/\s/g,"");
	
	$('div[id ^= Es ]').hide();
	if(txt.length == 0){
		$('div[id ^= Es ]').show(1000);
	}else{
		$('div[id ^= Es]div[id *= '+txt+']').show(1000);
	}
	
	
});
$(document).on('keyup',"#txtSeSlBuscar",function(eEvento){
	//prevenimos el comportamiento normal del enlace
	eEvento.preventDefault();
	var txt = $("#txtSeSlBuscar").val().toLowerCase().replace(/\s/g,"");
	$('div[id ^= SeEd ]').hide();
	if(txt.length == 0){
		$('div[id ^= SeEd ]').show(1000);
	}else{
		$('div[id ^= SeEd]div[id *= '+txt+']').show(1000);
	}
	
	
	
});
$(document).on('keyup',"#txtSeEsBuscar",function(eEvento){
	//prevenimos el comportamiento normal del enlace
	eEvento.preventDefault();
	var txt = $("#txtSeEsBuscar").val().toLowerCase().replace(/\s/g,"");
	
	$('fieldset[id ^= SeEs ]').hide();
	if(txt.length == 0){
		$('fieldset[id ^= SeEs ]').show(1000);
	}else{
		$('fieldset[id ^= SeEs]fieldset[id *= '+txt+']').show(1000);
	}
	
	
});
$(document).on('keyup',"#txtEnEsBuscar",function(eEvento){
	//prevenimos el comportamiento normal del enlace
	eEvento.preventDefault();
	var txt = $("#txtEnEsBuscar").val().toLowerCase().replace(/\s/g,"");
	
	$('div[id ^= EnEd ]').hide();
	if(txt.length == 0){
		$('div[id ^= EnEd ]').show(1000);
	}else{
		$('div[id ^= EnEd]div[id *= '+txt+']').show(1000);
	}
	
	
});

//comprar entradas
function enSeDia(){
	cambio=cambio+1;
	if(cambio==3){
		cambio=0;
		fecha = $("#txtEnSeDia").val();
		fecha = fecha.split("/");
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/naam/espectaculo/dia/"+fecha[1]+"-"+fecha[0]+"-"+fecha[2],
			dataType: "xml"
		})
		.done(function(resp) {
			var aux = 1;
			
			$(resp).find("sesiones").each(function(){
				$('#tablaEnSeDia').empty();
				var $se = $(this);	
						var seId = $se.find("se_id").text();
						var seDia = $se.find("se_dia").text();
						var seHora = $se.find("se_hora").text();
						var seButacas = $se.find("se_butacasDisponibles").text();
						var espectaculo = $se.find("espectaculo");
						
						var seDia = $se.find("se_fechaYHoraString").text();
						var seDia = seDia.split(";");
						
						
						var esId = $(espectaculo).find("es_id").text();
						var esNombre = $(espectaculo).find("es_nombre").text();
						var esImg = $(espectaculo).find("es_imageURL").text();
						var esPrecio = $(espectaculo).find("es_precio").text();
						var esDuracion = $(espectaculo).find("es_duracion").text();
						
						$('#tablaEnSeDia').append(
							'<ul class="accordion" id="n'+seId+'">'+
							'</ul>	'

						);	
						$('#n'+seId).append(
						'<li>'+
							'<div class="title"  >'+
								'<h5>Sesion '+seDia[2]+'/'+seDia[1]+'/'+seDia[0]+' - '+seDia[3]+':'+seDia[4]+'</h5>'+
							'</div>'+
							'<div class="content" id=bu'+seId+'>'+
							'</div>'+
						'</li>');
						var i=1;var j=1;
						$(this).find("se_matrizButacas").each(function(){
							var $item = $(this);	
							$(this).find("item").each(function(){
								val = $(this).text();
								
								$('#bu'+seId).append('<button id="'+seId+'-'+i+'-'+j+'" type="button" class="btn small" onclick="butacas('+seId+','+i+','+j+')"  value="'+val+'">'+i+'-'+j+'</button>');
								if(val==1){
									$('#'+seId+'-'+i+'-'+j+'').addClass("alert");
								}else{							
									$('#'+seId+'-'+i+'-'+j+'').addClass("success");
								}
								j=j+1;
							});
							$('#bu'+seId).append("<br>");
							i=i+1;
							j=1;
						});
						
						$('#bu'+seId).append("<button onclick='comprarEntradas("+seId+")' value='comprar'>Comprar</button>");
						aux =aux+1;
					});
					
			
			
			
		})
		.fail(function(resp) {
			$('#tablaEnSeDia').empty();
			$('#tablaEnSeDia').append(
				"No hay sesiones programadas en la fecha seleccionada."
			);
		});

		
	}

	
}
function comprarEntradas(idSesion){
	var b= "";
	for(var i=0;i<asientos.length;i++){
		b=b+";"+asientos[i];
	}
	
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/naam/sesion/comprar/",
			data: {idSesion: idSesion,butacas: b}
	})
	.done(function(resp) {
		for(var i=0;i<asientos.length;i++){
			$("#"+idSesion+"-"+asientos[i]).addClass("alert");
			$("#"+idSesion+"-"+asientos[i]).val(1);
		}
		asientos=[];
		printEntradas(resp,idSesion);
	})
	.fail(function() {
		addAlertError("No llego.");
	});
}
function printEntradas(en,idSesion){
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/naam/sesion/"+idSesion,
		dataType: "xml"
	})
	.done(function(resp) {
		
		$(resp).find("sesion").each(function(){
			
			var $se = $(this);
			var seId = $se.find("se_id").text();
			var seDia = $se.find("se_dia").text();
			var seHora = $se.find("se_hora").text();
			var seButacas = $se.find("se_butacasDisponibles").text();
			var espectaculo = $se.find("espectaculo");
			var seDia = $se.find("se_fechaYHoraString").text();
			var seDia = seDia.split(";");
						
			var esId = $(espectaculo).find("es_id").text();
			var esNombre = $(espectaculo).find("es_nombre").text();
			var esImg = $(espectaculo).find("es_imageURL").text();
			var esPrecio = $(espectaculo).find("es_precio").text();
			var esDuracion = $(espectaculo).find("es_duracion").text();
						
			$('#comprarEntradas').empty();		
			$('#comprarEntradas').append(
				"<h2>"+esNombre+"</h2>"+
				"<img src='"+esImg+"' width='150px' height='100px' alt='cartel'>"+
				"<p>La sesion se proyectara el dia "+seDia[2]+"/"+seDia[1]+"/"+seDia[0]+" a las " +seDia[3]+":"+seDia[4]
			);	
			var entradas = en.split(";");
			for(i=0;i<entradas.length-1;i++){
				xy = entradas[i].split("-");
				$('#comprarEntradas').append(
					'<fieldset >'+
						'<legend>Entrada '+i+': '+esPrecio+' euros</legend> '+
						'Fila: '+ xy[0] +
						'Columna:'+ xy[1] +
					'</fieldset>'	
				);	
		
			}
			$('#comprarEntradas').append(
				"IVA: 21% "+
				"Total  "+ entradas[entradas.length-1] + " euros"
				
			);
			
		});
		$("#modalComprarEntrada").reveal();
	})
	.fail(function() {
		addAlertError("Experimentamos problemas con el servidor.");
	});
}
function butacas(idSesion, f, c){
	if(idSesion!=idSesionAux){
		idSesionAux = idSesion;
		asientos = [];
	}
	var aux = $("#"+idSesion+"-"+f+"-"+c+"").val();
	if(aux==0){
		asientos.push(f+"-"+c);
		$("#"+idSesion+"-"+f+"-"+c+"").val(2);
		$("#"+idSesion+"-"+f+"-"+c+"").removeClass("success");
		
	}
	if(aux==2){
		var i = asientos.indexOf(f+"-"+c);
		if(i>-1){	asientos.splice(i,1);}
		$("#"+idSesion+"-"+f+"-"+c+"").val(0);
		$("#"+idSesion+"-"+f+"-"+c+"").addClass("success");
	}
}



//****************Mapa******************
//Variables generales para interactuar con el mapa
{//
var geocoder;
var marker;
var latLng;
var latLng2;
var map;

//imagen edificios
var companyImage = new google.maps.MarkerImage('img/e.png',
	new google.maps.Size(75,75),
	new google.maps.Point(0,0),
	new google.maps.Point(50,50)
);

var companyShadow = new google.maps.MarkerImage('img/logo_shadow.png',
	new google.maps.Size(130,50),
	new google.maps.Point(0,0),
	new google.maps.Point(65, 50)
);
}

//Funcio encargada de inicializar el mapa
function initialize() {
	latlng = new google.maps.LatLng(39.992556311002, -10.067597031593);
	var settings = {
		zoom: 2,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
}


	// VARIABLES GLOBALES JAVASCRIPT
	//	var geocoder;
	//	var marker;
	//	var latLng;
	//	var latLng2;
	//	var map;

		// INICiALIZACION DE MAPA
			  
			  
//Variables generales para interactuar con el mapa
var geocoder;
var marker;
var latLng;
var latLng2;
var map;
var map2;

//imagen edificios
var companyImage = new google.maps.MarkerImage('img/e.png',
	new google.maps.Size(75,75),
	new google.maps.Point(0,0),
	new google.maps.Point(50,50)
);

var companyShadow = new google.maps.MarkerImage('img/logo_shadow.png',
	new google.maps.Size(130,50),
	new google.maps.Point(0,0),
	new google.maps.Point(65, 50)
);


//Funcio encargada de inicializar el mapa
function initialize() {
	latlng = new google.maps.LatLng(39.992556311002, -0.067597031593);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), settings);
}
function initialize2() {
	geocoder = new google.maps.Geocoder();	
		  
	latlng = new google.maps.LatLng(39.992556311002, -0.067597031593);
	map2 = new google.maps.Map(document.getElementById('mapForm'), {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	// CREACION DEL MARCADOR  
	marker = new google.maps.Marker({
		position: latLng,
		title: 'Arrastra el marcador si quieres moverlo',
		map: map2,
		draggable: true
	});
		 
	// Escucho el CLICK sobre el mama y si se produce actualizo la posicion del marcador 
	google.maps.event.addListener(map2, 'click', function(event) {
		updateMarker(event.latLng);
	});
		  
	// Inicializo los datos del marcador
	//    updateMarkerPosition(latLng);
			 
	geocodePosition(latLng);
		 
	// Permito los eventos drag/drop sobre el marcador
	google.maps.event.addListener(marker, 'dragstart', function() {
		updateMarkerAddress('Arrastrando...');
	});
	 
	google.maps.event.addListener(marker, 'drag', function() {
		updateMarkerStatus('Arrastrando...');
		updateMarkerPosition(marker.getPosition());
	});
		 
	google.maps.event.addListener(marker, 'dragend', function() {
		updateMarkerStatus('Arrastre finalizado');
		geocodePosition(marker.getPosition());
	});
		  
	latLng = new google.maps.LatLng($("#txtEdLatitud").val(),$("#txtEdLongitud").val());
	updateMarker(latLng);
	map.setCenter(latLng);
		 
}

// Permito la gesti¢n de los eventos DOM
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', initialize2);

// ESTA FUNCION OBTIENE LA DIRECCION A PARTIR DE LAS COORDENADAS POS
function geocodePosition(pos) {
	geocoder.geocode({
		latLng: pos
	}, function(responses) {
		if (responses && responses.length > 0) {
			updateMarkerAddress(responses[0].formatted_address);
		} else {
			updateMarkerAddress('No puedo encontrar esta direccion.');
		}
	});
}

// OBTIENE LA DIRECCION A PARTIR DEL LAT y LON DEL FORMULARIO
function codeLatLon() { 
	str= document.form_mapa.txtEdLongitud.value+" , "+document.form_mapa.txtEdLatitud.value;
	latLng2 = new google.maps.LatLng(document.form_mapa.txtEdLatitud.value ,document.form_mapa.txtEdLongitud.value);
	marker.setPosition(latLng2);
	map2.setCenter(latLng2);
	geocodePosition (latLng2);
	// document.form_mapa.direccion.value = str+" OK";
}

// OBTIENE LAS COORDENADAS DESDE lA DIRECCION EN LA CAJA DEL FORMULARIO
function codeAddress() {
	var address = document.form_mapa.txtEdDireccion.value;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			updateMarkerPosition(results[0].geometry.location);
			marker.setPosition(results[0].geometry.location);
			map2.setCenter(results[0].geometry.location);
		} else {
			alert('ERROR : ' + status);
		}
	});
}

// OBTIENE LAS COORDENADAS DESDE lA DIRECCION EN LA CAJA DEL FORMULARIO
function codeAddress2 (address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
			updateMarkerPosition(results[0].geometry.location);
			marker.setPosition(results[0].geometry.location);
			map2.setCenter(results[0].geometry.location);
			document.form_mapa.txtEdDireccion.value = address;
		} else {
			alert('ERROR : ' + status);
		}
	});
}
function updateMarkerStatus(str) {
	document.form_mapa.txtEdDirreccion.value = str;
}

// RECUPERO LOS DATOS LON LAT Y DIRECCION Y LOS PONGO EN EL FORMULARIO
function updateMarkerPosition (latLng) {
	document.form_mapa.txtEdLongitud.value =latLng.lng();
	document.form_mapa.txtEdLatitud.value = latLng.lat();
}

function updateMarkerAddress(str) {
	document.form_mapa.txtEdDireccion.value = str;
}

// ACTUALIZO LA POSICION DEL MARCADOR
function updateMarker(location) {
	marker.setPosition(location);
	updateMarkerPosition(location);
	geocodePosition(location);
}

function distancia(lat, lon){
	x1 = new google.maps.LatLng(lat,lon);
	
	min = 100;
	for (x=0;x<markers.length;x++){
		x1 = new google.maps.LatLng(lat,lon);		
		if ( google.maps.geometry.spherical.computeDistanceBetween(x1, lalo[x]) < 100){
			return 1;
		}
	}
	return 0;
}
// Add a marker to the map and push to the array.
function addMarker(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		zIndex: 3
	});
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
  lalo = [];
}



/* <![CDATA[ */
//(function(){try{var s,a,i,j,r,c,l=document.getElementsByTagName("a"),t=document.createElement("textarea");for(i=0;l.length-i;i++){try{a=l[i].getAttribute("href");if(a&&"www.cloudflare.com/email-protection"==a.substr(7 ,35)){s='';j=43;r=parseInt(a.substr(j,2),16);for(j+=2;a.length-j&&a.substr(j,1)!='X';j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}j+=1;s+=a.substr(j,a.length-j);t.innerHTML=s.replace(/</g,"&lt;").replace(/>/g,"&gt;");l[i].setAttribute("href","mailto:"+t.value);}}catch(e){}}}catch(e){}})();
/* ]]> */

/*
var _gaq = _gaq || [];
  	_gaq.push(
	['_setAccount', 'UA-2195009-2'],
	['_trackPageview'],
	['b._setAccount', 'UA-2195009-27'],
	['b._trackPageview']
);

(function() {	
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
$(document).on('click', '[data-src-download]', function(event){
	var version = $(event.currentTarget).attr('data-src-download');
	_gaq.push(['_trackEvent', 'Foundation', 'Downloaded', version]);
});
var doc = $(document);
doc.on('click.fndtn.clearing', 'a.clearing-close', function () {
	$('#sidebar').show();
});
doc.on('click.fndtn.clearing', 'ul[data-clearing] li', function () {
	$('#sidebar').hide();
});
 */
