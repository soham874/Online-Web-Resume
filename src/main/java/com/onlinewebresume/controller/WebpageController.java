package com.onlinewebresume.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebpageController {
	// Displaying the initial users list.
    @RequestMapping(value = "/**")
    public String ViewPage() {     
        return "ViewPage";
    }
}
