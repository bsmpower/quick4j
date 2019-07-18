package com.eliteams.quick4j.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

/**
 * 视图控制器,返回jsp视图给前端
 * 
 * @author StarZou
 * @since 2014年5月28日 下午4:00:49
 **/
@Controller
@RequestMapping("/page")
public class PageController {

    /**
     * 登录页
     */
    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    /**
     * dashboard页
     */
    @RequestMapping("/dashboard")
    public String dashboard() {
        return "dashboard";
    }

    /**
     * document页
     */
    @RequestMapping("/document")
    public String document(){return "document";}

    /**
     * pwkfuntion
     */
    @RequestMapping("/pwktable")
    public String pwktable(){
//        return "pwk/pwktable";
        return "pwk/pwktabledemo";
    }

    /**
     * 雨水排污口功能界面
     */
    @RequestMapping("/pwkraintable")
    public String pwkrantable(){
        return "pwk/pwkraintable";
    }

    /**
     * 雨污混合口功能界面
     */
    @RequestMapping("/pwkrainsewage")
    public String pwkrainsewage(){
        return "pwk/pwkrainsewage";
    }

    /**
     *雨水泄洪口功能界面
     */
    @RequestMapping("/pwkrainxhk")
    public String pwkrainxhk(){
        return "pwk/pwkrainxhk";
    }

    /**
     *油田信息功能界面
     */
    @RequestMapping("/pwkoilfield")
    public String pwkoilfield(){
        return "pwk/pwkoilfield";
    }

    /**
     * 港口码头
     */
    @RequestMapping("/pwkport")
    public String pwkport(){
        return "pwk/pwkport";
    }

    /**
     * 海岛名录
     */
    @RequestMapping("/pwkisland")
    public String pwkisland(){
        return "pwk/pwkisland";
    }



    @RequestMapping("/pwksection")
    public String pwksection(){
        return "pwk/pwksection";
    }
    /**
     * 企业信息管理
     * */
    @RequestMapping("/industryLife")
    public String industryLife(){
        return "enterprise/industryLife";
    }
    @RequestMapping("/municipal")
    public String municipal(){
        return "enterprise/municipal";
    }
    @RequestMapping("/livestock")
    public String livestock(){
        return "enterprise/livestock";
    }
    @RequestMapping("/farm")
    public String farm(){
        return "enterprise/farm";
    }
    @RequestMapping("/aquaculture")
    public String aquaculture(){
        return "enterprise/aquaculture";
    }
    @RequestMapping("/industryPark")
    public String industryPark(){
        return "enterprise/industryPark";
    }
    @RequestMapping("/industryTrash")
    public String industryTrash(){
        return "enterprise/industryTrash";
    }

    /**
     * 企业产品信息管理
     */
    @RequestMapping("/productlist")
    public String productlist(){return "emis/listProduct";}

    /**
     * 排放物质信息管理
     */
    @RequestMapping("/emissionlist")
    public String emissionlist(){return "emis/listEmission";}

    @RequestMapping("/emisimport")
    public String emisimport(){return "emis/emisimport";}


    /**
     * Arcgis地图
     */
    @RequestMapping("/mapdemo")
    public String mapdemo(){
        return "map/mapdemo";
    }

    @RequestMapping("/qmpTestData")
    public String qmpTestData(){
        return "pwk/qmpTestData";
    }

    @RequestMapping("/test")
    public String test(){
        return "pwk/test";
    }

    @RequestMapping("/pwkislandsearch")
    public String pwkislandSearch(){
        return "pwk/pwkislandsearch";
    }

    /**
     * 404页
     */
    @RequestMapping("/404")
    public String error404() {
        return "404";
    }

    /**
     * 401页
     */
    @RequestMapping("/401")
    public String error401() {
        return "401";
    }

    /**
     * 500页
     */
    @RequestMapping("/500")
    public String error500() {
        return "500";
    }

}