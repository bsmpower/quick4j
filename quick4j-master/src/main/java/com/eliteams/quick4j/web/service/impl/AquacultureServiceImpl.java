package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.AquacultureMapper;
import com.eliteams.quick4j.web.model.Aquaculture;
import com.eliteams.quick4j.web.service.AquacultureService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AquacultureServiceImpl extends GenericServiceImpl<Aquaculture,Long> implements AquacultureService {
    @Resource
    private AquacultureMapper aquacultureMapper;

    public List<Aquaculture> searchExit(Aquaculture record){
        return aquacultureMapper.searchExit(record);
    }

    public GenericDao<Aquaculture,Long> getDao(){
        return aquacultureMapper;
    }

    public int deleteByPrimaryKey(Integer id){
        return aquacultureMapper.deleteByPrimaryKey(id);
    }

    public int insert(Aquaculture record){
        return aquacultureMapper.insert(record);
    }

    public int insertSelective(Aquaculture record){
        return aquacultureMapper.insertSelective(record);
    }

    public Aquaculture selectByPrimaryKey(Integer id){
        return aquacultureMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Aquaculture record){
        return aquacultureMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Aquaculture record){
        return aquacultureMapper.updateByPrimaryKey(record);
    }

    public List<Aquaculture> list(){
        return aquacultureMapper.list();
    }

    public List<Aquaculture> searchAllAqua(Aquaculture aquaculture){
        return aquacultureMapper.searchAllAqua(aquaculture);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=aquacultureMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }
}
