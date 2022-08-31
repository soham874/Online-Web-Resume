package com.SohamsOnlineWebPortal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SohamsOnlineWebPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(SohamsOnlineWebPortalApplication.class, args);
	}

}

@RestController 
class HomeContoller {
	
    @RequestMapping("/")
    public String index() {
        return "ViewPage";
    }
}
