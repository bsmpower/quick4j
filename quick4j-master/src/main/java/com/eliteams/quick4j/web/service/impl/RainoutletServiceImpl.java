package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.rain_outletMapper;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.model.rain_outlet;
import com.eliteams.quick4j.web.service.RainoutletService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class RainoutletServiceImpl implements RainoutletService {
    @Resource
    private rain_outletMapper rainOutletMapper;

    @Override
    public List<rain_outlet> selectRainoutlet(rain_outlet rot) {
        List<rain_outlet> list = new ArrayList<>();
        list = rainOutletMapper.selectRainoutlet(rot);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = rainOutletMapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<rain_outlet> selectByPrimaryKey(int[] ids) {
        List<rain_outlet> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(rainOutletMapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<rain_outlet> selectBypage(String pageNow, rain_outlet ots) {
        return null;
    }

    @Override
    public int insertall(List<rain_outlet> ots) {
        int length = ots.size();
        for(rain_outlet rot : ots){
            rainOutletMapper.insertSelective(rot);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
