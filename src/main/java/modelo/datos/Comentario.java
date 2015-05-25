package modelo.datos;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement
@XmlType(propOrder = {"id","idPartido", "nombreU","contenido","puntuacion"})
@Entity
@NamedQueries({
		
       @NamedQuery(name="Comentario.encuentraTodosPartido", query = "SELECT p FROM Comentario p WHERE p.idPartido=:idPartido"),
      // @NamedQuery(name="Comentario.encuentraTodosUsuario", query = "SELECT p FROM Comentario p WHERE p.idUsuario=:idUsuario"),
       @NamedQuery(name="Comentario.borraPorId", query = "DELETE FROM Comentario p WHERE p.id = :id"),
	})


public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @XmlTransient
    private Long id;
    private Long idPartido;
    private String nombreU;
    private String contenido;
    private int puntuacion;
    public Comentario() {
        super();
    }

	public Comentario(Long id, Long idPartido, String nombreU, String contenido,int puntuacion) {
		this.id = id;
		this.idPartido = idPartido;
		this.nombreU=nombreU;
		this.contenido = contenido;
		this.puntuacion=puntuacion;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public Long getidPartido() {
		return idPartido;
	}

	public void setidPartido(Long idPartido) {
		this.idPartido = idPartido;
	}

	public String getNombreU() {
		return nombreU;
	}

	public void setNombreU(String nombreU) {
		this.nombreU = nombreU;
	}
	
	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}
	public int getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}
}
