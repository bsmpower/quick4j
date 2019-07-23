package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.WdscMapper;
import com.eliteams.quick4j.web.model.Wdsc;
import com.eliteams.quick4j.web.service.WdscService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class WdscServiceImpl implements WdscService{

    @Autowired
    private WdscMapper wdscMapper;

    public List<Wdsc> select(String str){
        return wdscMapper.select(str);
    }

    public List<Wdsc> list(){
        return wdscMapper.list();
    }

    public Wdsc get(int id){
        return wdscMapper.get(id);
    }

    public Wdsc selectbyname(String name){
        return wdscMapper.selectbyname(name);
    }

    public void add(Wdsc Wdsc){
        wdscMapper.add(Wdsc);
    }

    public void delete(int id){
        wdscMapper.delete(id);
    }

}
