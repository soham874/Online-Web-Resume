package com.SohamsOnlineWebPortal.client;

import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import com.SohamsOnlineWebPortal.config.constants.BaseConstants;
import com.SohamsOnlineWebPortal.model.*;

public class PostService {
	
	public static StateResponse post(HttpRequestCustomParameters httpRequestCustomParameters) throws IOException, ParseException {
				
		OkHttpClient client = new OkHttpClient().newBuilder()
                .build();

        RequestBody body = RequestBody.create(httpRequestCustomParameters.getRequestBody(),MediaType.parse("application/json"));
        Headers headerbuild = Headers.of(httpRequestCustomParameters.getHeaderParameters());
                
        Request request = new Request.Builder()
                .url(httpRequestCustomParameters.getURL())
                .method("POST", body)
                .headers(headerbuild)
                .build();
        
        StateResponse stateResponse;
        	
        	Response response = client.newCall(request).execute();
        	
        	String responseBody = response.body().string();
    		
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonResponseBody = (JSONObject) jsonParser.parse(responseBody);
		        	
    	if( response.isSuccessful() ) {	//when Status 200
    		
    		if( jsonResponseBody.containsKey("errors") ) { //If profile not found
    			
    			stateResponse = StateResponse.builder()
    					.status(BaseConstants.SERVER_ERROR_CODE)
    					.body(jsonResponseBody.toJSONString())
    					.message(httpRequestCustomParameters.getServerErrorMessage())
    					.build();
    			
    		} else { //profile data fetched successfully
    			
    			stateResponse = StateResponse.builder()
    					.status(response.code())
    					.body(jsonResponseBody.toJSONString())
    					.message(httpRequestCustomParameters.getSuccessMessage())
    					.build();
    			
    		}
    		
    	} else { //Badly formed request
    		
    		stateResponse = StateResponse.builder()
					.status(response.code())
					.body(jsonResponseBody.toJSONString())
					.message(httpRequestCustomParameters.getClientErrorMessage())
					.build();
    	}
    	
    	response.close();

		return stateResponse;
	}
}
