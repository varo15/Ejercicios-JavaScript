package cuentas;

public class CuentaCorriente implements Contable {


	protected String numCuenta;
	protected double saldo;
	protected Titular titular;
	
	public CuentaCorriente() {
		this.numCuenta = "";
		this.saldo = 0;
		this.titular = new Titular();		
	}
	
	/**
	 * @param numCuenta
	 * @param saldo
	 */
	public CuentaCorriente(String numCuenta, double saldo) {
		this.numCuenta = numCuenta;
		this.saldo = saldo;
		this.titular = new Titular();
	}
	/**
	 * @param numCuenta
	 * @param saldo
	 * @param titular
	 */
	public CuentaCorriente(String numCuenta, double saldo, Titular titular) {
		this.setNumCuenta(numCuenta);
		this.setSaldo(saldo);
		this.titular = titular;
	}
	
	public CuentaCorriente(String numCuenta, double saldo, String nombre,
			String apellidos, String dni) {
		this.setNumCuenta(numCuenta);
		this.saldo = saldo;
		this.titular = new Titular(nombre, apellidos, dni);
	}

	/**
	 * @return the numCuenta
	 */
	public String getNumCuenta() {
		return numCuenta;
	}

	/**
	 * @param numCuenta the numCuenta to set
	 */
	public void setNumCuenta(String numCuenta) {
		if(numCuenta.matches("[A-Z]{2}[0-9]{22}"))
			this.numCuenta = numCuenta;
	}

	/**
	 * @return the saldo
	 */
	public double getSaldo() {
		return saldo;
	}

	/**
	 * @param saldo the saldo to set
	 */
	public void setSaldo(double saldo) {
		if(saldo >= 0)
			this.saldo = saldo;
	}

	/**
	 * @return the titular
	 */
	public Titular getTitular() {
		return titular;
	}

	/**
	 * @param titular the titular to set
	 */
	public void setTitular(Titular titular) {
		this.titular = titular;
	}
	
	public double ingresarImporte(double importe) {
		
		if (importe > 0)
			this.saldo += importe;
		
		return this.saldo;
	}

	public double retirarImporte(double importe) {
		
		if(importe > 0 && this.saldo >= importe)
			this.saldo -= importe;
		
		return this.saldo;
		
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Número de cuenta: " + numCuenta +
				"\nSaldo: " + saldo +
				"\n" + titular.toString(); 
				
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CuentaCorriente other = (CuentaCorriente) obj;
		if (this.numCuenta == null) {
			if (other.numCuenta != null)
				return false;
		} else if (!this.numCuenta.equals(other.numCuenta))
			return false;
		if (saldo != other.saldo)
			return false;
		if (titular == null) {
			if (other.titular != null)
				return false;
		} else if (!titular.equals(other.titular))
			return false;
		return true;
	}
	
	
}
