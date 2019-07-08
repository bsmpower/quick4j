package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.outletMapper;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.service.OutletService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class OutletServiceImpl implements OutletService{
    @Resource
    private outletMapper outletmapper;

    @Override
    public List<outlet> selectPwk(outlet ot){
        List<outlet> list = new ArrayList<>();
        list = outletmapper.selectPwk(ot);
        return list;
    }
    @Override
    public List<outlet> selectBypage(String pageNow, outlet ot){
        return null;
    }

    @Override
    public int  deleteByids(int[] ids){
        for(int i = 0; i < ids.length; i ++){
            int flag = outletmapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 1;
    }

    @Override
    public List<outlet> selectByPrimaryKey(int[] ids) {
        List<outlet> ots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            ots.add(outletmapper.selectByPrimaryKey(ids[i]));
        return ots;
    }

    @Override
    public int insertall(List<outlet> ots) {
        int length = ots.size();
        for(outlet ot: ots ){
            outletmapper.insertSelective(ot);
            length--;
        }
        if(length == 0){
            return 1;
        }else {
            return 0;
        }
    }
}
