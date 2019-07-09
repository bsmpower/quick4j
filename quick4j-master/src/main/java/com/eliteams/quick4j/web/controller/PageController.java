package com.eliteams.quick4j.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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