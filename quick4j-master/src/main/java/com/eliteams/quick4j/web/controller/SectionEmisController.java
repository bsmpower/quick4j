package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.model.Emission;
import com.eliteams.quick4j.core.util.Inspect;
import com.eliteams.quick4j.web.model.Sectionemis;
import com.eliteams.quick4j.web.service.EmissionService;
import com.eliteams.quick4j.web.service.SectionemisService;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("sec")
public class SectionEmisController {
    @Autowired
    SectionemisService sectionemisService;

    @ResponseBody
    @RequestMapping(value = "/emislist")
    public List<Sectionemis> list()  {     //根据条件查询，并列表展示
        List<Sectionemis> elist = sectionemisService.list();
        return elist;
    }

    @RequestMapping(value = "/emisselect")
    @ResponseBody
    public List<Sectionemis> selectEmission(@RequestBody Sectionemis sectionemis, HttpServletRequest request){
//        String startdate=(String)request.getParameter("startdate");
//        String enddate=(String)request.getParameter("enddate");
        List<Sectionemis> elist = sectionemisService.select(sectionemis);
        return elist;
    }

    @RequestMapping(value = "/emisdelete")
    @ResponseBody
    public String deleteEmission(HttpServletRequest request){
        int id = Integer.parseInt(request.getParameter("id"));
        sectionemisService.delete(id);
        return "success";
    }

    @RequestMapping(value = "/alldelete")
    @ResponseBody
    public String alldelete(HttpServletRequest request){
        String[] checkarrs  = request.getParameterValues("params");
        System.out.println(checkarrs);
        for(int i=0;i<checkarrs.length;i++){
            int id = Integer.parseInt(checkarrs[i]);
            sectionemisService.delete(id);
        }
        return "success";
    }

    @RequestMapping(value = "/emisadd")
    @ResponseBody
    public List<Sectionemis> emisadd(@RequestBody Sectionemis sectionemis){
        Sectionemis e = new Sectionemis();
        e.setDmCode(sectionemis.getDmCode());
        e.setTjyear(sectionemis.getTjyear());
        e.setTjmonth(sectionemis.getTjmonth());
        e.setTjday(sectionemis.getTjday());
        List<Sectionemis> etest = sectionemisService.select(e);
        if(etest.isEmpty()){
            sectionemisService.add(sectionemis);
            List<Sectionemis> elist = sectionemisService.select(e);
            if(elist.isEmpty()){return null;}
            else return elist;
        }
        else {return null;}
    }

    @RequestMapping(value = "/emisedit")
    @ResponseBody
    public List<Sectionemis> emisedit(@RequestBody Sectionemis sectionemis){
        Sectionemis e = new Sectionemis();
        e.setDmCode(sectionemis.getDmCode());
        e.setTjyear(sectionemis.getTjyear());
        e.setTjmonth(sectionemis.getTjmonth());
        e.setTjday(sectionemis.getTjday());
        List<Sectionemis> etest = sectionemisService.select(e);
        if(etest.isEmpty()||etest.get(0).getId()==sectionemis.getId()){
            sectionemisService.update(sectionemis);
            List<Sectionemis> elist = sectionemisService.select(e);
            if(elist.isEmpty()){return null;}
            else return elist;
        }
        else {return null;}
    }


    @RequestMapping(value = "/upload",produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String upload (@RequestBody MultipartFile file, String type){
        String [] str = new String [30];
        double[] dou = new double[30];
        int k;
        Inspect inspect = new Inspect();
        List<Sectionemis> dataList = null;
        String errlist="";
        String errformatlist="";
        String existlist="";
        Workbook wb=null;
        try (InputStream in = file.getInputStream()){
            if (type.equals(".xls")) {
                wb = new HSSFWorkbook(in);
            }
            else {
                return  "请上传xls格式模板";
//                wb = new HSSFWorkbook(in);
            }
//            else {
//                wb = WorkbookFactory.create(in);
//            }
            Sheet sheet = wb.getSheetAt(0);
            int rownum = sheet.getPhysicalNumberOfRows();
            Row row = sheet.getRow(0);
            dataList = new ArrayList<Sectionemis>();
            // 循环行
            for (int i = 1; i < rownum; i++) {
                Sectionemis we = new Sectionemis();
                row = sheet.getRow(i);
                if (row != null) {
                    str[0]=inspect.getstr(row.getCell(0));str[1]=inspect.getstr(row.getCell(1));
                    str[2]=inspect.gety(row.getCell(2));str[3]=inspect.getm(row.getCell(3));str[4]=inspect.getd(row.getCell(4));
                    if(str[0]==null||str[1]==null||str[2]==null||str[3]==null||str[4]==null){errlist+=i+"  ，";continue;}
                    if(str[2].equals("formaterror")||str[3].equals("formaterror")||str[4].equals("formaterror")){errformatlist+=i+"  ，";continue;}
                    for(k =5;k<26;k++){
                        String s = inspect.doubleval(row.getCell(k));
                        if(s!=null){
                            if(s.equals("formaterror")){errformatlist+=i+"  ，";break;}
                            else {
                                dou[k]=Double.parseDouble(s);
                                str[k]="yes";
                            }
                        }
                    }
                    str[26]=inspect.getstr(row.getCell(26));
                    if(k!=26){continue;}
                    we.setDmCode(str[0]);we.setDmName(str[1]);we.setTjyear(str[2]);we.setTjmonth(str[3]);we.setTjday(str[4]);
                    if(str[5]!=null) we.setSalt(dou[5]);if(str[6]!=null) we.setCOD(dou[6]);if(str[7]!=null) we.setNH3(dou[7]);if(str[8]!=null) we.setP(dou[8]);
                    if(str[9]!=null) we.setN(dou[9]);if(str[10]!=null) we.setCr6(dou[10]);if(str[11]!=null) we.setCN(dou[11]);if(str[12]!=null) we.setFdcjqs(dou[12]);
                    if(str[13]!=null) we.setBOD5(dou[13]);if(str[14]!=null) we.setXfw(dou[14]);if(str[15]!=null) we.setOil(dou[15]);
                    if(str[16]!=null) we.setFlow(dou[16]);if(str[17]!=null) we.setPhenol(dou[17]);if(str[18]!=null) we.setAs(dou[18]);
                    if(str[19]!=null) we.setHg(dou[19]);if(str[20]!=null) we.setPb(dou[20]);if(str[21]!=null) we.setCd(dou[21]);
                    if(str[22]!=null) we.setPH(dou[22]);if(str[23]!=null) we.setChloride(dou[23]);if(str[24]!=null) we.setSulfide(dou[24]);
                    if(str[25]!=null) we.setYlzbmhxj(dou[25]);if(str[26]!=null) we.setOthers(str[26]);
                } else {
                    continue;
                }
                dataList.add(we);
            }
            Sectionemis es = new Sectionemis();
            for(Sectionemis e:dataList) {
                es.setDmCode(e.getDmCode());
                es.setTjyear(e.getTjyear());
                es.setTjmonth(e.getTjmonth());
                es.setTjday(e.getTjday());
                List<Sectionemis> etest = sectionemisService.select(es);
                if(etest.isEmpty()){
                    sectionemisService.add(e);
                }
                else {existlist+=e.getDmCode()+"   ，";continue;}
            }
        }catch (Exception e){
            if((e.getMessage()).indexOf("Invalid header signature")!=-1) return "文件格式存在问题，请尝试将文件重新另存为.xls或.xlsx";
            else return "后台错误，插入失败，检查格式";
        }
        String warning="<strong>!插入成功</strong><br><br>";
        if(!errlist.equals("")||!errformatlist.equals("")||!existlist.equals("")) warning+="有部分数据存在问题未插入成功，请根据提示检查并重新上传这部分数据<br><br>";
        if(!errlist.equals("")) warning+="<strong>错误1：</strong>行 "+errlist+"有必填项未填，插入失败<br><br>";
        if(!errformatlist.equals("")) warning+="<strong>错误2：</strong>行 "+errformatlist+"有字段存在格式问题，插入失败<br><br>";
        if(!existlist.equals("")) warning+="<strong>错误3：</strong>: 以下监测断面编号在同一时间已经在数据库中存在数据了，插入失败："+existlist;
        return warning;
    }

}
