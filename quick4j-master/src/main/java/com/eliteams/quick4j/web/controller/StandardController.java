package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.model.Standard;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("standard")
public class StandardController {
    @Autowired
    StandardService standardService;

    @ResponseBody
    @RequestMapping(value = "/update")
    public void update(@RequestBody Standard standard){
        standardService.update(standard);
    }

    @ResponseBody
    @RequestMapping(value = "/select")
    public Standard select(@RequestBody Standard standard){
        Standard st = standardService.select(standard);
        return st;
    }
}
