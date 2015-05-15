package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import modelo.datos.Equipo;
import modelo.datos.Liga;


@Stateless
public class LigaJPA {
    public static Liga ENTRADA_NULL = new Liga();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;
//
    public void nuevaLiga(Liga liga) {
          em.persist(liga);
    }

    public Liga buscaLigaPorNombre(String nombre) {
        TypedQuery<Liga> query = em.createNamedQuery("Liga.encuentraPorNombre", Liga.class);
        query.setParameter("nombre", nombre);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Liga[] listaTodasLigas() {
        TypedQuery<Liga> query = em.createNamedQuery("Liga.encuentraTodas", Liga.class);
        List<Liga> listaLigas = query.getResultList();
        Liga[] ligas = new Liga[listaLigas.size()];
        listaLigas.toArray(ligas);
        
        return ligas;
    }
   
    public Liga[] buscaLigaPorPais(String pais) {
        TypedQuery<Liga> query = em.createNamedQuery("Liga.encuentraPorPais", Liga.class);
        query.setParameter("pais", pais);
        List<Liga> ListaLigas = query.getResultList();
        Liga[] ligas = new Liga[ListaLigas.size()];
        ListaLigas.toArray(ligas);
        return ligas;
    }
    
    public boolean actualizaLiga(Liga liga) {
        TypedQuery<Liga> query = em.createNamedQuery("Liga.encuentraPorNombre", Liga.class);
        query.setParameter("nombre", liga.getNombre());
        try {
        	Liga ligaBBDD = query.getSingleResult();
        	ligaBBDD.setNombre(liga.getNombre());
        	ligaBBDD.setPais(liga.getPais());
        	return true;
        } catch (NoResultException e) {
            return false;
        }
    }
	
}
