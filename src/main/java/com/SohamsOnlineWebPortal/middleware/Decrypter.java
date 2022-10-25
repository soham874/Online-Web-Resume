package com.SohamsOnlineWebPortal.middleware;

import com.SohamsOnlineWebPortal.config.constants.BaseConstants;

public class Decrypter {

	public static String Decrypt(int[] encrypted) {
		
		String res = "";
		int encrypt_power = BaseConstants.ENCRYPT_POWER;
		
		for( int num : encrypted )
			res += (char)(num+encrypt_power);
		
		return res;
	}
}
