package com.eliteams.quick4j.web.model;


public class animal {
    private Integer id;

    private String tjyear;

    private String tjmonth;

    private String tjday;

    private String usccCode;

    private String livestock;

    private Integer livestockAmount;

    private Integer slaughterAmount;

    private Double period;

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

    public String getLivestock() {
        return livestock;
    }

    public void setLivestock(String livestock) {
        this.livestock = livestock == null ? null : livestock.trim();
    }

    public Integer getLivestockAmount() {
        return livestockAmount;
    }

    public void setLivestockAmount(Integer livestockAmount) {
        this.livestockAmount = livestockAmount;
    }

    public Integer getSlaughterAmount() {
        return slaughterAmount;
    }

    public void setSlaughterAmount(Integer slaughterAmount) {
        this.slaughterAmount = slaughterAmount;
    }

    public Double getPeriod() {
        return period;
    }

    public void setPeriod(Double period) {
        this.period = period;
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