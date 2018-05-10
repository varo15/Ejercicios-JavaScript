package cuentas;

public class CrearTitular {

	public static void main(String[] args) {
	
		Titular t = new Titular("Pablo", "Villar", "12345678Z");
		Titular t2 = null; 
		String numCuenta = "ES1234567890123456789012";
		CuentaCorriente cc = new CuentaCorriente(numCuenta, 0, t);
				
		boolean resultado = t.equals(cc);
		System.out.println(resultado);

	}

}



