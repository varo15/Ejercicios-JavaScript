package cuentas;

public class CrearCuentaAhorro {

	public static void main (String[] args) {
		//Crear una cuenta de ahorro, creando tambi�n un titular,
		//asignando un n�mero de cuenta, un saldo y un inter�s
		//de forma que una vez creados se muestre por pantalla
		//los datos de la cuenta
		Titular t = new Titular("Alejandro", "Gonz�lez", "12345678Z");
		String numCuenta = "ES1614650100917054430411";
		CuentaAhorro c = new CuentaAhorro(t, numCuenta, 2.5);
		System.out.println(c.toString());
	}

}
