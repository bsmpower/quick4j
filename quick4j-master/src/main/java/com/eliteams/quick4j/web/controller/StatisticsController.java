package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.dao.outletMapper;
import com.eliteams.quick4j.web.dao.rain_outletMapper;
import com.eliteams.quick4j.web.dao.rain_spillwayMapper;
import com.eliteams.quick4j.web.dao.rainsewageMapper;
import com.eliteams.quick4j.web.model.Emission;
import com.eliteams.quick4j.web.model.Standard;
import com.eliteams.quick4j.web.service.EmissionService;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/statistics")
public class StatisticsController {

    @Resource
    private EmissionService emissionService;

    @Resource
    private rain_outletMapper rainOutletMapper;

    @Resource
    private outletMapper outletmapper;

    @Resource
    private rain_spillwayMapper rainSpillwayMapper;

    @Resource
    private rainsewageMapper rainsewagemapper;

    @Resource
    private StandardService standardService;

    @RequestMapping("/multarget")
    @ResponseBody
    public List multarget(HttpServletRequest request){
        List list = new ArrayList();
        //获取排污口名字
        String pwkname = (String)request.getParameter("pwkname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取监测年份
        String monitoryear = (String)request.getParameter("monitoryear");
        //获取监测月份
        String monitormonth = (String)request.getParameter("monitormonth");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        //全指标现值
        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
        emission.setTjyear(monitoryear);
        emission.setTjmonth(monitormonth);

        List<Emission> emissions = emissionService.selectEmission(emission);
        //目前就假定一个月一条数据
        if(emissions.size() == 1){
            for(Emission es : emissions){
                list.add(es.getSalt());
                list.add(es.getCOD());
                list.add(es.getNH3());
                list.add(es.getP());
                list.add(es.getN());
                list.add(es.getCr6());
                list.add(es.getCN());
                list.add(es.getFdcjqs());
                list.add(es.getBOD5());
                list.add(es.getXfw());
                list.add(es.getOil());
                list.add(es.getDzwy());
                list.add(es.getPhenol());
                list.add(es.getAs());
                list.add(es.getHg());
                list.add(es.getPb());
                list.add(es.getCd());
                list.add(es.getPH());
                list.add(es.getChloride());
                list.add(es.getSulfide());
                list.add(es.getYlzbmhxj());
            }
            for(int i = 0; i < list.size(); i++ ){
                if(list.get(i) == null){
                    list.set(i,0);
                }
            }
            System.out.println(list);
        }else{
            System.out.println("本月不是一条数据");
        }

        return list;
    }

    @RequestMapping("/multargetbs")
    @ResponseBody
    public List multargetbs(HttpServletRequest request){
        List list = new ArrayList();
        List standardardlist = new ArrayList();
        //获取排污口名字
        String pwkname = (String)request.getParameter("pkwname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取监测年份
        String monitoryear = (String)request.getParameter("monitoryear");
        //获取监测月份
        String monitormonth = (String)request.getParameter("monitormonth");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        //全指标现值
        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
        emission.setTjyear(monitoryear);
        emission.setTjmonth(monitormonth);

        List<Emission> emissions = emissionService.selectEmission(emission);
        Standard standard = new Standard();
        standard.setPwkType(pwkselect);
        Standard sd = standardService.select(standard);
        standardardlist.add(sd.getSalt());
        standardardlist.add(sd.getCOD());
        standardardlist.add(sd.getNH3());
        standardardlist.add(sd.getP());
        standardardlist.add(sd.getN());
        standardardlist.add(sd.getCr6());
        standardardlist.add(sd.getCN());
        standardardlist.add(sd.getFdcjqs());
        standardardlist.add(sd.getBOD5());
        standardardlist.add(sd.getXfw());
        standardardlist.add(sd.getOil());
        standardardlist.add(sd.getDzwy());
        standardardlist.add(sd.getPhenol());
        standardardlist.add(sd.getAs());
        standardardlist.add(sd.getHg());
        standardardlist.add(sd.getPb());
        standardardlist.add(sd.getCd());
        standardardlist.add(sd.getPH1());
        standardardlist.add(sd.getChloride());
        standardardlist.add(sd.getSulfide());
        standardardlist.add(sd.getYlzbmhxj());

        if(emissions.size() == 1){
            for(Emission es : emissions){
                list.add(es.getSalt());
                list.add(es.getCOD());
                list.add(es.getNH3());
                list.add(es.getP());
                list.add(es.getN());
                list.add(es.getCr6());
                list.add(es.getCN());
                list.add(es.getFdcjqs());
                list.add(es.getBOD5());
                list.add(es.getXfw());
                list.add(es.getOil());
                list.add(es.getDzwy());
                list.add(es.getPhenol());
                list.add(es.getAs());
                list.add(es.getHg());
                list.add(es.getPb());
                list.add(es.getCd());
                list.add(es.getPH());
                list.add(es.getChloride());
                list.add(es.getSulfide());
                list.add(es.getYlzbmhxj());
            }
            for(int i = 0; i < list.size(); i++ ){
                if(list.get(i) == null){
                    list.set(i,0);
                }
            }
            System.out.println(list);
        }else{
            System.out.println("本月不是一条数据");
        }

        List bslist = new ArrayList();
        double x,y;
        for(int i = 0; i < standardardlist.size(); i++){
             x = Double.valueOf(list.get(i).toString().trim());
             y = Double.valueOf(standardardlist.get(i).toString().trim());
             double  z = x/y;
             bslist.add(z);
        }
        System.out.println(bslist);
        return bslist;
    }
}
