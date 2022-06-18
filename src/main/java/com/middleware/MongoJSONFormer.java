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
		return "{\n"
				+ "\"dataSource\" : \""+Webapp_key_params.getMongoDB_dataSource()+"\",\n"
				+ "\"database\" : \""+Webapp_key_params.getMongoDB_database()+"\",\n"
				+ "\"collection\" : \"User_Responses\","
				+ "\"document\" : "+response.toString()
			+ "\n}";
	}
}
