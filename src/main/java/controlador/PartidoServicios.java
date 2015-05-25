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
import java.util.Date;
import modelo.dao.EquipoJPA;
import modelo.dao.PaisJPA;
import modelo.dao.PartidoJPA;
import modelo.datos.Equipo;
import modelo.datos.Pais;
import modelo.datos.Partido;
import modelo.datos.Usuario;

@Path("partidos")
@Stateless
public class PartidoServicios {
    @Inject
    PartidoJPA partidoJPA;
    @Context
    private UriInfo uriInfo;

    public PartidoServicios() {
        super();
    }

//  

    @GET
    @Produces("application/json")
    public Response listaTodosPartidos() {
        Partido[] partidos = partidoJPA.listaTodosPartidos();
        
        return Response.ok(partidos).build();
    }
    //
    @GET
    @Path("estado/{estado}")
    @Produces("application/json")
    public Response listaTodosPartidosEstado(@PathParam("estado") int estado)  {
        Partido[] partidos = partidoJPA.listaTodosPartidosEstado(estado);
        
        return Response.ok(partidos).build();
    }
    
    @GET
    @Path("fecha/{fecha}")
    @Produces("application/json")
    public Response listaTodosPartidosEstado(@PathParam("fecha") String fecha)  {
        Partido[] partidos = partidoJPA.listaTodosPartidosFecha(fecha);
        
        return Response.ok(partidos).build();
    }
    
    @GET
    @Path("{nombre1}/{nombre2}")
    @Produces("application/json")
    public Response buscarPartidoPorEquipos(@PathParam("nombre1") String nombre1, @PathParam("nombre2") String nombre2) {
    	Partido partido = partidoJPA.buscaPartido(nombre1, nombre2);
    		if (partido == PartidoJPA.ENTRADA_NULL)
    			return Response.status(Response.Status.NOT_FOUND).build();
    		return Response.ok(partido).build();
    }
    
    
    
    @POST
    @Path("{nombre1}/{nombre2}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
    		@PathParam("nombre1") String nombre1,@PathParam("nombre2") String nombre2,Partido partido
            ) {
        if (partidoJPA.buscaPartido(partido.getEquipo1().getNombre(), partido.getEquipo2().getNombre()) == PartidoJPA.ENTRADA_NULL) {
            partidoJPA.nuevoPartido(partido);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre1+"/"+nombre2).build();
            return Response.created(uri).entity(partido).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }
    
	@PUT
	@Path("actualizar/{nombre}")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Produces(MediaType.APPLICATION_JSON)
	public Response actualizaEquipo(@PathParam("nombre1") String nombre1,@PathParam("nombre2") String nombre2, Partido partido) {
		

	      if (partidoJPA.actualizaPartido(nombre1, nombre2, partido) == true){
					return Response.status(Response.Status.NO_CONTENT).build();                
			}
	      else {
	      	partidoJPA.actualizaPartido(nombre1, nombre2, partido);
	          return Response.ok(partido).build();
	      
	  }
	}
	
    @DELETE
    @Path("{id}")
    @Produces("application/json")
    public Response borraEntrada(@PathParam("id") Long id ) {
            if (partidoJPA.borraPartido(id) == true)
                return Response.status(Response.Status.ACCEPTED).build();
            else
                return Response.status(Response.Status.NOT_FOUND).build();
    }
}
