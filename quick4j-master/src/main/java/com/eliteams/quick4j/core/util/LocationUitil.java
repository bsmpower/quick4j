package com.eliteams.quick4j.core.util;

import com.eliteams.quick4j.web.model.*;
import com.eliteams.quick4j.web.service.*;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LocationUitil {
    @Resource
    private OutletService outletService;

    @Resource
    private RainoutletService rainoutletService;

    @Resource
    private RainsewageService rainsewageService;

    @Resource
    private RainxhkService rainxhkService;

    @Resource
    private SectionMessageService sectionMessageService;


    public Map<String,Object> getlocation(String pwkname){
        Map<String, Object> modelmap = new HashMap<>();
        //第一步，我们需要七个类
        //1.排放口基本信息
        outlet ot = new outlet();
        ot.setPwkName(pwkname);
        //2.雨水排放口
        rain_outlet rt = new rain_outlet();
        rt.setPskName(pwkname);
        //3.雨水泄洪口
        rain_spillway ry = new rain_spillway();
        ry.setXhkName(pwkname);
        //4.雨污混合口
        rainsewage re = new rainsewage();
        re.setPskName(pwkname);

        List<outlet> list = outletService.selectPwk(ot);
        List<rain_outlet> list2 = rainoutletService.selectRainoutlet(rt);
        List<rain_spillway> list3 = rainxhkService.selectRainxhk(ry);
        List<rainsewage> list4 = rainsewageService.selectRainoutlet(re);

        if(!list.isEmpty()){
            double longtitude = list.get(0).getLongitude();
            double latitude = list.get(0).getLatitude();
            modelmap.put("经度",longtitude);
            modelmap.put("纬度",latitude);
            return modelmap;
        }
        if(!list2.isEmpty()){
            double longtitude = list2.get(0).getLongitude();
            double latitude = list2.get(0).getLatitude();
            modelmap.put("经度",longtitude);
            modelmap.put("纬度",latitude);
            return modelmap;
        }
        if(!list3.isEmpty()){
            double longtitude = list3.get(0).getLongitude();
            double latitude = list3.get(0).getLatitude();
            modelmap.put("经度",longtitude);
            modelmap.put("纬度",latitude);
            return modelmap;
        }
        if(!list4.isEmpty()){
            double longtitude = list4.get(0).getLongitude();
            double latitude = list4.get(0).getLatitude();
            modelmap.put("经度",longtitude);
            modelmap.put("纬度",latitude);
            return modelmap;
        }
        return null;
    }

    public Map<String,Object> getsection(String dmname){
        Map<String, Object> modelmap = new HashMap<>();
        section_message s = new section_message();
        s.setDmName(dmname);
        List<section_message> sl = sectionMessageService.selectSection(s);

        if(!sl.isEmpty()){
            double longtitude = sl.get(0).getLongitude();
            double latitude = sl.get(0).getLaititude();
            modelmap.put("经度",longtitude);
            modelmap.put("纬度",latitude);
            return modelmap;
        }
        return null;
    }
}
