package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.dao.*;
import com.eliteams.quick4j.web.model.*;
import com.eliteams.quick4j.web.service.EmissionService;
import com.eliteams.quick4j.web.service.IndustryTrashService;
import com.eliteams.quick4j.web.service.OilfieldService;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

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

    @Resource
    private oil_fieldMapper oilFieldMapper;

    @Resource
    private portMapper portmapper;

    @Resource
    private islandMapper islandmapper;

    @Resource
    private section_messageMapper sectionMessageMapper;



    /**
     * 多指标现值分析
     * @param request
     * @return
     */
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

    /**
     * 多指标倍数分析
     * @param request
     * @return
     */
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

    /**
     * 多年单月单指标现值分析
     * @param request
     * @return
     */

    @RequestMapping("/dndydtarget")
    @ResponseBody
    public List<Double> dndydtarget(HttpServletRequest request){
        List<Double> list = new ArrayList<>();
        //获取排污口名字
        String pwkname = (String)request.getParameter("pkwname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取开始年份
        String tjstart = (String)request.getParameter("tjstart");
        //获取结束年份
        String tjend = (String)request.getParameter("tjend");
        //获取选择月份
        String monitormonth= (String)request.getParameter("monitormonth");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        //查询出该年份的指标记录
        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
//        emission.setTjyear(tjstart);
        emission.setTjmonth(monitormonth);

        //先查询出该排污口所有指定月份的信息
        List<Emission> emissions = emissionService.selectEmission(emission);

        //筛选出年份的信息
        int start = Integer.valueOf(tjstart);
        int end = Integer.valueOf(tjend);
        for(int i = start ; i <= end; i++){
            for(Emission es : emissions){
                if(Integer.valueOf(es.getTjyear()) == i){
                    //获取指标信息
                    switch (zbtype){
                        case "salt":
                            Double salt = es.getSalt();
                            list.add(salt);
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            list.add(COD);
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            list.add(NH3);
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            list.add(P);
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            list.add(N);
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            list.add(Cr6);
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            list.add(CN);
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            list.add(fdcjqs);
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            list.add(BOD5);
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            list.add(xfw);
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            list.add(oil);
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            list.add(dzwy);
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            list.add(phenol);
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            list.add(As);
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            list.add(Hg);
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            list.add(Pb);
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            list.add(Cd);
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPH();
                            list.add(PH);
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            list.add(chloride);
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            list.add(sulfide);
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            list.add(ylzbmhxj);
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
            }
        }
        return list;
    }

    /**
     * 多年单月单指标倍数分析
     * @param request
     * @return
     */

    @RequestMapping("/dndydtargetbs")
    @ResponseBody
    public List<Double> dndydtargetbs(HttpServletRequest request){
        //获取排污口名字
        String pwkname = (String)request.getParameter("pkwname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取开始年份
        String tjstart = (String)request.getParameter("tjstart");
        //获取结束年份
        String tjend = (String)request.getParameter("tjend");
        //获取选择月份
        String monitormonth= (String)request.getParameter("monitormonth");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        List<Double> list = new ArrayList<>();
        Standard standard = new Standard();
        standard.setPwkType(pwkselect);
        Standard sd = standardService.select(standard);

        //查询出该年份的指标记录
        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
//        emission.setTjyear(tjstart);
        emission.setTjmonth(monitormonth);

        //先查询出该排污口所有指定月份的信息
        List<Emission> emissions = emissionService.selectEmission(emission);

        //筛选出年份的信息
        int start = Integer.valueOf(tjstart);
        int end = Integer.valueOf(tjend);
        for(int i = start ; i <= end; i++){
            for(Emission es : emissions){
                if(Integer.valueOf(es.getTjyear()) == i){
                    //获取指标信息
                    switch (zbtype){
                        case "salt":
                            Double salt = es.getSalt();

                            list.add(salt/sd.getSalt());
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            list.add(COD/sd.getCOD());
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            list.add(NH3/sd.getNH3());
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            list.add(P/sd.getP());
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            list.add(N/sd.getN());
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            list.add(Cr6/sd.getCr6());
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            list.add(CN/sd.getCN());
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            list.add(fdcjqs/sd.getFdcjqs());
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            list.add(BOD5/sd.getBOD5());
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            list.add(xfw/sd.getXfw());
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            list.add(oil/sd.getOil());
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            list.add(dzwy/sd.getDzwy());
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            list.add(phenol/sd.getPhenol());
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            list.add(As/sd.getAs());
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            list.add(Hg/sd.getHg());
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            list.add(Pb/sd.getPb());
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            list.add(Cd/sd.getCd());
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPH();
                            list.add(PH/sd.getPH1());
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            list.add(chloride/sd.getChloride());
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            list.add(sulfide/sd.getSulfide());
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            list.add(ylzbmhxj/sd.getYlzbmhxj());
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
            }
        }
        return list;
    }


    /**
     * 多月单指标现值分析
     * @param request
     * @return
     */
    @RequestMapping("/dydtarget")
    @ResponseBody
    public List<Double> dydtarget(HttpServletRequest request){
        List<Double> list = new ArrayList<>();
        //单年多月单指标
        //获取排污口名字
        String pwkname = (String)request.getParameter("pkwname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取监测年份
        String monitoryear = (String)request.getParameter("monitoryear");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
        emission.setTjyear(monitoryear);
        List<Emission> emissions = emissionService.selectEmission(emission);
        for(int i = 1 ; i <= 12; i++){
            for(Emission es : emissions){
                if(Double.valueOf(es.getTjmonth())==i){
                    switch (zbtype){
                        case "salt":
                            Double salt = es.getSalt();

                            list.add(salt);
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            list.add(COD);
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            list.add(NH3);
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            list.add(P);
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            list.add(N);
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            list.add(Cr6);
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            list.add(CN);
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            list.add(fdcjqs);
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            list.add(BOD5);
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            list.add(xfw);
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            list.add(oil);
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            list.add(dzwy);
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            list.add(phenol);
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            list.add(As);
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            list.add(Hg);
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            list.add(Pb);
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            list.add(Cd);
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPH();
                            list.add(PH);
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            list.add(chloride);
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            list.add(sulfide);
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            list.add(ylzbmhxj);
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
            }
        }

        //获取达标类型，并在其中算出每年的值
        return list;
    }

    /**
     * 多月单指标倍数分析
     * @param request
     * @return
     */
    @RequestMapping("/dydtargetbs")
    @ResponseBody
    public List<Double> dydtargetbs(HttpServletRequest request){
        List<Double> list = new ArrayList<>();

        //获取排污口名字
        String pwkname = (String)request.getParameter("pkwname");
        //获取排污口类型
        String pwkselect = (String)request.getParameter("pwkselect");
        //获取监测年份
        String monitoryear = (String)request.getParameter("monitoryear");
        //获取达标类型
        String zbtype = (String)request.getParameter("zbtype");

        Emission emission = new Emission();
        emission.setPwkName(pwkname);
        emission.setType(pwkselect);
        emission.setTjyear(monitoryear);
        List<Emission> emissions = emissionService.selectEmission(emission);

        //查出标准
        Standard standard = new Standard();
        standard.setPwkType(pwkselect);
        Standard sd = standardService.select(standard);

        for(int i = 1 ; i <= 12; i++){
            for(Emission es : emissions){
                if(Double.valueOf(es.getTjmonth())==i){
                    switch (zbtype){
                        case "salt":
                            Double salt = es.getSalt();

                            list.add(salt/sd.getSalt());
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            list.add(COD/sd.getCOD());
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            list.add(NH3/sd.getNH3());
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            list.add(P/sd.getP());
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            list.add(N/sd.getN());
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            list.add(Cr6/sd.getCr6());
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            list.add(CN/sd.getCN());
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            list.add(fdcjqs/sd.getFdcjqs());
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            list.add(BOD5/sd.getBOD5());
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            list.add(xfw/sd.getXfw());
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            list.add(oil/sd.getOil());
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            list.add(dzwy/sd.getDzwy());
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            list.add(phenol/sd.getPhenol());
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            list.add(As/sd.getAs());
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            list.add(Hg/sd.getHg());
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            list.add(Pb/sd.getPb());
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            list.add(Cd/sd.getCd());
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPH();
                            list.add(PH/sd.getPH1());
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            list.add(chloride/sd.getChloride());
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            list.add(sulfide/sd.getSulfide());
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            list.add(ylzbmhxj/sd.getYlzbmhxj());
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
            }
        }
        return list;
    }

    @RequestMapping("/mulpwkfx")
    @ResponseBody
    public List<Double> mulpwkfx(HttpServletRequest request,
                                 @RequestParam("pwknamelist")String pwknamelist,
                                 @RequestParam("pwktypelist")String pwktypelist){
        List<Double> list = new ArrayList<>();
        //获取排污口名字
        String jcyear = (String)request.getParameter("jcyear");
        String jcmonth = (String)request.getParameter("jcmonth");
        String dbtype = (String)request.getParameter("dbtype");

        List<String> bnlist = new ArrayList<>();
        String[] a = pwknamelist.split(",");
        for(int i = 0; i < a.length; i++){
            String b[] = a[i].split("\"");
            String pwkname = b[1];
            bnlist.add(pwkname);
        }

        List<String> typelist = new ArrayList<>();
        String[] c = pwktypelist.split(",");
        for(int i = 0; i < c.length; i++){
            String d[] = c[i].split("\"");
            String pwktype = d[1];
            typelist.add(pwktype);
        }

        for(int i = 0; i < bnlist.size(); i++){
            Emission emission = new Emission();
            emission.setPwkName(bnlist.get(i));
            emission.setType(typelist.get(i));
            emission.setTjyear(jcyear);
            emission.setTjmonth(jcmonth);
            List<Emission> emissions = emissionService.selectEmission(emission);
            if(emissions.size()==1){
                for(Emission es:emissions){
                    switch (dbtype){
                        case "salt":
                            Double salt = es.getSalt();

                            list.add(salt);
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            list.add(COD);
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            list.add(NH3);
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            list.add(P);
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            list.add(N);
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            list.add(Cr6);
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            list.add(CN);
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            list.add(fdcjqs);
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            list.add(BOD5);
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            list.add(xfw);
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            list.add(oil);
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            list.add(dzwy);
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            list.add(phenol);
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            list.add(As);
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            list.add(Hg);
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            list.add(Pb);
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            list.add(Cd);
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPH();
                            list.add(PH);
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            list.add(chloride);
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            list.add(sulfide);
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            list.add(ylzbmhxj);
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
            }
        }
        return list;
    }

    @RequestMapping("/syfx")
    @ResponseBody
    public Map<String,Object> syfx(HttpServletRequest request){
        Map<String,Object> modelmap = new HashMap<>();
        String pwkname = (String)request.getParameter("pwkname");
        String pwkselect = (String)request.getParameter("pwkselect");
        String year = (String)request.getParameter("year");
        String month = (String)request.getParameter("month");
        String dbtype = (String)request.getParameter("dbtype");
        String rivername;
        String city;
        //搜索出排污口信息，根据pwkselect选择各种表
        //获取到排入河流名称 river
        //搜索所有与这个河流有关的排污口信息
        switch(pwkselect){
            case "雨水排污口":
                rain_outlet rainOutlet = new rain_outlet();
                rainOutlet.setPskName(pwkname);
                rainOutlet.setTjyear(year);
                rainOutlet.setTjmonth(month);

                List<rain_outlet> rs = rainOutletMapper.selectRainoutlet(rainOutlet);
                rivername = rs.get(0).getRiverName();
                city = rs.get(0).getCity();
                modelmap.put("city",city);

                //智者务其实，愚者争其名
                //搜索与这个河流有关的排污口信息
                rain_outlet rainOutletnew = new rain_outlet();
                rainOutletnew.setRiverName(rivername);
                List<rain_outlet> rsnew = rainOutletMapper.selectRainoutlet(rainOutletnew);
                modelmap.put("length",rsnew.size());
                List<Double> lon = new ArrayList<>();
                List<Double> lat = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for(rain_outlet ros:rsnew){
                    String rosyear = ros.getTjyear();
                    String rosmonth =ros.getTjmonth();
                    String rospwkname = ros.getPskName();
                    String rostype = "雨水排污口";

                    Double longitude = ros.getLongitude();
                    lon.add(longitude);
                    Double latitude = ros.getLatitude();
                    lat.add(latitude);
                    //获取经纬度

                    Emission emission = new Emission();
                    emission.setPwkName(rospwkname);
                    emission.setTjyear(rosyear);
                    emission.setTjmonth(rosmonth);
                    emission.setType(rostype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rospwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rospwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rospwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rospwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rospwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rospwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rospwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rospwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rospwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rospwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rospwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rospwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rospwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rospwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rospwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rospwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rospwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rospwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rospwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rospwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rospwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon);
                modelmap.put("latitude",lat);
                break;
            case "雨污混合口":
                rainsewage re =new rainsewage();
                re.setPskName(pwkname);
                re.setTjyear(year);
                re.setTjmonth(month);

                List<rainsewage> rw = rainsewagemapper.selectRainsewage(re);
                rivername = rw.get(0).getRiverName();
                city = rw.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                rainsewage renew = new rainsewage();
                renew.setRiverName(rivername);
                List<rainsewage> rwnew = rainsewagemapper.selectRainsewage(renew);
                modelmap.put("length",rwnew.size());
                List<Double> lon1 = new ArrayList<>();
                List<Double> lat1 = new ArrayList<>();

                for(rainsewage rge: rwnew){
                    String rgeyear = rge.getTjyear();
                    String rgemonth = rge.getTjmonth();
                    String rgepwkname = rge.getPskName();
                    String rgetype = "雨污混合口";

                    Double longitude = rge.getLongitude();
                    lon1.add(longitude);
                    Double latitude = rge.getLatitude();
                    lat1.add(latitude);

                    //获取经纬度
                    Emission emission = new Emission();
                    emission.setPwkName(rgepwkname);
                    emission.setTjyear(rgeyear);
                    emission.setTjmonth(rgemonth);
                    emission.setType(rgetype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rgepwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rgepwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rgepwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rgepwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rgepwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rgepwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rgepwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rgepwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rgepwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rgepwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rgepwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rgepwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rgepwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rgepwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rgepwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rgepwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rgepwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rgepwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rgepwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rgepwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rgepwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon1);
                modelmap.put("latitude",lat1);
                break;
            case "雨水泄洪口":
                rain_spillway rainSpillway = new rain_spillway();
                rainSpillway.setXhkName(pwkname);
                rainSpillway.setTjyear(year);
                rainSpillway.setTjmonth(month);

                List<rain_spillway> ry = rainSpillwayMapper.selectRainSpillway(rainSpillway);
                rivername = ry.get(0).getRiverName();
                city = ry.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                rain_spillway rainSpillwaynew = new rain_spillway();
                rainSpillwaynew.setRiverName(rivername);
                List<rain_spillway> rynew = rainSpillwayMapper.selectRainSpillway(rainSpillwaynew);
                modelmap.put("length",rynew.size());
                List<Double> lon2 = new ArrayList<>();
                List<Double> lat2 = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for(rain_spillway rsy:rynew){
                    String rsyyear = rsy.getTjyear();
                    String rsymonth = rsy.getTjmonth();
                    String rsypwkname = rsy.getXhkName();
                    String rsytype = "雨水泄洪口";

                    Double longitude = rsy.getLongitude();
                    lon2.add(longitude);
                    Double latitude = rsy.getLatitude();
                    lat2.add(latitude);

                    //经纬度
                    Emission emission = new Emission();
                    emission.setPwkName(rsypwkname);
                    emission.setTjyear(rsyyear);
                    emission.setTjmonth(rsymonth);
                    emission.setType(rsytype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rsypwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rsypwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rsypwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rsypwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rsypwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rsypwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rsypwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rsypwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rsypwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rsypwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rsypwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rsypwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rsypwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rsypwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rsypwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rsypwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rsypwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rsypwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rsypwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rsypwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rsypwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon2);
                modelmap.put("latitude",lat2);
                break;
            case "排污口基本信息":
                outlet ot = new outlet();
                ot.setPwkName(pwkname);
                ot.setTjyear(year);
                ot.setTjmonth(month);

                List<outlet> outlets = outletmapper.selectPwk(ot);
                rivername = outlets.get(0).getRiverName();
                city = outlets.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                outlet otnew = new outlet();
                otnew.setRiverName(rivername);
                List<outlet> outletsnew = outletmapper.selectPwk(otnew);
                modelmap.put("length",outletsnew.size());
                List<Double> lon3 = new ArrayList<>();
                List<Double> lat3 = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for( outlet ros:outletsnew){
                    String rosyear = ros.getTjyear();
                    String rosmonth =ros.getTjmonth();
                    String rospwkname = ros.getPwkName();
                    String rostype = "排污口基本信息";

                    Double longitude = ros.getLongitude();
                    lon3.add(longitude);
                    Double latitude = ros.getLatitude();
                    lat3.add(latitude);
                    //获取经纬度

                    Emission emission = new Emission();
                    emission.setPwkName(rospwkname);
                    emission.setTjyear(rosyear);
                    emission.setTjmonth(rosmonth);
                    emission.setType(rostype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rospwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rospwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rospwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rospwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rospwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rospwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rospwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rospwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rospwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rospwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rospwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rospwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rospwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rospwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rospwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rospwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rospwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rospwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rospwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rospwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rospwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon3);
                modelmap.put("latitude",lat3);

                break;
            case "油田信息":
                oil_field oilField = new oil_field();
                oilField.setYtName(pwkname);
                oilField.setTjyear(year);
                oilField.setTjmonth(month);

                List<oil_field> oil_fields = oilFieldMapper.selectoilfield(oilField);
                rivername = oil_fields.get(0).getRiverName();
                city = oil_fields.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                oil_field oilFieldnew = new oil_field();
                oilFieldnew.setRiverName(rivername);
                List<oil_field> oil_fieldsnew = oilFieldMapper.selectoilfield(oilFieldnew);
                modelmap.put("length",oil_fieldsnew.size());
                List<Double> lon4 = new ArrayList<>();
                List<Double> lat4 = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for(oil_field ros:oil_fieldsnew){
                    String rosyear = ros.getTjyear();
                    String rosmonth =ros.getTjmonth();
                    String rospwkname = ros.getYtName();
                    String rostype = "油田信息";

                    Double longitude = ros.getLongitude();
                    lon4.add(longitude);
                    Double latitude = ros.getLatitude();
                    lat4.add(latitude);
                    //获取经纬度

                    Emission emission = new Emission();
                    emission.setPwkName(rospwkname);
                    emission.setTjyear(rosyear);
                    emission.setTjmonth(rosmonth);
                    emission.setType(rostype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rospwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rospwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rospwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rospwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rospwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rospwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rospwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rospwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rospwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rospwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rospwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rospwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rospwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rospwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rospwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rospwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rospwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rospwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rospwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rospwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rospwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon4);
                modelmap.put("latitude",lat4);
                break;
            case "港口码头":
                port pt = new port();
                pt.setGkGame(pwkname);
                pt.setTjyear(year);
                pt.setTjmonth(month);

                List<port> ports = portmapper.selectport(pt);
                rivername = ports.get(0).getRiverName();
                city = ports.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                port ptnew = new port();
                ptnew.setRiverName(rivername);
                List<port> portsnew = portmapper.selectport(ptnew);
                modelmap.put("length",portsnew.size());
                List<Double> lon5 = new ArrayList<>();
                List<Double> lat5 = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for(port ros:portsnew){
                    String rosyear = ros.getTjyear();
                    String rosmonth =ros.getTjmonth();
                    String rospwkname = ros.getGkGame();
                    String rostype = "港口码头";

                    Double longitude = ros.getLongitude();
                    lon5.add(longitude);
                    Double latitude = ros.getLatitude();
                    lat5.add(latitude);
                    //获取经纬度

                    Emission emission = new Emission();
                    emission.setPwkName(rospwkname);
                    emission.setTjyear(rosyear);
                    emission.setTjmonth(rosmonth);
                    emission.setType(rostype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rospwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rospwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rospwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rospwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rospwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rospwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rospwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rospwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rospwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rospwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rospwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rospwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rospwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rospwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rospwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rospwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rospwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rospwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rospwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rospwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rospwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon5);
                modelmap.put("latitude",lat5);
                break;
            case "海岛名录":
                island isd = new island();
                isd.setHdpskName(pwkname);
                isd.setTjyear(year);
                isd.setTjmonth(month);

                List<island> islands = islandmapper.selectisland(isd);
                rivername = islands.get(0).getSeaName();
                city = islands.get(0).getCity();
                modelmap.put("city",city);

                //搜索与这个河流有关的排污口信息
                island isdnew = new island();
                isdnew.setSeaName(rivername);
                List<island> islandsnew = islandmapper.selectisland(isdnew);
                modelmap.put("length",islandsnew.size());
                List<Double> lon6 = new ArrayList<>();
                List<Double> lat6 = new ArrayList<>();

                //获取排污口的pwkname、tjyear、tjmonth、type
                for(island ros:islandsnew){
                    String rosyear = ros.getTjyear();
                    String rosmonth =ros.getTjmonth();
                    String rospwkname = ros.getHdpskName();
                    String rostype = "海岛名录";

                    Double longitude = ros.getLongitude();
                    lon6.add(longitude);
                    Double latitude = ros.getLatitude();
                    lat6.add(latitude);
                    //获取经纬度

                    Emission emission = new Emission();
                    emission.setPwkName(rospwkname);
                    emission.setTjyear(rosyear);
                    emission.setTjmonth(rosmonth);
                    emission.setType(rostype);

                    //搜索相关数据
                    List<Emission> emissions = emissionService.selectEmission(emission);
                    switch(dbtype){
                        case "salt":
                            Double salt = emissions.get(0).getSalt();
                            modelmap.put(rospwkname,salt);
                            break;
                        case "COD":
                            Double COD = emissions.get(0).getCOD();
                            modelmap.put(rospwkname,COD);
                            break;
                        case "NH3":
                            Double NH3 = emissions.get(0).getNH3();
                            modelmap.put(rospwkname,NH3);
                            break;
                        case "P":
                            Double P = emissions.get(0).getP();
                            modelmap.put(rospwkname,P);
                            break;
                        case "N":
                            Double N = emissions.get(0).getN();
                            modelmap.put(rospwkname,N);
                            break;
                        case "Cr6":
                            Double Cr6 = emissions.get(0).getCr6();
                            modelmap.put(rospwkname,Cr6);
                            break;
                        case "CN":
                            Double CN = emissions.get(0).getCN();
                            modelmap.put(rospwkname,CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = emissions.get(0).getFdcjqs();
                            modelmap.put(rospwkname,fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = emissions.get(0).getBOD5();
                            modelmap.put(rospwkname,BOD5);
                            break;
                        case "xfw":
                            Double xfw = emissions.get(0).getXfw();
                            modelmap.put(rospwkname,xfw);
                            break;
                        case "oil":
                            Double oil = emissions.get(0).getOil();
                            modelmap.put(rospwkname,oil);
                            break;
                        case "dzwy":
                            Double dzwy = emissions.get(0).getDzwy();
                            modelmap.put(rospwkname,dzwy);
                            break;
                        case "phenol":
                            Double phenol = emissions.get(0).getPhenol();
                            modelmap.put(rospwkname,phenol);
                            break;
                        case "As":
                            Double As = emissions.get(0).getAs();
                            modelmap.put(rospwkname,As);
                            break;
                        case "Hg":
                            Double Hg = emissions.get(0).getHg();
                            modelmap.put(rospwkname,Hg);
                            break;
                        case "Pb":
                            Double Pb = emissions.get(0).getPb();
                            modelmap.put(rospwkname,Pb);
                            break;
                        case "Cd":
                            Double Cd = emissions.get(0).getCd();
                            modelmap.put(rospwkname,Cd);
                            break;
                        case "PH":
                            Double PH = emissions.get(0).getPH();
                            modelmap.put(rospwkname,PH);
                            break;
                        case "chloride":
                            Double chloride = emissions.get(0).getChloride();
                            modelmap.put(rospwkname,chloride);
                            break;
                        case "sulfide":
                            Double sulfide = emissions.get(0).getSulfide();
                            modelmap.put(rospwkname,sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = emissions.get(0).getYlzbmhxj();
                            modelmap.put(rospwkname,ylzbmhxj);
                            break;
                    }
                }
                modelmap.put("longitude",lon6);
                modelmap.put("latitude",lat6);
                break;
            case "断面信息":
                break;
        }
        return modelmap;
    }
}
