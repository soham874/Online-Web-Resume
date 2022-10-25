package com.SohamsOnlineWebPortal.config.constants;

import com.SohamsOnlineWebPortal.middleware.Decrypter;

public class GithubConstants extends BaseConstants{
	
	public static final String REQUEST_URL = "https://api.github.com/graphql";
	private static final int[] GITHUB_API_KEY = {34, 35, 43, 26, 31, 37, 39, 2, 18, -4, 49, 18, 36, -1, -18, 14, 34, -1, 33, -14, 36, -13, -1, 10, -13, 50, 11, -1, 3, 17, 11, 33, 18, 50, -19, -16, -19, 12, -18, 48};
	
	public static final String SUCCESS_MESSAGE = "Profile details fetched successfully";
	public static final String SERVER_ERROR_MESSAGE = "Github server error";
	public static final String CLIENT_ERROR_MESSAGE = "Query not formed well, please verify";
	
	public static final String MICROSERVICE_ERROR_MESSAGE = "Error in Github Service Layer";
	
	
	public static String getGithubKey() {
		return Decrypter.Decrypt(GITHUB_API_KEY);
	}
}