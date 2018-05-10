package cuentas;

public class CrearCuentaAhorro {

	public static void main (String[] args) {
		//Crear una cuenta de ahorro, creando también un titular,
		//asignando un número de cuenta, un saldo y un interés
		//de forma que una vez creados se muestre por pantalla
		//los datos de la cuenta
		Titular t = new Titular("Alejandro", "González", "12345678Z");
		String numCuenta = "ES1614650100917054430411";
		CuentaAhorro c = new CuentaAhorro(t, numCuenta, 2.5);
		System.out.println(c.toString());
	}

}
