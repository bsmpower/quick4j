package com.eliteams.quick4j.web.controller;
import com.eliteams.quick4j.web.model.Wdsc;
import com.eliteams.quick4j.web.service.WdscService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("doc")
public class DocumentController {
    @Autowired
    WdscService wdscService;

    @RequestMapping(value = "/uploadfile", produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String uploadFile(MultipartFile file, HttpServletRequest request) throws IllegalStateException, IOException {
        if (!file.isEmpty()) {
            String path = request.getSession().getServletContext().getRealPath("/wdupload");
            File parent = new File(path);
            if (!parent.exists()) parent.mkdirs();

            String oldName = file.getOriginalFilename();
            String[] str=oldName.split("\\.");
            String filename = str[0];
            String filetype = str[1];
            Date date = new Date();
            SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd"); //,HH:mm:ss
            SimpleDateFormat timeFormat= new SimpleDateFormat("HHmmss"); //,HH:mm:ss
            String filedate = dateFormat.format(date);
            String filetime = timeFormat.format(date);

            Wdsc wdsc = new Wdsc();
            wdsc.setName(filename);
            wdsc.setType(filetype);
            wdsc.setGenerateDate(filedate);
            wdsc.setGenerateTime(filetime);
            wdscService.add(wdsc);

            String newfilename = filename+filedate+filetime+"."+filetype;
            file.transferTo(new File(parent,newfilename));

            return "上传成功";
        } else {
            return "上传失败";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/list")
    public List<Wdsc> list()  {     //根据条件查询，并列表展示
        List<Wdsc> elist = wdscService.list();
        return elist;
    }

    @RequestMapping(value = "/select")
    @ResponseBody
    public List<Wdsc> select(HttpServletRequest request){
        String str=(String)request.getParameter("str");
        System.out.println(str);
        List<Wdsc> elist = wdscService.select(str);
        return elist;
    }

    @RequestMapping(value = "/delete")
    @ResponseBody
    public String deleteEmission(HttpServletRequest request){
        int id = Integer.parseInt(request.getParameter("id"));
        Wdsc w = wdscService.get(id);
        String path = request.getSession().getServletContext().getRealPath("/wdupload");
        String filename = path+"/"+w.getName()+w.getGenerateDate()+w.getGenerateTime()+"."+w.getType();
        File file = new File(filename);
        System.out.println(filename);
        FileUtils.deleteQuietly(file);
        wdscService.delete(id);
        return "success";
    }
}
