package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.dao.*;
import com.eliteams.quick4j.web.model.*;
import com.eliteams.quick4j.web.service.EmissionService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/analyze")
public class AnalyzeController {
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

    @RequestMapping("/avg")
    @ResponseBody
    public List toget(HttpServletRequest request) {
        //要得到查询的类型
        String type = (String) request.getParameter("type");
        //要查到监测的年份
        String jcyear = (String) request.getParameter("jcyear");
        //要查的排污口名称
        String pwkName = (String) request.getParameter("pwkName");
        //要检测的标准
        String line = (String) request.getParameter("line");

        List analyzeList = new ArrayList();
        Emission emission = new Emission();
        emission.setTjyear(jcyear);
        emission.setPwkName(pwkName);
        List<Emission> list = emissionService.selectEmission(emission);
        System.out.println(list.size());
        //获取到单条记录
        try {
            for (Emission es : list) {
                String tjmonth = es.getTjmonth();
                Map<String, Object> map = new HashMap<>();
                switch (type) {
                    case "salt":
                        Double salt = es.getSalt();
                        map.put("month", tjmonth);
                        map.put("salt", salt);
                        analyzeList.add(map);
                        System.out.println(salt);
                        break;
                    case "COD":
                        Double COD = es.getCOD();
                        map.put("month", tjmonth);
                        map.put("COD", COD);
                        analyzeList.add(map);
                        System.out.println(COD);
                        break;
                    case "NH3":
                        Double NH3 = es.getNH3();
                        map.put("month", tjmonth);
                        map.put("NH3", NH3);
                        analyzeList.add(map);
                        System.out.println(NH3);
                        break;
                    case "P":
                        Double P = es.getP();
                        map.put("month", tjmonth);
                        map.put("P", P);
                        analyzeList.add(map);
                        System.out.println(P);
                        break;
                    case "N":
                        Double N = es.getN();
                        map.put("month", tjmonth);
                        map.put("N", N);
                        analyzeList.add(map);
                        System.out.println(N);
                        break;
                    case "Cr6":
                        Double Cr6 = es.getCr6();
                        map.put("month", tjmonth);
                        map.put("Cr6", Cr6);
                        analyzeList.add(map);
                        System.out.println(Cr6);
                        break;
                    case "CN":
                        Double CN = es.getCN();
                        map.put("month", tjmonth);
                        map.put("CN", CN);
                        analyzeList.add(map);
                        System.out.println(CN);
                        break;
                    case "fdcjqs":
                        Double fdcjqs = es.getFdcjqs();
                        map.put("month", tjmonth);
                        map.put("fdcjqs", fdcjqs);
                        analyzeList.add(map);
                        System.out.println(fdcjqs);
                        break;
                    case "BOD5":
                        Double BOD5 = es.getBOD5();
                        map.put("month", tjmonth);
                        map.put("BOD5", BOD5);
                        analyzeList.add(map);
                        System.out.println(BOD5);
                        break;
                    case "xfw":
                        Double xfw = es.getXfw();
                        map.put("month", tjmonth);
                        map.put("xfw", xfw);
                        analyzeList.add(map);
                        System.out.println(xfw);
                        break;
                    case "oil":
                        Double oil = es.getOil();
                        map.put("month", tjmonth);
                        map.put("oil", oil);
                        analyzeList.add(map);
                        System.out.println(oil);
                        break;
                    case "dzwy":
                        Double dzwy = es.getDzwy();
                        map.put("month", tjmonth);
                        map.put("dzwy", dzwy);
                        analyzeList.add(map);
                        System.out.println(dzwy);
                        break;
                    case "phenol":
                        Double phenol = es.getPhenol();
                        map.put("month", tjmonth);
                        map.put("phenol", phenol);
                        analyzeList.add(map);
                        System.out.println(phenol);
                        break;
                    case "As":
                        Double As = es.getAs();
                        map.put("month", tjmonth);
                        map.put("As", As);
                        analyzeList.add(map);
                        System.out.println(As);
                        break;
                    case "Hg":
                        Double Hg = es.getSalt();
                        map.put("month", tjmonth);
                        map.put("Hg", Hg);
                        analyzeList.add(map);
                        System.out.println(Hg);
                        break;
                    case "Pb":
                        Double Pb = es.getPb();
                        map.put("month", tjmonth);
                        map.put("Pb", Pb);
                        analyzeList.add(map);
                        System.out.println(Pb);
                        break;
                    case "Cd":
                        Double Cd = es.getCd();
                        map.put("month", tjmonth);
                        map.put("Cd", Cd);
                        analyzeList.add(map);
                        System.out.println(Cd);
                        break;
                    case "PH":
                        Double PH = es.getPb();
                        map.put("month", tjmonth);
                        map.put("PH", PH);
                        analyzeList.add(map);
                        System.out.println(PH);
                        break;
                    case "chloride":
                        Double chloride = es.getChloride();
                        map.put("month", tjmonth);
                        map.put("chloride", chloride);
                        analyzeList.add(map);
                        System.out.println(chloride);
                        break;
                    case "sulfide":
                        Double sulfide = es.getSulfide();
                        map.put("month", tjmonth);
                        map.put("sulfide", sulfide);
                        analyzeList.add(map);
                        System.out.println(sulfide);
                        break;
                    case "ylzbmhxj":
                        Double ylzbmhxj = es.getYlzbmhxj();
                        map.put("month", tjmonth);
                        map.put("ylzbmhxj", ylzbmhxj);
                        analyzeList.add(map);
                        System.out.println(ylzbmhxj);
                        break;
                }
            }
            double one = 0;
            double two = 0;
            double three = 0;
            double four = 0;
            double five = 0;
            double six = 0;
            double seven = 0;
            double eight = 0;
            double nine = 0;
            double ten = 0;
            double eleven = 0;
            double twelve = 0;
            //获取到各个月份所要查的数据
            int flag1 = 0;
            int flag2 = 0;
            int flag3 = 0;
            int flag4 = 0;
            int flag5 = 0;
            int flag6 = 0;
            int flag7 = 0;
            int flag8 = 0;
            int flag9 = 0;
            int flag10 = 0;
            int flag11 = 0;
            int flag12 = 0;


            for (int i = 0; i < analyzeList.size(); i++) {
                Map maptest = (Map) analyzeList.get(i);
                if (maptest.get("month").equals("1")) {
                    one += (Double) maptest.get(type);
                    flag1++;
                }
                if (maptest.get("month").equals("2")) {
                    two += (Double) maptest.get(type);
                    flag2++;
                }
                if (maptest.get("month").equals("3")) {
                    three += (Double) maptest.get(type);
                    flag3++;
                }
                if (maptest.get("month").equals("4")) {
                    four += (Double) maptest.get(type);
                    flag4++;
                }
                if (maptest.get("month").equals("5")) {
                    five += (Double) maptest.get(type);
                    flag5++;
                }
                if (maptest.get("month").equals("6")) {
                    six += (Double) maptest.get(type);
                    flag6++;
                }
                if (maptest.get("month").equals("7")) {
                    seven += (Double) maptest.get(type);
                    flag7++;
                }
                if (maptest.get("month").equals("8")) {
                    eight += (Double) maptest.get(type);
                    flag8++;
                }
                if (maptest.get("month").equals("9")) {
                    nine += (Double) maptest.get(type);
                    flag9++;
                }
                if (maptest.get("month").equals("10")) {
                    ten += (Double) maptest.get(type);
                    flag10++;
                }
                if (maptest.get("month").equals("11")) {
                    eleven += (Double) maptest.get(type);
                    flag11++;
                }
                if (maptest.get("month").equals("12")) {
                    twelve += (Double) maptest.get(type);
                    flag12++;
                }
            }
            if (flag1 != 0) {
                one = one / flag1;
            }
            if (flag2 != 0) {
                two = two / flag2;
            }
            if (flag3 != 0) {
                three = three / flag3;
            }
            if (flag4 != 0) {
                four = four / flag4;
            }
            if (flag5 != 0) {
                five = five / flag5;
            }
            if (flag6 != 0) {
                six = six / flag6;
            }
            if (flag7 != 0) {
                seven = seven / flag7;
            }
            if (flag8 != 0) {
                eight = eight / flag8;
            }
            if (flag9 != 0) {
                nine = nine / flag9;
            }
            if (flag10 != 0) {
                ten = ten / flag10;
            }
            if (flag11 != 0) {
                eleven = eleven / flag11;
            }
            if (flag12 != 0) {
                twelve = twelve / flag12;
            }

            List xlist = new ArrayList();
            xlist.add(one);
            xlist.add(two);
            xlist.add(three);
            xlist.add(four);
            xlist.add(five);
            xlist.add(six);
            xlist.add(seven);
            xlist.add(eight);
            xlist.add(nine);
            xlist.add(ten);
            xlist.add(eleven);
            xlist.add(twelve);

            return xlist;
        } catch (Exception e) {
            System.out.println("列表有问题");
        }
        return null;
    }

    @RequestMapping("/avgyear")
    @ResponseBody
    public List togetyear(HttpServletRequest request) {
        List list = new ArrayList();
        //要得到查询的类型
        String type = (String) request.getParameter("type");
        //要查的排污口名称
        String pwkName = (String) request.getParameter("pwkName");
        //要检测的标准
        String line = (String) request.getParameter("line");

        Emission emission = new Emission();
        emission.setPwkName(pwkName);

        double flag2015 = 0;
        double flag2016 = 0;
        double flag2017 = 0;
        double flag2018 = 0;
        double flag2019 = 0;

        double sum2015 = 0;
        double sum2016 = 0;
        double sum2017 = 0;
        double sum2018 = 0;
        double sum2019 = 0;

        //第一步查找出相关指标的所有相关信息
        List analyzeList = new ArrayList();
        List<Emission> yearlist = emissionService.selectEmission(emission);
        //第二步将相关信息按照年份进行分类
        try {
            for (Emission es : yearlist) {
                Map<String, Object> map = new HashMap<>();
                String tjyear = es.getTjyear();
                switch (type) {
                    case "salt":
                        Double salt = es.getSalt();
                        map.put("tjyear", tjyear);
                        map.put("salt", salt);
                        analyzeList.add(map);
                        System.out.println(salt);
                        break;
                    case "COD":
                        Double COD = es.getCOD();
                        map.put("tjyear", tjyear);
                        map.put("COD", COD);
                        analyzeList.add(map);
                        System.out.println(COD);
                        break;
                    case "NH3":
                        Double NH3 = es.getNH3();
                        map.put("tjyear", tjyear);
                        map.put("NH3", NH3);
                        analyzeList.add(map);
                        System.out.println(NH3);
                        break;
                    case "P":
                        Double P = es.getP();
                        map.put("tjyear", tjyear);
                        map.put("P", P);
                        analyzeList.add(map);
                        System.out.println(P);
                        break;
                    case "N":
                        Double N = es.getN();
                        map.put("tjyear", tjyear);
                        map.put("N", N);
                        analyzeList.add(map);
                        System.out.println(N);
                        break;
                    case "Cr6":
                        Double Cr6 = es.getCr6();
                        map.put("tjyear", tjyear);
                        map.put("Cr6", Cr6);
                        analyzeList.add(map);
                        System.out.println(Cr6);
                        break;
                    case "CN":
                        Double CN = es.getCN();
                        map.put("tjyear", tjyear);
                        map.put("CN", CN);
                        analyzeList.add(map);
                        System.out.println(CN);
                        break;
                    case "fdcjqs":
                        Double fdcjqs = es.getFdcjqs();
                        map.put("tjyear", tjyear);
                        map.put("fdcjqs", fdcjqs);
                        analyzeList.add(map);
                        System.out.println(fdcjqs);
                        break;
                    case "BOD5":
                        Double BOD5 = es.getBOD5();
                        map.put("tjyear", tjyear);
                        map.put("BOD5", BOD5);
                        analyzeList.add(map);
                        System.out.println(BOD5);
                        break;
                    case "xfw":
                        Double xfw = es.getXfw();
                        map.put("tjyear", tjyear);
                        map.put("xfw", xfw);
                        analyzeList.add(map);
                        System.out.println(xfw);
                        break;
                    case "oil":
                        Double oil = es.getOil();
                        map.put("tjyear", tjyear);
                        map.put("oil", oil);
                        analyzeList.add(map);
                        System.out.println(oil);
                        break;
                    case "dzwy":
                        Double dzwy = es.getDzwy();
                        map.put("tjyear", tjyear);
                        map.put("dzwy", dzwy);
                        analyzeList.add(map);
                        System.out.println(dzwy);
                        break;
                    case "phenol":
                        Double phenol = es.getPhenol();
                        map.put("tjyear", tjyear);
                        map.put("phenol", phenol);
                        analyzeList.add(map);
                        System.out.println(phenol);
                        break;
                    case "As":
                        Double As = es.getAs();
                        map.put("tjyear", tjyear);
                        map.put("As", As);
                        analyzeList.add(map);
                        System.out.println(As);
                        break;
                    case "Hg":
                        Double Hg = es.getSalt();
                        map.put("tjyear", tjyear);
                        map.put("Hg", Hg);
                        analyzeList.add(map);
                        System.out.println(Hg);
                        break;
                    case "Pb":
                        Double Pb = es.getPb();
                        map.put("tjyear", tjyear);
                        map.put("Pb", Pb);
                        analyzeList.add(map);
                        System.out.println(Pb);
                        break;
                    case "Cd":
                        Double Cd = es.getCd();
                        map.put("tjyear", tjyear);
                        map.put("Cd", Cd);
                        analyzeList.add(map);
                        System.out.println(Cd);
                        break;
                    case "PH":
                        Double PH = es.getPb();
                        map.put("tjyear", tjyear);
                        map.put("PH", PH);
                        analyzeList.add(map);
                        System.out.println(PH);
                        break;
                    case "chloride":
                        Double chloride = es.getChloride();
                        map.put("tjyear", tjyear);
                        map.put("chloride", chloride);
                        analyzeList.add(map);
                        System.out.println(chloride);
                        break;
                    case "sulfide":
                        Double sulfide = es.getSulfide();
                        map.put("tjyear", tjyear);
                        map.put("sulfide", sulfide);
                        analyzeList.add(map);
                        System.out.println(sulfide);
                        break;
                    case "ylzbmhxj":
                        Double ylzbmhxj = es.getYlzbmhxj();
                        map.put("tjyear", tjyear);
                        map.put("ylzbmhxj", ylzbmhxj);
                        analyzeList.add(map);
                        System.out.println(ylzbmhxj);
                        break;
                }
            }
            for (int i = 0; i < analyzeList.size(); i++) {
                Map mapyear = (Map) analyzeList.get(i);
                if (mapyear.get("tjyear").equals("2015")) {
                    sum2015 += (Double) mapyear.get(type);
                    flag2015++;
                }
                if (mapyear.get("tjyear").equals("2016")) {
                    sum2016 += (Double) mapyear.get(type);
                    System.out.println(sum2016);
                    flag2016++;
                }
                if (mapyear.get("tjyear").equals("2017")) {
                    sum2017 += (Double) mapyear.get(type);
                    flag2017++;
                }
                if (mapyear.get("tjyear").equals("2018")) {
                    sum2018 += (Double) mapyear.get(type);
                    flag2018++;
                }
                if (mapyear.get("tjyear").equals("2019")) {
                    sum2019 += (Double) mapyear.get(type);
                    flag2019++;
                }
            }
            if (flag2015 != 0) {
                sum2015 = sum2015 / flag2015;
            }
            if (flag2016 != 0) {
                sum2016 = sum2016 / flag2016;
            }
            if (flag2017 != 0) {
                sum2017 = sum2017 / flag2017;
            }
            if (flag2018 != 0) {
                sum2018 = sum2018 / flag2018;
            }
            if (flag2019 != 0) {
                sum2019 = sum2019 / flag2019;
            }
            List ylist = new ArrayList();
            ylist.add(sum2015);
            ylist.add(sum2016);
            ylist.add(sum2017);
            ylist.add(sum2018);
            ylist.add(sum2019);
            return ylist;
        } catch (Exception e) {
            System.out.println("出错了呢");
        }
        return null;
    }

    @RequestMapping("/samecompare")
    @ResponseBody
    public List samecompare(HttpServletRequest request) {
        //要得到查询的类型
        String type = (String) request.getParameter("type");
        //要查的排污口名称
        String pwkName = (String) request.getParameter("pwkName");

        Emission es = new Emission();
        es.setPwkName(pwkName);
        es.setTjyear("2019");
        List<Emission> yearnew = emissionService.selectEmission(es);

        Emission ess = new Emission();
        es.setPwkName(pwkName);
        es.setTjyear("2018");
        List<Emission> yearlast = emissionService.selectEmission(ess);

        List analyzenew = new ArrayList();
        List analyzelast = new ArrayList();

        try {
            for (Emission et : yearnew) {
                String tjmonth = et.getTjmonth();
                Map<String, Object> map = new HashMap<>();
                switch (type) {
                    case "salt":
                        Double salt = et.getSalt();
                        map.put("month", tjmonth);
                        map.put("salt", salt);
                        analyzenew.add(map);
                        System.out.println(salt);
                        break;
                    case "COD":
                        Double COD = et.getCOD();
                        map.put("month", tjmonth);
                        map.put("COD", COD);
                        analyzenew.add(map);
                        System.out.println(COD);
                        break;
                    case "NH3":
                        Double NH3 = et.getNH3();
                        map.put("month", tjmonth);
                        map.put("NH3", NH3);
                        analyzenew.add(map);
                        System.out.println(NH3);
                        break;
                    case "P":
                        Double P = et.getP();
                        map.put("month", tjmonth);
                        map.put("P", P);
                        analyzenew.add(map);
                        System.out.println(P);
                        break;
                    case "N":
                        Double N = et.getN();
                        map.put("month", tjmonth);
                        map.put("N", N);
                        analyzenew.add(map);
                        System.out.println(N);
                        break;
                    case "Cr6":
                        Double Cr6 = et.getCr6();
                        map.put("month", tjmonth);
                        map.put("Cr6", Cr6);
                        analyzenew.add(map);
                        System.out.println(Cr6);
                        break;
                    case "CN":
                        Double CN = et.getCN();
                        map.put("month", tjmonth);
                        map.put("CN", CN);
                        analyzenew.add(map);
                        System.out.println(CN);
                        break;
                    case "fdcjqs":
                        Double fdcjqs = es.getFdcjqs();
                        map.put("month", tjmonth);
                        map.put("fdcjqs", fdcjqs);
                        analyzenew.add(map);
                        System.out.println(fdcjqs);
                        break;
                    case "BOD5":
                        Double BOD5 = et.getBOD5();
                        map.put("month", tjmonth);
                        map.put("BOD5", BOD5);
                        analyzenew.add(map);
                        System.out.println(BOD5);
                        break;
                    case "xfw":
                        Double xfw = et.getXfw();
                        map.put("month", tjmonth);
                        map.put("xfw", xfw);
                        analyzenew.add(map);
                        System.out.println(xfw);
                        break;
                    case "oil":
                        Double oil = et.getOil();
                        map.put("month", tjmonth);
                        map.put("oil", oil);
                        analyzenew.add(map);
                        System.out.println(oil);
                        break;
                    case "dzwy":
                        Double dzwy = et.getDzwy();
                        map.put("month", tjmonth);
                        map.put("dzwy", dzwy);
                        analyzenew.add(map);
                        System.out.println(dzwy);
                        break;
                    case "phenol":
                        Double phenol = et.getPhenol();
                        map.put("month", tjmonth);
                        map.put("phenol", phenol);
                        analyzenew.add(map);
                        System.out.println(phenol);
                        break;
                    case "As":
                        Double As = et.getAs();
                        map.put("month", tjmonth);
                        map.put("As", As);
                        analyzenew.add(map);
                        System.out.println(As);
                        break;
                    case "Hg":
                        Double Hg = et.getSalt();
                        map.put("month", tjmonth);
                        map.put("Hg", Hg);
                        analyzenew.add(map);
                        System.out.println(Hg);
                        break;
                    case "Pb":
                        Double Pb = et.getPb();
                        map.put("month", tjmonth);
                        map.put("Pb", Pb);
                        analyzenew.add(map);
                        System.out.println(Pb);
                        break;
                    case "Cd":
                        Double Cd = et.getCd();
                        map.put("month", tjmonth);
                        map.put("Cd", Cd);
                        analyzenew.add(map);
                        System.out.println(Cd);
                        break;
                    case "PH":
                        Double PH = et.getPb();
                        map.put("month", tjmonth);
                        map.put("PH", PH);
                        analyzenew.add(map);
                        System.out.println(PH);
                        break;
                    case "chloride":
                        Double chloride = et.getChloride();
                        map.put("month", tjmonth);
                        map.put("chloride", chloride);
                        analyzenew.add(map);
                        System.out.println(chloride);
                        break;
                    case "sulfide":
                        Double sulfide = et.getSulfide();
                        map.put("month", tjmonth);
                        map.put("sulfide", sulfide);
                        analyzenew.add(map);
                        System.out.println(sulfide);
                        break;
                    case "ylzbmhxj":
                        Double ylzbmhxj = et.getYlzbmhxj();
                        map.put("month", tjmonth);
                        map.put("ylzbmhxj", ylzbmhxj);
                        analyzenew.add(map);
                        System.out.println(ylzbmhxj);
                        break;
                }
            }
            double one = 0;
            double two = 0;
            double three = 0;
            double four = 0;
            double five = 0;
            double six = 0;
            double seven = 0;
            double eight = 0;
            double nine = 0;
            double ten = 0;
            double eleven = 0;
            double twelve = 0;
            //获取到各个月份所要查的数据
            double flag1 = 0;
            double flag2 = 0;
            double flag3 = 0;
            double flag4 = 0;
            double flag5 = 0;
            double flag6 = 0;
            double flag7 = 0;
            double flag8 = 0;
            double flag9 = 0;
            double flag10 = 0;
            double flag11 = 0;
            double flag12 = 0;


            for (int i = 0; i < analyzenew.size(); i++) {
                Map maptest = (Map) analyzenew.get(i);
                if (maptest.get("month").equals("1")) {
                    one += (Double) maptest.get(type);
                    flag1++;
                }
                if (maptest.get("month").equals("2")) {
                    two += (Double) maptest.get(type);
                    flag2++;
                }
                if (maptest.get("month").equals("3")) {
                    three += (Double) maptest.get(type);
                    flag3++;
                }
                if (maptest.get("month").equals("4")) {
                    four += (Double) maptest.get(type);
                    flag4++;
                }
                if (maptest.get("month").equals("5")) {
                    five += (Double) maptest.get(type);
                    flag5++;
                }
                if (maptest.get("month").equals("6")) {
                    six += (Double) maptest.get(type);
                    flag6++;
                }
                if (maptest.get("month").equals("7")) {
                    seven += (Double) maptest.get(type);
                    flag7++;
                }
                if (maptest.get("month").equals("8")) {
                    eight += (Double) maptest.get(type);
                    flag8++;
                }
                if (maptest.get("month").equals("9")) {
                    nine += (Double) maptest.get(type);
                    flag9++;
                }
                if (maptest.get("month").equals("10")) {
                    ten += (Double) maptest.get(type);
                    flag10++;
                }
                if (maptest.get("month").equals("11")) {
                    eleven += (Double) maptest.get(type);
                    flag11++;
                }
                if (maptest.get("month").equals("12")) {
                    twelve += (Double) maptest.get(type);
                    flag12++;
                }
            }
            if (flag1 != 0) {
                one = one / flag1;
            }
            if (flag2 != 0) {
                two = two / flag2;
            }
            if (flag3 != 0) {
                three = three / flag3;
            }
            if (flag4 != 0) {
                four = four / flag4;
            }
            if (flag5 != 0) {
                five = five / flag5;
            }
            if (flag6 != 0) {
                six = six / flag6;
            }
            if (flag7 != 0) {
                seven = seven / flag7;
            }
            if (flag8 != 0) {
                eight = eight / flag8;
            }
            if (flag9 != 0) {
                nine = nine / flag9;
            }
            if (flag10 != 0) {
                ten = ten / flag10;
            }
            if (flag11 != 0) {
                eleven = eleven / flag11;
            }
            if (flag12 != 0) {
                twelve = twelve / flag12;
            }

            List xlist = new ArrayList();
            xlist.add(one);
            xlist.add(two);
            xlist.add(three);
            xlist.add(four);
            xlist.add(five);
            xlist.add(six);
            xlist.add(seven);
            xlist.add(eight);
            xlist.add(nine);
            xlist.add(ten);
            xlist.add(eleven);
            xlist.add(twelve);

            for (Emission ett : yearlast) {
                String tjmonth = ett.getTjmonth();
                Map<String, Object> map = new HashMap<>();
                switch (type) {
                    case "salt":
                        Double salt = ett.getSalt();
                        map.put("month", tjmonth);
                        map.put("salt", salt);
                        analyzelast.add(map);
                        System.out.println(salt);
                        break;
                    case "COD":
                        Double COD = ett.getCOD();
                        map.put("month", tjmonth);
                        map.put("COD", COD);
                        analyzelast.add(map);
                        System.out.println(COD);
                        break;
                    case "NH3":
                        Double NH3 = ett.getNH3();
                        map.put("month", tjmonth);
                        map.put("NH3", NH3);
                        analyzelast.add(map);
                        System.out.println(NH3);
                        break;
                    case "P":
                        Double P = ett.getP();
                        map.put("month", tjmonth);
                        map.put("P", P);
                        analyzelast.add(map);
                        System.out.println(P);
                        break;
                    case "N":
                        Double N = ett.getN();
                        map.put("month", tjmonth);
                        map.put("N", N);
                        analyzelast.add(map);
                        System.out.println(N);
                        break;
                    case "Cr6":
                        Double Cr6 = ett.getCr6();
                        map.put("month", tjmonth);
                        map.put("Cr6", Cr6);
                        analyzelast.add(map);
                        System.out.println(Cr6);
                        break;
                    case "CN":
                        Double CN = ett.getCN();
                        map.put("month", tjmonth);
                        map.put("CN", CN);
                        analyzelast.add(map);
                        System.out.println(CN);
                        break;
                    case "fdcjqs":
                        Double fdcjqs = ett.getFdcjqs();
                        map.put("month", tjmonth);
                        map.put("fdcjqs", fdcjqs);
                        analyzelast.add(map);
                        System.out.println(fdcjqs);
                        break;
                    case "BOD5":
                        Double BOD5 = ett.getBOD5();
                        map.put("month", tjmonth);
                        map.put("BOD5", BOD5);
                        analyzelast.add(map);
                        System.out.println(BOD5);
                        break;
                    case "xfw":
                        Double xfw = ett.getXfw();
                        map.put("month", tjmonth);
                        map.put("xfw", xfw);
                        analyzelast.add(map);
                        System.out.println(xfw);
                        break;
                    case "oil":
                        Double oil = ett.getOil();
                        map.put("month", tjmonth);
                        map.put("oil", oil);
                        analyzelast.add(map);
                        System.out.println(oil);
                        break;
                    case "dzwy":
                        Double dzwy = ett.getDzwy();
                        map.put("month", tjmonth);
                        map.put("dzwy", dzwy);
                        analyzelast.add(map);
                        System.out.println(dzwy);
                        break;
                    case "phenol":
                        Double phenol = ett.getPhenol();
                        map.put("month", tjmonth);
                        map.put("phenol", phenol);
                        analyzelast.add(map);
                        System.out.println(phenol);
                        break;
                    case "As":
                        Double As = ett.getAs();
                        map.put("month", tjmonth);
                        map.put("As", As);
                        analyzelast.add(map);
                        System.out.println(As);
                        break;
                    case "Hg":
                        Double Hg = ett.getSalt();
                        map.put("month", tjmonth);
                        map.put("Hg", Hg);
                        analyzelast.add(map);
                        System.out.println(Hg);
                        break;
                    case "Pb":
                        Double Pb = ett.getPb();
                        map.put("month", tjmonth);
                        map.put("Pb", Pb);
                        analyzelast.add(map);
                        System.out.println(Pb);
                        break;
                    case "Cd":
                        Double Cd = ett.getCd();
                        map.put("month", tjmonth);
                        map.put("Cd", Cd);
                        analyzelast.add(map);
                        System.out.println(Cd);
                        break;
                    case "PH":
                        Double PH = ett.getPb();
                        map.put("month", tjmonth);
                        map.put("PH", PH);
                        analyzelast.add(map);
                        System.out.println(PH);
                        break;
                    case "chloride":
                        Double chloride = ett.getChloride();
                        map.put("month", tjmonth);
                        map.put("chloride", chloride);
                        analyzelast.add(map);
                        System.out.println(chloride);
                        break;
                    case "sulfide":
                        Double sulfide = ett.getSulfide();
                        map.put("month", tjmonth);
                        map.put("sulfide", sulfide);
                        analyzelast.add(map);
                        System.out.println(sulfide);
                        break;
                    case "ylzbmhxj":
                        Double ylzbmhxj = ett.getYlzbmhxj();
                        map.put("month", tjmonth);
                        map.put("ylzbmhxj", ylzbmhxj);
                        analyzelast.add(map);
                        System.out.println(ylzbmhxj);
                        break;
                }
            }
            double one1 = 0;
            double two1 = 0;
            double three1 = 0;
            double four1 = 0;
            double five1 = 0;
            double six1 = 0;
            double seven1 = 0;
            double eight1 = 0;
            double nine1 = 0;
            double ten1 = 0;
            double eleven1 = 0;
            double twelve1 = 0;
            //获取到各个月份所要查的数据
            double flag1last = 0;
            double flag2last = 0;
            double flag3last = 0;
            double flag4last = 0;
            double flag5last = 0;
            double flag6last = 0;
            double flag7last = 0;
            double flag8last = 0;
            double flag9last = 0;
            double flag10last = 0;
            double flag11last = 0;
            double flag12last = 0;


            for (int i = 0; i < analyzenew.size(); i++) {
                Map maptest = (Map) analyzenew.get(i);
                if (maptest.get("month").equals("1")) {
                    one1 += (Double) maptest.get(type);
                    flag1last++;
                }
                if (maptest.get("month").equals("2")) {
                    two1 += (Double) maptest.get(type);
                    flag2last++;
                }
                if (maptest.get("month").equals("3")) {
                    three1 += (Double) maptest.get(type);
                    flag3last++;
                }
                if (maptest.get("month").equals("4")) {
                    four1 += (Double) maptest.get(type);
                    flag4last++;
                }
                if (maptest.get("month").equals("5")) {
                    five1 += (Double) maptest.get(type);
                    flag5last++;
                }
                if (maptest.get("month").equals("6")) {
                    six1 += (Double) maptest.get(type);
                    flag6last++;
                }
                if (maptest.get("month").equals("7")) {
                    seven1 += (Double) maptest.get(type);
                    flag7last++;
                }
                if (maptest.get("month").equals("8")) {
                    eight1 += (Double) maptest.get(type);
                    flag8last++;
                }
                if (maptest.get("month").equals("9")) {
                    nine1 += (Double) maptest.get(type);
                    flag9last++;
                }
                if (maptest.get("month").equals("10")) {
                    ten1 += (Double) maptest.get(type);
                    flag10last++;
                }
                if (maptest.get("month").equals("11")) {
                    eleven1 += (Double) maptest.get(type);
                    flag11last++;
                }
                if (maptest.get("month").equals("12")) {
                    twelve1 += (Double) maptest.get(type);
                    flag12last++;
                }
            }
            if (flag1 != 0) {
                one1 = one1 / flag1last;
            }
            if (flag2 != 0) {
                two1 = two1 / flag2last;
            }
            if (flag3 != 0) {
                three1 = three1 / flag3last;
            }
            if (flag4 != 0) {
                four1 = four1 / flag4last;
            }
            if (flag5 != 0) {
                five = five / flag5last;
            }
            if (flag6 != 0) {
                six1 = six1 / flag6last;
            }
            if (flag7 != 0) {
                seven1 = seven1 / flag7last;
            }
            if (flag8 != 0) {
                eight1 = eight1 / flag8last;
            }
            if (flag9 != 0) {
                nine1 = nine1 / flag9last;
            }
            if (flag10 != 0) {
                ten1 = ten1 / flag10last;
            }
            if (flag11 != 0) {
                eleven1 = eleven1 / flag11last;
            }
            if (flag12 != 0) {
                twelve1 = twelve1 / flag12last;
            }

            List ylist = new ArrayList();
            ylist.add(one);
            ylist.add(two);
            ylist.add(three);
            ylist.add(four);
            ylist.add(five);
            ylist.add(six);
            ylist.add(seven);
            ylist.add(eight);
            ylist.add(nine);
            ylist.add(ten);
            ylist.add(eleven);
            ylist.add(twelve);

            List zlist = new ArrayList();
            for (int i = 0; i < 12; i++) {
                if ((Double) ylist.get(i) != 0) {
                    double x = (Double) xlist.get(i) / (Double) ylist.get(i);
                    zlist.add(x);
                } else {
                    zlist.add(0);
                }
            }
            System.out.println(zlist);
            return zlist;
        } catch (Exception e) {
            System.out.println("列表有问题");
        }

        return null;
    }

    @RequestMapping("/linkCompare")
    @ResponseBody
    public List linkCompare(HttpServletRequest request) {
        //要得到查询的类型
        String type = (String) request.getParameter("type");
        //要查的排污口名称
        String pwkName = (String) request.getParameter("pwkName");
        //要查到监测的年份
        String jcyear = (String) request.getParameter("jcyear");

        Emission emission = new Emission();
        emission.setPwkName(pwkName);
        emission.setTjyear(jcyear);
        List analyzeList = new ArrayList();
        List<Emission> list = emissionService.selectEmission(emission);
        try {
            for (Emission es : list) {
                String tjmonth = es.getTjmonth();
                Map<String, Object> map = new HashMap<>();
                switch (type) {
                    case "salt":
                        Double salt = es.getSalt();
                        map.put("month", tjmonth);
                        map.put("salt", salt);
                        analyzeList.add(map);
                        System.out.println(salt);
                        break;
                    case "COD":
                        Double COD = es.getCOD();
                        map.put("month", tjmonth);
                        map.put("COD", COD);
                        analyzeList.add(map);
                        System.out.println(COD);
                        break;
                    case "NH3":
                        Double NH3 = es.getNH3();
                        map.put("month", tjmonth);
                        map.put("NH3", NH3);
                        analyzeList.add(map);
                        System.out.println(NH3);
                        break;
                    case "P":
                        Double P = es.getP();
                        map.put("month", tjmonth);
                        map.put("P", P);
                        analyzeList.add(map);
                        System.out.println(P);
                        break;
                    case "N":
                        Double N = es.getN();
                        map.put("month", tjmonth);
                        map.put("N", N);
                        analyzeList.add(map);
                        System.out.println(N);
                        break;
                    case "Cr6":
                        Double Cr6 = es.getCr6();
                        map.put("month", tjmonth);
                        map.put("Cr6", Cr6);
                        analyzeList.add(map);
                        System.out.println(Cr6);
                        break;
                    case "CN":
                        Double CN = es.getCN();
                        map.put("month", tjmonth);
                        map.put("CN", CN);
                        analyzeList.add(map);
                        System.out.println(CN);
                        break;
                    case "fdcjqs":
                        Double fdcjqs = es.getFdcjqs();
                        map.put("month", tjmonth);
                        map.put("fdcjqs", fdcjqs);
                        analyzeList.add(map);
                        System.out.println(fdcjqs);
                        break;
                    case "BOD5":
                        Double BOD5 = es.getBOD5();
                        map.put("month", tjmonth);
                        map.put("BOD5", BOD5);
                        analyzeList.add(map);
                        System.out.println(BOD5);
                        break;
                    case "xfw":
                        Double xfw = es.getXfw();
                        map.put("month", tjmonth);
                        map.put("xfw", xfw);
                        analyzeList.add(map);
                        System.out.println(xfw);
                        break;
                    case "oil":
                        Double oil = es.getOil();
                        map.put("month", tjmonth);
                        map.put("oil", oil);
                        analyzeList.add(map);
                        System.out.println(oil);
                        break;
                    case "dzwy":
                        Double dzwy = es.getDzwy();
                        map.put("month", tjmonth);
                        map.put("dzwy", dzwy);
                        analyzeList.add(map);
                        System.out.println(dzwy);
                        break;
                    case "phenol":
                        Double phenol = es.getPhenol();
                        map.put("month", tjmonth);
                        map.put("phenol", phenol);
                        analyzeList.add(map);
                        System.out.println(phenol);
                        break;
                    case "As":
                        Double As = es.getAs();
                        map.put("month", tjmonth);
                        map.put("As", As);
                        analyzeList.add(map);
                        System.out.println(As);
                        break;
                    case "Hg":
                        Double Hg = es.getSalt();
                        map.put("month", tjmonth);
                        map.put("Hg", Hg);
                        analyzeList.add(map);
                        System.out.println(Hg);
                        break;
                    case "Pb":
                        Double Pb = es.getPb();
                        map.put("month", tjmonth);
                        map.put("Pb", Pb);
                        analyzeList.add(map);
                        System.out.println(Pb);
                        break;
                    case "Cd":
                        Double Cd = es.getCd();
                        map.put("month", tjmonth);
                        map.put("Cd", Cd);
                        analyzeList.add(map);
                        System.out.println(Cd);
                        break;
                    case "PH":
                        Double PH = es.getPb();
                        map.put("month", tjmonth);
                        map.put("PH", PH);
                        analyzeList.add(map);
                        System.out.println(PH);
                        break;
                    case "chloride":
                        Double chloride = es.getChloride();
                        map.put("month", tjmonth);
                        map.put("chloride", chloride);
                        analyzeList.add(map);
                        System.out.println(chloride);
                        break;
                    case "sulfide":
                        Double sulfide = es.getSulfide();
                        map.put("month", tjmonth);
                        map.put("sulfide", sulfide);
                        analyzeList.add(map);
                        System.out.println(sulfide);
                        break;
                    case "ylzbmhxj":
                        Double ylzbmhxj = es.getYlzbmhxj();
                        map.put("month", tjmonth);
                        map.put("ylzbmhxj", ylzbmhxj);
                        analyzeList.add(map);
                        System.out.println(ylzbmhxj);
                        break;
                }
            }
            double one = 0;
            double two = 0;
            double three = 0;
            double four = 0;
            double five = 0;
            double six = 0;
            double seven = 0;
            double eight = 0;
            double nine = 0;
            double ten = 0;
            double eleven = 0;
            double twelve = 0;
            //获取到各个月份所要查的数据
            int flag1 = 0;
            int flag2 = 0;
            int flag3 = 0;
            int flag4 = 0;
            int flag5 = 0;
            int flag6 = 0;
            int flag7 = 0;
            int flag8 = 0;
            int flag9 = 0;
            int flag10 = 0;
            int flag11 = 0;
            int flag12 = 0;


            for (int i = 0; i < analyzeList.size(); i++) {
                Map maptest = (Map) analyzeList.get(i);
                if (maptest.get("month").equals("1")) {
                    one += (Double) maptest.get(type);
                    flag1++;
                }
                if (maptest.get("month").equals("2")) {
                    two += (Double) maptest.get(type);
                    flag2++;
                }
                if (maptest.get("month").equals("3")) {
                    three += (Double) maptest.get(type);
                    flag3++;
                }
                if (maptest.get("month").equals("4")) {
                    four += (Double) maptest.get(type);
                    flag4++;
                }
                if (maptest.get("month").equals("5")) {
                    five += (Double) maptest.get(type);
                    flag5++;
                }
                if (maptest.get("month").equals("6")) {
                    six += (Double) maptest.get(type);
                    flag6++;
                }
                if (maptest.get("month").equals("7")) {
                    seven += (Double) maptest.get(type);
                    flag7++;
                }
                if (maptest.get("month").equals("8")) {
                    eight += (Double) maptest.get(type);
                    flag8++;
                }
                if (maptest.get("month").equals("9")) {
                    nine += (Double) maptest.get(type);
                    flag9++;
                }
                if (maptest.get("month").equals("10")) {
                    ten += (Double) maptest.get(type);
                    flag10++;
                }
                if (maptest.get("month").equals("11")) {
                    eleven += (Double) maptest.get(type);
                    flag11++;
                }
                if (maptest.get("month").equals("12")) {
                    twelve += (Double) maptest.get(type);
                    flag12++;
                }
            }
            if (flag1 != 0) {
                one = one / flag1;
            }
            if (flag2 != 0) {
                two = two / flag2;
            }
            if (flag3 != 0) {
                three = three / flag3;
            }
            if (flag4 != 0) {
                four = four / flag4;
            }
            if (flag5 != 0) {
                five = five / flag5;
            }
            if (flag6 != 0) {
                six = six / flag6;
            }
            if (flag7 != 0) {
                seven = seven / flag7;
            }
            if (flag8 != 0) {
                eight = eight / flag8;
            }
            if (flag9 != 0) {
                nine = nine / flag9;
            }
            if (flag10 != 0) {
                ten = ten / flag10;
            }
            if (flag11 != 0) {
                eleven = eleven / flag11;
            }
            if (flag12 != 0) {
                twelve = twelve / flag12;
            }

            List xlist = new ArrayList();
            xlist.add(one);
            xlist.add(two);
            xlist.add(three);
            xlist.add(four);
            xlist.add(five);
            xlist.add(six);
            xlist.add(seven);
            xlist.add(eight);
            xlist.add(nine);
            xlist.add(ten);
            xlist.add(eleven);
            xlist.add(twelve);

            Emission eml = new Emission();
            eml.setPwkName(pwkName);
            Integer nowyear = Integer.parseInt(jcyear) - 1;
            eml.setTjyear(nowyear.toString());
            eml.setTjmonth("12");
            List oneList = new ArrayList();
            List<Emission> ylist = emissionService.selectEmission(eml);
            if (ylist.size() != 0) {
                double lastyear = 0;
                double last = 0;
                for (Emission es : ylist) {
                    Map<String, Object> map = new HashMap<>();
                    switch (type) {
                        case "salt":
                            Double salt = es.getSalt();
                            last += salt;
                            lastyear++;
                            System.out.println(salt);
                            break;
                        case "COD":
                            Double COD = es.getCOD();
                            last += COD;
                            lastyear++;
                            System.out.println(COD);
                            break;
                        case "NH3":
                            Double NH3 = es.getNH3();
                            last += NH3;
                            lastyear++;
                            System.out.println(NH3);
                            break;
                        case "P":
                            Double P = es.getP();
                            last += P;
                            lastyear++;
                            System.out.println(P);
                            break;
                        case "N":
                            Double N = es.getN();
                            last += N;
                            lastyear++;
                            System.out.println(N);
                            break;
                        case "Cr6":
                            Double Cr6 = es.getCr6();
                            last += Cr6;
                            lastyear++;
                            System.out.println(Cr6);
                            break;
                        case "CN":
                            Double CN = es.getCN();
                            last += CN;
                            lastyear++;
                            System.out.println(CN);
                            break;
                        case "fdcjqs":
                            Double fdcjqs = es.getFdcjqs();
                            last += fdcjqs;
                            lastyear++;
                            System.out.println(fdcjqs);
                            break;
                        case "BOD5":
                            Double BOD5 = es.getBOD5();
                            last += BOD5;
                            lastyear++;
                            System.out.println(BOD5);
                            break;
                        case "xfw":
                            Double xfw = es.getXfw();
                            last += xfw;
                            lastyear++;
                            System.out.println(xfw);
                            break;
                        case "oil":
                            Double oil = es.getOil();
                            last += oil;
                            lastyear++;
                            System.out.println(oil);
                            break;
                        case "dzwy":
                            Double dzwy = es.getDzwy();
                            last += dzwy;
                            lastyear++;
                            System.out.println(dzwy);
                            break;
                        case "phenol":
                            Double phenol = es.getPhenol();
                            last += phenol;
                            lastyear++;
                            System.out.println(phenol);
                            break;
                        case "As":
                            Double As = es.getAs();
                            last += As;
                            lastyear++;
                            System.out.println(As);
                            break;
                        case "Hg":
                            Double Hg = es.getSalt();
                            last += Hg;
                            lastyear++;
                            System.out.println(Hg);
                            break;
                        case "Pb":
                            Double Pb = es.getPb();
                            last += Pb;
                            lastyear++;
                            System.out.println(Pb);
                            break;
                        case "Cd":
                            Double Cd = es.getCd();
                            last += Cd;
                            lastyear++;
                            System.out.println(Cd);
                            break;
                        case "PH":
                            Double PH = es.getPb();
                            last += PH;
                            lastyear++;
                            System.out.println(PH);
                            break;
                        case "chloride":
                            Double chloride = es.getChloride();
                            last += chloride;
                            lastyear++;
                            System.out.println(chloride);
                            break;
                        case "sulfide":
                            Double sulfide = es.getSulfide();
                            last += sulfide;
                            lastyear++;
                            System.out.println(sulfide);
                            break;
                        case "ylzbmhxj":
                            Double ylzbmhxj = es.getYlzbmhxj();
                            last += ylzbmhxj;
                            lastyear++;
                            System.out.println(ylzbmhxj);
                            break;
                    }
                }
                double sign = last / lastyear;
                List hblist = new ArrayList();
                for (int i = 0; i < xlist.size(); i++) {
                    if (i == 0) {
                        hblist.add((Double) xlist.get(0) / sign);
                    } else {
                        hblist.add((Double) xlist.get(i) / (Double) xlist.get(i - 1));
                    }
                }
                return hblist;
            } else {
                List hblist = new ArrayList();
                hblist.add((Double) xlist.get(0));
                for (int i = 1; i < xlist.size(); i++) {
                    hblist.add((Double) xlist.get(i) / (Double) xlist.get(i - 1));
                }
                return hblist;
            }

        } catch (Exception e) {
            System.out.println("列表有问题");
        }
        //求出每月的列表和去年十二月的值
        return null;
    }

    @RequestMapping("/suyuan")
    @ResponseBody
    public List<suyuan> suyuan(HttpServletRequest request) {
        //要得到查询的类型
        String type = (String) request.getParameter("type");
        //要查到监测的年份
        String jcyear = (String) request.getParameter("jcyear");
        //要检测的标准
        String line = (String) request.getParameter("line");
        //检查排污口的表
        String pwkType = (String) request.getParameter("pwktype");

        double line1 = Double.parseDouble(line);

        Emission emission = new Emission();
        emission.setTjyear(jcyear);

        List<Emission> emissions = emissionService.selectEmission(emission);
        List<suyuan> list = new ArrayList<>();
        for (Emission es : emissions) {
            suyuan sy = new suyuan();
            //搜索经纬度
            String pwkCode = es.getPwkCode();
            if (pwkCode == null || pwkCode.equals("")) {
                System.out.println("有问题");
            } else {
                if (pwkType.equals("rain_outlet")) {
                    rain_outlet ro = new rain_outlet();
                    ro.setPskCode(pwkCode);
                    List<rain_outlet> ralist = rainOutletMapper.selectRainoutlet(ro);
                    Double longitude = ralist.get(0).getLongitude();
                    Double latitude = ralist.get(0).getLatitude();
                    sy.setLongitude(longitude);
                    sy.setLatitude(latitude);
                }
                if (pwkType.equals("outlet")) {
                    outlet ro = new outlet();
                    ro.setPwkCode(pwkCode);
                    List<outlet> outletlist = outletmapper.selectPwk(ro);
                    Double longitude = outletlist.get(0).getLongitude();
                    Double latitude = outletlist.get(0).getLatitude();
                    sy.setLongitude(longitude);
                    sy.setLatitude(latitude);
                }
                if (pwkType.equals("rain_spillway")) {
                    rain_spillway rs = new rain_spillway();
                    rs.setXhkCode(pwkCode);
                    List<rain_spillway> rainSpillwaylist = rainSpillwayMapper.selectRainSpillway(rs);
                    Double longitude = rainSpillwaylist.get(0).getLongitude();
                    Double latitude = rainSpillwaylist.get(0).getLatitude();
                    sy.setLongitude(longitude);
                    sy.setLatitude(latitude);
                }
                if (pwkType.equals("rainsewage")) {
                    rainsewage re = new rainsewage();
                    re.setPskCode(pwkCode);
                    List<rainsewage> rainsewageslist = rainsewagemapper.selectRainsewage(re);
                    Double longitude = rainsewageslist.get(0).getLongitude();
                    Double latitude = rainsewageslist.get(0).getLatitude();
                    sy.setLongitude(longitude);
                    sy.setLatitude(latitude);
                }
            }
            switch (type) {
                case "salt":
                    Double salt = es.getSalt();
                    if (salt > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "COD":
                    Double COD = es.getCOD();
                    if (COD > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "NH3":
                    Double NH3 = es.getNH3();
                    if (NH3 > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "P":
                    Double P = es.getP();
                    if (P > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "N":
                    Double N = es.getN();
                    if (N > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "Cr6":
                    Double Cr6 = es.getCr6();
                    if (Cr6 > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "CN":
                    Double CN = es.getCN();
                    if (CN > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "fdcjqs":
                    Double fdcjqs = es.getFdcjqs();
                    if (fdcjqs > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "BOD5":
                    Double BOD5 = es.getBOD5();
                    if (BOD5 > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "xfw":
                    Double xfw = es.getXfw();
                    if (xfw > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "oil":
                    Double oil = es.getOil();
                    if (oil > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "dzwy":
                    Double dzwy = es.getDzwy();
                    if (dzwy > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "phenol":
                    Double phenol = es.getPhenol();
                    if (phenol > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "As":
                    Double As = es.getAs();
                    if (As > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "Hg":
                    Double Hg = es.getSalt();
                    if (Hg > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "Pb":
                    Double Pb = es.getPb();
                    if (Pb > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "Cd":
                    Double Cd = es.getCd();
                    if (Cd > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "PH":
                    Double PH = es.getPb();
                    if (PH > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "chloride":
                    Double chloride = es.getChloride();
                    if (chloride > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "sulfide":
                    Double sulfide = es.getSulfide();
                    if (sulfide > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
                case "ylzbmhxj":
                    Double ylzbmhxj = es.getYlzbmhxj();
                    if (ylzbmhxj > line1) {
                        sy.setCity(es.getCity());
                        sy.setPwkCode(es.getPwkCode());
                        sy.setPwkName(es.getPwkName());
                        sy.setCounty(es.getCounty());
                        list.add(sy);
                    }
                    break;
            }
        }
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/mulpwkfx")
    @ResponseBody
    public List<mulpwkfx> mulpwktj(@RequestBody Emission emission) {
        List<mulpwkfx> list = new ArrayList<>();
        //单排放口多达标
        //获取到要查询的排污口相关信息
        Emission es = new Emission();
        es.setPwkName(emission.getPwkName());
        es.setType(emission.getType());
        es.setTjyear(emission.getTjyear());
        es.setTjmonth(emission.getTjmonth());
        List<Emission> listes = emissionService.selectEmission(es);
        for (Emission emission1 : listes) {
            mulpwkfx mx = new mulpwkfx();
            //搜索经纬度
            String type = emission1.getType();
            String pwkCode = emission1.getPwkCode();
            if (pwkCode == null || pwkCode.equals("")) {
                System.out.println("有问题");
            } else {
                if (type.equals("雨水排污口")) {
                    rain_outlet ro = new rain_outlet();
                    ro.setPskCode(pwkCode);
                    List<rain_outlet> ralist = rainOutletMapper.selectRainoutlet(ro);
                    Double longitude = ralist.get(0).getLongitude();
                    Double latitude = ralist.get(0).getLatitude();
                    mx.setLongitude(longitude);
                    mx.setLatitude(latitude);
                }
                if (type.equals("排污口基本信息")) {
                    outlet ro = new outlet();
                    ro.setPwkCode(pwkCode);
                    List<outlet> outletlist = outletmapper.selectPwk(ro);
                    Double longitude = outletlist.get(0).getLongitude();
                    Double latitude = outletlist.get(0).getLatitude();
                    mx.setLongitude(longitude);
                    mx.setLatitude(latitude);
                }
                if (type.equals("雨水泄洪口")) {
                    rain_spillway rs = new rain_spillway();
                    rs.setXhkCode(pwkCode);
                    List<rain_spillway> rainSpillwaylist = rainSpillwayMapper.selectRainSpillway(rs);
                    Double longitude = rainSpillwaylist.get(0).getLongitude();
                    Double latitude = rainSpillwaylist.get(0).getLatitude();
                    mx.setLongitude(longitude);
                    mx.setLatitude(latitude);
                }
                if (type.equals("雨污混合排污口")) {
                    rainsewage re = new rainsewage();
                    re.setPskCode(pwkCode);
                    List<rainsewage> rainsewageslist = rainsewagemapper.selectRainsewage(re);
                    Double longitude = rainsewageslist.get(0).getLongitude();
                    Double latitude = rainsewageslist.get(0).getLatitude();
                    mx.setLongitude(longitude);
                    mx.setLatitude(latitude);
                }
            }
            mx.setCity(emission1.getCity());
            mx.setSalt(emission1.getSalt());
            mx.setCOD(emission1.getCOD());
            mx.setNH3(emission1.getNH3());
            mx.setP(emission1.getP());
            mx.setN(emission1.getN());
            mx.setCr6(emission1.getCr6());
            mx.setCN(emission1.getCN());
            mx.setFdcjqs(emission1.getFdcjqs());
            mx.setBOD5(emission1.getBOD5());
            mx.setXfw(emission1.getXfw());
            mx.setOil(emission1.getOil());
            mx.setDzwy(emission1.getDzwy());
            mx.setPhenol(emission1.getPhenol());
            mx.setAs(emission1.getAs());
            mx.setHg(emission1.getHg());
            mx.setPb(emission1.getPb());
            mx.setCd(emission1.getCd());
            mx.setPH(emission1.getPH());
            mx.setChloride(emission1.getChloride());
            mx.setSulfide(emission1.getSulfide());
            mx.setYlzbmhxj(emission1.getYlzbmhxj());

            list.add(mx);
        }
        return list;
    }
}
