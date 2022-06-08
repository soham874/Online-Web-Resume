package com.onlinewebresume.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebpageController {
	// Displaying the initial users list.
    @RequestMapping(value = "/ViewPage", method = RequestMethod.GET)
    @ResponseBody
    public String ViewPage() { 
    	System.out.println("Coming through here");
        return "ViewPage";
    }
}
