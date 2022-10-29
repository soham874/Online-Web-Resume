package com.SohamsOnlineWebPortal.model;

import javax.validation.constraints.NotNull;

import com.SohamsOnlineWebPortal.config.CommonUtils;

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
public class UserResponse {

	@NotNull(message = "Name cannot be null")
	String name;
	
	@NotNull(message = "Email cannot be null")
	String email;
	
	@NotNull(message = "Message body cannot be null")
	String message;
	
	@Builder.Default
	String timestamp = CommonUtils.getUTCTimeStamp().toString();

	String sessionUid;
	
}
