package com.eliteams.quick4j.web.model;

public class suyuan {
    private String city;
    private String pwkCode;
    private String pwkName;
    private String county;
    private Double longitude;
    private Double latitude;

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPwkCode() {
        return pwkCode;
    }

    public void setPwkCode(String pwkCode) {
        this.pwkCode = pwkCode;
    }

    public String getPwkName() {
        return pwkName;
    }

    public void setPwkName(String pwkName) {
        this.pwkName = pwkName;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }
}
