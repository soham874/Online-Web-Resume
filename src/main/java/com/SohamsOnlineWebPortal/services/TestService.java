package com.SohamsOnlineWebPortal.services;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class TestService {
	
	public static void dummyCallToSelf() throws IOException, InterruptedException {
		
		OkHttpClient client = new OkHttpClient().newBuilder()
                .build();

        RequestBody body = RequestBody.create("", null);
        Request request = new Request.Builder()
                //.url("https://sohams-web-portal.onrender.com/dummyUrl")
        		.url("http://localhost:8080/dummyUrl")
                .build();
        
        while(true) {
        	
        	Response response = client.newCall(request).execute();
            response.close();
            
            Thread.sleep(30000);
        }
	}
}
