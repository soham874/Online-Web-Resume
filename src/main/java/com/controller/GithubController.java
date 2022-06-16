package com.controller;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.model.StateResponse;
import com.services.*;

@Controller
@ComponentScan
@Component
public class GithubController {
	
    @RequestMapping(value = "/receiveGithubData", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody String GetGithubData(){
    	
    	StateResponse ControllerLayerResponse;
    	
    	try {	// try to get response from service layer 
    		
    		StateResponse ServicelerLayerResponse = GithubService.getProfileData("soham874");
    		
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
        System.out.println("Response from Github Controller layer");
        System.out.println(ControllerLayerResponse.toString());
    	
    	return ControllerLayerResponse.toString();
    	
    }
}
