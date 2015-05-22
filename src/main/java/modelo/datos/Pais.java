package modelo.datos;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlIDREF;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"nombre","abreviatura","bandera","listaLigas","listaEquipos"})
@Entity
@NamedQueries({
	@NamedQuery(name="Pais.encuentraTodos", query = "SELECT p FROM Pais p"),
	@NamedQuery(name="Pais.encuentraPorNombre", query = "SELECT p FROM Pais p WHERE p.nombre = :nombre"),
	@NamedQuery(name="Pais.borraPorNombre", query = "DELETE FROM Pais p WHERE p.nombre = :nombre"),
	@NamedQuery(name="Pais.updatePorNombre", query = "update Pais p set p.nombre=:nombre, p.abreviatura=:abreviatura,"
			+ "p.bandera=:bandera"
			+ " where p.nombre=:nombre2")
})
@Table(name = "paises")
//

public class Pais {
	@Id
	@XmlTransient
	private String nombre;
	private String abreviatura;
	private String bandera;
	
	@OneToMany(mappedBy="pais" )
	private List<Liga> listaLigas;
	
	@OneToMany(mappedBy="pais" )
	private List<Equipo> listaEquipos;
	
	
	public Pais() {
		super();
	}

	public Pais( String nombre, String abreviatura,
			String bandera) {
		
		this.nombre = nombre;
		this.abreviatura = abreviatura;
		this.bandera = bandera;
	}
	
	//@XmlAttribute 
	@XmlIDREF
	public void setListaLigas(List<Liga> listaLigas) {
        this.listaLigas = listaLigas;
    }
    
	@XmlElement(name="listaLigas")
	public List<Liga> getListaLigas() {
        return listaLigas;
    }
 
    public void addLiga(Liga l) {
 
        listaLigas.add(l);
    }
   
    @XmlIDREF
    public void setListaEquipos(List<Equipo> listaEquipos) {
        this.listaEquipos = listaEquipos;
    }
    @XmlElement(name="listaEquipos")
    public List<Equipo> getListaEquipos() {
        return listaEquipos;
    }
 
    public void addEquipo(Liga l) {
 
        listaLigas.add(l);
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
	//@XmlElement(name="listaLigas")
	//public List getligas(){ return this.ligas; }

		
}

