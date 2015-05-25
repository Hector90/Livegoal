package modelo.dao;


import modelo.datos.Comentario;

import javax.ejb.Stateful;
import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import java.util.List;

@Stateless
public class ComentarioJPA {
    public static Comentario ENTRADA_NULL = new Comentario();
    @PersistenceContext(unitName = "livegoalJTA")

    EntityManager em;

    public void nuevoComentario(Comentario comentario) {
        em.persist(comentario);
    }

    public Comentario[] buscaComentarioPorPartido(Long idPartido) {
    	TypedQuery<Comentario> query = em.createNamedQuery("Comentario.encuentraTodosPartido", Comentario.class);
    	query.setParameter("idPartido", idPartido);
        List<Comentario> listaComentarios = query.getResultList();
        Comentario[] comentarios = new Comentario[listaComentarios.size()];
        listaComentarios.toArray(comentarios);
        return comentarios;
    }
//    public Comentario[] buscaComentarioPorUsuario(Long idUsuario) {
//    	TypedQuery<Comentario> query = em.createNamedQuery("Comentario.encuentraTodosUsuario", Comentario.class);
//    	query.setParameter("idUsuario", idUsuario);
//        List<Comentario> listaComentarios = query.getResultList();
//        Comentario[] comentarios = new Comentario[listaComentarios.size()];
//        listaComentarios.toArray(comentarios);
//        return comentarios;
//    }

    public boolean creaNuevaEntrada(Comentario comentario) {
        em.persist(comentario);
        return true;
    }



    public boolean borraComentario(Long id) {
        TypedQuery<Comentario> query = em.createNamedQuery("Comentario.borraPorId", Comentario.class);
        query.setParameter("id", id);
        try {
            int deletedRows = query.executeUpdate();
            if(deletedRows == 1) return true;
            else return false;
        } catch (NoResultException e) {
            return false;
        }
    }
}
