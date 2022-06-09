package com.onlinewebresume.controller;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebpageController {
	
	// Displaying the initial users list.
    @RequestMapping(value = "/viewpage")
    @ResponseBody
    public String viewpage(Model m) throws ParseException { 
    	m.addAttribute("leetcodeJSON", GetLeetCodeData());
    	System.out.println("Coming through here");
        return "ViewPage";
    }
    
    public JSONObject GetLeetCodeData() throws org.json.simple.parser.ParseException {
    	JSONParser jsonParser = new JSONParser();
    	try {
            //Parsing the contents of the JSON file
            JSONObject jsonObject = (JSONObject) jsonParser.parse(new FileReader("E:\\Software Savefiles\\SpringMVC\\OnlineWebresume\\src\\main\\webapp\\assets\\response_leetcode_api_jun2_2_2022_sample.json"));
            System.out.println(jsonObject);
            return jsonObject;
         } catch (FileNotFoundException e) {
           e.printStackTrace();
           System.out.println("File not found");
         } catch (IOException e) {
            e.printStackTrace();
         }
    	
    	return null;
    }
}
