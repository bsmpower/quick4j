package com.eliteams.quick4j.web.model;

public class Industry_life {
    private Integer id;

    private String tjyear;

    private String tjmonth;

    private String tjday;

    private String name;

    private String usccCode;

    private String city;

    private String county;

    private String village;

    private String address;

    private Double longitude;

    private Double latitude;

    private String facilitiesName;

    private Double sjgm;

    private Double dailyEmission;

    private Double annualEmission;

    private Double emissionDays;

    private String spareone;

    private String sparetwo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTjyear() {
        return tjyear;
    }

    public void setTjyear(String tjyear) {
        this.tjyear = tjyear == null ? null : tjyear.trim();
    }

    public String getTjmonth() {
        return tjmonth;
    }

    public void setTjmonth(String tjmonth) {
        this.tjmonth = tjmonth == null ? null : tjmonth.trim();
    }

    public String getTjday() {
        return tjday;
    }

    public void setTjday(String tjday) {
        this.tjday = tjday == null ? null : tjday.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getUsccCode() {
        return usccCode;
    }

    public void setUsccCode(String usccCode) {
        this.usccCode = usccCode == null ? null : usccCode.trim();
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city == null ? null : city.trim();
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county == null ? null : county.trim();
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village == null ? null : village.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

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

    public String getFacilitiesName() {
        return facilitiesName;
    }

    public void setFacilitiesName(String facilitiesName) {
        this.facilitiesName = facilitiesName == null ? null : facilitiesName.trim();
    }

    public Double getSjgm() {
        return sjgm;
    }

    public void setSjgm(Double sjgm) {
        this.sjgm = sjgm;
    }

    public Double getDailyEmission() {
        return dailyEmission;
    }

    public void setDailyEmission(Double dailyEmission) {
        this.dailyEmission = dailyEmission;
    }

    public Double getAnnualEmission() {
        return annualEmission;
    }

    public void setAnnualEmission(Double annualEmission) {
        this.annualEmission = annualEmission;
    }

    public Double getEmissionDays() {
        return emissionDays;
    }

    public void setEmissionDays(Double emissionDays) {
        this.emissionDays = emissionDays;
    }

    public String getSpareone() {
        return spareone;
    }

    public void setSpareone(String spareone) {
        this.spareone = spareone == null ? null : spareone.trim();
    }

    public String getSparetwo() {
        return sparetwo;
    }

    public void setSparetwo(String sparetwo) {
        this.sparetwo = sparetwo == null ? null : sparetwo.trim();
    }
}