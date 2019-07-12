package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.oil_fieldMapper;
import com.eliteams.quick4j.web.model.oil_field;
import com.eliteams.quick4j.web.service.OilfieldService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class OilfieldServiceImpl implements OilfieldService {
    @Resource
    private oil_fieldMapper oilFieldMapper;

    @Override
    public List<oil_field> selectOilfield(oil_field rot) {
        List<oil_field> list = new ArrayList<>();
        list =oilFieldMapper.selectoilfield(rot);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = oilFieldMapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<oil_field> selectByPrimaryKey(int[] ids) {
        List<oil_field> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(oilFieldMapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<oil_field> selectBypage(String pageNow, oil_field ots) {
        return null;
    }

    @Override
    public int insertall(List<oil_field> ot) {
        int length = ot.size();
        for(oil_field rs : ot){
            oilFieldMapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
