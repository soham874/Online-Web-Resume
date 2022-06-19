package com.middleware;

import com.model.UserResponse;

public class MongoJSONFormer {

	public static String formExperienceJSON() {
		return "{\n"
				+ "\"dataSource\" : \""+Webapp_key_params.getMongoDB_dataSource()+"\",\n"
				+ "\"database\" : \""+Webapp_key_params.getMongoDB_database()+"\",\n"
				+ "\"collection\" : \"Work_Experience\""
			+ "\n}";
	}
	
	public static String formAcademicsJSON() {
		return "{\n"
				+ "\"dataSource\" : \""+Webapp_key_params.getMongoDB_dataSource()+"\",\n"
				+ "\"database\" : \""+Webapp_key_params.getMongoDB_database()+"\",\n"
				+ "\"collection\" : \"Academics\""
			+ "\n}";
	}
	
	public static String formUserResponseJSON(UserResponse response) {
		return "{\r\n"
				+ "\"dataSource\" : \""+Webapp_key_params.getMongoDB_dataSource()+"\",\r\n"
				+ "\"database\" : \""+Webapp_key_params.getMongoDB_database()+"\",\r\n"
				+ "\"collection\" : \"User_Responses\",\r\n"
				+ "\"document\" : "+response.toString()
			+ "\r\n}";
	}
}
