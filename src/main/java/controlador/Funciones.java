package controlador;

import java.util.regex.Pattern;



public class Funciones {
	
	private static final String PATTERN_EMAIL = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
	            + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	
	/**
     * Validate given email with regular expression.
     *
     * @param email --> email for validation
     * @return true valid email, otherwise false
     */
    public static boolean validateEmail(String email) {
 
        // Compiles the given regular expression into a pattern.
        Pattern pattern = Pattern.compile(PATTERN_EMAIL);
 
        // Match the given input against this pattern
        java.util.regex.Matcher matcher = pattern.matcher(email);
        return matcher.matches();
 
    }
	/*
	
	public static String encrypt(String cadena, String key) { 
		StandardPBEStringEncryptor s = new StandardPBEStringEncryptor();
		s.setPassword(key);
		return s.encrypt(cadena);
	}
	public static String decrypt(String cadena, String key) {
		StandardPBEStringEncryptor s = new StandardPBEStringEncryptor();
		s.setPassword(key);
		String devuelve = "";
		try {
			devuelve = s.decrypt(cadena);
		} catch (Exception e) {
		
		}
		return devuelve;
	}
	*/
	public static boolean validarSesion(String token) {
		return true;
	}
	
	
}
