package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.dao.rainsewageMapper;
import com.eliteams.quick4j.web.dao.rainsewageMapper;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.model.rainsewage;
import com.eliteams.quick4j.web.service.RainoutletService;
import com.eliteams.quick4j.web.service.RainsewageService;
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
@RequestMapping("/pwksewage")
public class RainsewageController {
    @Resource
    private rainsewageMapper rainsewagemapper;

    @Resource
    private RainsewageService rainsewageService;

    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<rainsewage> pwklist(HttpServletRequest request, rainsewage rot) {
        /**
         * 根据查询条进行返回
         */
//        Map<String,Object> modelmap = new HashMap<>();
//        rainsewage rot = new rainsewage();
        List<rainsewage> list = rainsewageService.selectRainoutlet(rot);
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
    public List<rainsewage> addPwk(HttpServletRequest request, @RequestBody rainsewage rot) {
        int flag = rainsewagemapper.insert(rot);
        if (flag == 1) {
            rainsewage ot_new = new rainsewage();
            List<rainsewage> list = rainsewageService.selectRainoutlet(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("/deletepwk")
    @ResponseBody
    public Map<String, Object> deletePwk(HttpServletRequest request, final int[] ids) {
        Map<String, Object> modelmap = new HashMap<>();
//        int flag=1;
        int flag = rainsewageService.deleteByids(ids);
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
    public List<rainsewage> updatePwk(HttpServletRequest request, @RequestBody rainsewage rot) {
        int flag = rainsewagemapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            rainsewage ot_new = new rainsewage();
            List<rainsewage> list = rainsewageService.selectRainoutlet(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("/optionpwk")
    @ResponseBody
    public List<rainsewage> optionPwk(HttpServletRequest request, @RequestBody rainsewage rot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println("11111111111111111111111");
        System.out.println(rot.getTjyear());
        List<rainsewage> list = new ArrayList<>();
        list = rainsewagemapper.selectRainsewage(rot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/maptabledemo")
    @ResponseBody
    public List<rainsewage> maptabledemo(HttpServletRequest request, @RequestBody rainsewage ot){
        List<rainsewage> list = rainsewageService.selectRainoutlet(ot);
        System.out.println("11111111111111");
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ids.length);
        List<rainsewage> ots = new ArrayList<>();
        ots = rainsewageService.selectByPrimaryKey(ids);
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

    private static Map<String, List<String>> getPwk(List<rainsewage> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getPskName() + "");
            members.add(ots.get(i).getPskCode() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getcounty() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLatitude() + "");
            members.add(ots.get(i).getPosition() + "");
            members.add(ots.get(i).getPsqx() + "");
            members.add(ots.get(i).getRiverMode() + "");
            members.add(ots.get(i).getRiverName() + "");
            members.add(ots.get(i).getRiverLevel() + "");
            members.add(ots.get(i).getSeaMode() + "");
            members.add(ots.get(i).getSeaName() + "");
            members.add(ots.get(i).getPwkRjpsl() + "");
            members.add(ots.get(i).getPwkNjpsl() + "");
            members.add(ots.get(i).getMcjypsl() + "");
            members.add(ots.get(i).getNjscs() + "");
            members.add(ots.get(i).getSource() + "");
            members.add(ots.get(i).getStandard() + "");
            members.add(ots.get(i).getRiverGnq() + "");
            members.add(ots.get(i).getRiverSzmb() + "");
            members.add(ots.get(i).getHyGnq() + "");
            members.add(ots.get(i).getHySzmb() + "");
            members.add(ots.get(i).getHyseaGnq() + "");
            members.add(ots.get(i).getHyseaSzmb() + "");
            members.add(ots.get(i).getSpareone() + "");
            members.add(ots.get(i).getSparetwo() + "");
            map.put(ots.get(i).getId() + "", members);
        }
        return map;
    }

    public static String[] excelTitle() {
        String[] strArray = { "序号", "统计年份", "统计月份", "统计日","排水口名称","排水口编码","所在市","所在县(市/区)","所在乡镇","详细地址",
                "排污口经度","排污口纬度",
                "排污口靠河岸位置","排水去向","入河方式","排入河流名称","河流级别","入海方式","排入海域名称","日均排污口排水量(吨/日)","年均排污口排水量(吨/年)",
                "每次降雨排污口排水量(吨/次)","年降雨次数(次)","污水来源","排水标准","排入河流水功能区",
                "排入河流水质目标","排入海域近岸海域环境功能区","排入海域水质目标","排入海域海洋功能区类别","排入海域海洋功能区水质目标"};
        return strArray;
    }
}
