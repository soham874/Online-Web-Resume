package com.model;

public class UserResponse {

	private String name;
	private String message;
	private String timestamp;
	
	public UserResponse(String name, String message, String timestamp) {
		this.name = name;
		this.message = message;
		this.timestamp = timestamp;
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
	
	public String toString() {
		return "{"
				+ "\n\"Name\"     : \""+this.name+"\","
				+ "\n\"TimeStamp\": \""+this.timestamp+"\","
				+ "\n\"Message\"  : \""+this.message+"\""
				+"\n}";
	}
}
