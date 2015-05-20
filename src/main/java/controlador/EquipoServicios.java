package controlador;

import java.net.URI;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import modelo.dao.EquipoJPA;
import modelo.datos.Equipo;
import modelo.datos.Usuario;

@Path("equipos")
@Stateless
public class EquipoServicios {
    @Inject
    EquipoJPA equipoJPA;
    @Context
    private UriInfo uriInfo;

    public EquipoServicios() {
        super();
    }

//  

    @GET
    @Produces("application/json")
    public Response listaTodosEquipos() {
        Equipo[] equipos = equipoJPA.listaTodosEquipos();
        
        return Response.ok(equipos).build();
    }
    //

    @GET
    @Path("{nombre}")
    @Produces("application/json")
    public Response buscarEquipoPorNombre(@PathParam("nombre") String nombre) {
    	Equipo equipo = equipoJPA.buscaEquipoPorNombre(nombre);
    		if (equipo == EquipoJPA.ENTRADA_NULL)
    			return Response.status(Response.Status.NOT_FOUND).build();
    		return Response.ok(equipo).build();
    }

    @POST
    @Path("{nombre}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
    		@PathParam("nombre") String nombre,Equipo equipo
            ) {
        if (equipoJPA.buscaEquipoPorNombre(nombre) == EquipoJPA.ENTRADA_NULL) {
            equipoJPA.nuevoEquipo(equipo);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre).build();
            return Response.created(uri).entity(equipo).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }
    
	@PUT
	@Path("actualizar/{nombre}")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Produces(MediaType.APPLICATION_JSON)
	public Response actualizaEquipo(@PathParam("nombre") String nombre, Equipo equipo) {
		

	      if (equipoJPA.actualizaEquipo(nombre, equipo) == true){
					return Response.status(Response.Status.NO_CONTENT).build();                
			}
	      else {
	      	equipoJPA.actualizaEquipo(nombre, equipo);
	          return Response.ok(equipo).build();
	      
	  }
	}
	
    @DELETE
    @Path("{nombre}")
    @Produces("application/json")
    public Response borraEntrada(@PathParam("nombre") String nombre) {
            if (equipoJPA.borraEquipo(nombre) == true)
                return Response.status(Response.Status.ACCEPTED).build();
            else
                return Response.status(Response.Status.NOT_FOUND).build();
    }
}
