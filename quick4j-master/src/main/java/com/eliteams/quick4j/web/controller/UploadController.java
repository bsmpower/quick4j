package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.core.util.ImageUtil;
import com.eliteams.quick4j.core.util.POIUtil;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.service.OutletService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/upload")
public class UploadController {
    @Resource
    private OutletService outletService;

    @RequestMapping("uploadexcel")
    @ResponseBody
    public Map<String, Object> uploadExcel(HttpServletRequest request, @RequestParam(value="excelfile") MultipartFile excelfile){
        Map<String, Object> modelmap = new HashMap<>();
        String imgPath;
        List<outlet> allOutlet = new ArrayList<>();
        try{
            List<String[]> excelList = POIUtil.readExcel(excelfile);
//            for(int j = 0; j < excelList.size(); j++){
//                String[] excels = excelList.get(j);
//                for(int k = 0; k < excels.length; k++){
//                    if(excels[k] == null){
//                        excels[k] = "1";
//                    }
//                }
//            }
            for(int i = 1; i < excelList.size(); i++){
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
                ot.setLongitude(Double.parseDouble(excels[11]));
                ot.setLatitude(Double.parseDouble(excels[12]));
                ot.setIsShenpi(excels[13]);
                ot.setShenpi(excels[14]);
                ot.setMainType(excels[15]);
                ot.setDayAllow(Double.parseDouble(excels[16]));
                ot.setYearAllow(Double.parseDouble(excels[17]));
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
            if(flag == 1){
                imgPath = ImageUtil.upload(request,excelfile);
                System.out.println(imgPath);
                modelmap.put("success", true);
                return modelmap;
            }
        }catch (IOException e){
            e.printStackTrace();
        }

        modelmap.put("success", false);
        modelmap.put("errMsg","传送文件失败");
        return modelmap;
    }
}
