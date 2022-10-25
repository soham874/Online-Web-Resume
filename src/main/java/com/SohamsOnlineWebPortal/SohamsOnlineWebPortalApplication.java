package com.SohamsOnlineWebPortal;

import java.util.UUID;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.SohamsOnlineWebPortal.config.constants.BaseConstants;

@SpringBootApplication
public class SohamsOnlineWebPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(SohamsOnlineWebPortalApplication.class, args);
	}

}

@RestController 
class HomeContoller {
		
    @RequestMapping("/")
    public ModelAndView index() {
    	ModelAndView modelAndView = new ModelAndView();
    	
    	UUID session_id = UUID.randomUUID();
    	BaseConstants.setSESSION_UID(session_id.toString());
    	
    	System.out.println("Session started with ID --> " + BaseConstants.SESSION_UID);
        modelAndView.setViewName("ViewPage.html");
        return modelAndView;
    }
}