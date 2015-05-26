package controlador;

import java.util.List;
import java.util.regex.Pattern;
import java.net.URI;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;
import modelo.dao.UsuarioJPA;
import modelo.datos.Usuario;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
@Path("login")
public class LoginServicios {
	
	@Inject
    UsuarioJPA usuarioJPA;
    @Context
    private UriInfo uriInfo;
	//private static final String PATTERN_EMAIL = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
	//		+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

//	/**
//	 * Validate given email with regular expression.
//	 *
//	 * @param email
//	 *            email for validation
//	 * @return true valid email, otherwise false
//	 */
//	public static boolean validateEmail(String email) {
//		// Compiles the given regular expression into a pattern.
//		Pattern pattern = Pattern.compile(PATTERN_EMAIL);
//		// Match the given input against this pattern
//		java.util.regex.Matcher matcher = pattern.matcher(email);
//		return matcher.matches();
//	}

	public LoginServicios() {
		super();
	}

	
    @GET
    @Path("{username}/{password}")
    @Produces("application/json")
    public Response comprobarLogin(@PathParam("username") String username, @PathParam("password") String password) {
        Usuario usuario = usuarioJPA.buscaUsuarioPorLogin(username, password);
        if (usuario == UsuarioJPA.ENTRADA_NULL){
        	System.out.println(usuario.getNombre());
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(usuario).build();
    }
    

    @POST
    @Path("{nombre}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
    		@PathParam("nombre") String nombre,Usuario usuario
            ) {
        if (usuarioJPA.buscaUsuarioPorNombre(nombre) == UsuarioJPA.ENTRADA_NULL) {
            usuarioJPA.nuevoUsuario(usuario);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre).build();
            return Response.created(uri).entity(usuario).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }
    

}
