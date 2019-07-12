package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.rainsewageMapper;
import com.eliteams.quick4j.web.model.rain_outlet;
import com.eliteams.quick4j.web.model.rainsewage;
import com.eliteams.quick4j.web.service.RainoutletService;
import com.eliteams.quick4j.web.service.RainsewageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RainsewageServiceImpl implements RainsewageService {

    @Resource
    private rainsewageMapper rainsewagemapper;

    @Override
    public List<rainsewage> selectRainoutlet(rainsewage rs) {

        List<rainsewage> list = new ArrayList<>();
        list = rainsewagemapper.selectRainsewage(rs);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = rainsewagemapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<rainsewage> selectByPrimaryKey(int[] ids) {
        List<rainsewage> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(rainsewagemapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<rainsewage> selectBypage(String pageNow, rainsewage rss) {
        return null;
    }

    @Override
    public int insertall(List<rainsewage> rss) {
        int length = rss.size();
        for(rainsewage rs : rss){
            rainsewagemapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
