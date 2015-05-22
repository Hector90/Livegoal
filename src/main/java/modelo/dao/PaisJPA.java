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
   
    public boolean actualizaPais(String nombre,Pais pais) {
    	TypedQuery<Pais> query = em.createNamedQuery("Pais.updatePorNombre", Pais.class);
        query.setParameter("nombre", pais.getNombre());
        query.setParameter("abreviatura",pais.getAbreviatura());
        query.setParameter("nombre2", nombre);
        query.setParameter("bandera", pais.getBandera());
        System.out.println(nombre);
        try {
            int deletedRows = query.executeUpdate();
            if(deletedRows == 1) return true;
            else return false;
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
