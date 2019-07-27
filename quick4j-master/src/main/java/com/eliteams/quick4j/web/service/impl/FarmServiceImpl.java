package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.FarmMapper;
import com.eliteams.quick4j.web.model.Farm;
import com.eliteams.quick4j.web.service.FarmService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class FarmServiceImpl extends GenericServiceImpl<Farm,Long> implements FarmService {
    @Resource
    private FarmMapper farmMapper;

    public List<Farm> searchExit(Farm record){
        return farmMapper.searchExit(record);
    }
    public int deleteByPrimaryKey(Integer id){
        return farmMapper.deleteByPrimaryKey(id);
    }

    public int insert(Farm record){
        return farmMapper.insert(record);
    }

    public int insertSelective(Farm record){
        return farmMapper.insertSelective(record);
    }

    public Farm selectByPrimaryKey(Integer id){
        return farmMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Farm record){
        return farmMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Farm record){
        return farmMapper.updateByPrimaryKey(record);
    }

    public List<Farm> list(){
        return farmMapper.list();
    }

    public List<Farm> searchAllFarm(Farm aquaculture){
        return farmMapper.searchAllFarm(aquaculture);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=farmMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }
    public GenericDao<Farm,Long> getDao(){
        return farmMapper;
    }
}
