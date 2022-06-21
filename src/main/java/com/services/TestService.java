package com.services;

import java.io.IOException;

import com.middleware.Webapp_key_params;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;

public class TestService {
	private static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
	public static void main(String[] args) throws IOException {
		
		String request_json = "{\r\n"
				+ "    \"timestamp\": \"time2\",\r\n"
				+ "    \"browser\": \"text\",\r\n"
				+ "    \"height\": \"sample\",\r\n"
				+ "    \"width\": \"sample\"\r\n"
				+ "}";
		
		OkHttpClient client = new OkHttpClient().newBuilder().build();
		//System.out.println(JSON_Query);
		
		RequestBody body = RequestBody.create(request_json,JSON);
        Request request = new Request.Builder()
        		/*.url("https://hookb.in/JKdXbjy6O0sg1WBgVnxa")*/
            .url("https://sheetdb.io/api/v1/sa6miu6hdqxos")
            .post(body)
            .build();
        
        System.out.println(client.newCall(request).execute().body().string());
	}
}
