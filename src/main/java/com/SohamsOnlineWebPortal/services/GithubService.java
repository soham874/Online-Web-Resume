package com.SohamsOnlineWebPortal.services;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;
import com.SohamsOnlineWebPortal.model.*;


@Service
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
        
        CommonUtils.AddLog("Attempting to reach Github servers...",3);
        
        // attempts to reach Github servers
        
        try{	//when reached successfully
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
    		
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
    		        	
        	if( response.isSuccessful() ) {	//when Github returns Status 200
        		
        		if( jsonResponseBody.containsKey("errors") ) { //If profile not found
        			
        			GithubFetchProfileResponse = StateResponse.builder()
        					.body(jsonResponseBody.toJSONString())
        					.message("Profile '"+username+"' not found")
        					.status(500)
        					.build();
        			
        		} else { //profile data fetched successfully
        			
        			GithubFetchProfileResponse = StateResponse.builder()
        					.body(jsonResponseBody.toJSONString())
        					.message("Profile details fetched successfully")
        					.status(response.code())
        					.build();
        		}
        		
        	} else { //Badly formed request
        		        		
        		GithubFetchProfileResponse = StateResponse.builder()
    					.body(jsonResponseBody.toJSONString())
    					.message("Query not formed well, please verify")
    					.status(response.code())
    					.build();
        		
        	}
        	
        	response.close();
        	
        }catch(Exception e){ //Unable to reach Github servers
        	
        	StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	GithubFetchProfileResponse = StateResponse.builder()
					.body(sw.toString())
					.message("Backend error, unable to reach Github")
					.status(500)
					.build();

        }
        
        // return the response
        // System.out.println("Response from Github Service layer");
        // System.out.println(GithubFetchProfileResponse.toString());
        
		return GithubFetchProfileResponse;
	}
}
