package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.feature.orm.mybatis.Page;
import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.core.util.PaginationResult;
import com.eliteams.quick4j.web.dao.outletMapper;
import com.eliteams.quick4j.web.model.User;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.service.OutletService;
import com.github.opendevl.JFlat;
import net.sf.json.JSONArray;
import org.apache.shiro.crypto.hash.Hash;
import org.json.CDL;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import net.sf.json.JSONObject;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
//@RequestMapping("/pwkmessage")
@RequestMapping("/pwk")
public class OutletController {
    @Resource
    private OutletService outletService;
    @Resource
    private outletMapper outletmapper;

    //    @RequestMapping("/pwksearch")
    @RequestMapping("/pwkshowlist")
    @ResponseBody
    public List<outlet> pwklist(HttpServletRequest request, outlet ot) {
        /**
         * 根据查询条进行返回
         */
        User user = (User)request.getSession().getAttribute("userInfo");
        System.out.println(user.getState());
        if (user.getState().equals("沈阳市")){
            ot.setCity("沈阳市");
            List<outlet> list = outletmapper.selectPwk(ot);
            System.out.println(list.size());
            return list;
        }else{
            List<outlet> list = outletService.selectPwk(ot);
            return list;
        }
        //        Map<String,Object> modelmap = new HashMap<>();
//        System.out.println("33333333333333333333333333");
        //下边这个是jsp的写法
        //        ModelAndView mav = new ModelAndView();
        //        mav.addObject("pwklist",list);
        //          mav.setViewName("/pwk/pwktable");
//        modelmap.put("pwklist",list);
    }

    @RequestMapping("/addpwk")
    @ResponseBody
    /**
     * 要使用request获取到前端传过来的数据的话，要进行格式转化，则要建立一个工具类
     * public static int getInt(HttpServletRequest request, String name)类似于这种
     * 前端传输数据的时候要进行参数拼接
     */
    public List<outlet> addPwk(HttpServletRequest request, @RequestBody outlet ot) {
        System.out.println(ot.getName());
        int flag = outletmapper.insert(ot);
        if (flag == 1) {
                outlet ot_new = new outlet();
                List<outlet> list = outletService.selectPwk(ot_new);
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
        int flag = outletService.deleteByids(ids);
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
    public List<outlet> updatePwk(HttpServletRequest request, @RequestBody outlet ot) {
        int flag = outletmapper.updateByPrimaryKeySelective(ot);
        if (flag == 1) {
            outlet ot_new = new outlet();
            List<outlet> list = outletService.selectPwk(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("optionpwk")
    @ResponseBody
    public List<outlet> optionPwk(HttpServletRequest request, @RequestBody outlet ot){
        User user = (User)request.getSession().getAttribute("userInfo");
        System.out.println(user.getState());
        if (user.getState().equals("沈阳市")){
            ot.setCity("沈阳市");
        }
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ot.getTjyear());
        List<outlet> list = new ArrayList<>();
        list = outletmapper.selectPwk(ot);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("maptabledemo")
    @ResponseBody
    public List<outlet> maptabledemo(HttpServletRequest request, @RequestBody outlet ot){
        List<outlet> list = outletService.selectPwk(ot);
        System.out.println("11111111111111");
        return list;
    }

    @RequestMapping("/excelout")
    @ResponseBody
    public Map<String, Object> excelOut(HttpServletRequest request, final int[] ids ) throws FileNotFoundException, UnsupportedEncodingException {

           Map<String, Object> modelmap = new HashMap<>();
           System.out.println(ids.length);
           List<outlet> ots = new ArrayList<>();
           ots = outletService.selectByPrimaryKey(ids);
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

    private static Map<String, List<String>> getPwk(List<outlet> ots){
        Map<String, List<String>> map = new HashMap<String, List<String>>();

        for(int i = 0; i < ots.size(); i++){
            ArrayList<String> members = new ArrayList<String>();
            members.add(ots.get(i).getId() + "");
            members.add(ots.get(i).getTjyear() + "");
            members.add(ots.get(i).getTjmonth() + "");
            members.add(ots.get(i).getTjday() + "");
            members.add(ots.get(i).getPwkCode() + "");
            members.add(ots.get(i).getName() + "");
            members.add(ots.get(i).getPwkName() + "");
            members.add(ots.get(i).getPwkType() + "");
            members.add(ots.get(i).getCity() + "");
            members.add(ots.get(i).getCounty() + "");
            members.add(ots.get(i).getVillage() + "");
            members.add(ots.get(i).getAddress() + "");
            members.add(ots.get(i).getLongitude() + "");
            members.add(ots.get(i).getLatitude() + "");
            members.add(ots.get(i).getIsShenpi() + "");
            members.add(ots.get(i).getShenpi() + "");
            members.add(ots.get(i).getMainType() + "");
            members.add(ots.get(i).getDayAllow() + "");
            members.add(ots.get(i).getYearAllow() + "");
            members.add(ots.get(i).getIsPermit() + "");
            members.add(ots.get(i).getPwCode() + "");
            members.add(ots.get(i).getUsetime() + "");
            members.add(ots.get(i).getIsInlaw() + "");
            members.add(ots.get(i).getIsReasonable() + "");
            members.add(ots.get(i).getPosition() + "");
            members.add(ots.get(i).getProcessTech() + "");
            members.add(ots.get(i).getEmissionMode() + "");
            members.add(ots.get(i).getPwqx() + "");
            members.add(ots.get(i).getRiverMode() + "");
            members.add(ots.get(i).getRiverName() + "");
            members.add(ots.get(i).getRiverLevel() + "");
            members.add(ots.get(i).getRiverType() + "");
            members.add(ots.get(i).getTosea() + "");
            members.add(ots.get(i).getSeaMode() + "");
            members.add(ots.get(i).getSeaName() + "");
            members.add(ots.get(i).getEmissionStandard() + "");
            members.add(ots.get(i).getRiverGnq() + "");
            members.add(ots.get(i).getRiverSzmb() + "");
            members.add(ots.get(i).getHyGnq() + "");
            members.add(ots.get(i).getHySzmb() + "");
            members.add(ots.get(i).getIsGet() + "");
            members.add(ots.get(i).getNogetItems() + "");
            members.add(ots.get(i).getSpareone() + "");
            members.add(ots.get(i).getSparetwo() + "");
            map.put(ots.get(i).getId() + "", members);
        }
        return map;
    }

    public static String[] excelTitle() {
        String[] strArray = { "序号", "统计年份", "统计月份", "统计日","排污口编号","单位名称","排污口名称","排污口类型","所在市(city)","所在县(市/区)","所在乡镇","详细地址","排污口经度","排污口纬度","是否取得审批手续","审批单位及审批文号","批复主要污染物种类","批复日允许排放量(吨/日)","批复年允许排放量(吨/年)","是否发放许可证","排污许可证号","投入使用时间","是否为非法排污口","是否为设置不合理排污口","排污口靠河岸位置","污水处理工艺","废水排放方式",
                "排放去向","入河方式","排入河流名称","河流级别","河流所属水系","汇入海域","入海方式","排入海域名称",
                "废水排放标准","排入河流水功能区","排入河流水质目标","排入海域近岸海域环境功能区","排入海域水质目标",
                "排入海域海洋功能区类别","排入海域海洋功能区水质目标","是否达标","不达标指标"};
        return strArray;
    }
}
