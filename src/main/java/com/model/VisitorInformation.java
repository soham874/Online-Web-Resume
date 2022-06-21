package com.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.middleware.BrowserInformation;

public class VisitorInformation {

	private String browser;
	private int height;
	private int width;
	private String timestamp;
	private double actualaspectratio;
	private String devicetype;
	
	public VisitorInformation(String browser, int height, int width) {
		
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		LocalDateTime now = LocalDateTime.now();  
		
		this.browser = browser;
		this.height = height;
		this.width = width;
		this.timestamp = dtf.format(now);
		this.devicetype = BrowserInformation.DeviceType(width);
		this.actualaspectratio = (double)width/(double)height;
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
	
	public double getActualaspectratio() {
		return actualaspectratio;
	}
	
	public String getDeviceType() {
		return devicetype;
	}
	
	@Override
	public String toString() {
		return "{\r\n"
				+ "    \"TimeStamp\": \""+this.timestamp+"\",\r\n"
				+ "    \"Browser\": \""+this.browser+"\",\r\n"
				+ "    \"Height\": \""+this.height+"\",\r\n"
				+ "    \"Actual Aspect Ratio\": \""+this.actualaspectratio+"\",\r\n"
				+ "    \"Device Type\": \""+this.devicetype+"\",\r\n"
				+ "    \"Width\": \""+this.width+"\"\r\n"
				+ "}";
	}
}
