package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.dao.section_messageMapper;
import com.eliteams.quick4j.web.model.section_message;
import com.eliteams.quick4j.web.service.SectionMessageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.FileNotFoundException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/pwksection")
public class SectionMessageController {
    @Resource
    private section_messageMapper sectionMessageMapper;

    @Resource
    private SectionMessageService sectionMessageService;

    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<section_message> pwklist(HttpServletRequest request, section_message rot) {
        /**
         * 根据查询条进行返回
         */
//        Map<String,Object> modelmap = new HashMap<>();
//        section_message rot = new section_message();
        List<section_message> list = sectionMessageService.selectSection(rot);
        //下边这个是jsp的写法
        //        ModelAndView mav = new ModelAndView();
        //        mav.addObject("pwklist",list);
        //          mav.setViewName("/pwk/pwktable");
//        modelmap.put("pwklist",list);

        return list;
    }

    @RequestMapping("/addpwk")
    @ResponseBody
    /**
     * 要使用request获取到前端传过来的数据的话，要进行格式转化，则要建立一个工具类
     * public static int getInt(HttpServletRequest request, String name)类似于这种
     * 前端传输数据的时候要进行参数拼接
     */
    public Map<String, Object> addPwk(HttpServletRequest request, @RequestBody section_message rot) {
        System.out.println("adadasdas");
        System.out.println(rot.getTjyear());
        Map<String, Object> modelmap = new HashMap<>();
        int flag = sectionMessageMapper.insert(rot);
        if (flag == 1) {
            modelmap.put("success", true);

            return modelmap;
        } else {
            modelmap.put("succeess", false);
            modelmap.put("errMsg", "添加失败");

            return modelmap;
        }
    }

    @RequestMapping("/deletepwk")
    @ResponseBody
    public Map<String, Object> deletePwk(HttpServletRequest request, final int[] ids) {
        Map<String, Object> modelmap = new HashMap<>();
//        int flag=1;
        int flag = sectionMessageService.deleteByids(ids);
        System.out.println(ids[0]);
        if (flag == 1) {
            modelmap.put("success", true);

            return modelmap;
        } else {
            modelmap.put("succeess", false);
            modelmap.put("errMsg", "添加失败");

            return modelmap;
        }
    }

    @RequestMapping("/updatepwk")
    @ResponseBody
    public Map<String, Object> updatePwk(HttpServletRequest request, @RequestBody section_message rot) {
        Map<String, Object> modelmap = new HashMap<>();
        int flag = sectionMessageMapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            modelmap.put("success", true);
            return modelmap;
        } else {
            modelmap.put("succeess", false);
            modelmap.put("errMsg", "添加失败");

            return modelmap;
        }
    }

    @RequestMapping("/optionpwk")
    @ResponseBody
    public List<section_message> optionPwk(HttpServletRequest request, @RequestBody section_message rot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println("11111111111111111111111");
        System.out.println(rot.getTjyear());
        List<section_message> list = new ArrayList<>();
        list = sectionMessageMapper.selectsection(rot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ids.length);
        List<section_message> ots = new ArrayList<>();
        ots = sectionMessageService.selectByPrimaryKey(ids);
        Map<String, List<String>> pwkMap = getPwk(ots);
        String[] strArry = excelTitle();
        try{
            ExcelUtil.createExcel(pwkMap, strArry);
            modelmap.put("success",true);
            return modelmap;
        }catch (Exception e){
            e.printStackTrace();
        }
        modelmap.put("success",false);
        modelmap.put("msg","请重新导出");
        return modelmap;
    }

    private static Map<String, List<String>> getPwk(List<section_message> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getDmName() + "");
            members.add(ots.get(i).getDmCode() + "");
            members.add(ots.get(i).getDmType() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getCounty() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLaititude() + "");
            members.add(ots.get(i).getSssx() + "");
            members.add(ots.get(i).getRiverName() + "");
            members.add(ots.get(i).getSzType() + "");
            members.add(ots.get(i).getDmGoal() + "");
            members.add(ots.get(i).getHlsGnq() + "");
            members.add(ots.get(i).getIsGet() + "");
            members.add(ots.get(i).getNogetItems() + "");

            map.put(ots.get(i).getId() + "", members);
        }
        return map;
    }

    public static String[] excelTitle() {
        String[] strArray = { "序号", "统计年份", "统计月份", "统计日","断面名称","断面编码",
                "断面类型","所在市","所在县(市/区)","所在乡镇","断面详细地址",
                "经度","纬度", "所属水系",
                "所在河流","现状水质类别","断面水质目标","河流水功能区","是否达标","不达标指标"};
        return strArray;
    }
}
