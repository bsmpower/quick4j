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
     * 首先判断该是否存在这样的企业(关键字组是：统计年，统计月，统计日和单位名称)；
     * 如果不存在，直接插入数据，并返回插入的数据
     * 如果存在，告诉用户不能插入，让用户重新输入数据
     * */
    //工业生活
    @RequestMapping("/IndustryLifeInput")
    @ResponseBody
    public List<Industry_life> IndustryLifeInput(@RequestBody Industry_life industryLife) {
        //新建对象并获取关键字组
        Industry_life industry_life=new Industry_life();
        industry_life.setTjyear(industryLife.getTjyear());
        industry_life.setTjmonth(industryLife.getTjmonth());
        industry_life.setTjday(industryLife.getTjday());
        industry_life.setName(industryLife.getName());

        //查找数据库中是否存在
        List<Industry_life> lits=industryLifeService.searchAllIndustryLife(industry_life);
        if (!lits.isEmpty()){
                return null;
        }else{
            industryLifeService.insert(industryLife);
            List<Industry_life> news=industryLifeService.searchAllIndustryLife(industryLife);
            return news;
        }
    }
    //工业废水
    @RequestMapping("/IndustryTrashInput")
    @ResponseBody
    public List<Industry_trash> IndustryTrashInput(@RequestBody Industry_trash industryTrash){

        Industry_trash industry_trash=new Industry_trash();
        industry_trash.setTjyear(industryTrash.getTjyear());
        industry_trash.setTjmonth(industryTrash.getTjmonth());
        industry_trash.setTjday(industryTrash.getTjday());
        industry_trash.setGyname(industryTrash.getGyname());

        List<Industry_trash> lists=industryTrashService.searchAllIndurTrash(industry_trash);
        if (!lists.isEmpty()){
            return null;
        }else{
            industryTrashService.insert(industryTrash);
            List<Industry_trash> news=industryTrashService.searchAllIndurTrash(industry_trash);
            return news;
        }
    }
    //工业园区
    @RequestMapping("/IndustryParkInput")
    @ResponseBody
    public List<Industry_park> IndustryParkInput(@RequestBody Industry_park industry_park){
        Industry_park industryPark=new Industry_park();
        industryPark.setTjyear(industry_park.getTjyear());
        industryPark.setTjmonth(industry_park.getTjmonth());
        industryPark.setTjday(industry_park.getTjday());
        industryPark.setGyyqName(industry_park.getGyyqName());

        List<Industry_park> lists=industryParkService.searchExit(industry_park);
        if (!lists.isEmpty()){
            return null;
        }else{
            industryParkService.insert(industry_park);
            List<Industry_park> news=industryParkService.searchAllIndustryPark(industry_park);
            return news;
        }
    }
    //市政污水
    @RequestMapping("/MunicipalInput")
    @ResponseBody
    public List<Municipal_administration> MunicipalInput(@RequestBody Municipal_administration municipalAdministration){
        Municipal_administration municipal=new Municipal_administration();
        municipal.setTjyear(municipalAdministration.getTjyear());
        municipal.setTjmonth(municipalAdministration.getTjmonth());
        municipal.setTjday(municipalAdministration.getTjday());
        municipal.setName(municipalAdministration.getName());

        List<Municipal_administration> lists=municipalService.searchExit(municipal);
        if (!lists.isEmpty()){
            return null;
        }else {
            municipalService.insert(municipal);
            List<Municipal_administration> news=municipalService.listAll(municipal);
            return news;
        }

    }
    //畜禽养殖
    @RequestMapping("/LivestockInput")
    @ResponseBody
    public List<Livestock_enterprises> LivestockInput(@RequestBody Livestock_enterprises livestockEnterprises) {

        List<Livestock_enterprises> lists=livestockService.searchExit(livestockEnterprises);
        if (!lists.isEmpty()){
            return null;
        }else {
            livestockService.insert(livestockEnterprises);
            List<Livestock_enterprises> news=livestockService.searchAllLivestock(livestockEnterprises);
            return news;
        }
    }
    //农田
    @RequestMapping("/FarmInput")
    @ResponseBody
    public List<Farm> FarmInput(@RequestBody Farm farm){
        List<Farm> lists=farmService.searchExit(farm);
        if (!lists.isEmpty()){
            return null;
        }else {
            farmService.insert(farm);
            List<Farm> news=farmService.searchAllFarm(farm);
            return news;
        }

    }
    //水产养殖
    @RequestMapping("/AquacultureInput")
    @ResponseBody
    public List<Aquaculture> AquacultureInput(@RequestBody Aquaculture aquaculture){
        List<Aquaculture> lists=aquacultureService.searchExit(aquaculture);
        if (!lists.isEmpty()){
            return null;
        }else {
            aquacultureService.insert(aquaculture);
            List<Aquaculture> news=aquacultureService.searchAllAqua(aquaculture);
            return news;
        }
    }

    /**
     * 2.获取企业的全部信息
     * */
    //工业生活
    @RequestMapping(value = "/getAllIndustryLife",method = RequestMethod.POST)
    @ResponseBody
    public List<Industry_life> getAllIndustryLife(){
        List<Industry_life> allIndustryLife=industryLifeService.list();
        return allIndustryLife;
    }
    //工业废水
    @RequestMapping(value = "/getAllIndustryTrash",method = RequestMethod.POST)
    @ResponseBody
    public List<Industry_trash> getAllIndustryTrash(){
        List<Industry_trash> allIndustryTrash=industryTrashService.list();
        return allIndustryTrash;
    }
    //工业园区
    @RequestMapping(value = "/getAllIndustryPark",method = RequestMethod.POST)
    @ResponseBody
    public List<Industry_park> getAllIndustryPark(){
        List<Industry_park> allIndustryPark=industryParkService.list();
        return allIndustryPark;
    }
    //市政污水
    @RequestMapping(value = "/getAllMunicipal",method = RequestMethod.POST)
    @ResponseBody
    public List<Municipal_administration> getAllMunicipal(){
        List<Municipal_administration> allmunicipal=municipalService.list();
        return allmunicipal;
    }
    //水产养殖
    @RequestMapping(value = "/getAllAquaculture",method = RequestMethod.POST)
    @ResponseBody
    public List<Aquaculture> getAllAquaculture(){
        List<Aquaculture> allAquaculture=aquacultureService.list();
        return allAquaculture;
    }
    //农田
    @RequestMapping(value = "/getAllFarm",method = RequestMethod.POST)
    @ResponseBody
    public List<Farm> getAllFarm(){
        List<Farm> allFarm=farmService.list();
        return allFarm;
    }
    //畜禽养殖
    @RequestMapping(value = "/getAllLivestock",method = RequestMethod.POST)
    @ResponseBody
    public List<Livestock_enterprises> getAllLivestock(){
        List<Livestock_enterprises> allLivestock=livestockService.list();
        return allLivestock;
    }

    /**
     * 3.批量删除企业信息
     */
    //工业生活删除操作
    @RequestMapping(value = "/deleteIndustrylifes")
    @ResponseBody
    public ResponseData deleteIndustrylifes(final int[] ids){
        industryLifeService.deleteByIds(ids);
        return ResponseData.success();
    }
    //工业废水
    @RequestMapping(value = "/deleteIndustryTrashs")
    @ResponseBody
    public ResponseData deleteIndustryTrashs(final int[] ids){
        industryTrashService.deleteByIds(ids);
        return ResponseData.success();
    }
    //工业园区
    @RequestMapping(value = "/deleteIndustryParks")
    @ResponseBody
    public ResponseData deleteIndustryParks(final int[] ids){
        industryParkService.deleteByIds(ids);
        return ResponseData.success();
    }
    //市政污水删除操作
    @RequestMapping(value = "/deleteMunicipals")
    @ResponseBody
    public ResponseData deleteMunicipals(final int[] ids){
        municipalService.deleteByIds(ids);
        return ResponseData.success();
    }
    //畜禽养殖删除操作
    @RequestMapping(value = "/deleteLivestocks")
    @ResponseBody
    public ResponseData deleteLivestocks(final int[] ids){
        livestockService.deleteByIds(ids);
        return ResponseData.success();
    }
    //农田
    @RequestMapping("/deleteFarms")
    @ResponseBody
    public ResponseData deleteFarms(final int[] ids){
        farmService.deleteByIds(ids);
        return ResponseData.success();
    }
    //水产养殖
    @RequestMapping("/deleteAquacultures")
    @ResponseBody
    public ResponseData deleteAquacultures(final int[] ids){
        aquacultureService.deleteByIds(ids);
        return ResponseData.success();
    }
    /**
     * 删除单条企业信息
     * */
    @RequestMapping(value = "/deleteIndustrylife/{id}")
    @ResponseBody
    public ResponseData deleteIndustrylife(@PathVariable Integer id){
        industryLifeService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    @RequestMapping(value = "/deleteIndustryTrash/{id}")
    @ResponseBody
    public ResponseData deleteIndustryTrash(@PathVariable Integer id){
        industryTrashService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    //工业园区
    @RequestMapping(value = "/deleteIndustryPark/{id}")
    @ResponseBody
    public ResponseData deleteIndustryPark(@PathVariable Integer id){
        industryParkService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    @RequestMapping(value = "/deleteMunicipal/{id}")
    @ResponseBody
    public ResponseData deleteMunicipal(@PathVariable Integer id){
        municipalService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    //畜禽养殖删除操作
    @RequestMapping(value = "/deleteLivestock/{id}")
    @ResponseBody
    public ResponseData deleteLivestock(@PathVariable Integer id){
        livestockService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    //农田
    @RequestMapping("/deleteFarm/{id}")
    @ResponseBody
    public ResponseData deleteFarm(@PathVariable Integer id){
        farmService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }
    //水产养殖
    @RequestMapping("/deleteAquaculture/{id}")
    @ResponseBody
    public ResponseData deleteAquaculture(@PathVariable Integer id){
        aquacultureService.deleteByPrimaryKey(id);
        return ResponseData.success();
    }


    /**
     * 4.修改企业信息
     * */
    //工业生活
    @RequestMapping(value = "/updateIndustrylife",method = RequestMethod.POST)
    @ResponseBody
    public  List<Industry_life> updateIndustrylife(@RequestBody Industry_life industryLife){
        //本来更改直接修改其他信息就好，但是因为老师说主键可以修改，所以要判断一下修改之后的候选码是否存在于数据库中
        //判断是否存在
        List<Industry_life> lists=industryLifeService.searchExit(industryLife);
        if (!lists.isEmpty()){
            return null;
        }else{
            industryLifeService.updateByPrimaryKey(industryLife);
            List<Industry_life> news=industryLifeService.searchAllIndustryLife(industryLife);
            return news;
        }
    }
    //工业废水
    @RequestMapping(value = "/updateIndustryTrash",method = RequestMethod.POST)
    @ResponseBody
    public List<Industry_trash> updateIndustryTrash(@RequestBody Industry_trash industryTrash){
        List<Industry_trash> lists=industryTrashService.searchExit(industryTrash);
        if (!lists.isEmpty()){
            return null;
        }else {
            industryTrashService.updateByPrimaryKey(industryTrash);
            List<Industry_trash> news=industryTrashService.searchAllIndurTrash(industryTrash);
            return news;
        }
    }
    //工业园区
    @RequestMapping(value = "/updateIndustryPark",method = RequestMethod.POST)
    @ResponseBody
    public List<Industry_park> updateIndustryPark(@RequestBody Industry_park industryPark){
        List<Industry_park> lists=industryParkService.searchExit(industryPark);
        if (!lists.isEmpty()){
            return null;
        }else {
            industryParkService.updateByPrimaryKey(industryPark);
            List<Industry_park> news=industryParkService.searchAllIndustryPark(industryPark);
            return news;
        }
    }
    //市政污水
    @RequestMapping(value = "/updateMunicipal",method = RequestMethod.POST)
    @ResponseBody
    public List<Municipal_administration> updateMunicipal(@RequestBody Municipal_administration municipalAdministration){
        System.out.println("hhh");
        List<Municipal_administration> lists=municipalService.searchExit(municipalAdministration);
        if (!lists.isEmpty()){
            return null;
        }else {
            municipalService.updateByPrimaryKey(municipalAdministration);
            List<Municipal_administration> news=municipalService.listAll(municipalAdministration);
            return news;
        }

    }
    //畜禽养殖
    @RequestMapping(value = "/updateLivestock",method = RequestMethod.POST)
    @ResponseBody
    public List<Livestock_enterprises> updateLivestock(@RequestBody Livestock_enterprises livestockEnterprises){
        List<Livestock_enterprises> lists=livestockService.searchExit(livestockEnterprises);
        if (!lists.isEmpty()){
            return null;
        }else {
            livestockService.updateByPrimaryKey(livestockEnterprises);
            List<Livestock_enterprises> news=livestockService.searchAllLivestock(livestockEnterprises);
            return news;
        }
    }
    //农田
    @RequestMapping(value = "/updateFarm",method = RequestMethod.POST)
    @ResponseBody
    public List<Farm> updateFarm(@RequestBody Farm farm){
        List<Farm> lists=farmService.searchExit(farm);
        if (!lists.isEmpty()){
            return null;
        }else{
            farmService.updateByPrimaryKey(farm);
            List<Farm> news=farmService.searchAllFarm(farm);
            return news;
        }

    }
    //水产养殖
    @RequestMapping(value = "/updateAquaculture",method = RequestMethod.POST)
    @ResponseBody
    public List<Aquaculture> updateAquaculture(@RequestBody Aquaculture aquaculture){
        List<Aquaculture> lists=aquacultureService.searchExit(aquaculture);
        if (!lists.isEmpty()){
            return null;
        }else {
            aquacultureService.updateByPrimaryKey(aquaculture);
            List<Aquaculture> news=aquacultureService.searchAllAqua(aquaculture);
            return news;
        }
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
    @RequestMapping("/searchIndustryTrash")
    @ResponseBody
    public List<Industry_trash> searchIndustryTrash(@RequestBody Industry_trash industryTrash){

        List<Industry_trash> lists=industryTrashService.searchAllIndurTrash(industryTrash);
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
