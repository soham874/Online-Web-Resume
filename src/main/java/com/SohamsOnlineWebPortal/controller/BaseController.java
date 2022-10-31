package com.SohamsOnlineWebPortal.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController 
public class BaseController {

    @GetMapping("/")
    public ModelAndView index() {
    	ModelAndView modelAndView = new ModelAndView(); 
        modelAndView.setViewName("ViewPage.html");
        return modelAndView;
    }   
}