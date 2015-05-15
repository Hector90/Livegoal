package modelo.datos;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","abreviatura","bandera"})
@Entity
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Paises p"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Paises p WHERE p.nombre = :nombre")


})
@Table(name = "paises")


public class Pais {
	@Id
	@XmlTransient
	private String nombre;
	private String abreviatura;
	private String bandera;
	@OneToMany(cascade=CascadeType.ALL)
	private List ligas;
	
	public Pais() {
		super();
	}

	public Pais( String nombre, String abreviatura,
			String bandera) {
		
		this.nombre = nombre;
		this.abreviatura = abreviatura;
		this.bandera = bandera;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getAbreviatura() {
		return abreviatura;
	}

	public void setAbreviatura(String abreviatura) {
		this.abreviatura = abreviatura;
	}

	public String getBandera() {
		return bandera;
	}

	public void setBandera(String bandera) {
		this.bandera = bandera;
	}
	@XmlElement(name="listaLigas")
	public List getligas(){ return this.ligas; }

		
}
