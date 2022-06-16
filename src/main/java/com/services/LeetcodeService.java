package com.services;

import java.io.IOException;

import org.json.simple.JSONObject;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class LeetcodeService {
	
	private static final String URL = "https://leetcode.com/graphql/";
	private static final String RefererURL = "https://leetcode.com/%s/";
	
	private static final MediaType JSON = MediaType.parse("application/json");
	
	private static String graphQl(String UserName) {
		return String.format("{\"query\":\"query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { contributions { points } profile { reputation ranking } submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } } } \",\"variables\":{\"username\":\"%s\"}}", UserName);
	}
	
	public static String getProfileData(String username) throws IOException {
				
		OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        //MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(graphQl(username),JSON);
        Request request = new Request.Builder()
                .url(URL)
                .method("POST", body)
                .addHeader("referer", String.format(RefererURL, username))
                .addHeader("Content-Type", "application/json")
                .build();
        
        Response response = client.newCall(request).execute();

        //System.out.println(response.body().string());
		return response.body().string();
	}
}
