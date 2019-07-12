package com.eliteams.quick4j.web.controller;

import com.eliteams.quick4j.web.common.ResponseData;
import com.eliteams.quick4j.web.model.*;
import com.eliteams.quick4j.web.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;


@Controller
@RequestMapping("/enterprise")
public class EnterpriseController {
    /**
     * 用注解引入各个企业的信息
     * */
    @Resource
    private IndustryLifeService industryLifeService;
    @Resource
    private LivestockService livestockService;
    @Resource
    private MunicipalService municipalService;
    @Resource
    private IndustryTrashService industryTrashService;
    @Resource
    private AquacultureService aquacultureService;
    @Resource
    private IndustryParkService industryParkService;
    @Resource
    private FarmService farmService;

    /**
     *1. 添加新的企业信息
     * */
    //工业生活
    @RequestMapping("/IndustryLifeInput")
    @ResponseBody
    public ResponseData IndustryLifeInput(@RequestBody Industry_life industryLife) {
        industryLifeService.insert(industryLife);
        return ResponseData.success();

    }
    //水产养殖
    @RequestMapping("/AquacultureInput")
    @ResponseBody
    public ResponseData AquacultureInput(@RequestBody Aquaculture aquaculture){
        aquacultureService.insert(aquaculture);
        return ResponseData.success();
    }
    //农田
    @RequestMapping("/FarmInput")
    @ResponseBody
    public ResponseData FarmInput(@RequestBody Farm farm){
        farmService.insert(farm);
        return ResponseData.success();
    }
    //工业园区
    @RequestMapping("/IndustryParkInput")
    @ResponseBody
    public ResponseData IndustryParkInput(@RequestBody Industry_park industry_park){
        industryParkService.insert(industry_park);
        return ResponseData.success();
    }
    //工业废水
    @RequestMapping("/IndustryTrashInput")
    @ResponseBody
    public ResponseData IndustryTrashInput(@RequestBody Industry_trash industryTrash){
        industryTrashService.insert(industryTrash);
        return ResponseData.success();
    }
    //畜禽养殖
    @RequestMapping("/LivestockInput")
    @ResponseBody
    public ResponseData LivestockInput(@RequestBody Livestock_enterprises livestockEnterprises) {
        livestockService.insert(livestockEnterprises);
        return ResponseData.success();
    }
    //市政污水
    @RequestMapping("/MunicipalInput")
    @ResponseBody
    public ResponseData MunicipalInput(@RequestBody Municipal_administration municipalAdministration){
        municipalService.insert(municipalAdministration);
        return ResponseData.success();
    }

    /**
     * 2.获取企业的全部信息
     * */
    //工业生活
    @RequestMapping(value = "/getAllIndustryLife",method = RequestMethod.GET)
    @ResponseBody
    public List<Industry_life> getAllIndustryLife(){
        List<Industry_life> allIndustryLife=industryLifeService.list();
        return allIndustryLife;
    }
    //水产养殖
    @RequestMapping(value = "/getAllAquaculture",method = RequestMethod.GET)
    @ResponseBody
    public List<Aquaculture> getAllAquaculture(){
        List<Aquaculture> allAquaculture=aquacultureService.list();
        return allAquaculture;
    }
    //农田
    @RequestMapping(value = "/getAllFarm",method = RequestMethod.GET)
    @ResponseBody
    public List<Farm> getAllFarm(){
        List<Farm> allFarm=farmService.list();
        return allFarm;
    }
    //工业园区
    @RequestMapping(value = "/getAllIndustryPark",method = RequestMethod.GET)
    @ResponseBody
    public List<Industry_park> getAllIndustryPark(){
        List<Industry_park> allIndustryPark=industryParkService.list();
        return allIndustryPark;
    }
    //工业废水
    @RequestMapping(value = "/getAllIndustryTrash",method = RequestMethod.GET)
    @ResponseBody
    public List<Industry_trash> getAllIndustryTrash(){
        List<Industry_trash> allIndustryTrash=industryTrashService.list();
        return allIndustryTrash;
    }
    //畜禽养殖
    @RequestMapping(value = "/getAllLivestock",method = RequestMethod.GET)
    @ResponseBody
    public List<Livestock_enterprises> getAllLivestock(){
        List<Livestock_enterprises> allLivestock=livestockService.list();
        return allLivestock;
    }
    //市政污水
    @RequestMapping(value = "/getAllMunicipal",method = RequestMethod.GET)
    @ResponseBody
    public List<Municipal_administration> getAllMunicipal(){
        List<Municipal_administration> allmunicipal=municipalService.list();
        return allmunicipal;
    }


    /**
     * 3.根据id删除企业信息
     */
    //工业生活删除操作
    @RequestMapping(value = "/deleteIndustrylife")
    @ResponseBody
    public ResponseData deleteIndustrylife(final int[] ids){
        industryLifeService.deleteByIds(ids);
        return ResponseData.success();
    }
    //工业园区
    @RequestMapping(value = "/deleteIndustryPark")
    @ResponseBody
    public ResponseData deleteIndustryPark(final int[] ids){
        industryParkService.deleteByIds(ids);
        return ResponseData.success();
    }
    //农田
    @RequestMapping("/deleteFarm")
    @ResponseBody
    public ResponseData deleteFarm(final int[] ids){
        farmService.deleteByIds(ids);
        return ResponseData.success();
    }
    //水产养殖
    @RequestMapping("/deleteAquaculture")
    @ResponseBody
    public ResponseData deleteAquaculture(final int[] ids){
        aquacultureService.deleteByIds(ids);
        return ResponseData.success();
    }
    //工业废水
    @RequestMapping(value = "/deleteIndustryTrash")
    @ResponseBody
    public ResponseData deleteIndustryTrash(final int[] ids){
        industryTrashService.deleteByIds(ids);
        return ResponseData.success();
    }
    //畜禽养殖删除操作
    @RequestMapping(value = "/deleteLivestock")
    @ResponseBody
    public ResponseData deleteLivestock(final int[] ids){
        livestockService.deleteByIds(ids);
        return ResponseData.success();
    }
    //市政污水删除操作
    @RequestMapping(value = "/deleteMunicipal")
    @ResponseBody
    public ResponseData deleteMunicipal(final int[] ids){
        municipalService.deleteByIds(ids);
        return ResponseData.success();
    }

    /**
     * 4.修改企业信息
     * */
    //工业生活
    @RequestMapping(value = "/updateIndustrylife",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateIndustrylife(@RequestBody Industry_life industryLife){
        industryLifeService.updateByPrimaryKey(industryLife);
        return ResponseData.success();
    }
    //农田
    @RequestMapping(value = "/updateFarm",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateFarm(@RequestBody Farm farm){
        farmService.updateByPrimaryKey(farm);
        return ResponseData.success();
    }
    //水产养殖
    @RequestMapping(value = "/updateAquaculture",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateAquaculture(@RequestBody Aquaculture aquaculture){
        aquacultureService.updateByPrimaryKey(aquaculture);
        return ResponseData.success();
    }
    //工业园区
    @RequestMapping(value = "/updateIndustryPark",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateIndustryPark(@RequestBody Industry_park industryPark){
        industryParkService.updateByPrimaryKey(industryPark);
        return ResponseData.success();
    }
    //工业废水
    @RequestMapping(value = "/updateIndustryTrash",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateIndustryTrash(@RequestBody Industry_trash industryTrash){
        industryTrashService.updateByPrimaryKey(industryTrash);
        return ResponseData.success();
    }
    //市政污水
    @RequestMapping(value = "/updateMunicipal",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateMunicipal(@RequestBody Municipal_administration municipalAdministration){
        municipalService.updateByPrimaryKey(municipalAdministration);
        return ResponseData.success();
    }
    //畜禽养殖
    @RequestMapping(value = "/updateLivestock",method = RequestMethod.POST)
    @ResponseBody
    public ResponseData updateLivestock(@RequestBody Livestock_enterprises livestockEnterprises){
        livestockService.updateByPrimaryKey(livestockEnterprises);
        return ResponseData.success();
    }


    /**
     * 5.多条件查询
     * */
    @RequestMapping(value = "/searchIndustryLifes")
    @ResponseBody
    public List<Industry_life> searchIndustryLifes(@RequestBody Industry_life industryLife){
        List<Industry_life> lists=industryLifeService.searchAllIndustryLife(industryLife);
        return lists;
    }
    @RequestMapping("/searchIndustryPark")
    @ResponseBody
    public List<Industry_park> searchIndustryPark(@RequestBody Industry_park industryPark){
        List<Industry_park> lists=industryParkService.searchAllIndustryPark(industryPark);
        return lists;
    }
    @RequestMapping("/searchAquaculture")
    @ResponseBody
    public List<Aquaculture> searchAquaculture(@RequestBody Aquaculture aquaculture){
        List<Aquaculture> lists=aquacultureService.searchAllAqua(aquaculture);
        return lists;
    }
    @RequestMapping(value = "/searchFarm")
    @ResponseBody
    public List<Farm> searchFarm(@RequestBody Farm farm){
        List<Farm> lists=farmService.searchAllFarm(farm);
        return lists;
    }
    @RequestMapping("/searchIndustryTrash")
    @ResponseBody
    public List<Industry_trash> searchIndustryTrash(@RequestBody Industry_trash industryTrash){
        List<Industry_trash> lists=industryTrashService.searchAllIndurTrash(industryTrash);
        return lists;
    }
    //畜禽养殖
    @RequestMapping(value = "/searchLivestock")
    @ResponseBody
    public List<Livestock_enterprises> searchLivestock(@RequestBody Livestock_enterprises livestockEnterprises){
        List<Livestock_enterprises> lists=livestockService.searchAllLivestock(livestockEnterprises);
        return lists;
    }
    //市政污水
    @RequestMapping(value = "/searchMunicipal")
    @ResponseBody
    public List<Municipal_administration> searchMunicipal(@RequestBody Municipal_administration municipalAdministration){
        List<Municipal_administration> lists=municipalService.listAll(municipalAdministration);
        return lists;
    }
}
