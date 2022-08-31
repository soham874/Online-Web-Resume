package com.SohamsOnlineWebPortal.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;

public class UserResponse {

	private String name;
	private String email;
	private String message;
	private String timestamp;
	
	public UserResponse(String name, String email, String message) {
		
		DateTimeFormatter date_format = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		
		this.name = name;
		this.message = message;
		this.email = email;
		this.timestamp = date_format.format(now);
	}
	
	public String getName() {
		return name;
	}
	
	public String getMessage() {
		return message;
	}
	
	public String getTimeStamp() {
		return timestamp;
	}
	
	public String getEmail() {
		return email;
	}
	
	@Override
	public String toString() {
		return "{"
				+ "\n\"Session_UID\": \""+Webapp_key_params.getSessionUid()+"\","
				+ "\n\"TimeStamp\": \""+this.timestamp+"\","
				+ "\n\"Name\"     : \""+this.name+"\","
				+ "\n\"Email\"     : \""+this.email+"\","
				+ "\n\"Message\"  : \""+this.message+"\""
				+"\n}";
	}
}
