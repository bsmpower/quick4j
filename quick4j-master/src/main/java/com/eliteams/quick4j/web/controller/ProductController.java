package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.Inspect;
import com.eliteams.quick4j.web.model.Product;
import com.eliteams.quick4j.web.service.ProductService;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("pro")
public class ProductController {
    @Autowired
    ProductService productService;

    @ResponseBody
    @RequestMapping(value = "/productlist")
    public List<Product> list()  {
        List<Product> elist = productService.list();
        return elist;
    }

    @RequestMapping(value = "/productselect")
    @ResponseBody
    public List<Product> selectproduct(@RequestBody Product product){
        List<Product> elist = productService.select(product);
        return elist;
    }

    @RequestMapping(value = "/deleteproduct")
    @ResponseBody
    public String deleteproduct(HttpServletRequest request){
        int id = Integer.parseInt(request.getParameter("id"));
        productService.delete(id);
        return "success";
    }

    @RequestMapping(value = "/deleteall")
    @ResponseBody
    public String deleteall(HttpServletRequest request){
        String[] checkarrs  = request.getParameterValues("params");
        for(int i=0;i<checkarrs.length;i++){
            int id = Integer.parseInt(checkarrs[i]);
            productService.delete(id);
        }
        return "success";
    }

    @RequestMapping(value = "/addproduct")
    @ResponseBody
    public List<Product> addproduct(@RequestBody Product product){
        productService.add(product);
        List<Product> elist = productService.select(product);
        if(elist.isEmpty()){return null;}
        else return elist;
    }

    @RequestMapping(value = "/editproduct")
    @ResponseBody
    public List<Product> editproduct(@RequestBody Product product){
            productService.update(product);
            List<Product> elist = productService.select(product);
            if(elist.isEmpty()){return null;}
            else return elist;
    }

    @RequestMapping(value = "/uploadfile",produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String upload (@RequestBody MultipartFile file,String type){
        String [] str = new String [30];
        Double p=0.0;
        int k;
        Inspect inspect = new Inspect();
        List<Product> dataList = null;
        String errlist="";
        String errformatlist="";
        String existlist="";
        Workbook wb=null;
        try (InputStream in = file.getInputStream()){
            if (type.equals(".xls")) {
                wb = new HSSFWorkbook(in);
            }
            else {
                return "请下载模板，或另存为.xls文件再上传";
            }
            Sheet sheet = wb.getSheetAt(0);
            int rownum = sheet.getPhysicalNumberOfRows();
            Row row = sheet.getRow(0);
            dataList = new ArrayList<Product>();
            // 循环行
            for (int i = 1; i < rownum; i++) {
                Product we = new Product();
                row = sheet.getRow(i);
                if (row != null) {
                    str[0]=inspect.getstr(row.getCell(0));
                    str[1]=inspect.getstr(row.getCell(1));
                    str[2]=inspect.getstr(row.getCell(2));
                    str[3]=inspect.getstr(row.getCell(3));
                    str[5]=inspect.getstr(row.getCell(5));
                    str[6]=inspect.gety(row.getCell(6));
                    str[7]=inspect.getm(row.getCell(7));
                    str[8]=inspect.getd(row.getCell(8));
                    if(str[1]==null||str[2]==null){errlist+=i+"  ，";continue;}
                    if(str[6]!=null&&str[6].equals("formaterror")) {errformatlist+=i+"  ，";continue;}
                    if(str[7]!=null&&str[7].equals("formaterror")) {errformatlist+=i+"  ，";continue;}
                    if(str[8]!=null&&str[8].equals("formaterror")) {errformatlist+=i+"  ，";continue;}
                    String s = inspect.doubleval(row.getCell(4));
                    if(s!=null){
                        if(s.equals("formaterror")){errformatlist+=i+"  ，";continue;}
                        else {
                            p=Double.parseDouble(s);
                            str[4]="ok";
                        }
                    }
                    if(str[0]!=null) we.setUSCCCode(str[0]);
                    we.setName(str[1]);
                    we.setCpType(str[2]);
                    if(str[3]!=null) we.setCpUnit(str[3]);
                    if(str[4]!=null) we.setCpSum(p);
                    if(str[5]!=null) we.setScTech(str[5]);
                    if(str[6]!=null) we.setTjyear(str[6]);
                    if(str[7]!=null) we.setTjmonth(str[7]);
                    if(str[8]!=null) we.setTjday(str[8]);
                } else {
                    continue;
                }
                dataList.add(we);
            }
            Product es = new Product();
            for(Product e:dataList) {
                productService.add(e);
            }
        }catch (Exception e){
            if((e.getMessage()).indexOf("Invalid header signature")!=-1) return "文件格式存在问题，请尝试将文件重新另存为.xls";
            else return "后台错误，插入失败，检查文件格式，请尝试将文件重新另存为.xls";
        }
        String warning="<strong>!插入成功</strong><br><br>";
        if(!errlist.equals("")||!errformatlist.equals("")||!existlist.equals("")) warning+="有部分数据存在问题未插入成功，请根据提示检查并重新上传这部分数据<br><br>";
        if(!errlist.equals("")) warning+="<strong>错误1：</strong>行 "+errlist+"有必填项未填，插入失败<br><br>";
        if(!errformatlist.equals("")) warning+="<strong>错误2：</strong>行 "+errformatlist+"有字段存在格式问题，插入失败<br><br>";
        return warning;
    }
}
