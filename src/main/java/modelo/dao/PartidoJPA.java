package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import modelo.datos.Partido;


@Stateless
public class PartidoJPA {
    public static Partido ENTRADA_NULL = new Partido();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;
//
    public void nuevoPartido(Partido partido) {
          em.persist(partido);
    }

    public Partido buscaPartido(String e1, String e2) {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraPorEquipos", Partido.class);
        query.setParameter("e1", e1);
        query.setParameter("e2", e2);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Partido[] listaTodosPartidos() {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraTodos", Partido.class);
        List<Partido> listaPartidos = query.getResultList();
        Partido[] partidos = new Partido[listaPartidos.size()];
        listaPartidos.toArray(partidos);
        return partidos;
    }
   
    public Partido[] buscaPartidoPorLiga(String liga) {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraPorLiga", Partido.class);
        query.setParameter("liga", liga);
        List<Partido> ListaPartidos = query.getResultList();
        Partido[] partidos = new Partido[ListaPartidos.size()];
        ListaPartidos.toArray(partidos);
        return partidos;
    }
    
    public boolean actualizaPartido(Partido partido) {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraPorEquipos", Partido.class);
        query.setParameter("e1", partido.getEquipo1());
        query.setParameter("e2", partido.getEquipo2());
        
        try {
        	Partido partidoBBDD = query.getSingleResult();
        	partidoBBDD.setEquipo1(partido.getEquipo1());
        	partidoBBDD.setEquipo2(partido.getEquipo2());
        	partidoBBDD.setAmarillas1(partido.getAmarillas1());
        	partidoBBDD.setAmarillas2(partido.getAmarillas2());
        	partidoBBDD.setRojas1(partido.getRojas1());
        	partidoBBDD.setRojas2(partido.getRojas2());
        	partidoBBDD.setFecha(partido.getFecha());
        	partidoBBDD.setJornada(partido.getJornada());
        	partidoBBDD.setGoles1(partido.getGoles1());
        	partidoBBDD.setGoles2(partido.getGoles2());
        	partidoBBDD.setLiga(partido.getLiga());
        	partidoBBDD.setEstado(partido.getEstado());  	
        	
        	return true;
        } catch (NoResultException e) {
            return false;
        }
    }

	
}
