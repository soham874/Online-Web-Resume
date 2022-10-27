package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import javax.validation.Valid;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public @ResponseBody String sendBrowserData( @RequestBody @Valid VisitorInformation visitorInformation ) throws ParseException{
		
		CommonUtils.AddLog("Starting to store browser data", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = googleServices.saveBrowserInformation(visitorInformation);
    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while storing browser data --> "+ex.getMessage(), 1);
        	CommonUtils.AddLog("Reqeust body --> "+visitorInformation.toString(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(BaseConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(GoogleConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	
    	return ControllerLayerResponse.toString();
	}
	
	@PostMapping(value = "/sendUserResponse",produces = "application/json")
	public @ResponseBody String sendUserResponse( @RequestBody @Valid UserResponse userResponse ) throws ParseException{
		
		CommonUtils.AddLog("Starting to store User Response", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = googleServices.saveUserResponse(userResponse);
    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while storing user response --> "+ex.getMessage(), 1);
        	CommonUtils.AddLog("Reqeust body --> "+userResponse.toString(), 1);
        	
        	ControllerLayerResponse = StateResponse.builder()
					.status(BaseConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(GoogleConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	
    	return ControllerLayerResponse.toString();
	}

}