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
}
