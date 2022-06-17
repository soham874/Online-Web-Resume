package com.services;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.middleware.Webapp_key_params;
import com.model.StateResponse;

import okhttp3.*;

public class MongoServices {
    
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	
	public static StateResponse Post(String Complete_URL, String JSON_Query) throws IOException {
		
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		RequestBody body = RequestBody.create(JSON_Query,JSON);
        Request request = new Request.Builder()
            .url(Complete_URL)
            .post(body)
            .addHeader("Content-Type", "application/json")
            .addHeader("Access-Control-Request-Headers", "*")
            .addHeader("api-key", Webapp_key_params.getMongoDB_Api_Key())
            .addHeader("Accept", "application/json")
            .build();
        
        StateResponse MongoDBAPIResponse;
        
        System.out.println("Attempting to reach MongoDB servers...");
        
        // attempts to reach MongoDB servers
        
        try{	//when reached successfully
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
        	
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
    		        	
        	if( response.isSuccessful() ) {	//when MongoDB resturns Status 200
        		
        		if( jsonResponseBody.containsKey("errors") ) { //If profile not found
        			
        			MongoDBAPIResponse = new StateResponse(
        					500, 
        					jsonResponseBody.toJSONString(), 
        					"Database/Cluster/Collection name problem"
        					);
        			
        		} else { //profile data fetched successfully
        			
        			MongoDBAPIResponse = new StateResponse(
        					response.code(), 
        					jsonResponseBody.toJSONString(), 
        					"Requested details fetched successfully");
        		}
        		
        	} else { //Badly formed request
        		        		
        		MongoDBAPIResponse = new StateResponse(
        				response.code(), 
        				jsonResponseBody.toJSONString(), 
        				"Query not formed well, please verify");
        	}
        	response.close();
        	
        }catch(Exception e){ //Unable to reach LeetCode servers
        	
        	StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	MongoDBAPIResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach MongoDB");
        }
        
        // return the response
        // System.out.println("Response from MongoDB Service layer");
        // System.out.println(MongoDBAPIResponse.toString());
        
		return MongoDBAPIResponse;
	}
}
