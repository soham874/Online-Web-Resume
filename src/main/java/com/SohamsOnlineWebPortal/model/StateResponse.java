package com.SohamsOnlineWebPortal.model;

import javax.validation.constraints.NotNull;

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

	@NotNull(message = "Status code cannot be null")
	int status;
	
	@NotNull(message = "Body cannot be null")
	Object body;
	
	@NotNull(message = "Message cannot be null")
	String message;
	
}