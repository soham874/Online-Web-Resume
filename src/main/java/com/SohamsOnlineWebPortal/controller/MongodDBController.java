package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.middleware.MongoJSONFormer;
import com.SohamsOnlineWebPortal.middleware.Webapp_key_params;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.services.MongoServices;

@Controller
@ComponentScan
@Component
@RestController
public class MongodDBController {

	@GetMapping(value = "/receiveAcademicData",produces = "application/json")
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
        int status = ControllerLayerResponse.getStatus();
        if( status >= 200 && status < 400 ) {
        	CommonUtils.AddLog("Academics data fetched successfully",2);
        }else {
        	CommonUtils.AddLog("Response from MongoDB Controller layer for fetching Academic details ->\n"+ControllerLayerResponse.toString(),1);
        }
    	
    	return ControllerLayerResponse.toString();
	}
	
	@GetMapping(value = "/receiveExpereienceData",produces = "application/json")
	public @ResponseBody String GetExpereienceData(){
    	
		String Complete_URL = Webapp_key_params.getMongoDB_URL_Endpoint()+"/find";
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = MongoServices.Post(Complete_URL,MongoJSONFormer.formExperienceJSON());
    		
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
        	CommonUtils.AddLog("Expereience details fetched successfully",2);
        }else {
        	CommonUtils.AddLog("Response from MongoDB Controller layer for fetching Expereience details ->\n"+ControllerLayerResponse.toString(),1);
        }
        
    	return ControllerLayerResponse.toString();
	}
	
	@GetMapping(value = "/receiveGeneralData",produces = "application/json")
	public @ResponseBody String GetGeneralData(){
    	
		String Complete_URL = Webapp_key_params.getMongoDB_URL_Endpoint()+"/find";
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		StateResponse ServicelerLayerResponse = MongoServices.Post(Complete_URL,MongoJSONFormer.formGeneralInformationJSON());
    		
    		ControllerLayerResponse = new StateResponse(
					ServicelerLayerResponse.getStatus(), 
					ServicelerLayerResponse.getBody(), 
					ServicelerLayerResponse.getMessage()
        	);
    		
    		JSONParser jsonParser = new JSONParser();
    		JSONObject jsonResponse = (JSONObject) jsonParser.parse(ServicelerLayerResponse.getBody());
    		JSONArray jsonDocument = (JSONArray) jsonResponse.get("documents");
    	    
    	    Webapp_key_params.setGoogle_visitor_information_api(((JSONObject)jsonDocument.get(0)).get("Google_visitor_information_api").toString());
    	    Webapp_key_params.setGoogle_visitor_response_api(((JSONObject)jsonDocument.get(0)).get("Google_user_response_api").toString());
    		
    		
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
        	CommonUtils.AddLog("General Information fetched successfully",2);
        }else {
        	CommonUtils.AddLog("Response from MongoDB Controller layer for fetching General Information ->\n"+ControllerLayerResponse.toString(),1);
        }
        
    	return ControllerLayerResponse.toString();
	}

}