package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.feature.orm.mybatis.Page;
import com.eliteams.quick4j.core.util.PaginationResult;
import com.eliteams.quick4j.web.dao.outletMapper;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.service.OutletService;
import org.apache.shiro.crypto.hash.Hash;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
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
//        Map<String,Object> modelmap = new HashMap<>();
//        System.out.println("33333333333333333333333333");
        List<outlet> list = outletService.selectPwk(ot);
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
    public Map<String, Object> addPwk(HttpServletRequest request, @RequestBody outlet ot) {
        System.out.println(ot.getName());
        Map<String, Object> modelmap = new HashMap<>();
        int flag = outletmapper.insert(ot);
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
    public Map<String, Object> updatePwk(HttpServletRequest request, @RequestBody outlet ot) {
        Map<String, Object> modelmap = new HashMap<>();
        int flag = outletmapper.updateByPrimaryKeySelective(ot);
        if (flag == 1) {
            modelmap.put("success", true);

            return modelmap;
        } else {
            modelmap.put("succeess", false);
            modelmap.put("errMsg", "添加失败");

            return modelmap;
        }
    }

    @RequestMapping("optionpwk")
    @ResponseBody
    public List<outlet> optionPwk(HttpServletRequest request, @RequestBody outlet ot){
        Map<String, Object> modelmap = new HashMap<>();
        System.out.println(ot.getTjyear());
        List<outlet> list = new ArrayList<>();
        list = outletmapper.selectPwk(ot);
        System.out.println(list.size());
        return list;
    }
}
