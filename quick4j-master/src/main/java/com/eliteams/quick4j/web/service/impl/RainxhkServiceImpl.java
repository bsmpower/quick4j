package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.rain_spillwayMapper;
import com.eliteams.quick4j.web.model.rain_spillway;
import com.eliteams.quick4j.web.model.rainsewage;
import com.eliteams.quick4j.web.service.RainxhkService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RainxhkServiceImpl implements RainxhkService {
    @Resource
    private rain_spillwayMapper rainSpillwayMapper;

    @Override
    public List<rain_spillway> selectRainxhk(rain_spillway rs) {
        List<rain_spillway> list = new ArrayList<>();
        list = rainSpillwayMapper.selectRainSpillway(rs);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = rainSpillwayMapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<rain_spillway> selectByPrimaryKey(int[] ids) {
        List<rain_spillway> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(rainSpillwayMapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<rain_spillway> selectBypage(String pageNow, rain_spillway rss) {
        return null;
    }

    @Override
    public int insertall(List<rain_spillway> rss) {
        int length = rss.size();
        for(rain_spillway rs : rss){
            rainSpillwayMapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
