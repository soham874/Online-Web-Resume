package com.SohamsOnlineWebPortal.config.constants;

import org.springframework.boot.context.properties.ConfigurationProperties;

import lombok.Setter;

@ConfigurationProperties
public class GoogleConstants extends BaseConstants{
	
	@Setter
	public static String GOOGLE_BROWSER_INFORMATION_API;
	
	@Setter
	public static String GOOGLE_VISITOR_RESPONSE_API;
	
	public static final String SUCCESS_MESSAGE = "Information stored successfully";
	public static final String SERVER_ERROR_MESSAGE = "Google server error";
	public static final String CLIENT_ERROR_MESSAGE = "Query not formed well, please verify";
	
	public static final String MICROSERVICE_ERROR_MESSAGE = "Error in Google Service Layer";
	
}