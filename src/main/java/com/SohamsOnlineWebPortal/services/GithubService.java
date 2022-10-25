package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import com.SohamsOnlineWebPortal.client.PostService;
import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.GithubConstants;
import com.SohamsOnlineWebPortal.model.*;

@Service
public class GithubService {
	
	private static String graphQl(String UserName) {
		return String.format("{\"query\":\"query getUserProfile($username: String!) { user(login: $username) { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { name description url } } } } } \",\"variables\":{\"username\":\"%s\"}}", UserName);
	}
	
	private static Map<String, String> getHeaders(){
		Map<String, String> headers = new HashMap<>();
		headers.put("Authorization", " bearer "+GithubConstants.getGithubKey());
		headers.put("Content-Type", "application/json");
		return headers;
	}
	
	public static StateResponse getProfileData(String username) throws IOException, ParseException {
        
        HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(GithubConstants.REQUEST_URL)
				.requestBody(graphQl(username))
				.headerParameters(getHeaders())
				.successMessage(GithubConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(GithubConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(GithubConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending request to Github servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for Github query --> "+response.getStatus(), 2);
		return response;
	}
}
