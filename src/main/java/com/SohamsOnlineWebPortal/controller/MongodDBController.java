package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.MongoDBConstants;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.services.MongoServices;

@Controller
@ComponentScan
@Component
@RestController
public class MongodDBController {

	@Autowired
	MongoServices mongoServices;
	
	@GetMapping(value = "/receiveAcademicData",produces = "application/json")
	public @ResponseBody StateResponse GetAcademicData(){
    	
        CommonUtils.AddLog("Starting to fetch academic data from MongoDB", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = mongoServices.getAcademicData();
    		
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while fetching academic data from MongoDB --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(MongoDBConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(MongoDBConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	        
    	CommonUtils.AddLog("Finished process fetch academic data from MongoDB reqeust", 3);
    	return ControllerLayerResponse;
	}
	
	@GetMapping(value = "/receiveExpereienceData",produces = "application/json")
	public @ResponseBody StateResponse GetExpereienceData(){
    	        
        CommonUtils.AddLog("Starting to fetch expereience data from MongoDB", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = mongoServices.getExperenceData();
    		
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while fetching expereience data from MongoDB --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(MongoDBConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(MongoDBConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	        
    	CommonUtils.AddLog("Finished process fetch expereience data from MongoDB reqeust", 3);
    	return ControllerLayerResponse;
	}
	
	@GetMapping(value = "/receiveGeneralData",produces = "application/json")
	public @ResponseBody StateResponse GetGeneralData(){
    	
        CommonUtils.AddLog("Starting to fetch general data from MongoDB", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = mongoServices.getGeneralData();
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while fetching general data from MongoDB --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(MongoDBConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(MongoDBConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	        
    	CommonUtils.AddLog("Finished process fetch general data from MongoDB reqeust", 3);
    	return ControllerLayerResponse;
	}

}