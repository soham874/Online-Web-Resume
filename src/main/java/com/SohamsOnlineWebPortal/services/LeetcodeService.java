package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SohamsOnlineWebPortal.client.PostService;
import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.LeetCodeConstants;
import com.SohamsOnlineWebPortal.model.*;

@Service
public class LeetcodeService {
	
	@Autowired
	LeetCodeConstants leetCodeConstants;
	
	public StateResponse getProfileData(String username) throws IOException, ParseException {

		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(leetCodeConstants.REQUEST_URL)
				.requestBody(graphQl(username))
				.headerParameters(getHeaders(username))
				.successMessage(LeetCodeConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(LeetCodeConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(LeetCodeConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending request to Leetcode servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for Leetcode query --> "+response.getStatus(), 2);
		return response;

	}
	
	private String graphQl(String UserName) {
		return String.format(
				"{\"query\":\"query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } } } \",\"variables\":{\"username\":\"%s\"}}",
				UserName);
	}
	
	
	private Map<String, String> getHeaders(String username){
		Map<String, String> headers = new HashMap<>();
		headers.put("referer", String.format(leetCodeConstants.REFERRER_URL, username));
		headers.put("Content-Type", "application/json");
		return headers;
	}
}
