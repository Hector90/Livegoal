package controlador;

import java.util.List;
import java.util.regex.Pattern;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;




import modelo.dao.EquipoJPA;
import modelo.dao.UsuarioJPA;
import modelo.datos.Usuario;

@Path("login")
public class Login {
	
	@Inject
    UsuarioJPA usuarioJPA;
	private static final String PATTERN_EMAIL = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
			+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

	/**
	 * Validate given email with regular expression.
	 *
	 * @param email
	 *            email for validation
	 * @return true valid email, otherwise false
	 */
	public static boolean validateEmail(String email) {
		// Compiles the given regular expression into a pattern.
		Pattern pattern = Pattern.compile(PATTERN_EMAIL);
		// Match the given input against this pattern
		java.util.regex.Matcher matcher = pattern.matcher(email);
		return matcher.matches();
	}

	public Login() {
		super();
	}

	@GET
	@Produces(MediaType.TEXT_HTML)
	public Response fomrLogin(@QueryParam("user") String user,@QueryParam("pass") String pass, @Context Request request,@HeaderParam("Accept") String header) {
		Usuario[] listaUsuarios = usuarioJPA.listaTodosUsuarios();
		for (Usuario usuario: listaUsuarios) {
			if (usuario.getUsername().equals(user)) {
				if (usuario.validarContrasena(pass)	&& usuario.getRol() == 1) {
					return Response.ok("http://localhost:8080/html/menu.html").build();
				} else {
					return Response.status(Status.FORBIDDEN).build();
				}

			}
		}
		return Response.status(Status.UNAUTHORIZED).build();
	}

}
