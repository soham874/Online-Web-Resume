package com.services;

import java.io.IOException;

import com.middleware.Webapp_key_params;
import com.model.VisitorInformation;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;

public class TestService {
	
	public static void main(String[] args) throws IOException {
		
		VisitorInformation visitorInformation = new VisitorInformation(
				"Browser", 
				915, //height
				412); //width
		
		System.out.println(visitorInformation.toString());
	}
}
