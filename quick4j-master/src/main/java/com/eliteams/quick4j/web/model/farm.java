package com.eliteams.quick4j.web.model;

public class Farm {
    private Integer id;

    private String tjyear;

    private String tjmonth;

    private String tjday;

    private String farmerName;

    private String city;

    private String county;

    private String village;

    private String address;

    private Double longitude;

    private Double latitude;

    private Double yearFamount;

    private Double pesticideDosage;

    private Double pesticideConcentration;

    private Integer yearPtimes;

    private Double yearPamount;

    private String outletSeason;

    private Integer outletTimes;

    private Double outletAmount;

    private Integer outletTime;

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

    public String getFarmerName() {
        return farmerName;
    }

    public void setFarmerName(String farmerName) {
        this.farmerName = farmerName == null ? null : farmerName.trim();
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

    public Double getYearFamount() {
        return yearFamount;
    }

    public void setYearFamount(Double yearFamount) {
        this.yearFamount = yearFamount;
    }

    public Double getPesticideDosage() {
        return pesticideDosage;
    }

    public void setPesticideDosage(Double pesticideDosage) {
        this.pesticideDosage = pesticideDosage;
    }

    public Double getPesticideConcentration() {
        return pesticideConcentration;
    }

    public void setPesticideConcentration(Double pesticideConcentration) {
        this.pesticideConcentration = pesticideConcentration;
    }

    public Integer getYearPtimes() {
        return yearPtimes;
    }

    public void setYearPtimes(Integer yearPtimes) {
        this.yearPtimes = yearPtimes;
    }

    public Double getYearPamount() {
        return yearPamount;
    }

    public void setYearPamount(Double yearPamount) {
        this.yearPamount = yearPamount;
    }

    public String getOutletSeason() {
        return outletSeason;
    }

    public void setOutletSeason(String outletSeason) {
        this.outletSeason = outletSeason == null ? null : outletSeason.trim();
    }

    public Integer getOutletTimes() {
        return outletTimes;
    }

    public void setOutletTimes(Integer outletTimes) {
        this.outletTimes = outletTimes;
    }

    public Double getOutletAmount() {
        return outletAmount;
    }

    public void setOutletAmount(Double outletAmount) {
        this.outletAmount = outletAmount;
    }

    public Integer getOutletTime() {
        return outletTime;
    }

    public void setOutletTime(Integer outletTime) {
        this.outletTime = outletTime;
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