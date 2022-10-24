package com.SohamsOnlineWebPortal.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
public class UserResponse {

	String name;
	String email;
	String message;
	String timestamp;
	
	public UserResponse(String name, String email, String message) {
		
		DateTimeFormatter date_format = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		
		this.name = name;
		this.message = message;
		this.email = email;
		this.timestamp = date_format.format(now);
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
