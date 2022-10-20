package com.SohamsOnlineWebPortal;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@EnableScheduling
//@PropertySource("file://https://drive.google.com/file/d/10OsvSq7gXwbJGD6L81qTMZqFvTsiPI17/view?usp=sharing")
public class SohamsOnlineWebPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(SohamsOnlineWebPortalApplication.class, args);
	}

}

@RestController 
class HomeContoller {
	
	//@Value("${spring.property.testvalue}")
	//private String check;
	
    @RequestMapping("/")
    public ModelAndView index() {
    	ModelAndView modelAndView = new ModelAndView();
    	System.out.println("Application connected successfully -> "+check);
        modelAndView.setViewName("ViewPage.html");
        return modelAndView;
    }
	
	@Scheduled(fixedDelay = 600000)
	public void scheduleFixedDelayTask() {
	    System.out.println(
	      "Cron job to keep application awake -> " + DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss").format(LocalDateTime.now()) );
	}

}