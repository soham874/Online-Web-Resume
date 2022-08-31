package com.SohamsOnlineWebPortal.middleware;

public class Decrypter {

	public static String Decrypt(int[] encrypted) {
		
		String res = "";
		int encrypt_power = Webapp_key_params.getEncrypt_power();
		
		for( int num : encrypted )
			res += (char)(num+encrypt_power);
		
		return res;
	}
}
