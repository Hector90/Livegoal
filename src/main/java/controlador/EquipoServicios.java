package controlador;

import java.net.URI;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
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
import modelo.datos.Equipos;

@Path("Admin/Equipos")
@Stateless
public class EquipoServicios {
    @Inject
    EquipoJPA equipoJPA;
    @Context
    private UriInfo uriInfo;

    public EquipoServicios() {
        super();
    }

//    @GET
//    @Path("{nombre}")
//    @Produces("application/json")
//    public Response buscarEquipoPorNombre(@PathParam("nombre") String nombre) {
//        Equipo equipo = equipoJPA.buscaEquipoPorNombre(nombre);
//        
//        if (equipo == EquipoJPA.ENTRADA_NULL)
//            return Response.status(Response.Status.NOT_FOUND).build();
//        return Response.ok(equipo).build();
//    }

    

    @GET
    @Produces("application/json")
    public Response listaTodosEquipos() {
        Equipos[] equipos = equipoJPA.listaTodosEquipos();
        return Response.ok(equipos).build();
    }


    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response nuevaEntradaDesdeFormulario(
            @FormParam("nombre") String nombre
            ) {
        if (equipoJPA.buscaEquipoPorNombre(nombre) == EquipoJPA.ENTRADA_NULL) {
            Equipos equipo = new Equipos();
            equipoJPA.nuevoEquipo(equipo);
            UriBuilder uriBuilder = uriInfo.getAbsolutePathBuilder();
            URI uri = uriBuilder.path(nombre).build();
            return Response.created(uri).entity(equipo).build();
        } else
            return Response.status(Response.Status.CONFLICT).build();
    }

    @PUT
    @Path("{nombre}")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public Response creaNuevaEntrada(@PathParam("nombre") String nombre, Equipos equipo) {
		
        if(!nombre.equals(equipo.getNombre())) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        else {
            if (equipoJPA.actualizaEquipo(equipo) == true){
					return Response.status(Response.Status.NO_CONTENT).build();                
			}
            else {
            	equipoJPA.nuevoEquipo(equipo);
                return Response.ok(equipo).build();
            }
        }
    }

  
}
