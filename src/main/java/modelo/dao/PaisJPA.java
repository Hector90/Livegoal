package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import modelo.datos.Equipo;
import modelo.datos.Liga;
import modelo.datos.Pais;


@Stateless
public class PaisJPA {
    public static Pais ENTRADA_NULL = new Pais();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;
//
    public void nuevoPais(Pais Pais) {
          em.persist(Pais);
    }

    public Pais buscaPaisPorNombre(String nombre) {
        TypedQuery<Pais> query = em.createNamedQuery("Pais.encuentraPorNombre", Pais.class);
        query.setParameter("nombre", nombre);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Pais[] listaTodosPaises() {
        TypedQuery<Pais> query = em.createNamedQuery("Pais.encuentraTodos", Pais.class);
        List<Pais> listaPaises = query.getResultList();
        Pais[] Paises = new Pais[listaPaises.size()];
        listaPaises.toArray(Paises);
        
        return Paises;
    }
   
    public boolean actualizaPais(Pais Pais) {
        TypedQuery<Pais> query = em.createNamedQuery("Pais.encuentraPorNombre", Pais.class);
        query.setParameter("nombre", Pais.getNombre());
        try {
        	Pais PaisBBDD = query.getSingleResult();
        	PaisBBDD.setNombre(Pais.getNombre());
        	PaisBBDD.setAbreviatura(Pais.getAbreviatura());
        	PaisBBDD.setBandera(Pais.getBandera());
        	return true;
        } catch (NoResultException e) {
            return false;
        }
    }
    public boolean borraPais(String nombre) {
        TypedQuery<Pais> query = em.createNamedQuery("Pais.borraPorNombre", Pais.class);
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
