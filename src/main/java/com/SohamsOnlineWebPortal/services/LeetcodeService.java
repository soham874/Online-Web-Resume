package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import com.SohamsOnlineWebPortal.middleware.CommonUtils;
import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;
import com.SohamsOnlineWebPortal.model.*;

public class LeetcodeService {
		
	private static final MediaType JSON = MediaType.parse("application/json");
	
	private static String graphQl(String UserName) {
		return String.format("{\"query\":\"query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } } } \",\"variables\":{\"username\":\"%s\"}}", UserName);
	}
	
	public static StateResponse getProfileData(String username) throws IOException {
				
		OkHttpClient client = new OkHttpClient().newBuilder()
                .build();

        RequestBody body = RequestBody.create(graphQl(username),JSON);
        Request request = new Request.Builder()
                .url(Webapp_key_params.getLeetCode_GraphQL_URL())
                .method("POST", body)
                .addHeader("referer", String.format(Webapp_key_params.getLeetCode_RefererURL(), username))
                .addHeader("Content-Type", "application/json")
                .build();
        
        StateResponse LeetCodeFetchProfileResponse;
        
        CommonUtils.AddLog("Attempting to reach LeetCode servers...",3);
        
        // attempts to reach LeetCode servers
        
        try{	//when reached successfully
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
    		
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
    		        	
        	if( response.isSuccessful() ) {	//when LeetCode resturns Status 200
        		
        		if( jsonResponseBody.containsKey("errors") ) { //If profile not found
        			
        			LeetCodeFetchProfileResponse = new StateResponse(
        					500, 
        					jsonResponseBody.toJSONString(), 
        					"Profile '"+username+"' not found"
        					);
        			
        		} else { //profile data fetched successfully
        			
        			LeetCodeFetchProfileResponse = new StateResponse(
        					response.code(), 
        					jsonResponseBody.toJSONString(), 
        					"Profile details fetched successfully");
        		}
        		
        	} else { //Badly formed request
        		        		
        		LeetCodeFetchProfileResponse = new StateResponse(
        				response.code(), 
        				jsonResponseBody.toJSONString(), 
        				"Query not formed well, please verify");
        	}
        	response.close();
        	
        }catch(Exception e){ //Unable to reach LeetCode servers
        	
        	StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	LeetCodeFetchProfileResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach LeetCode");
        }
        
        // return the response
        // System.out.println("Response from LeetCode Service layer");
        // System.out.println(LeetCodeFetchProfileResponse.toString());
        
		return LeetCodeFetchProfileResponse;
	}
}
