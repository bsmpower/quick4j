package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.common.ResponseData;
import com.eliteams.quick4j.web.dao.islandMapper;
import com.eliteams.quick4j.web.model.Industry_life;
import com.eliteams.quick4j.web.model.Industry_trash;
import com.eliteams.quick4j.web.model.island;
import com.eliteams.quick4j.web.service.IndustryLifeService;
import com.eliteams.quick4j.web.service.IndustryTrashService;
import com.eliteams.quick4j.web.service.IslandService;
import com.eliteams.quick4j.web.service.OilfieldService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
@RequestMapping("/pwkisland")
public class IslandController {
    @Resource
    private islandMapper islandmapper;

    @Resource
    private IslandService islandService;



    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<island> pwklist(HttpServletRequest request,island a) {
        System.out.println("111111111");
        List<island> list = islandService.selectisland(a);
        return list;
    }


    @RequestMapping("/addpwk")
    @ResponseBody
    /**
     * 要使用request获取到前端传过来的数据的话，要进行格式转化，则要建立一个工具类
     * public static int getInt(HttpServletRequest request, String name)类似于这种
     * 前端传输数据的时候要进行参数拼接
     */
    public List<island> addPwk(@RequestBody island rot) {
        int flag = islandmapper.insert(rot);
        if (flag == 1) {
            island ot_new = new island();
            List<island> list = islandService.selectisland(ot_new);
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
        int flag = islandService.deleteByids(ids);
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
    public  List<island> updatePwk(HttpServletRequest request, @RequestBody island rot) {
        int flag = islandmapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            island ot_new = new island();
            List<island> list = islandService.selectisland(ot_new);
            return list;
        } else {
          return null;
        }
    }

    @RequestMapping("/optionpwk")
    @ResponseBody
    public List<island> optionPwk(HttpServletRequest request, @RequestBody island rot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println("11111111111111111111111");
        System.out.println(rot.getTjyear());
        List<island> list = new ArrayList<>();
        list = islandmapper.selectisland(rot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ids.length);
        List<island> ots = new ArrayList<>();
        ots = islandService.selectByPrimaryKey(ids);
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

    private static Map<String, List<String>> getPwk(List<island> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getHdpskName() + "");
            members.add(ots.get(i).getHdpskCode() + "");
            members.add(ots.get(i).getHdName() + "");
            members.add(ots.get(i).getHdArea() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getCountry() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLatitude() + "");
            members.add(ots.get(i).getSeaMode() + "");
            members.add(ots.get(i).getSeaName() + "");
            members.add(ots.get(i).getPslTd() + "");
            members.add(ots.get(i).getPslTy() + "");
            members.add(ots.get(i).getEmissionStandard() + "");
            members.add(ots.get(i).getIsGet() + "");
            members.add(ots.get(i).getNogetItems() + "");
            members.add(ots.get(i).getHyGnq() + "");
            members.add(ots.get(i).getHySzmb() + "");
            members.add(ots.get(i).getHyseaGnq() + "");
            members.add(ots.get(i).getHyseaSzmb() + "");

            map.put(ots.get(i).getId() + "", members);
        }
        return map;
    }

    public static String[] excelTitle() {
        String[] strArray = { "序号", "统计年份", "统计月份", "统计日","海岛排水(雨污)口名称","海岛排水口编码",
                "海岛名称","海岛面积","所在市","所在县(市/区)","所在乡镇","详细地址",
                "排水口经度","排水口纬度", "入海方式",
                "排入海域名称","排水量(吨/日)","排水量(吨/年)","排水标准","是否达标","不达标指标","排入海域近岸海域环境功能区","排入海域水质目标","排入海域海洋功能区类别","排入海域海洋功能区水质目标"};
        return strArray;
    }
}
