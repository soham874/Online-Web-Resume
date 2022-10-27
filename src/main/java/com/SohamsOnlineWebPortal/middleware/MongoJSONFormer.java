package com.SohamsOnlineWebPortal.middleware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SohamsOnlineWebPortal.config.constants.MongoDBConstants;
import com.SohamsOnlineWebPortal.model.UserResponse;

@Service
public class MongoJSONFormer {

	@Autowired
	MongoDBConstants mongoDBConstants;
	
	public String formExperienceJSON() {
		return "{\n"
				+ "\"dataSource\" : \""+mongoDBConstants.DATASOURCE+"\",\n"
				+ "\"database\" : \""+mongoDBConstants.DATABASE+"\",\n"
				+ "\"collection\" : \"Work_Experience\""
			+ "\n}";
	}
	
	public String formAcademicsJSON() {
		return "{\n"
				+ "\"dataSource\" : \""+mongoDBConstants.DATASOURCE+"\",\n"
				+ "\"database\" : \""+mongoDBConstants.DATABASE+"\",\n"
				+ "\"collection\" : \"Academics\""
			+ "\n}";
	}
	
	public String formUserResponseJSON(UserResponse response) {
		return "{\r\n"
				+ "\"dataSource\" : \""+mongoDBConstants.DATASOURCE+"\",\r\n"
				+ "\"database\" : \""+mongoDBConstants.DATABASE+"\",\r\n"
				+ "\"collection\" : \"User_Responses\",\r\n"
				+ "\"document\" : "+response.toString()
			+ "\r\n}";
	}
	
	public String formGeneralInformationJSON() {
		return "{\r\n"
				+ "\"dataSource\" : \""+mongoDBConstants.DATASOURCE+"\",\n"
				+ "\"database\" : \""+mongoDBConstants.DATABASE+"\",\n"
				+ "\"collection\" : \"General_Information\"\r\n"
			+ "\r\n}";
	}
}
