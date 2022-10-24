package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.model.UserResponse;
import com.SohamsOnlineWebPortal.model.VisitorInformation;
import com.SohamsOnlineWebPortal.services.GoogleServices;

@Controller
@ComponentScan
@Component
@RestController
public class GoogleController {

	@PostMapping(value = "/updateBrowserData",produces = "application/json")
    public @ResponseBody String sendBrowserData( @RequestBody String UserData ) throws ParseException{
		
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonRequestBody = (JSONObject) jsonParser.parse(UserData);
		
		VisitorInformation visitorInformation = new VisitorInformation(
				jsonRequestBody.get("browser").toString(), 
				Integer.parseInt(jsonRequestBody.get("height").toString()), 
				Integer.parseInt(jsonRequestBody.get("width").toString()));
		
		//System.out.println(visitorInformation.toString());
		
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = GoogleServices.Post(Webapp_key_params.getGoogle_visitor_information_api(),visitorInformation.toString());
    		
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
        int status = ControllerLayerResponse.getStatus();
        if( status >= 200 && status < 400 ) {
        	CommonUtils.AddLog("Browser details submitted successfully", 2);
        }else {
        	CommonUtils.AddLog("Response from Google Controller layer for submitting browser details ->\n"+ControllerLayerResponse.toString(),1);
        	CommonUtils.AddLog("Submitted request body ->\n"+visitorInformation.toString(),4);
        }
        
    	return ControllerLayerResponse.toString();
	}
	
	@PostMapping(value = "/sendUserResponse",produces = "application/json")
	public @ResponseBody String sendUserResponse( @RequestBody String UserData ) throws ParseException{
		
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonRequestBody = (JSONObject) jsonParser.parse(UserData);
		
		UserResponse userResponse = new UserResponse(
				jsonRequestBody.get("name").toString(),
				jsonRequestBody.get("email").toString(),
				jsonRequestBody.get("message").toString()
				);
		
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = GoogleServices.Post(Webapp_key_params.getGoogleVisitorResponseApi(),userResponse.toString());
    		
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
        int status = ControllerLayerResponse.getStatus();
        if( status >= 200 && status < 400 ) {
        	CommonUtils.AddLog("User response submitted successfully", 2);
        }else {
        	CommonUtils.AddLog("Response from Google Controller layer for submitting user response ->\n"+ControllerLayerResponse.toString(),1);
        	CommonUtils.AddLog("Submitted request body ->\n"+userResponse.toString(),4);
        }
        
    	return ControllerLayerResponse.toString();
	}

}