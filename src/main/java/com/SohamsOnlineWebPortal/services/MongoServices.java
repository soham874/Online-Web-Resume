package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SohamsOnlineWebPortal.client.PostService;
import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.GoogleConstants;
import com.SohamsOnlineWebPortal.config.constants.MongoDBConstants;
import com.SohamsOnlineWebPortal.middleware.MongoJSONFormer;
import com.SohamsOnlineWebPortal.model.HttpRequestCustomParameters;
import com.SohamsOnlineWebPortal.model.StateResponse;

@Service
public class MongoServices {
    
	@Autowired
	MongoDBConstants mongoDBConstants;
	
	@Autowired
	MongoJSONFormer mongoJSONFormer;

	public StateResponse getAcademicData() throws IOException, ParseException {
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(mongoDBConstants.REQUEST_URL+mongoDBConstants.FIND_REQUEST)
				.requestBody(mongoJSONFormer.formAcademicsJSON())
				.headerParameters(getHeaders())
				.successMessage(MongoDBConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(MongoDBConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(MongoDBConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending fetch academics details request to MongoDB servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for MongoDB academics data fetch request --> "+response.getStatus(), 2);
		return response;
	}
	

	public StateResponse getExperenceData() throws IOException, ParseException {
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(mongoDBConstants.REQUEST_URL+mongoDBConstants.FIND_REQUEST)
				.requestBody(mongoJSONFormer.formExperienceJSON())
				.headerParameters(getHeaders())
				.successMessage(MongoDBConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(MongoDBConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(MongoDBConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending fetch experience details request to MongoDB servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("Response status for MongoDB experience data fetch request --> "+response.getStatus(), 2);
		return response;
	}
	
	public StateResponse getGeneralData() throws IOException, ParseException {
		
		HttpRequestCustomParameters httpRequestCustomParameters = HttpRequestCustomParameters.builder()
				.URL(mongoDBConstants.REQUEST_URL+mongoDBConstants.FIND_REQUEST)
				.requestBody(mongoJSONFormer.formGeneralInformationJSON())
				.headerParameters(getHeaders())
				.successMessage(MongoDBConstants.SUCCESS_MESSAGE)
				.clientErrorMessage(MongoDBConstants.CLIENT_ERROR_MESSAGE)
				.serverErrorMessage(MongoDBConstants.SERVER_ERROR_MESSAGE)
				.build();
		
		CommonUtils.AddLog("Sending fetch general details request to MongoDB servers", 3);
		StateResponse response = PostService.post(httpRequestCustomParameters);
		CommonUtils.AddLog("General details request to MongoDB servers completed, setting user interraction URLs", 3);

		JSONParser jsonParser = new JSONParser();
		JSONObject jsonResponse = (JSONObject) jsonParser.parse(response.getBody().toString());
		JSONArray jsonDocument = (JSONArray) jsonResponse.get("documents");
	    
	    GoogleConstants.setGOOGLE_BROWSER_INFORMATION_API(((JSONObject)jsonDocument.get(0)).get("Google_visitor_information_api").toString());
	    GoogleConstants.setGOOGLE_VISITOR_RESPONSE_API(((JSONObject)jsonDocument.get(0)).get("Google_user_response_api").toString());
		
		CommonUtils.AddLog("Response status for MongoDB general data fetch request --> "+response.getStatus(), 2);
		return response;
	}
	
	private Map<String, String> getHeaders(){
		Map<String, String> headers = new HashMap<>();
		headers.put("api-key", MongoDBConstants.getMongoDBKey());
		headers.put("Content-Type", "application/ejson");
		headers.put("Accept", "application/json");
		headers.put("Access-Control-Request-Headers", "*");
		return headers;
	}
}