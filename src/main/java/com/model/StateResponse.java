package com.model;

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
	
	public String toString() {
		return "{"
				+ "\nstatus : "+this.status
				+ "\nmessage: "+this.message
				+ "\nbody   : "+this.body
				+"\n}\n";
	}
}