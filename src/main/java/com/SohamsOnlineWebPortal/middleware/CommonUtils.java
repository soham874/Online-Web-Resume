package com.SohamsOnlineWebPortal.middleware;

@SuppressWarnings("unused")
public class CommonUtils {
	
	private static final String ANSI_RESET = "\u001B[0m";
	private static final String ANSI_BLACK = "\u001B[30m";
	private static final String ANSI_RED = "\u001B[31m";
	private static final String ANSI_GREEN = "\u001B[32m";
	private static final String ANSI_YELLOW = "\u001B[33m";
	
	private static final String ANSI_BLUE = "\u001B[34m";
	private static final String ANSI_PURPLE = "\u001B[35m";
	private static final String ANSI_CYAN = "\u001B[36m";
	private static final String ANSI_WHITE = "\u001B[37m";
	
	private static final String ANSI_WHITE_BACKGROUND = "\u001B[47m";

	/*
	 * 1 - error (red)
	 * 2 - success (green)
	 * 3 - info (black)
	 * 4 - debug (yellow)
	 * */
	public static void AddLog(String log, int type) {
				
		if( type == 1 ) {
			System.out.print("!!ERROR!!\t");
		}
		
		if( type == 2 ) {
			System.out.print("!!SUCCESS!!\t");
		}
		
		if( type == 3 ) {
			System.out.print("!!INFORMATION!!\t");
		}
		
		if( type == 4 ) {
			System.out.print("!!DEBUG!!\t");
		}
		
		System.out.print(log);
		System.out.println();
	}
}
