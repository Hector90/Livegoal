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
@XmlType(propOrder = {"nombre","pais","escudo","aficionados"})
@Entity
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Equipos p"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Equipos p WHERE p.nombre = :nombre")


})


public class PartidosJPA {
	@Id
	@XmlTransient
	private String nombre;
	private String pais;
	private String escudo;
	private String aficionados;
	
	public PartidosJPA() {
		super();
	}

	public PartidosJPA( String nombre, String pais,
			String escudo, String aficionados) {
		
		this.nombre = nombre;
		this.pais = pais;
		this.escudo = escudo;
		this.aficionados = aficionados;

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

	public String getAficionados() {
		return aficionados;
	}

	public void setAficionados(String aficionados) {
		this.aficionados = aficionados;
	}




}

