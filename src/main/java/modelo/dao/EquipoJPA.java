package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import modelo.datos.Equipo;


@Stateless
public class EquipoJPA {
    public static Equipo ENTRADA_NULL = new Equipo();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;
//
    public void nuevoEquipo(Equipo equipo) {
          em.persist(equipo);
    }

    public Equipo buscaEquipoPorNombre(String nombre) {
        TypedQuery<Equipo> query = em.createNamedQuery("Equipo.encuentraPorNombre", Equipo.class);
        query.setParameter("nombre", nombre);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Equipo[] listaTodosEquipos() {
        TypedQuery<Equipo> query = em.createNamedQuery("Equipo.encuentraTodos", Equipo.class);
        List<Equipo> listaEquipos = query.getResultList();
        Equipo[] equipos = new Equipo[listaEquipos.size()];
        listaEquipos.toArray(equipos);
        return equipos;
    }
   
    public Equipo[] buscaEquipoPorPais(String pais) {
        TypedQuery<Equipo> query = em.createNamedQuery("Equipo.encuentraPorPais", Equipo.class);
        query.setParameter("pais", pais);
        List<Equipo> ListaEquipos = query.getResultList();
        Equipo[] equipos = new Equipo[ListaEquipos.size()];
        ListaEquipos.toArray(equipos);
        return equipos;
    }
//    public boolean creaNuevaEntrada(Equipo equipo) {
//        em.persist(equipo);
//        return true;
//    }
    public boolean actualizaEquipo(Equipo equipo) {
    	 System.out.println("hola act");
        TypedQuery<Equipo> query = em.createNamedQuery("Equipo.encuentraPorNombre", Equipo.class);
       
        query.setParameter("nombre", equipo.getNombre());
        try {
        	Equipo equipoBBDD = query.getSingleResult();
        	equipoBBDD.setNombre(equipo.getNombre());
        	equipoBBDD.setPais(equipo.getPais());
        	equipoBBDD.setEscudo(equipo.getEscudo());
        	equipoBBDD.setAficionados(equipo.getAficionados());
            return true;
        } catch (NoResultException e) {
            return false;
        }
    }
    
    public boolean borraEquipo(String nombre) {
        TypedQuery<Equipo> query = em.createNamedQuery("Equipo.borraPorNombre", Equipo.class);
        query.setParameter("nombre", nombre);
        try {
            int deletedRows = query.executeUpdate();
            if(deletedRows == 1) return true;
            else return false;
        } catch (NoResultException e) {
            return false;
        }
    }

	
}
