package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import com.SohamsOnlineWebPortal.client.PostService;
import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.GoogleConstants;
import com.SohamsOnlineWebPortal.model.HttpRequestCustomParameters;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.model.UserResponse;
import com.SohamsOnlineWebPortal.model.VisitorInformation;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class GoogleServices {
	
	private ObjectMapper Obj = new ObjectMapper();  
	
	public StateResponse saveBrowserInformation(@Valid VisitorInformation visitorInformation, String sessionId) throws IOException, ParseException {

		visitorInformation.update(sessionId);
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(GoogleConstants.GOOGLE_BROWSER_INFORMATION_API)
				.requestBody(Obj.writeValueAsString(visitorInformation))
				.headerParameters(getHeaders())
				.successMessage(GoogleConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(GoogleConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(GoogleConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog(sessionId,"Sending request to Google servers to store browser information", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters,sessionId);
		CommonUtils.AddLog(sessionId,"Response status for Google query to store browser information --> "+response.getStatus(), 2);
		return response;
	}
	
	public StateResponse saveUserResponse(@Valid UserResponse userResponse, String sessionId) throws IOException, ParseException {
		
		userResponse.setSessionUid(sessionId);
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(GoogleConstants.GOOGLE_VISITOR_RESPONSE_API)
				.requestBody(Obj.writeValueAsString(userResponse))
				.headerParameters(getHeaders())
				.successMessage(GoogleConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(GoogleConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(GoogleConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog(sessionId,"Sending request to Google servers to store user response", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters,sessionId);
		CommonUtils.AddLog(sessionId,"Response status for Google query to store user response --> "+response.getStatus(), 2);
		return response;
	}
	
	private Map<String, String> getHeaders(){
		Map<String, String> headers = new HashMap<>();
		headers.put("Content-Type", "application/json");
		return headers;
	}
	
}
