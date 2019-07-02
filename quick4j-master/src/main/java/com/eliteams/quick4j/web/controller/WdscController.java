package com.eliteams.quick4j.web.controller;

import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.parser.PdfReaderContentParser;
import com.itextpdf.text.pdf.parser.SimpleTextExtractionStrategy;
import com.itextpdf.text.pdf.parser.TextExtractionStrategy;
import com.sun.org.apache.xpath.internal.SourceTree;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import com.google.gson.Gson;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

/***
 * 文档上传涉及到的controller层
 */
@Controller
@RequestMapping("/Wdsc")
public class WdscController {
    @RequestMapping("/selectGJJ")
    public String selectGJJ(@RequestParam(value = "type") String type, HttpServletRequest request, Model model){
        System.out.println("国家级文件");
        return "wdsc/wdscgjjList";
    }

    @RequestMapping("/save")
    @ResponseBody
    public String save(@RequestParam(value="type") String type, HttpServletRequest request) throws Exception{
        System.out.println(type);
        String newType = URLDecoder.decode(type,"utf-8");
        System.out.println(newType);
        Map<String, Object> err = new HashMap<>();

        err.put("status","myerror");
        //Gson解析json
        Gson gson = new Gson();

        long startTime=System.currentTimeMillis();
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());

        //获取服务器目录
        String dir = request.getSession().getServletContext().getRealPath("upload/wdsc/");

        System.out.println(dir);
        if(multipartResolver.isMultipart(request)){
            UUID uuid = UUID.randomUUID(); //唯一识别码

            MultipartHttpServletRequest multiRequst=(MultipartHttpServletRequest)request;
            Iterator<?> iter=multiRequst.getFileNames();
            while(iter.hasNext()){
                MultipartFile file=multiRequst.getFile(iter.next().toString());
                String path = "";
                String filename = "\\";

                if(file!=null){
                    //获取到扩展名
                    String fopt1 = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
                    //.扩展名被null所取代
                    String fopt0 = file.getOriginalFilename().replace("."+fopt1, "");

                    String realname = fopt0;
                    filename += uuid.toString() + '.' + fopt1;
                    path = dir + filename;
                    File fff = new File(path);

                    //上传
                    file.transferTo(fff); //将文件流转换成file
                    String filecontent = "";

                    switch(fopt1){
                        case "doc":
                        case "DOC":
                            filecontent = getDocText(path);break;
                        case "docx":
                        case "DOCX":
                            filecontent = getDocxText(path); break;
                        case "pdf":
                        case "PDF":
                            filecontent = path;
                            break;
                        case "txt":
                        case "TXT":
                            filecontent = getTxtText(path); break;
                        default:
                            err.put("exception","houzhui="+fopt1);
                            return gson.toJson(err);
                    }
                    System.out.println(filecontent);
                    if(filecontent.toCharArray()[0]=='e'){
                        err.put("exception", "filecontent="+filecontent);
                        return gson.toJson(err);
                    }else if(filecontent!=""){
                        //入库
                        try{
                            java.util.Date a = new java.util.Date();
                            java.sql.Date date = new java.sql.Date(a.getTime());
                            Class.forName("com.mysql.jdbc.Driver");
                            Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/quick4j","root","root");
                            PreparedStatement pstmt = conn.prepareStatement("insert into wdsc (name,generate_date,content,title,publish_date,type) values (?,?,?,?,?,?);");
                            pstmt.setString(1,  uuid.toString()+"."+fopt1);
                            pstmt.setDate(2, date);
                            pstmt.setString(3, filecontent);
                            pstmt.setString(4, realname);
                            pstmt.setDate(5, date);
                            pstmt.setString(6, newType);
                            pstmt.executeUpdate();
                            conn.close();
                        }catch (Exception e){
                            err.put("exception", e.getMessage());
                            return gson.toJson(err);
                        }
                    }else{

                    }
                }else{

                }
            }
        }
        long endTime = System.currentTimeMillis();
        System.out.println("上传花费时间："+String.valueOf(endTime-startTime)+"ms");

        Map<String, Object> result = new HashMap<>();
        result.put("status","success");
        //在这里应该给前端一个回馈
        return gson.toJson(result);
    }

    private static String getDocText(String path){
        String re = null;
        try{
            FileInputStream fis = new FileInputStream( new File(path));
            HWPFDocument doc = new HWPFDocument(fis);
            StringBuilder str = doc.getText();
            StringReader reader = new StringReader(str.toString());
            BufferedReader r = new BufferedReader(reader);
            StringBuilder b = new StringBuilder();
            String line;
            b.append("<p>");
            while((line=r.readLine())!=null) {
                b.append(line);
                b.append("<br/>");
            }
            b.append("</p>");
            re = b.toString();
            fis.close();reader.close();r.close();
        } catch(Exception e){
            return "err"+e.getMessage();
            //e.printStackTrace();
        }
        return re;
    }

    private static String getDocxText(String path){
        String re = null;
        try {
            FileInputStream fis = new FileInputStream( new File(path));
            XWPFDocument xdoc = new XWPFDocument(fis);
            XWPFWordExtractor extractor = new XWPFWordExtractor(xdoc);

            StringReader reader = new StringReader(extractor.getText());
            BufferedReader r = new BufferedReader(reader);
            StringBuilder b = new StringBuilder();
            String line;
            b.append("<p>");
            while((line=r.readLine())!=null) {
                b.append(line);
                b.append("<br/>");
            }
            b.append("</p>");

            re = b.toString();
            fis.close();reader.close();r.close();
        } catch (Exception e) {
            return "err"+e.getMessage();
            //e.printStackTrace();
        }
        return re;
    }

    private static String getPDfText(String path){
        String re = null;
        try{
            PdfReader reader = new PdfReader(path);
            PdfReaderContentParser parser = new PdfReaderContentParser(reader);
            StringBuffer buff = new StringBuffer();
            TextExtractionStrategy strategy;
            for (int i = 1; i <= reader.getNumberOfPages(); i++) {
                strategy = parser.processContent(i, new SimpleTextExtractionStrategy());
                buff.append(strategy.getResultantText());
            }
            StringReader rd = new StringReader(buff.toString());
            BufferedReader r = new BufferedReader(rd);
            StringBuilder b = new StringBuilder();
            String line;
            b.append("<p>");
            while((line=r.readLine())!=null) {
                b.append(line);
                b.append("<br/>");
            }
            b.append("</p>");
            re = b.toString();
            reader.close();rd.close();r.close();
        } catch(Exception e){
            return "err"+e.getMessage();
            //e.printStackTrace();
        }
        return re;
    }

    private static String getTxtText(String path){
        String re = null;
        try{
            InputStreamReader read = new InputStreamReader(new FileInputStream(path));
            BufferedReader bufferedReader = new BufferedReader(read);
            String lineTxt = null;
            re = "<p>";
            while((lineTxt = bufferedReader.readLine()) != null){
                re += lineTxt;
                re += "<br/>";
            }
            re += "</p>";
            read.close();
        } catch(Exception e){
            return "err"+e.getMessage();
            //e.printStackTrace();
        }
        return re;
    }
}
