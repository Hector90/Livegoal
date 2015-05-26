package modelo.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import modelo.datos.Usuario;

@Stateless
public class UsuarioJPA {
    public static Usuario ENTRADA_NULL = new Usuario();
    @PersistenceContext(unitName = "livegoalJTA")
    EntityManager em;
//
    public void nuevoUsuario(Usuario usuario) {
          em.persist(usuario);
    }

    public Usuario buscaUsuarioPorLogin(String username, String password) {
        TypedQuery<Usuario> query = em.createNamedQuery("Usuario.login", Usuario.class);
        query.setParameter("username", username);
        query.setParameter("password", password);
        
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Usuario buscaUsuarioPorNombre(String username) {
        TypedQuery<Usuario> query = em.createNamedQuery("Usuario.nombre", Usuario.class);
        query.setParameter("username", username);

        
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
	
}
