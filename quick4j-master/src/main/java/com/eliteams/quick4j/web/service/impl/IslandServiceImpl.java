package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.islandMapper;
import com.eliteams.quick4j.web.model.island;
import com.eliteams.quick4j.web.model.port;
import com.eliteams.quick4j.web.service.IslandService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class IslandServiceImpl implements IslandService{
    @Resource
    private islandMapper islandmapper;

    @Override
    public List<island> selectisland(island rot) {
        List<island> list = new ArrayList<>();
        list = islandmapper.selectisland(rot);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = islandmapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<island> selectByPrimaryKey(int[] ids) {
        List<island> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(islandmapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<island> selectBypage(String pageNow, island ots) {
        return null;
    }

    @Override
    public int insertall(List<island> ot) {
        int length = ot.size();
        for(island rs : ot){
            islandmapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
