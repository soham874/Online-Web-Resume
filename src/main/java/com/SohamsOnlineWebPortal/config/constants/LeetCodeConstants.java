package com.SohamsOnlineWebPortal.config.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties
public class LeetCodeConstants extends BaseConstants {
	
	@Value("${baseurl.leetcode.request-url}")
	public String REQUEST_URL;
	
	@Value("${baseurl.leetcode.referrer-url}")
	public String REFERRER_URL;
	
	public static final String SUCCESS_MESSAGE = "Profile details fetched successfully";
	public static final String SERVER_ERROR_MESSAGE = "Leetcode server error";
	public static final String CLIENT_ERROR_MESSAGE = "Query not formed well, please verify";
	
	public static final String MICROSERVICE_ERROR_MESSAGE = "Error in LeetCode Service Layer";
}