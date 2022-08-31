package com.SohamsOnlineWebPortal.middleware;

import java.io.*;
import java.util.Arrays;

public class Encrypter {

	public static void main(String[] args) throws IOException {
		
		// uncomment and run indepedently to eencrypt keys
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		System.out.println("Please input string to encrypt :");
		String str = br.readLine();
		
		int[] encrypted = new int[str.length()];
		int encrypt_power = Webapp_key_params.getEncrypt_power();
		
		for( int i = 0 ; i < str.length() ; i++ ) {
			encrypted[i] = (str.charAt(i)-encrypt_power);
		}
				
		System.out.println("Encrypted string - \n"+Arrays.toString(encrypted)+"\nPlease store this integer array with appropriate variable name in the \"webapp_key_params.java\" file.");

	}
}
