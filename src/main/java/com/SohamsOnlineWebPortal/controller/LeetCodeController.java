package com.SohamsOnlineWebPortal.controller;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.LeetCodeConstants;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.services.*;

@Controller
@ComponentScan
@Component
@RestController
public class LeetCodeController {
	
	@Autowired
	LeetcodeService leetcodeService;
	
    @GetMapping(value = "/receiveLeetCodeData", produces = "application/json")
    public @ResponseBody StateResponse GetLeetCodeData(
    		@RequestHeader @Valid Map<String, String> headers
    		){
    	
    	String sessionId = headers.get("session-uid");
    	
    	CommonUtils.AddLog(sessionId,"Starting to fetch LeetCode data", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = leetcodeService.getProfileData("soham874",sessionId);
    		
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog(sessionId,"Error while fetching LeetCode data --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(LeetCodeConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(LeetCodeConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	        
    	CommonUtils.AddLog(sessionId,"Finished process fetch LeetCode data reqeust", 3);
    	return ControllerLayerResponse;
    	
    }
}
