package modelo.datos;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","pais"})
@Entity
@NamedQueries({
	@NamedQuery(name="Liga.encuentraTodos", query = "SELECT p FROM Liga p"),
	@NamedQuery(name="Liga.encuentraPorNombre", query = "SELECT p FROM Liga p WHERE p.nombre = :nombre")


})
@Table(name = "ligas")

public class Liga {
	@Id
	@XmlTransient
	private String nombre;
	private String pais;
	
	public Liga() {
		super();
	}

	public Liga( String nombre, String pais) {
		
		this.nombre = nombre;
		this.pais = pais;
		
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
	
}
