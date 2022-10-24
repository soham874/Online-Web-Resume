package com.SohamsOnlineWebPortal.model;

import java.util.Date;

import com.SohamsOnlineWebPortal.config.BaseConstants;
import com.SohamsOnlineWebPortal.config.CommonUtils;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class VisitorInformation {

	String browser;
	int height;
	int width;
	String timestamp;
	String time;
	double actualaspectratio;
	String devicetype;
	
	String DeviceType( int width ) {	
		if( width < 500 )
			return "Mobile";
		if( width < 900 )
			return "Tablet";
		return "Desktop/Laptop";	
	}
	
	@SuppressWarnings("deprecation")
	public VisitorInformation(String browser, int height, int width) {
		
		this.browser = browser;
		this.height = height;
		this.width = width;
		
		Date currentUTCTime = CommonUtils.getUTCTimeStamp();
		
		this.timestamp = currentUTCTime.toString();
		this.time = String.valueOf(currentUTCTime.getHours());
		this.devicetype = DeviceType(width);
		this.actualaspectratio = (double)width/(double)height;
	}
	
	@Override
	public String toString() {
		return "{\r\n"
				+ "    \"Session_UID\": \""+BaseConstants.SESSION_UID+"\",\r\n"
				+ "    \"Timestamp\": \""+this.timestamp+"\",\r\n"
				+ "    \"Hour of day (UTC)\": \""+this.time+"\",\r\n"
				+ "    \"Browser\": \""+this.browser+"\",\r\n"
				+ "    \"Height\": \""+this.height+"\",\r\n"
				+ "    \"Actual Aspect Ratio\": \""+this.actualaspectratio+"\",\r\n"
				+ "    \"Device Type\": \""+this.devicetype+"\",\r\n"
				+ "    \"Width\": \""+this.width+"\"\r\n"
				+ "}";
	}
}
