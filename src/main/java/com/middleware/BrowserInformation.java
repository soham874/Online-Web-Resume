package com.middleware;

public class BrowserInformation {
	
	public static String DeviceType( int width ) {
		
		if( width < 500 )
			return "Mobile";
		
		if( width < 900 )
			return "Tablet";
		
		return "Desktop/Laptop";
		
	}
}
