package cuentas;

public class CrearCuenta {

	public static void main(String[] args) {
		
		Titular t = new Titular("Pablo", "Villar", "12345678Z");
		String numCuenta = "ES1234567890123456789012";
		CuentaCorriente cc = new CuentaCorriente(numCuenta, 0, t);
		cc.ingresarImporte(1000);
		cc.retirarImporte(250);

		System.out.println(cc);
	}

}
