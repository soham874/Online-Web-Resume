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
import com.SohamsOnlineWebPortal.config.constants.BaseConstants;
import com.SohamsOnlineWebPortal.config.constants.GithubConstants;
import com.SohamsOnlineWebPortal.model.StateResponse;
import com.SohamsOnlineWebPortal.services.*;

@Controller
@ComponentScan
@Component
@RestController
public class GithubController {
	
	@Autowired
	GithubService githubService;
	
    @GetMapping(value = "/receiveGithubData",produces = "application/json")
    public @ResponseBody String GetLeetCodeData(){
    	
    	CommonUtils.AddLog("Starting to fetch Github data", 3);
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		    		
    		ControllerLayerResponse = githubService.getProfileData("soham874");
    		    		
    	}catch( Exception ex ) { // Service layer refuses to respond 
    		
    		StringWriter sw = new StringWriter();
        	PrintWriter pw = new PrintWriter(sw);
        	
        	ex.printStackTrace(pw);
        	CommonUtils.AddLog("Error while fetching Github data --> "+ex.getMessage(), 1);
        	
			ControllerLayerResponse = StateResponse.builder()
					.status(BaseConstants.SERVER_ERROR_CODE)
					.body(sw.toString())
					.message(GithubConstants.MICROSERVICE_ERROR_MESSAGE)
					.build();
    	}
        // return the response
    	return ControllerLayerResponse.toString();
    	
    }

}