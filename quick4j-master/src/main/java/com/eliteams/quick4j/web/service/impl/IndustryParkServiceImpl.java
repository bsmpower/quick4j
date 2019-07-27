package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.Industry_parkMapper;
import com.eliteams.quick4j.web.model.Industry_park;
import com.eliteams.quick4j.web.service.IndustryParkService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class IndustryParkServiceImpl extends GenericServiceImpl<Industry_park,Long> implements IndustryParkService {
    @Resource
    private Industry_parkMapper industryParkMapper;
    public List<Industry_park> searchExit(Industry_park record){
        return industryParkMapper.searchExit(record);
    }

    public int deleteByPrimaryKey(Integer id){
        return industryParkMapper.deleteByPrimaryKey(id);
    }

    public int insert(Industry_park record){
        return industryParkMapper.insert(record);
    }

    public int insertSelective(Industry_park record){
        return industryParkMapper.insertSelective(record);
    }

    public Industry_park selectByPrimaryKey(Integer id){
        return industryParkMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Industry_park record){
        return industryParkMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Industry_park record){
        return industryParkMapper.updateByPrimaryKey(record);
    }

    public List<Industry_park> list(){
        return industryParkMapper.list();
    }

    public List<Industry_park> searchAllIndustryPark(Industry_park record){
        return industryParkMapper.searchAllIndustryPark(record);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=industryParkMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }

    public GenericDao<Industry_park,Long> getDao(){
        return industryParkMapper;
    }

}
