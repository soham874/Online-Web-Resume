package com.services;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.middleware.CommonUtils;
import com.model.StateResponse;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class GoogleServices {

private static final MediaType JSON = MediaType.parse("application/json");
	
	public static StateResponse Post(String URL, String visitor_body) throws IOException {
		
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		
		//System.out.println(URL);
		
		RequestBody body = RequestBody.create(visitor_body,JSON);
        Request request = new Request.Builder()
            .url(URL)
            .header("content-type", "application/json")
            .post(body)
            .build();
        
        StateResponse GoogleAPIResponse;
        CommonUtils.AddLog("Attempting to reach Google servers...",3);
        
        // attempts to reach Google servers
        
        try{	//when reached successfully
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
        	
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
    		        	
        	if( response.isSuccessful() ) {	//when Google returns Status 200
        		
        		if( jsonResponseBody.containsKey("error") ) { //If profile not found
        			
        			GoogleAPIResponse = new StateResponse(
        					500, 
        					jsonResponseBody.toJSONString(), 
        					"API body/header error problem"
        					);
        			
        		} else { //data posted successfully
        			
        			GoogleAPIResponse = new StateResponse(
        					response.code(), 
        					jsonResponseBody.toJSONString(), 
        					"Details submitted successfully");
        		}
        		
        	} else { //Badly formed request
        		        		
        		GoogleAPIResponse = new StateResponse(
        				response.code(), 
        				jsonResponseBody.toJSONString(), 
        				"Query not formed well, please verify");
        	}
        	response.close();
        	
        }catch(Exception e){ //Unable to reach Google servers
        	
        	StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	GoogleAPIResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach Google");
        }
        
        // return the response
        // System.out.println("Response from MongoDB Service layer");
        // System.out.println(MongoDBAPIResponse.toString());
        
		return GoogleAPIResponse;
	}

	
}
