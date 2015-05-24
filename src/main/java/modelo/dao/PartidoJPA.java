package modelo.dao;

import java.util.List;
import java.util.Date;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import java.text.*;

import modelo.datos.Equipo;
import modelo.datos.Partido;

import java.util.Locale;

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
    
    public Partido[] listaTodosPartidosEstado(int estado) {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraTodosEstado", Partido.class);
        query.setParameter("estado", estado);
        List<Partido> listaPartidos = query.getResultList();
        Partido[] partidos = new Partido[listaPartidos.size()];
        listaPartidos.toArray(partidos);
        return partidos;
    }
    
    public Partido[] listaTodosPartidosFecha(String fecha) {
        TypedQuery<Partido> query = em.createNamedQuery("Partido.encuentraTodosFecha", Partido.class);
        Date date= new Date();
        ParsePosition pos = new ParsePosition(0);
        SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
        date = format.parse(fecha,pos);

        
        query.setParameter("fecha", date);
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
    
    public boolean actualizaPartido(String equipo1,String equipo2, Partido partido) {
    	TypedQuery<Equipo> query = em.createNamedQuery("Partido.updatePorEquipos", Equipo.class);
        query.setParameter("e1", partido.getEquipo1());
        query.setParameter("e2", partido.getEquipo2());
        query.setParameter("fecha", partido.getFecha());
        query.setParameter("jornada", partido.getJornada());
        query.setParameter("liga", partido.getLiga());
        query.setParameter("estado", partido.getEstado());
        query.setParameter("goles1", partido.getGoles1());
        query.setParameter("goles2", partido.getGoles2());
        query.setParameter("amarillas1", partido.getAmarillas1());
        query.setParameter("amarillas2", partido.getAmarillas2());
        query.setParameter("rojas1", partido.getRojas1());
        query.setParameter("rojas2", partido.getRojas2());
        
        try {
            int deletedRows = query.executeUpdate();
            if(deletedRows == 1) return true;
            else return false;
        } catch (NoResultException e) {
            return false;
        }
    }
    
    public boolean borraPartido(String equipo1, String equipo2) {
        TypedQuery<Equipo> query = em.createNamedQuery("Partidos.borraPorEquipos", Equipo.class);
        query.setParameter("e1", equipo1);
        query.setParameter("e2", equipo2);
        try {
            int deletedRows = query.executeUpdate();
            if(deletedRows == 1) return true;
            else return false;
        } catch (NoResultException e) {
            return false;
        }
    }
	
}
