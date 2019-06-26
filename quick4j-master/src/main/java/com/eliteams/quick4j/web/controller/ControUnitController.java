package com.eliteams.quick4j.web.controller;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/controlunit")
public class ControUnitController
{
    @RequestMapping("/test")
    public String controUnittest(HttpServletRequest request, Model model){

        return "controlunit/test";
    }

}
