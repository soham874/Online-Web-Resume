package com.services;

import java.io.IOException;

import com.middleware.Webapp_key_params;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;

public class TestService {
	private static final MediaType JSON = MediaType.parse("application/json");
	public static void main(String[] args) throws IOException {
		
		String request_json = ""
				+ "{\r\n"
				+ "  \"dataSource\": \"SohamsWebPortal\",\r\n"
				+ "  \"database\": \"Web_Portal_Database\",\r\n"
				+ "  \"collection\": \"User_Responses\",\r\n"
				+ "  \"document\": {\r\n"
				+ "    \"Name\": \"Soham\",\r\n"
				+ "    \"TimeStamp\": \"Sat Jun 18 2022 12:08:53 GMT+0530 (India Standard Time)\",\r\n"
				+ "    \"Message\": \"This is a test response\"\r\n"
				+ "  }\r\n"
				+ "}";
		
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		//System.out.println(JSON_Query);
		
		RequestBody body = RequestBody.create(request_json,JSON);
        Request request = new Request.Builder()
            .url("https://hookb.in/JKdXbjy6O0sg1WBgVnxa")
            /*.url("https://data.mongodb-api.com/app/data-okjli/endpoint/data/v1/action/insertOne")*/
            .header("content-type", "application/ejson")
            .addHeader("Accept", "application/json")
            .addHeader("api-key", Webapp_key_params.getMongoDB_Api_Key() )
            .addHeader("Access-Control-Request-Headers", "*")
            .post(body)
            .build();
        
        System.out.println(client.newCall(request).execute().body().string());
	}
}
