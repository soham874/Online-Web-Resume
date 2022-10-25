package com.SohamsOnlineWebPortal.middleware;

public class Webapp_key_params {

	private static final int encrypt_power = 69;
	
	private static final int[] github_key = {34, 35, 43, 26, 31, 37, 39, 2, 18, -4, 49, 18, 36, -1, -18, 14, 34, -1, 33, -14, 36, -13, -1, 10, -13, 50, 11, -1, 3, 17, 11, 33, 18, 50, -19, -16, -19, 12, -18, 48};
	private static final String Github_API_URL = "https://api.github.com/graphql";
	
	private static final int[] MongoDB_Api_Key = {30, 3, -13, 34, 12, -17, 0, 31, 52, -2, 51, 3, 33, 31, 28, 21, 28, -4, -19, 49, 17, 0, 17, -1, -3, 16, 48, 14, -3, -16, 12, 35, 31, 3, 53, 15, 5, 28, -13, 1, -17, 33, -16, -15, -17, 6, 33, -3, 20, 5, -20, 13, -13, 21, 51, 47, 35, 21, 42, 29, 41, -4, 28, 48};
	private static final String MongoDB_URL_Endpoint = "https://data.mongodb-api.com/app/data-okjli/endpoint/data/v1/action";
	private static final String MongoDB_dataSource = "SohamsWebPortal";
	private static final String MongoDB_database = "Web_Portal_Database";
	
	//private static String Google_visitor_information_api = "https://sheetdb.io/api/v1/sa6miu6hdqxos";
	//private static String Google_visitor_response_api = "https://sheetdb.io/api/v1/nqw0raiawsq28";
	private static String Google_visitor_information_api = "";
	private static String Google_visitor_response_api = "";
	private static String Session_UID = "";
	
	public static int getEncrypt_power() {
		return encrypt_power;
	}
	
	
	
	public static String getGithub_API_URL() {
		return Github_API_URL;
	}
	
	public static String getMongoDB_URL_Endpoint() {
		return MongoDB_URL_Endpoint;
	}
	
	public static String getMongoDB_dataSource() {
		return MongoDB_dataSource;
	}
	
	public static String getMongoDB_database() {
		return MongoDB_database;
	}
	
	public static String getMongoDB_Api_Key() {
		return Decrypter.Decrypt(MongoDB_Api_Key);
	}
	
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

	public static String getSessionUid() {
		return Session_UID;
	}
	
	public static void setSessionUid(String UID) {
		Session_UID = UID;
	}

	
}
