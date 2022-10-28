package com.SohamsOnlineWebPortal.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class StateResponse {

	int status;
	Object body;
	String message;

	@Override
	public String toString() {
		return "{"
				+ "\n\"status\" : \""+this.status+"\","
				+ "\n\"message\": \""+this.message+"\","
				+ "\n\"body\"   : "+this.body
				+"\n}\n";
	}

}