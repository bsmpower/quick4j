package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.dao.rain_spillwayMapper;
import com.eliteams.quick4j.web.model.rain_spillway;
import com.eliteams.quick4j.web.service.RainxhkService;
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
@RequestMapping("/pwkrainxhk")
public class RainxhkController {
    @Resource
    private rain_spillwayMapper rainSpillwayMapper;

    @Resource
    private RainxhkService rainxhkService;

    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<rain_spillway> pwklist(HttpServletRequest request, rain_spillway rot) {
        /**
         * 根据查询条进行返回
         */
//        Map<String,Object> modelmap = new HashMap<>();
//        rain_spillway rot = new rain_spillway();
        List<rain_spillway> list =  rainxhkService.selectRainxhk(rot);
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
    public List<rain_spillway> addPwk(HttpServletRequest request, @RequestBody rain_spillway rot) {

        int flag = rainSpillwayMapper.insert(rot);
        if (flag == 1) {
            rain_spillway ot_new = new rain_spillway();
            List<rain_spillway> list = rainxhkService.selectRainxhk(ot_new);
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
        int flag = rainxhkService.deleteByids(ids);
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
    public List<rain_spillway> updatePwk(HttpServletRequest request, @RequestBody rain_spillway rot) {
        int flag = rainSpillwayMapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            rain_spillway ot_new = new rain_spillway();
            List<rain_spillway> list = rainxhkService.selectRainxhk(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("/optionpwk")
    @ResponseBody
    public List<rain_spillway> optionPwk(HttpServletRequest request, @RequestBody rain_spillway rot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println("11111111111111111111111");
        System.out.println(rot.getTjyear());
        List<rain_spillway> list = new ArrayList<>();
        list = rainSpillwayMapper.selectRainSpillway(rot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/maptabledemo")
    @ResponseBody
    public List<rain_spillway> maptabledemo(HttpServletRequest request, @RequestBody rain_spillway ot){
        List<rain_spillway> list = rainxhkService.selectRainxhk(ot);
        System.out.println("11111111111111");
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ids.length);
        List<rain_spillway> ots = new ArrayList<>();
        ots = rainxhkService.selectByPrimaryKey(ids);
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

    private static Map<String, List<String>> getPwk(List<rain_spillway> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getXhkName() + "");
            members.add(ots.get(i).getXhkCode() + "");
            members.add(ots.get(i).getCounty() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getXhkArea() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLatitude() + "");
            members.add(ots.get(i).getXhQx() + "");
            members.add(ots.get(i).getRiverMode() + "");
            members.add(ots.get(i).getRiverName() + "");
            members.add(ots.get(i).getRiverLevel() + "");
            members.add(ots.get(i).getSeaMode() + "");
            members.add(ots.get(i).getSeaName() + "");
            members.add(ots.get(i).getXhNum() + "");
            members.add(ots.get(i).getXhTimes() + "");
            members.add(ots.get(i).getStandard() + "");
            members.add(ots.get(i).getXhGnq() + "");
            members.add(ots.get(i).getXhSzmb() + "");
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
        String[] strArray = { "序号", "统计年份", "统计月份", "统计日","所在市","泄洪口名称","泄洪口编号编号","所在县(市/区)","所在乡镇","详细地址",
                "泄洪口范围","泄洪口经度","泄洪口纬度",
                "泄洪去向","入河方式","所在河流名称","河流级别","入海方式","排入海域名称","泄洪水量(m3/次)","泄洪次数(次/年)",
                "泄洪河道水质标准","泄洪口水功能区",
                "泄洪口水质目标","泄入海域近岸海域环境功能区","泄入海域水质目标","泄入海域海洋功能区类别","泄入海域海洋功能区水质目标"};
        return strArray;
    }
}
