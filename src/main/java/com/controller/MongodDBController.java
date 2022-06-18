package com.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.middleware.MongoJSONFormer;
import com.middleware.Webapp_key_params;
import com.model.StateResponse;
import com.model.UserResponse;
import com.services.MongoServices;

@Controller
@ComponentScan
@Component
public class MongodDBController {

	@RequestMapping(value = "/receiveAcademicData", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody String GetAcademicData(){
    	
		String Complete_URL = Webapp_key_params.getMongoDB_URL_Endpoint()+"/find";
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = MongoServices.Post(Complete_URL,MongoJSONFormer.formAcademicsJSON());
    		
    		ControllerLayerResponse = new StateResponse(
					ServicelerLayerResponse.getStatus(), 
					ServicelerLayerResponse.getBody(), 
					ServicelerLayerResponse.getMessage()
        	);
    		
    	}catch( Exception e ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	ControllerLayerResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach Service Layer"
        	);
    	}
    	
    	// return the response
        System.out.println("Response from MongoDB Controller layer for fetching Academic details");
        System.out.println(ControllerLayerResponse.toString());
    	
    	return ControllerLayerResponse.toString();
	}

	@RequestMapping(value = "/sendUserResponse", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody String SendResponseData(@RequestBody String userResponseString ) throws ParseException{
    	
		//System.out.println(userResponse);
		
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonRequestBody = (JSONObject) jsonParser.parse(userResponseString);
		
		UserResponse userResponse = new UserResponse(
				jsonRequestBody.get("name").toString(), 
				jsonRequestBody.get("message").toString(), 
				jsonRequestBody.get("timestamp").toString()
				);
		
		String Complete_URL = Webapp_key_params.getMongoDB_URL_Endpoint()+"/insertOne";
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = MongoServices.Post(Complete_URL,MongoJSONFormer.formUserResponseJSON(userResponse));
    		
    		ControllerLayerResponse = new StateResponse(
					ServicelerLayerResponse.getStatus(), 
					ServicelerLayerResponse.getBody(), 
					ServicelerLayerResponse.getMessage()
        	);
    		
    	}catch( Exception e ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	e.printStackTrace(pw);
        	
        	ControllerLayerResponse = new StateResponse(
        			500, 
        			sw.toString(), 
        			"Backend error, unable to reach Service Layer"
        	);
    	}
    	
    	// return the response
        System.out.println("Response from MongoDB Controller layer for posting response details");
        System.out.println(ControllerLayerResponse.toString());
    	
    	return ControllerLayerResponse.toString();
	}

}