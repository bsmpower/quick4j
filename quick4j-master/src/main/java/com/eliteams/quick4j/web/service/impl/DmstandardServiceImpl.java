package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.DmstandardMapper;
import com.eliteams.quick4j.web.dao.StandardMapper;
import com.eliteams.quick4j.web.model.Dmstandard;
import com.eliteams.quick4j.web.model.Standard;
import com.eliteams.quick4j.web.service.DmstandardService;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class DmstandardServiceImpl implements DmstandardService {

    @Autowired
    private DmstandardMapper dmstandardMapper;

    public Dmstandard select(Dmstandard dmstandard){
        return dmstandardMapper.select(dmstandard);
    }

    public List<Dmstandard> list(){
        return dmstandardMapper.list();
    }


    public void update(Dmstandard dmstandard){
        dmstandardMapper.update(dmstandard);
    }
}