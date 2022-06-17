package com.services;

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

import com.middleware.Webapp_key_params;
import com.model.*;

public class GithubService {
	
	private static final MediaType JSON = MediaType.parse("application/json");
	
	private static String graphQl(String UserName) {
		return String.format("{\"query\":\"query getUserProfile($username: String!) { user(login: $username) { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { name description url } } } } } \",\"variables\":{\"username\":\"%s\"}}", UserName);
	}
	
	public static StateResponse getProfileData(String username) throws IOException {
				
		OkHttpClient client = new OkHttpClient().newBuilder()
                .build();

        RequestBody body = RequestBody.create(graphQl(username),JSON);
        Request request = new Request.Builder()
                .url(Webapp_key_params.getGithub_API_URL())
                .method("POST", body)
                .addHeader("Authorization", " bearer "+Webapp_key_params.getGithubKey())
                .addHeader("Content-Type", "application/json")
                .build();
        
        StateResponse GithubFetchProfileResponse;
        
        System.out.println("Attempting to reach Github servers...");
        
        // attempts to reach Github servers
        
        try{	//when reached successfully
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
    		
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
    		        	
        	if( response.isSuccessful() ) {	//when Github resturns Status 200
        		
        		if( jsonResponseBody.containsKey("errors") ) { //If profile not found
        			
        			GithubFetchProfileResponse = new StateResponse(
        					500, 
        					jsonResponseBody.toJSONString(), 
        					"Profile '"+username+"' not found"
        					);
        			
        		} else { //profile data fetched successfully
        			
        			GithubFetchProfileResponse = new StateResponse(
        					response.code(), 
        					jsonResponseBody.toJSONString(), 
        					"Profile details fetched successfully");
        		}
        		
        	} else { //Badly formed request
        		        		
        		GithubFetchProfileResponse = new StateResponse(
        				response.code(), 
        				jsonResponseBody.toJSONString(), 
        				"Query not formed well, please verify");
        	}
        	
        	response.close();
        	
        }catch(Exception e){ //Unable to reach Github servers
        	
        	StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	GithubFetchProfileResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach Github");
        }
        
        // return the response
        // System.out.println("Response from Github Service layer");
        // System.out.println(GithubFetchProfileResponse.toString());
        
		return GithubFetchProfileResponse;
	}
}
