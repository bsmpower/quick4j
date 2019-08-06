package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.StandardMapper;
import com.eliteams.quick4j.web.model.Standard;
import com.eliteams.quick4j.web.service.StandardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class StandardServiceImpl implements StandardService {

    @Autowired
    private StandardMapper standardMapper;

    public Standard select(Standard standard){
        return standardMapper.select(standard);
    }

    public List<Standard> list(){
        return standardMapper.list();
    }


    public void update(Standard standard){
        standardMapper.update(standard);
    }
}