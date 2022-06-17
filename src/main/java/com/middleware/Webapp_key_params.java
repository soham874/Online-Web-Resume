package com.middleware;

public class Webapp_key_params {

	private static final int encrypt_power = 69;
	private static final int[] github_key = {34, 35, 43, 26, 31, 37, 39, 2, 18, -4, 49, 18, 36, -1, -18, 14, 34, -1, 33, -14, 36, -13, -1, 10, -13, 50, 11, -1, 3, 17, 11, 33, 18, 50, -19, -16, -19, 12, -18, 48};
	private static final String LeetCode_GraphQL_URL = "https://leetcode.com/graphql/";
	private static final String LeetCode_RefererURL = "https://leetcode.com/%s/";
	private static final String Github_API_URL = "https://api.github.com/graphql";
	
	public static int getEncrypt_power() {
		return encrypt_power;
	}
	
	public static String getGithubKey() {
		return Decrypter.Decrypt(github_key);
	}
	
	public static String getLeetCode_GraphQL_URL() {
		return LeetCode_GraphQL_URL;
	}
	
	public static String getLeetCode_RefererURL() {
		return LeetCode_RefererURL;
	}
	
	public static String getGithub_API_URL() {
		return Github_API_URL;
	}
}
