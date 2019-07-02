package com.eliteams.quick4j.web.model;

public class product {
    private Integer id;

    private String tjyear;

    private String tjmonth;

    private String tjday;

    private String usccCode;

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

    public String getUsccCode() {
        return usccCode;
    }

    public void setUsccCode(String usccCode) {
        this.usccCode = usccCode == null ? null : usccCode.trim();
    }

    public String getCpType() {
        return cpType;
    }

    public void setCpType(String cpType) {
        this.cpType = cpType == null ? null : cpType.trim();
    }

    public String getCpUnit() {
        return cpUnit;
    }

    public void setCpUnit(String cpUnit) {
        this.cpUnit = cpUnit == null ? null : cpUnit.trim();
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
        this.scTech = scTech == null ? null : scTech.trim();
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