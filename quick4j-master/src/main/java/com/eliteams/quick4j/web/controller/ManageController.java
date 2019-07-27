package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.dao.UserMapper;
import com.eliteams.quick4j.web.model.User;
import com.eliteams.quick4j.web.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/usermanage")
public class ManageController {

    @Resource
    private UserMapper userMapper;

    @Resource
    private UserService userService;

    @RequestMapping("/showlist")
    @ResponseBody
    public List<User> showlist(HttpServletRequest request, User user){
        List<User> list = userMapper.selectalluser(user);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping("/adduser")
    @ResponseBody
    /**
     * 要使用request获取到前端传过来的数据的话，要进行格式转化，则要建立一个工具类
     * public static int getInt(HttpServletRequest request, String name)类似于这种
     * 前端传输数据的时候要进行参数拼接
     */
    public List<User> addPwk(@RequestBody User rot) {
        Date nowTimeStr = new Date();
        rot.setCreateTime(nowTimeStr);
        int flag = userMapper.insert(rot);
        if (flag == 1) {
            User ot_new = new User();
            List<User> list = userMapper.selectalluser(ot_new);
            return list;
        } else {
            return null;
        }
    }

    @RequestMapping("/deletepwk")
    @ResponseBody
    public Map<String, Object> deletePwk(HttpServletRequest request, final Long[] ids) {
        Map<String, Object> modelmap = new HashMap<>();
//        int flag=1;
        int flag = userService.deleteByids(ids);
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

    @RequestMapping("/updateuser")
    @ResponseBody
    public  List<User> updatePwk(HttpServletRequest request, @RequestBody User rot) {
        System.out.println("22222222222222");
        int flag = userMapper.updateByPrimaryKeySelective(rot);
        if (flag == 1) {
            User ot_new = new User();
            List<User> list = userMapper.selectalluser(ot_new);
            return list;
        } else {
            return null;
        }
    }
}
