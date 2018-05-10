/**
 * 
 */
package cuentas;

/**
 * Esta clase representa al titular de una cuenta, con su
 * nombre, apellidos y DNI.
 * @author Luis Cazares
 * @version 1.0
 */
public class Titular {
	
	private String nombre, apellidos, dni;
	private static final String CADENA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
	/**
	 * Constructor de la clase Titular con parámetros para todos 
	 * los atributos de la clase
	 * @param nombre Nombre del nuevo objeto Titular
	 * @param apellidos Apellidos del objeto
	 * @param dni DNI del objeto.
	 */
	public Titular(String nombre, String apellidos, String dni) {
		setNombre(nombre);
		this.apellidos = apellidos;
		setDni(dni);
		//if (comprobarDni(dni) == true)
		//	this.dni = dni;
	}
	
	
	/**
	 * Constructor sin parámetros de la clase Titular
	 */
	public Titular() {
		this.nombre = "";
		this.apellidos = "";
		this.dni = "";
	}

	/**
	 * Método para obtener el nombre del Titular
	 * @return nombre del titular
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * Método para cambiar el nombre del titular
	 * @param nombre el nombre a actualizar
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * Método para obtener los apellidos del titular
	 * @return los apellidos del titular
	 */
	public String getApellidos() {
		return apellidos;
	}

	/**
	 * Método para cambiar los apellidos del titular
	 * @param apellidos los apellidos a cambiar
	 */
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	/**
	 * Método para obtener el DNI del titular
	 * @return el dni
	 */
	public String getDni() {
		return dni;
	}

	/**
	 * Método para cambiar el DNI del titular
	 * @param dni el DNI a cambiar
	 */
	public void setDni(String dni) {
		//Convertimos la cadena a mayúsculas
		dni = dni.toUpperCase();
		
		if(this.comprobarDni(dni))
			this.dni = dni;
	}

	private boolean comprobarDni(String dni) {
		//Comprobamos si el dni que recibimos en este método
		//como parámetro de entrada cumple la estructura típica 
		//de un DNI: ########X
		if(dni.matches("[0-9]{8}[A-Z]{1}")) {
			//Sacamos la parte numérica del dni
			int indice = Integer.parseInt(dni.substring(0, 8)) % 23;
			//comprobamos si la letra del dni coincide con 
			//la que debería ser según el orden de las letras
			//contenidas en la constante CADENA_DNI
			if (CADENA_DNI.charAt(indice) == dni.charAt(8))
				return true;
			else
				return false;				
		}
		else
			return false;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Nombre y apellidos: " + nombre + " " + 
					apellidos + "\nDNI: " + dni;
	}
	
	@Override
	public boolean equals(Object o) {
		if (o == null)
			return false;
		//if (!(o instanceof Titular))
		if(o.getClass() != this.getClass())
			return false;
		
		Titular t = (Titular) o;
		
		if(!this.nombre.equals(t.nombre) ||
		!this.apellidos.equals(t.apellidos) ||
		!this.dni.equals(t.dni))
			return false;
		
		return true;
	}
	
}







