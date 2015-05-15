package modelo.datos;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","pais","escudo","aficionados"})
@Entity
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Equipos p"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Equipos p WHERE p.nombre = :nombre")


})


public class Ligas {
	@Id
	@XmlTransient
	private String nombre;
	private Pais pais;
	
	public Ligas() {
		super();
	}

	public Ligas( String nombre, Pais pais) {
		
		this.nombre = nombre;
		this.pais = pais;
		
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	@ManyToOne
	@JoinColumn(name = "pais")
	public Pais getPais() {
		return pais;
	}

	public void setPais(Pais pais) {
		this.pais = pais;
	}
	
}

