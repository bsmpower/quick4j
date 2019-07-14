package com.eliteams.quick4j.web.model;

public class Product {
    private Integer id;
    private String tjyear;
    private String tjmonth;
    private String tjday;
    private String USCCCode;
    private String name;
    private String cpType;
    private String cpUnit;
    private Double cpSum;
    private String scTech;
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
        this.tjyear = tjyear;
    }

    public String getTjmonth() {
        return tjmonth;
    }

    public void setTjmonth(String tjmonth) {
        this.tjmonth = tjmonth;
    }

    public String getTjday() {
        return tjday;
    }

    public void setTjday(String tjday) {
        this.tjday = tjday;
    }

    public String getUSCCCode() {
        return USCCCode;
    }

    public void setUSCCCode(String USCCCode) {
        this.USCCCode = USCCCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCpType() {
        return cpType;
    }

    public void setCpType(String cpType) {
        this.cpType = cpType;
    }

    public String getCpUnit() {
        return cpUnit;
    }

    public void setCpUnit(String cpUnit) {
        this.cpUnit = cpUnit;
    }

    public Double getCpSum() {
        return cpSum;
    }

    public void setCpSum(Double cpSum) {
        this.cpSum = cpSum;
    }

    public String getScTech() {
        return scTech;
    }

    public void setScTech(String scTech) {
        this.scTech = scTech;
    }

    public String getSpareone() {
        return spareone;
    }

    public void setSpareone(String spareone) {
        this.spareone = spareone;
    }

    public String getSparetwo() {
        return sparetwo;
    }

    public void setSparetwo(String sparetwo) {
        this.sparetwo = sparetwo;
    }
}
