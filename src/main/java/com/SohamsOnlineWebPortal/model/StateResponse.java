package com.SohamsOnlineWebPortal.model;

public class StateResponse {

	private int status;
	private String body;
	private String message;
	
	public StateResponse(int status, String body, String message) {
		this.status = status;
		this.body = body;
		this.message = message;
	}
	
	public int getStatus() {
		return this.status;
	}
	
	public String getBody() {
		return this.body;
	}
	
	public String getMessage() {
		return this.message;
	}
	
	public boolean isSuccess() {
		
		if(  status >= 200 && status < 400 )
			return true;
		
		return false;
		
	}	
	
	public String toString() {
		return "{"
				+ "\n\"status\" : \""+this.status+"\","
				+ "\n\"message\": \""+this.message+"\","
				+ "\n\"body\"   : "+this.body
				+"\n}\n";
	}
}