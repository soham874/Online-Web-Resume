package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Map;

import javax.validation.Valid;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.BaseConstants;
import com.SohamsOnlineWebPortal.config.constants.GoogleConstants;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.model.UserResponse;
import com.SohamsOnlineWebPortal.model.VisitorInformation;
import com.SohamsOnlineWebPortal.services.GoogleServices;

@Controller
@ComponentScan
@Component
@RestController
public class GoogleController {

	@Autowired
	GoogleServices googleServices;
	
	@PostMapping(value = "/updateBrowserData",produces = "application/json")
    public @ResponseBody StateResponse sendBrowserData( 
    		@RequestHeader Map<String, String> headers,
    		@RequestBody @Valid VisitorInformation visitorInformation ) throws ParseException{
		
		String sessionId = headers.get("session-uid");
		
		CommonUtils.AddLog(sessionId,"Starting to store browser data", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = googleServices.saveBrowserInformation(visitorInformation,sessionId);
    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog(sessionId,"Error while storing browser data --> "+ex.getMessage(), 1);
        	CommonUtils.AddLog(sessionId,"Reqeust body --> "+visitorInformation.toString(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(BaseConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(GoogleConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	
    	return ControllerLayerResponse;
	}
	
	@PostMapping(value = "/sendUserResponse",produces = "application/json")
	public @ResponseBody @Valid StateResponse sendUserResponse( 
			@RequestHeader Map<String, String> headers,
			@RequestBody @Valid UserResponse userResponse ) throws ParseException{
		
		String sessionId = headers.get("session-uid");
		
		CommonUtils.AddLog(sessionId,"Starting to store User Response", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = googleServices.saveUserResponse(userResponse,sessionId);
    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog(sessionId,"Error while storing user response --> "+ex.getMessage(), 1);
        	CommonUtils.AddLog(sessionId,"Reqeust body --> "+userResponse.toString(), 1);
        	
        	ControllerLayerResponse = StateResponse.builder()
					.status(BaseConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(GoogleConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	
    	return ControllerLayerResponse;
	}

}