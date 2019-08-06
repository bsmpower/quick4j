package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.model.Dmstandard;
import com.eliteams.quick4j.web.model.Standard;
import com.eliteams.quick4j.web.service.DmstandardService;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("dmstandard")
public class DmstandardController {
    @Autowired
    DmstandardService dmstandardService;

    @ResponseBody
    @RequestMapping(value = "/update")
    public void update(@RequestBody Dmstandard dmstandard){
        dmstandardService.update(dmstandard);
    }

    @ResponseBody
    @RequestMapping(value = "/select")
    public Dmstandard select(@RequestBody Dmstandard dmstandard){
        Dmstandard st = dmstandardService.select(dmstandard);
        return st;
    }
}
