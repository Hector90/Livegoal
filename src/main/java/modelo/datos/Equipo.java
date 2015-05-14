package modelo.datos;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","pais","escudo","numAficionados"})
@Entity
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Equipo p"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Equipo p WHERE p.nombre = :nombre")


})


public class Equipo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@XmlTransient
	private Long id;
	private String nombre;
	private String pais;
	private String escudo;
	private String numAficionados;
	
	public Equipo() {
		super();
	}

	public Equipo(Long id, String nombre, String pais,
			String escudo, String numAficionados) {
		this.id = id;
		this.nombre = nombre;
		this.pais = pais;
		this.escudo = escudo;
		this.numAficionados = numAficionados;

	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getEscudo() {
		return escudo;
	}

	public void setEscudo(String escudo) {
		this.escudo = escudo;
	}

	public String getNumAficionados() {
		return numAficionados;
	}

	public void setNumAficionados(String numAficionados) {
		this.numAficionados = numAficionados;
	}




}

