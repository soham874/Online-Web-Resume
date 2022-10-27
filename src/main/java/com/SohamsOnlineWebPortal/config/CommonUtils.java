package com.SohamsOnlineWebPortal.config;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import com.SohamsOnlineWebPortal.config.constants.BaseConstants;

public class CommonUtils {
	
	/*
	 * 1 - error (red)
	 * 2 - success (green)
	 * 3 - info (black)
	 * */
	public static void AddLog(String log, int type) {
		String logMessage = "\n"+getUTCTimeStamp()+"\t"+BaseConstants.SESSION_UID+" \t";
		if( type == 1 ) {
			logMessage += "error \t\t\t";
		}
		
		if( type == 2 ) {
			logMessage += "success \t\t";
		}
		
		if( type == 3 ) {
			logMessage += "information \t\t";
		}
		
		logMessage += log;
		System.out.println(logMessage);
	}
	
	public static Date getUTCTimeStamp() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");  
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));   
        SimpleDateFormat ldf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");  
        Date d1 = null;    
        try {   
            d1 = ldf.parse( sdf.format(new Date()) );  
        }     
        catch (java.text.ParseException e) {    
            e.printStackTrace();  
            System.out.println(e.getMessage());  
        }  
        
        return d1;  
	}

	public static String DeviceType( int width ) {	
		if( width < 500 )
			return "Mobile";
		if( width < 900 )
			return "Tablet";
		return "Desktop/Laptop";	
	}
}