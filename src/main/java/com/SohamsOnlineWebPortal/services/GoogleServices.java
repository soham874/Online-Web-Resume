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

@Service
public class GoogleServices {
	
	@SuppressWarnings("deprecation")
	public StateResponse saveBrowserInformation(@Valid VisitorInformation visitorInformation) throws IOException, ParseException {
		
		visitorInformation.setActualaspectratio((double)visitorInformation.getWidth()/(double)visitorInformation.getHeight());
		visitorInformation.setTimestamp(CommonUtils.getUTCTimeStamp().toString());
		visitorInformation.setTime(String.valueOf(CommonUtils.getUTCTimeStamp().getHours()));
		visitorInformation.setDevicetype(CommonUtils.DeviceType(visitorInformation.getWidth()));
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(GoogleConstants.GOOGLE_BROWSER_INFORMATION_API)
				.requestBody(visitorInformation.toString())
				.headerParameters(getHeaders())
				.successMessage(GoogleConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(GoogleConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(GoogleConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending request to Google servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for Google query --> "+response.getStatus(), 2);
		return response;
	}
	
	public StateResponse saveUserResponse(@Valid UserResponse userResponse) throws IOException, ParseException {
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(GoogleConstants.GOOGLE_VISITOR_RESPONSE_API)
				.requestBody(userResponse.toString())
				.headerParameters(getHeaders())
				.successMessage(GoogleConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(GoogleConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(GoogleConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending request to Google servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for Google query --> "+response.getStatus(), 2);
		return response;
	}
	
	private Map<String, String> getHeaders(){
		Map<String, String> headers = new HashMap<>();
		headers.put("Content-Type", "application/json");
		return headers;
	}
	
}
