package modelo.datos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlID;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

import controlador.Funciones;

@XmlRootElement
@XmlType(propOrder = {"nombre","pais","escudo","aficionados"})
@Entity
@Table(name = "equipos")
@NamedQueries({
	@NamedQuery(name="Equipo.encuentraTodos", query = "SELECT p FROM Equipo p order by p.nombre asc"),
	@NamedQuery(name="Equipo.encuentraPorNombre", query = "SELECT p FROM Equipo p WHERE p.nombre = :nombre"),
	@NamedQuery(name="Equipo.borraPorNombre", query = "DELETE FROM Equipo p WHERE p.nombre = :nombre"),
	@NamedQuery(name="Equipo.updatePorNombre", query = "update Equipo p set p.nombre=:nombre,p.pais = :pais,p.escudo=:escudo,p.aficionados=:aficionados where p.nombre=:nombre2")
})
//

public class Equipo {
	@Id
	@XmlTransient
	private String nombre;
	@ManyToOne
    @JoinColumn(name="pais")
	private Pais pais;
	private String escudo;
	private String aficionados;
		
	public Equipo() {
		super();
	}

	public Equipo( String nombre, Pais pais,
			String escudo, String aficionados) {
		
		this.nombre = nombre;
		this.pais = pais;
		this.escudo = escudo;
		this.aficionados = aficionados;

	}
	@XmlID 
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Pais getPais() {
		return pais;
	}

	public void setPais(Pais pais) {
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
		if(Funciones.isNumeric(aficionados)){
			this.aficionados = aficionados;
			
		}else{
			this.aficionados = "0";			
		}
		
		
	}




}

