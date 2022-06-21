package com.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.middleware.BrowserInformation;

public class VisitorInformation {

	private String browser;
	private int height;
	private int width;
	private String date;
	private String time;
	private double actualaspectratio;
	private String devicetype;
	
	public VisitorInformation(String browser, int height, int width) {
		
		DateTimeFormatter date_format = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		DateTimeFormatter time_format = DateTimeFormatter.ofPattern("HH");
		LocalDateTime now = LocalDateTime.now();

		this.browser = browser;
		this.height = height;
		this.width = width;
		this.date = date_format.format(now);
		this.time = time_format.format(now);
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
	
	public String getDate() {
		return date;
	}
	
	public String getTime() {
		return time;
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
				+ "    \"Date\": \""+this.date+"\",\r\n"
				+ "    \"Time\": \""+this.time+"\",\r\n"
				+ "    \"Browser\": \""+this.browser+"\",\r\n"
				+ "    \"Height\": \""+this.height+"\",\r\n"
				+ "    \"Actual Aspect Ratio\": \""+this.actualaspectratio+"\",\r\n"
				+ "    \"Device Type\": \""+this.devicetype+"\",\r\n"
				+ "    \"Width\": \""+this.width+"\"\r\n"
				+ "}";
	}
}
