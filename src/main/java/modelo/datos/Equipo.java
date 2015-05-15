package modelo.datos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","pais","escudo","aficionados"})
@Entity
@Table(name = "equipos")
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Equipo p order by nombre asc"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Equipo p WHERE p.nombre = :nombre")
})
//

public class Equipo {
	@Id
	@XmlTransient
	private String nombre;
	private String pais;
	private String escudo;
	private String aficionados;
	
	public Equipo() {
		super();
	}

	public Equipo( String nombre, String pais,
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

