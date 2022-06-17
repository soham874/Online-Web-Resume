package com.middleware;

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
}
