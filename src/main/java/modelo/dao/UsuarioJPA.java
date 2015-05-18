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

    public Usuario buscaUsuarioPorLogin(String login) {
        TypedQuery<Usuario> query = em.createNamedQuery("Usuario.encuentraPorLogin", Usuario.class);
        query.setParameter("login", login);
        try {
            return query.getSingleResult();
        } catch (NoResultException e) {
            return ENTRADA_NULL;
        }
    }
    
    public Usuario[] listaTodosUsuarios() {
        TypedQuery<Usuario> query = em.createNamedQuery("Usuario.encuentraTodos", Usuario.class);
        List<Usuario> listaUsuarios = query.getResultList();
        Usuario[] usuarios = new Usuario[listaUsuarios.size()];
        listaUsuarios.toArray(usuarios);
        return usuarios;
    }
   
	
    public boolean actualizaUsuario(Usuario usuario) {
        TypedQuery<Usuario> query = em.createNamedQuery("Usuario.encuentraPorLogin", Usuario.class);
        query.setParameter("login", usuario.getUsername());
        try {
        	Usuario usuarioBBDD = query.getSingleResult();
        	usuarioBBDD.setNombre(usuario.getNombre());
        	usuarioBBDD.setApellidos(usuario.getApellidos());
        	usuarioBBDD.setUsername(usuario.getUsername());
        	usuarioBBDD.setPassword(usuario.getPassword());
        	usuarioBBDD.setEmail(usuario.getEmail());
        	usuarioBBDD.setRol(usuario.getRol());
        	usuarioBBDD.setEstado(usuario.getEstado());
        	
        	return true;
        } catch (NoResultException e) {
            return false;
        }
    }

	
}
