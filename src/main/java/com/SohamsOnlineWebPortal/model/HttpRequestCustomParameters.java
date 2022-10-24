package com.SohamsOnlineWebPortal.model;

import java.util.Map;

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
public class HttpRequestCustomParameters {

	String URL;
	String requestBody;
	Map<String, String> headerParameters;
	String successMessage;
	String serverErrorMessage;
	String clientErrorMessage;
}
