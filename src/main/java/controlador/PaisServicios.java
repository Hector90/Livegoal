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
import modelo.dao.PaisJPA;
import modelo.datos.Equipo;
import modelo.datos.Pais;

@Path("paises")
@Stateless
public class PaisServicios {
    @Inject
    PaisJPA paisJPA;
    @Context
    private UriInfo uriInfo;

    public PaisServicios() {
        super();
    }

//  

    @GET
    @Produces("application/json")
    public Response listaTodosPaises() {
        Pais[] paises = paisJPA.listaTodosPaises();
        return Response.ok(paises).build();
    }
    

    @GET
    @Path("{nombre}")
    @Produces("application/json")
    public Response buscarEquipoPorNombre(@PathParam("nombre") String nombre) {
    	Pais pais = paisJPA.buscaPaisPorNombre(nombre);
    		if (pais == PaisJPA.ENTRADA_NULL)
    			return Response.status(Response.Status.NOT_FOUND).build();
    		return Response.ok(pais).build();
    }

    @POST
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
            @FormParam("nombre") String nombre,Pais pais
            ) {
        if (paisJPA.buscaPaisPorNombre(nombre) != PaisJPA.ENTRADA_NULL) {
            paisJPA.nuevoPais(pais);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre).build();
            return Response.created(uri).entity(pais).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }

    @PUT
    @Path("actualizar/{nombre}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response creaNuevaEntrada(@PathParam("nombre") String nombre, Pais pais) {
		System.out.println("Pais a modificar" + nombre);
		System.out.println("Su nuevo nombre" + pais.getNombre());
        if(!nombre.equals(pais.getNombre())) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        else {
            if (paisJPA.actualizaPais(pais)== true){
					return Response.status(Response.Status.NO_CONTENT).build();                
			}
            else {
            	paisJPA.nuevoPais(pais);
                return Response.ok(pais).build();
            }
        }
    }
    @DELETE
    @Path("{nombre}")
    @Produces("application/json")
    public Response borraEntrada(@PathParam("nombre") String nombre) {
            if (paisJPA.borraPais(nombre) == true)
                return Response.status(Response.Status.ACCEPTED).build();
            else
                return Response.status(Response.Status.NOT_FOUND).build();
    }
}
