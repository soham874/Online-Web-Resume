package com.SohamsOnlineWebPortal.middleware;

public class Webapp_key_params {
	
	//private static String Google_visitor_information_api = "https://sheetdb.io/api/v1/sa6miu6hdqxos";
	//private static String Google_visitor_response_api = "https://sheetdb.io/api/v1/nqw0raiawsq28";
	private static String Google_visitor_information_api = "";
	private static String Google_visitor_response_api = "";
	
	public static String getGoogle_visitor_information_api() {
		return Google_visitor_information_api;
	}
	
	public static void setGoogle_visitor_information_api(String URL) {
		Google_visitor_information_api = URL;
	}
	
	public static String getGoogleVisitorResponseApi() {
		return Google_visitor_response_api;
	}
	
	public static void setGoogle_visitor_response_api(String URL) {
		Google_visitor_response_api = URL;
	}
	
}
