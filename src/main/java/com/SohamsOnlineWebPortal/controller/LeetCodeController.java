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
    public @ResponseBody StateResponse GetLeetCodeData(){
    	
    	CommonUtils.AddLog("Starting to fetch LeetCode data", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = leetcodeService.getProfileData("soham874");
    		
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while fetching LeetCode data --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(LeetCodeConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(LeetCodeConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
    	        
    	CommonUtils.AddLog("Finished process fetch LeetCode data reqeust", 3);
    	return ControllerLayerResponse;
    	
    }
}
