package com.SohamsOnlineWebPortal.model;

import javax.validation.constraints.NotNull;

import com.SohamsOnlineWebPortal.config.CommonUtils;
import com.SohamsOnlineWebPortal.config.constants.BaseConstants;

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
public class VisitorInformation {

	@NotNull(message = "Browser name cannot be null")
	String browser;
	
	@NotNull(message = "Height cannot be null")
	int height;
	
	@NotNull(message = "Width cannot be null")
	int width;
	
	@Builder.Default
	String timestamp = CommonUtils.getUTCTimeStamp().toString();
	
	@Builder.Default
	String time = String.valueOf(CommonUtils.getUTCTimeStamp().getHours());
	
	@Builder.Default
	String sessionUid = BaseConstants.SESSION_UID;
	
	double actualaspectratio;
	
	String devicetype;
	
	public void update(){
		this.actualaspectratio = (double)height/(double)width;
		this.devicetype = CommonUtils.DeviceType(width);	
	}

}
