package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ExcelUtil;
import com.eliteams.quick4j.core.util.ImageUtil;
import com.eliteams.quick4j.core.util.ImageUtil2;
import com.eliteams.quick4j.core.util.POIUtil;
import com.eliteams.quick4j.web.common.ResponseData;
import com.eliteams.quick4j.web.dao.pictureMapper;
import com.eliteams.quick4j.web.model.*;
import com.eliteams.quick4j.web.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/upload")
public class UploadController {
    @Resource
    private OutletService outletService;

    @Resource
    private RainoutletService rainoutletService;

    @Resource
    private RainsewageService rainsewageService;

    @Resource
    private RainxhkService rainxhkService;

    @Resource
    private OilfieldService oilfieldService;

    @Resource
    private PortService portService;

    @Resource
    private IslandService islandService;

    @Resource
    private SectionMessageService sectionMessageService;

    @Resource
    private pictureMapper picturemapper;

    private static final SimpleDateFormat sDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");

    @RequestMapping("uploadexcel")
    @ResponseBody
    public Map<String, Object> uploadExcel(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) {
        Map<String, Object> modelmap = new HashMap<>();
        String imgPath;
        List<outlet> allOutlet = new ArrayList<>();
        try {
            List<String[]> excelList = POIUtil.readExcel(excelfile);
//            for(int j = 0; j < excelList.size(); j++){
//                String[] excels = excelList.get(j);
//                for(int k = 0; k < excels.length; k++){
//                    if(excels[k] == null){
//                        excels[k] = "1";
//                    }
//                }
//            }
            for (int i = 1; i < excelList.size(); i++) {
                String[] excels = excelList.get(i);
                outlet ot = new outlet();
                ot.setTjyear(excels[0]);
                ot.setTjmonth(excels[1]);
                ot.setTjday(excels[2]);
                ot.setPwkCode(excels[3]);
                ot.setName(excels[4]);
                ot.setPwkName(excels[5]);
                ot.setPwkType(excels[6]);
                ot.setCity(excels[7]);
                ot.setCounty(excels[8]);
                ot.setVillage(excels[9]);
                ot.setAddress(excels[10]);
                if (excels[11] != "") {
                    ot.setLongitude(Double.parseDouble(excels[11]));
                }
                if (excels[12] != "") {
                    ot.setLatitude(Double.parseDouble(excels[12]));
                }
                ot.setIsShenpi(excels[13]);
                ot.setShenpi(excels[14]);
                ot.setMainType(excels[15]);
                if (excels[16] != "") {
                    ot.setDayAllow(Double.parseDouble(excels[16]));
                }
                if (excels[17] != "") {
                    ot.setYearAllow(Double.parseDouble(excels[17]));
                }
                ot.setIsPermit(excels[18]);
                ot.setPwCode(excels[19]);
                ot.setUsetime(excels[20]);
                ot.setIsInlaw(excels[21]);
                ot.setIsReasonable(excels[22]);
                ot.setPosition(excels[23]);
                ot.setProcessTech(excels[24]);
                ot.setEmissionMode(excels[25]);
                ot.setPwqx(excels[26]);
                ot.setRiverMode(excels[27]);
                ot.setRiverName(excels[28]);
                ot.setRiverLevel(excels[29]);
                ot.setRiverType(excels[30]);
                ot.setTosea(excels[31]);
                ot.setSeaMode(excels[32]);
                ot.setSeaName(excels[33]);
                ot.setEmissionStandard(excels[34]);
                ot.setRiverGnq(excels[35]);
                ot.setRiverSzmb(excels[36]);
                ot.setHyGnq(excels[37]);
                ot.setHySzmb(excels[38]);
                ot.setHyseaGnq(excels[39]);
                ot.setHyseaSzmb(excels[40]);
                ot.setIsGet(excels[41]);
                ot.setNogetItems(excels[42]);
                allOutlet.add(ot);
            }
            int flag = outletService.insertall(allOutlet);
            if (flag == 1) {
                imgPath = ImageUtil.upload(request, excelfile);
                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        modelmap.put("success", false);
        modelmap.put("errMsg", "传送文件失败");
        return modelmap;
    }

    @RequestMapping("/rainoutletexcel")
    @ResponseBody
    public Map<String, Object> uploadRainoutlet(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<rain_outlet> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                rain_outlet ot = new rain_outlet();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setCity(excels.get(4));
                ot.setPskName(excels.get(5));
                ot.setPskCode(excels.get(6));
                ot.setCounty(excels.get(7));
                ot.setVillage(excels.get(8));
                ot.setAddress(excels.get(9));
                if (excels.get(10) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(10)));
                }
                if (excels.get(11) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(11)));
                }
                ot.setPosition(excels.get(12));
                ot.setPsqx(excels.get(13));
                ot.setRiverMode(excels.get(14));
                ot.setRiverName(excels.get(15));
                ot.setRiverLevel(excels.get(16));
                ot.setSeaMode(excels.get(17));
                ot.setSeaName(excels.get(18));
                if (excels.get(19) != "") {
                    ot.setPwkNjpsl(Double.parseDouble(excels.get(19)));
                }
                if (excels.get(20) != "") {
                    ot.setMcjypsl(Double.parseDouble(excels.get(20)));
                }
                if (excels.get(21) != "") {
                    ot.setNjscs(Double.parseDouble(excels.get(21)));
                }
                ot.setRainName(excels.get(22));
                if (excels.get(23) != "") {
                    ot.setRainArea(Double.parseDouble(excels.get(23)));
                }
                ot.setRiverGnq(excels.get(24));
                ot.setRiverSzmb(excels.get(25));
                ot.setHyGnq(excels.get(26));
                ot.setHySzmb(excels.get(27));
                ot.setHyseaGnq(excels.get(28));
                ot.setHyseaSzmb(excels.get(29));
                allOutlet.add(ot);
            }
            int flag = rainoutletService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success",false);
        return modelmap;
        //        Map<String, Object> modelmap = new HashMap<>();
//        String imgPath;
//        List<rain_outlet> allOutlet = new ArrayList<>();
//
//        try{
//            List<String[]> excelList = POIUtil.readExcel(excelfile);
////            for(int j = 0; j < excelList.size(); j++){
////                String[] excels = excelList.get(j);
////                for(int k = 0; k < excels.length; k++){
////                    if(excels[k] == null){
////                        excels[k] = "1";
////                    }
////                }
////            }
//            for(int i = 1; i < excelList.size(); i++){
//                String[] excels = excelList.get(i);
//                rain_outlet ot = new rain_outlet();
//                ot.setTjyear(excels[0]);
//                ot.setTjmonth(excels[1]);
//                ot.setTjday(excels[2]);
//                ot.setCity(excels[3]);
//                ot.setPskName(excels[4]);
//                ot.setPskCode(excels[5]);
//                ot.setCounty(excels[6]);
//                ot.setVillage(excels[7]);
//                ot.setAddress(excels[8]);
//                ot.setLongitude(Double.parseDouble(excels[9]));
//                ot.setLatitude(Double.parseDouble(excels[10]));
//                ot.setPosition(excels[11]);
//                ot.setPsqx(excels[12]);
//                ot.setRiverMode(excels[13]);
//                ot.setRiverName(excels[14]);
//                ot.setRiverLevel(excels[15]);
//                ot.setSeaMode(excels[16]);
//                ot.setSeaName(excels[17]);
//                ot.setPwkNjpsl(Double.parseDouble(excels[18]));
//                ot.setMcjypsl(Double.parseDouble(excels[19]));
//                ot.setNjscs(Double.parseDouble(excels[20]));
//                ot.setRainName(excels[21]);
//                ot.setRainArea(Double.parseDouble(excels[22]));
//                ot.setRiverGnq(excels[23]);
//                ot.setRiverSzmb(excels[24]);
//                ot.setHyGnq(excels[25]);
//                ot.setHySzmb(excels[26]);
//                ot.setHyseaGnq(excels[27]);
//                ot.setHyseaSzmb(excels[28]);
//                allOutlet.add(ot);
//            }
//            int flag = rainoutletService.insertall(allOutlet);
//            if(flag == 1){
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
//                modelmap.put("success", true);
//                return modelmap;
//            }
//        }catch (IOException e){
//            e.printStackTrace();
//        }
//
//        modelmap.put("success", false);
//        modelmap.put("errMsg","传送文件失败");
//        return modelmap;
    }

    @RequestMapping("/pwksewageexcel")
    @ResponseBody
    public Map<String, Object> uploadsewagelet(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<rainsewage> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                rainsewage ot = new rainsewage();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setPskName(excels.get(4));
                ot.setPskCode(excels.get(5));
                ot.setCity(excels.get(6));
                ot.setcounty(excels.get(7));
                ot.setVillage(excels.get(8));
                ot.setAddress(excels.get(9));
                if (excels.get(10) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(10)));
                }
                if (excels.get(11) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(11)));
                }
                ot.setPosition(excels.get(12));
                ot.setPsqx(excels.get(13));
                ot.setRiverMode(excels.get(14));
                ot.setRiverName(excels.get(15));
                ot.setRiverLevel(excels.get(16));
                ot.setSeaMode(excels.get(17));
                ot.setSeaName(excels.get(18));
                if (excels.get(19) != "") {
                    ot.setPwkRjpsl(Double.parseDouble(excels.get(19)));
                }
                if (excels.get(20) != "") {
                    ot.setPwkNjpsl(Double.parseDouble(excels.get(20)));
                }
                if (excels.get(21) != "") {
                    ot.setMcjypsl(Double.parseDouble(excels.get(21)));
                }
                if (excels.get(22) != "") {
                    ot.setNjscs(Double.parseDouble(excels.get(22)));
                }
                ot.setSource(excels.get(23));

                ot.setStandard(excels.get(24));

                ot.setRiverGnq(excels.get(25));
                ot.setRiverSzmb(excels.get(26));
                ot.setHyGnq(excels.get(27));
                ot.setHySzmb(excels.get(28));
                ot.setHyseaGnq(excels.get(29));
                ot.setHyseaSzmb(excels.get(30));
                allOutlet.add(ot);
            }
            int flag = rainsewageService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/pwkrainxhk")
    @ResponseBody
    public Map<String, Object> uploadrainxhk(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<rain_spillway> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                rain_spillway ot = new rain_spillway();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setCity(excels.get(4));
                ot.setXhkName(excels.get(5));
                ot.setXhkCode(excels.get(6));
                ot.setCounty(excels.get(7));
                ot.setVillage(excels.get(8));
                ot.setAddress(excels.get(9));
                if (excels.get(10) != "") {
                    ot.setXhkArea(Double.parseDouble(excels.get(10)));
                }
                if (excels.get(11) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(11)));
                }
                if (excels.get(12) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(12)));
                }
                ot.setXhQx(excels.get(13));
                ot.setRiverMode(excels.get(14));
                ot.setRiverName(excels.get(15));
                ot.setRiverLevel(excels.get(16));
                ot.setSeaMode(excels.get(17));
                ot.setSeaName(excels.get(18));
                if (excels.get(19) != "") {
                    ot.setXhNum(Double.parseDouble(excels.get(19)));
                }
                if (excels.get(20) != "") {
                    ot.setXhTimes(Double.parseDouble(excels.get(20)));
                }
                ot.setStandard(excels.get(21));
                ot.setXhGnq(excels.get(22));
                ot.setXhSzmb(excels.get(23));
                ot.setHyGnq(excels.get(24));
                ot.setHySzmb(excels.get(25));
                ot.setHyseaGnq(excels.get(26));
                ot.setHyseaSzmb(excels.get(27));
                allOutlet.add(ot);
            }
            int flag =  rainxhkService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/pwkoilfield")
    @ResponseBody
    public Map<String, Object> uploadoilfield(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<oil_field> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                oil_field ot = new oil_field();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setCity(excels.get(4));
                ot.setYtName(excels.get(5));
                ot.setCountry(excels.get(6));
                ot.setVillage(excels.get(7));
                ot.setAddress(excels.get(8));
                if (excels.get(9) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(11)));
                }
                if (excels.get(10) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(12)));
                }
                if (excels.get(11) != "") {
                    ot.setYtArea(Double.parseDouble(excels.get(10)));
                }
                ot.setPosition(excels.get(12));
                ot.setPsqx(excels.get(13));
                ot.setRiverMode(excels.get(14));
                ot.setRiverName(excels.get(15));
                ot.setRiverLevel(excels.get(16));
                ot.setSeaMode(excels.get(17));
                ot.setSeaName(excels.get(18));
                ot.setRiverFunc(excels.get(19));
                ot.setRiverGoal(excels.get(20));
                ot.setJaFunction(excels.get(21));
                ot.setSeaGoal(excels.get(22));
                ot.setSeaFunctiontype(excels.get(23));
                ot.setSeaFunctiongoal(excels.get(24));
                allOutlet.add(ot);
            }
            int flag =  oilfieldService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/pwkport")
    @ResponseBody
    public Map<String, Object> uploadport(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<port> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                port ot = new port();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setGkGame(excels.get(4));
                ot.setGkCode(excels.get(5));
                ot.setCity(excels.get(6));
                ot.setCountry(excels.get(7));
                ot.setVillage(excels.get(8));
                ot.setAddress(excels.get(9));
                if (excels.get(10) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(10)));
                }
                if (excels.get(11) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(11)));
                }
                ot.setGkArea(excels.get(12));
                ot.setRiverName(excels.get(13));
                ot.setRiverLevel(excels.get(14));
                ot.setGkFunc(excels.get(15));
                ot.setGkGoal(excels.get(16));
                ot.setSeaName(excels.get(17));
                ot.setJaFunction(excels.get(18));
                ot.setJaGoal(excels.get(19));
                ot.setSeaFunctiontype(excels.get(20));
                ot.setSeaFunctiongoal(excels.get(21));
                allOutlet.add(ot);
            }
            int flag =  portService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/pwkisland")
    @ResponseBody
    public Map<String, Object> uploadisland(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<island> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                island ot = new island();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setHdpskName(excels.get(4));
                ot.setHdpskCode(excels.get(5));
                ot.setHdName(excels.get(6));
                if(excels.get(7) != ""){
                    ot.setHdArea(Double.parseDouble(excels.get(7)));
                }
                ot.setCity(excels.get(8));
                ot.setCountry(excels.get(9));
                ot.setVillage(excels.get(10));
                ot.setAddress(excels.get(11));
                if (excels.get(12) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(12)));
                }
                if (excels.get(13) != "") {
                    ot.setLatitude(Double.parseDouble(excels.get(13)));
                }
                ot.setSeaMode(excels.get(14));
                ot.setSeaName(excels.get(15));
                if(excels.get(16) !=""){
                    ot.setPslTd(Double.parseDouble(excels.get(16)));
                }
                if(excels.get(17) !=""){
                    ot.setPslTy(Double.parseDouble(excels.get(17)));
                }

                ot.setEmissionStandard(excels.get(18));
                ot.setIsGet(excels.get(19));
                ot.setNogetItems(excels.get(20));
                ot.setHyGnq(excels.get(21));
                ot.setHySzmb(excels.get(22));
                ot.setHyseaGnq(excels.get(23));
                ot.setHyseaSzmb(excels.get(24));
                allOutlet.add(ot);
            }
            int flag =  islandService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/pwksection")
    @ResponseBody
    public Map<String, Object> uploadSection(HttpServletRequest request, @RequestParam(value = "excelfile") MultipartFile excelfile) throws IOException {
        String realFileName = excelfile.getOriginalFilename();
        String imgPath;
        //第一步做存储
        imgPath = ImageUtil.upload(request, excelfile);
        System.out.println(imgPath);
        //第二步进行读取
        String url = request.getSession().getServletContext().getRealPath("/upload");
        System.out.println("zheshio" + url + "/" + realFileName);
        System.out.println("-----------------------------------");
        File file = new File(url + "/" + realFileName);
        Map<String, Object> modelmap = new HashMap<>();
        try {
            //得到所有数据
            List<List<String>> allData = ExcelUtil.readExcel(file);
            System.out.println(allData.size());
            List<section_message> allOutlet = new ArrayList<>();
            for (int i = 0; i < allData.size(); i++) {
                List<String> excels = allData.get(i);
                section_message ot = new section_message();
                ot.setTjyear(excels.get(1));
                ot.setTjmonth(excels.get(2));
                ot.setTjday(excels.get(3));
                ot.setDmName(excels.get(4));
                ot.setDmCode(excels.get(5));
                ot.setDmType(excels.get(6));
                ot.setCity(excels.get(7));
                ot.setCounty(excels.get(8));
                ot.setVillage(excels.get(9));
                ot.setAddress(excels.get(10));
                if (excels.get(11) != "") {
                    ot.setLongitude(Double.parseDouble(excels.get(11)));
                }
                if (excels.get(12) != "") {
                    ot.setLaititude(Double.parseDouble(excels.get(12)));
                }
                ot.setSssx(excels.get(13));
                ot.setRiverName(excels.get(14));
                ot.setSzType(excels.get(15));
                ot.setDmGoal(excels.get(16));
                ot.setHlsGnq(excels.get(17));
                ot.setIsGet(excels.get(18));
                System.out.println(excels.get(18));
                ot.setNogetItems(excels.get(19));
                allOutlet.add(ot);
            }
            int flag =  sectionMessageService.insertall(allOutlet);
            if (flag == 1) {
//                imgPath = ImageUtil.upload(request,excelfile);
//                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        modelmap.put("success", false);
        return modelmap;
    }

    @RequestMapping("/imageinit")
    @ResponseBody
    public List<picture> imageinit(picture pic){
        List<picture> list = picturemapper.selectpicture(pic);
        return list;
    }


    @RequestMapping("/uploadImage")
    @ResponseBody
    public List<picture> uploadImage(HttpServletRequest request, @RequestParam(value = "file") MultipartFile imagefile, String pwkid,String pwkname,String snst) throws IOException {
        String realFileName = imagefile.getOriginalFilename();
        String imgPath;
        picture pic = new picture();
        //第一步做存储
        imgPath = ImageUtil2.upload(request, imagefile);
        System.out.println(imgPath);
        String nowTimeStr = sDateFormat.format(new Date());
        pic.setPwkid(pwkid);
        pic.setPwkname(pwkname);
        pic.setImagename(pwkname);
        pic.setPath(imgPath);
        pic.setCreatetime(nowTimeStr);
        pic.setSnst(snst);
        picturemapper.insert(pic);
        System.out.println(imgPath);
        //第二步进行读取
        picture piclist = new picture();
        List<picture> list = new ArrayList<>();
        list = picturemapper.selectpicture(piclist);
        System.out.println(list.size());
        return list;
    }

    @RequestMapping(value = "/deletePicture")
    @ResponseBody
    public ResponseData deleteIndustryPark(@RequestParam(value="id") String id){
        System.out.println(id);
        Integer id1 = Integer.parseInt(id);
        picturemapper.deleteByPrimaryKey(id1);
        return ResponseData.success();
    }

    @RequestMapping("/searchdata")
    @ResponseBody
    public List<picture> searchdata(@RequestParam(value="searchcondition")String searchcondition){
        picture pic = new picture();
        pic.setPwkid(searchcondition);
        List<picture> list = picturemapper.selectpicture(pic);
        if(list.size()==0){
            picture pic1 = new picture();
            pic1.setPwkname(searchcondition);
            List<picture> list1 = picturemapper.selectpicture(pic1);
            return list1;
        }else{
            return list;
        }

    }

}
