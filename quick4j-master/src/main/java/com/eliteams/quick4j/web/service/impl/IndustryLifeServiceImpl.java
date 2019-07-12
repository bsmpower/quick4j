package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.Industry_lifeMapper;
import com.eliteams.quick4j.web.model.Industry_life;
import com.eliteams.quick4j.web.service.IndustryLifeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class IndustryLifeServiceImpl extends GenericServiceImpl<Industry_life,Long> implements IndustryLifeService {

    @Resource
    private Industry_lifeMapper industryLifeMapper;

    public GenericDao<Industry_life,Long> getDao(){
        return industryLifeMapper;
    }

    public int deleteByPrimaryKey(Integer id){
        return industryLifeMapper.deleteByPrimaryKey(id);
    }

    public int insert(Industry_life record){
        return industryLifeMapper.insert(record);
    }

    public int insertSelective(Industry_life record){
        return industryLifeMapper.insertSelective(record);
    }

    public Industry_life selectByPrimaryKey(Integer id){
        return industryLifeMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Industry_life record){
        return industryLifeMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Industry_life record){
        return industryLifeMapper.updateByPrimaryKey(record);
    }

    public List<Industry_life> list(){
        return industryLifeMapper.list();
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=industryLifeMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }

    public List<Industry_life> searchAllIndustryLife(Industry_life industryLife){
        return industryLifeMapper.searchAllIndustryLife(industryLife);
    }
}
