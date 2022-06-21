package com.model;

public class VisitorInformation {

	private String browser;
	private int height;
	private int width;
	private String timestamp;
	
	public VisitorInformation(String browser, int height, int width, String timestamp) {
		this.browser = browser;
		this.height = height;
		this.width = width;
		this.timestamp = timestamp;
	}
	
	public String getBroswer() {
		return browser;
	}
	
	public int getHeight() {
		return height;
	}
	
	public int getWidth() {
		return width;
	}
	
	public String getTimeStamp() {
		return timestamp;
	}
	
	@Override
	public String toString() {
		return "{\r\n"
				+ "    \"TimeStamp\": \""+this.timestamp+"\",\r\n"
				+ "    \"Browser\": \""+this.browser+"\",\r\n"
				+ "    \"Height\": \""+this.height+"\",\r\n"
				+ "    \"Width\": \""+this.width+"\"\r\n"
				+ "}";
	}
}
