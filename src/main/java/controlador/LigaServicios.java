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
import modelo.dao.LigaJPA;
import modelo.dao.PaisJPA;
import modelo.datos.Equipo;
import modelo.datos.Liga;
import modelo.datos.Pais;
import modelo.datos.Usuario;

@Path("ligas")
@Stateless
public class LigaServicios {
    @Inject
    LigaJPA ligaJPA;
    @Context
    private UriInfo uriInfo;

    public LigaServicios() {
        super();
    }

//  

    @GET
    @Produces("application/json")
    public Response listaTodasLigas() {
        Liga[] ligas = ligaJPA.listaTodasLigas();
        
        return Response.ok(ligas).build();
    }
    //

    @GET
    @Path("{nombre}")
    @Produces("application/json")
    public Response buscarPaisPorNombre(@PathParam("nombre") String nombre) {
    	Liga liga = ligaJPA.buscaLigaPorNombre(nombre);
    		if (liga == LigaJPA.ENTRADA_NULL)
    			return Response.status(Response.Status.NOT_FOUND).build();
    		return Response.ok(liga).build();
    }

    @POST
    @Path("{nombre}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
    		@PathParam("nombre") String nombre,Liga liga
            ) {
        if (ligaJPA.buscaLigaPorNombre(nombre) == LigaJPA.ENTRADA_NULL) {
            ligaJPA.nuevaLiga(liga);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre).build();
            return Response.created(uri).entity(liga).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }
    
	@PUT
	@Path("actualizar/{nombre}")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Produces(MediaType.APPLICATION_JSON)
	public Response actualizaLiga(@PathParam("nombre") String nombre, Liga liga) {
		

	      if (ligaJPA.actualizaLiga(nombre, liga) == true){
					return Response.status(Response.Status.NO_CONTENT).build();                
			}
	      else {
	      	ligaJPA.actualizaLiga(nombre, liga);
	          return Response.ok(liga).build();
	      
	  }
	}
	
    @DELETE
    @Path("{nombre}")
    @Produces("application/json")
    public Response borraEntrada(@PathParam("nombre") String nombre) {
            if (ligaJPA.borraLiga(nombre) == true)
                return Response.status(Response.Status.ACCEPTED).build();
            else
                return Response.status(Response.Status.NOT_FOUND).build();
    }
}
