package com.eliteams.quick4j.web.model;

public class picture {
    private Integer id;

    private String pwkid;

    private String pwkname;

    private String createtime;

    private String imagename;

    private String path;

    private String snst;

    public String getSnst() {
        return snst;
    }

    public void setSnst(String snst) {
        this.snst = snst;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPwkid() {
        return pwkid;
    }

    public void setPwkid(String pwkid) {
        this.pwkid = pwkid == null ? null : pwkid.trim();
    }

    public String getPwkname() {
        return pwkname;
    }

    public void setPwkname(String pwkname) {
        this.pwkname = pwkname == null ? null : pwkname.trim();
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(String createtime) {
        this.createtime = createtime == null ? null : createtime.trim();
    }

    public String getImagename() {
        return imagename;
    }

    public void setImagename(String imagename) {
        this.imagename = imagename == null ? null : imagename.trim();
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }
}