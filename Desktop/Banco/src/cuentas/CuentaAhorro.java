/**
 * 
 */
package cuentas;

/**
 * @author CampusFP
 *
 */
public final class CuentaAhorro extends CuentaCorriente {

	private double interes;
	/**
	 * 
	 */
	public CuentaAhorro() {
		super(); //llamada al constructor sin parámetros de la superclase
		interes = 0;
		
	}
	
	public CuentaAhorro(Titular titular, String cc, double interes) {
		//tenemos que llamar al constructor de la superclase
		//que recibe como parámetros el número de cuenta, el saldo
		//y el titular
		super(cc, 0, titular);
		this.setInteres(interes);
	}

	public CuentaAhorro(Titular titular, String cc, double interes,
			double saldo) {
		//super(cc, saldo, titular);
		super();
		this.setNumCuenta(cc);
		this.setSaldo(saldo);
		this.setTitular(titular);
		this.setInteres(interes);
	}
	
	public CuentaAhorro(CuentaCorriente c, double interes) {
		super(c.numCuenta, c.saldo, c.titular);
		this.setInteres(interes);
	}
	/**
	 * @param numCuenta
	 * @param saldo
	 */
	public CuentaAhorro(String numCuenta, double saldo) {
		super(numCuenta, saldo);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param numCuenta
	 * @param saldo
	 * @param titular
	 */
	public CuentaAhorro(String numCuenta, double saldo, Titular titular) {
		super(numCuenta, saldo, titular);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param numCuenta
	 * @param saldo
	 * @param nombre
	 * @param apellidos
	 * @param dni
	 */
	public CuentaAhorro(String numCuenta, double saldo, String nombre, String apellidos, String dni) {
		super(numCuenta, saldo, nombre, apellidos, dni);
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the interes
	 */
	public double getInteres() {
		return interes;
	}

	/**
	 * @param interes the interes to set
	 */
	public void setInteres(double interes) {
		if(interes >= 0)
			this.interes = interes;
	}
	
	public double calcularInteres() {
		return this.saldo * this.interes / 100;
	}
	
	public double actualizarSaldo() {
		this.saldo += calcularInteres();
		return this.saldo;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return super.toString() + 
				"\nInterés: " + interes;
	}

}


















