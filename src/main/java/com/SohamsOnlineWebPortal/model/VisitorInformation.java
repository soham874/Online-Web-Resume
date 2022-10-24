package com.SohamsOnlineWebPortal.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
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
	
	public VisitorInformation(String browser, int height, int width) {
		
		this.browser = browser;
		this.height = height;
		this.width = width;
		
		DateTimeFormatter date_format = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		DateTimeFormatter time_format = DateTimeFormatter.ofPattern("HH");
		LocalDateTime now = LocalDateTime.now();

		this.timestamp = date_format.format(now);
		this.time = time_format.format(now);
		this.devicetype = DeviceType(width);
		this.actualaspectratio = (double)width/(double)height;
		
		UUID session_id = UUID.randomUUID();
		System.out.println("Session ID -> "+session_id.toString());
		Webapp_key_params.setSessionUid(session_id.toString());
	}
	
	@Override
	public String toString() {
		return "{\r\n"
				+ "    \"Session_UID\": \""+Webapp_key_params.getSessionUid()+"\",\r\n"
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
