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

@XmlRootElement
@XmlType(propOrder = {"idUsuario","nombre","apellidos","username","password","email","roles","estado"})
@Entity
@Table(name = "usuarios")
@NamedQueries({
	@NamedQuery(name="Usuario.encuentraTodos", query = "SELECT p FROM Usuario p order by p.nombre asc"),
	@NamedQuery(name="Usuario.encuentraPorLogin", query = "SELECT p FROM Usuario p WHERE p.username = :login")
})
//

public class Usuario {
	@Id
	@XmlTransient
	private int idUsuario;
	private String nombre;
	private String apellidos;
	private String username;
	private String password;
	private String email;
	private int roles;
	private int estado;
	
	
	public Usuario() {
		super();
	}

	public Usuario( String nombre, String apellidos, String username, String password, String email, int rol, int estado ) {
		
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.username = username;
		this.password = password;
		this.email = email;
		this.roles = roles;
		this.estado = estado;

	}
	



	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getRol() {
		return roles;
	}

	public void setRol(int rol) {
		this.roles = rol;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public boolean validarContrasena(String es_password) {
		/*BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
		return passwordEncryptor.checkPassword(es_password, this.es_password);*/
		 return es_password.equals(this.password);
	}
}

