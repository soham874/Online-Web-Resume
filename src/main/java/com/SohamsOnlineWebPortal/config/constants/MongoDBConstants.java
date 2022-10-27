package com.SohamsOnlineWebPortal.config.constants;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

import com.SohamsOnlineWebPortal.middleware.Decrypter;

@ConfigurationProperties
public class MongoDBConstants extends BaseConstants {

	@Value("${baseurl.mongodb.request-url}")
	public String REQUEST_URL;
	
	@Value("${baseurl.mongodb.find-request}")
	public String FIND_REQUEST;
	
	@Value("${baseurl.mongodb.datasource}")
	public String DATASOURCE;
	
	@Value("${baseurl.mongodb.database}")
	public String DATABASE;
	
	private static final int[] MONGO_DB_API_KEY = {30, 3, -13, 34, 12, -17, 0, 31, 52, -2, 51, 3, 33, 31, 28, 21, 28, -4, -19, 49, 17, 0, 17, -1, -3, 16, 48, 14, -3, -16, 12, 35, 31, 3, 53, 15, 5, 28, -13, 1, -17, 33, -16, -15, -17, 6, 33, -3, 20, 5, -20, 13, -13, 21, 51, 47, 35, 21, 42, 29, 41, -4, 28, 48};
	
	public static final String SUCCESS_MESSAGE = "Requested details fetched successfully";
	public static final String SERVER_ERROR_MESSAGE = "Database/Cluster/Collection name problem";
	public static final String CLIENT_ERROR_MESSAGE = "Query not formed well, please verify";
	
	public static final String MICROSERVICE_ERROR_MESSAGE = "Error in MongoDB Service Layer";
	
	public static String getMongoDBKey() {
		return Decrypter.Decrypt(MONGO_DB_API_KEY);
	}
}
