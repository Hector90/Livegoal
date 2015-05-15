package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import modelo.datos.Equipos;


@Stateless
public class EquipoJPA {
    public static Equipos ENTRADA_NULL = new Equipos();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;

    public void nuevoEquipo(Equipos equipo) {
          em.persist(equipo);
    }

    public Equipos buscaEquipoPorNombre(String nombre) {
        TypedQuery<Equipos> query = em.createNamedQuery("Equipo.encuentraPorNombre", Equipos.class);
        query.setParameter("nombre", nombre);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Equipos[] listaTodosEquipos() {
        TypedQuery<Equipos> query = em.createNamedQuery("Equipo.encuentraTodos", Equipos.class);
        List<Equipos> listaEquipos = query.getResultList();
        Equipos[] equipos = new Equipos[listaEquipos.size()];
        listaEquipos.toArray(equipos);
        return equipos;
    }
   
    public Equipos[] buscaEquipoPorPais(String pais) {
        TypedQuery<Equipos> query = em.createNamedQuery("Equipo.encuentraPorPais", Equipos.class);
        query.setParameter("pais", pais);
        List<Equipos> ListaEquipos = query.getResultList();
        Equipos[] equipos = new Equipos[ListaEquipos.size()];
        ListaEquipos.toArray(equipos);
        return equipos;
    }
    
    public boolean actualizaEquipo(Equipos equipo) {
        TypedQuery<Equipos> query = em.createNamedQuery("Equipo.encuentraPorNombre", Equipos.class);
        query.setParameter("nombre", equipo.getNombre());
        try {
        	Equipos equipoBBDD = query.getSingleResult();
        	equipoBBDD.setNombre(equipo.getNombre());
        	equipoBBDD.setPais(equipo.getPais());
        	equipoBBDD.setEscudo(equipo.getEscudo());
        	equipoBBDD.setAficionados(equipo.getAficionados());
            return true;
        } catch (NoResultException e) {
            return false;
        }
    }

	
}
