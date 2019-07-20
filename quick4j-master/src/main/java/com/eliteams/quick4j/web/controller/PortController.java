package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.web.dao.portMapper;
import com.eliteams.quick4j.web.dao.portMapper;
import com.eliteams.quick4j.web.model.port;
import com.eliteams.quick4j.web.service.OilfieldService;
import com.eliteams.quick4j.web.service.PortService;
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
@RequestMapping("/pwkport")
public class PortController {
    @Resource
    private portMapper portmapper;

    @Resource
    private PortService portService;

    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<port> pwklist(HttpServletRequest request, port rot) {
        /**
         * 根据查询条进行返回
         */
//        Map<String,Object> modelmap = new HashMap<>();
//        port rot = new port();
        List<port> list = portService.selectPort(rot);
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
    public List<port> addPwk(HttpServletRequest request, @RequestBody port rot) {
        System.out.println("adadasdas");
        System.out.println(rot.getTjyear());
        int flag = portmapper.insert(rot);
        if (flag == 1) {
            port port_new = new port();
            List<port> list = portService.selectPort(port_new);
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
        int flag = portService.deleteByids(ids);
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
    public List<port> updatePwk(HttpServletRequest request, @RequestBody port rot) {

        int flag = portmapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            port ot_new = new port();
            List<port> list = portService.selectPort(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("/optionpwk")
    @ResponseBody
    public List<port> optionPwk(HttpServletRequest request, @RequestBody port rot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println("11111111111111111111111");
        System.out.println(rot.getTjyear());
        List<port> list = new ArrayList<>();
        list = portmapper.selectport(rot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ids.length);
        List<port> ots = new ArrayList<>();
        ots = portService.selectByPrimaryKey(ids);
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

    private static Map<String, List<String>> getPwk(List<port> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getGkGame() + "");
            members.add(ots.get(i).getGkCode() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getCountry() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLatitude() + "");
            members.add(ots.get(i).getGkArea() + "");
            members.add(ots.get(i).getRiverName() + "");
            members.add(ots.get(i).getRiverLevel() + "");
            members.add(ots.get(i).getGkFunc() + "");
            members.add(ots.get(i).getGkGoal() + "");
            members.add(ots.get(i).getSeaName() + "");
            members.add(ots.get(i).getJaFunction() + "");
            members.add(ots.get(i).getJaGoal() + "");
            members.add(ots.get(i).getSeaFunctiontype() + "");
            members.add(ots.get(i).getSeaFunctiongoal() + "");
            members.add(ots.get(i).getSpareone() + "");
            members.add(ots.get(i).getSparetwo() + "");
            map.put(ots.get(i).getId() + "", members);
        }
        return map;
    }

    public static String[] excelTitle() {
        String[] strArray = {"序号","统计年份","统计月份","统计日","港口/码头名称","港口/码头编号","所在市","所在县(市/区)","所在乡镇","详细地址","港口/码头经度(E)","港口/码头纬度(N)",
                "港口/码头范围","所在河流名称","河流级别","港口/码头所在河流水功能区","港口/码头所在河流水质目标类","所在海域名称","近岸海域环境功能区","近岸海域水质目标","海洋功能区类别","海洋功能区水质目标"};
        return strArray;
    }
}
