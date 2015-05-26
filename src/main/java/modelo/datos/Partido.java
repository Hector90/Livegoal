package modelo.datos;



import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlID;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"id","equipo1","equipo2","fecha","jornada","liga","goles1","goles2","amarillas1","amarillas2","rojas1","rojas2","estado"})
@Entity
@NamedQueries({
	@NamedQuery(name="Partido.encuentraTodos", query = "SELECT p FROM Partido p"),
	@NamedQuery(name="Partido.encuentraPorEquipos", query = "SELECT p FROM Partido p WHERE p.equipo1.nombre = :e1 and p.equipo2.nombre = :e2"),
	@NamedQuery(name="Partido.encuentraTodosEstado", query = "SELECT p FROM Partido p WHERE p.estado = :estado "),
	@NamedQuery(name="Partido.encuentraTodosFecha", query = "SELECT p FROM Partido p WHERE p.fecha BETWEEN :startDate AND :endDate "),
	
	@NamedQuery(name="Partido.encuentraPartidosEquipo", query = "SELECT p FROM Partido p WHERE p.equipo1 = :e1 or p.equipo2 = :e1"),
	@NamedQuery(name="Partido.encuentraPorLiga", query = "SELECT p FROM Partido p WHERE p.liga = :liga "),
	@NamedQuery(name="Partido.borraPorId", query = "DELETE FROM Partido p WHERE p.id = :id"),
	@NamedQuery(name="Partido.updatePorEquipos", query = "update Partido p set  p.fecha=:fecha,p.jornada=:jornada,p.liga=:liga,p.estado=:estado,p.goles1=:goles1,"
			+ "p.goles2=:goles2,p.amarillas1=:amarillas1,p.amarillas2=:amarillas2,p.rojas1=:rojas1,p.rojas2=:rojas2"
			+ " WHERE p.equipo1 = :e1 and p.equipo2 = :e2")
	


})
@Table(name = "partidos")
//
public class Partido {
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	@XmlTransient
	private Long id;
	@Id
	@ManyToOne
	@JoinColumn(name="equipo1")
	private Equipo equipo1;
	@Id
	@ManyToOne
	@JoinColumn(name="equipo2")
	private Equipo equipo2;
    @Temporal(TemporalType.TIMESTAMP)
	private Date fecha;
	private int jornada;
	@ManyToOne
	@JoinColumn(name="liga")
	private Liga liga;
	private int estado;
	private int goles1;
	private int goles2;
	private int amarillas1;
	private int amarillas2;
	private int rojas1;
	private int rojas2;
		
	public Partido() {
		super();
	}

	public Partido(long id, Equipo e1, Equipo e2, Date f, int jor, Liga l, int estado, int g1, int g2, int a1, int a2, int r1, int r2) {
		this.id = id;
		this.equipo1=e1;
		this.equipo2=e2;
		this.fecha=f;
		this.jornada=jor;
		this.liga=l;
		this.estado=estado;
		this.goles1=g1;
		this.goles2=g2;
		this.amarillas1=a1;
		this.amarillas2=a2;
		this.rojas1=r1;
		this.rojas2=r2;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}    
	
	public Equipo getEquipo1() {
		return equipo1;
	}

	public void setEquipo1(Equipo equipo1) {
		this.equipo1 = equipo1;
	}

	public Equipo getEquipo2() {
		return equipo2;
	}

	public void setEquipo2(Equipo equipo2) {
		this.equipo2 = equipo2;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public int getJornada() {
		return jornada;
	}

	public void setJornada(int jornada) {
		this.jornada = jornada;
	}

	public Liga getLiga() {
		return liga;
	}

	public void setLiga(Liga liga) {
		this.liga = liga;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public int getGoles1() {
		return goles1;
	}

	public void setGoles1(int goles1) {
		this.goles1 = goles1;
	}

	public int getGoles2() {
		return goles2;
	}

	public void setGoles2(int goles2) {
		this.goles2 = goles2;
	}

	public int getAmarillas1() {
		return amarillas1;
	}

	public void setAmarillas1(int amarillas1) {
		this.amarillas1 = amarillas1;
	}

	public int getAmarillas2() {
		return amarillas2;
	}

	public void setAmarillas2(int amarillas2) {
		this.amarillas2 = amarillas2;
	}

	public int getRojas1() {
		return rojas1;
	}

	public void setRojas1(int rojas1) {
		this.rojas1 = rojas1;
	}

	public int getRojas2() {
		return rojas2;
	}

	public void setRojas2(int rojas2) {
		this.rojas2 = rojas2;
	}
		
}

