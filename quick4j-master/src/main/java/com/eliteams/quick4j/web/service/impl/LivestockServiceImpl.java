package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.Livestock_enterprisesMapper;
import com.eliteams.quick4j.web.model.Livestock_enterprises;
import com.eliteams.quick4j.web.service.LivestockService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LivestockServiceImpl extends GenericServiceImpl<Livestock_enterprises,Long> implements LivestockService {
    @Resource
    private Livestock_enterprisesMapper livestockEnterprisesMapper;

    public int deleteByPrimaryKey(Integer id){
        return livestockEnterprisesMapper.deleteByPrimaryKey(id);
    }

    public int insert(Livestock_enterprises record){
        return livestockEnterprisesMapper.insert(record);
    }

    public int insertSelective(Livestock_enterprises record){
        return livestockEnterprisesMapper.insertSelective(record);
    }

    public Livestock_enterprises selectByPrimaryKey(Integer id){
        return livestockEnterprisesMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Livestock_enterprises record){
        return livestockEnterprisesMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Livestock_enterprises record){
        return livestockEnterprisesMapper.updateByPrimaryKey(record);
    }

    public List<Livestock_enterprises> list(){
        return livestockEnterprisesMapper.list();
    }

    public List<Livestock_enterprises> searchAllLivestock(Livestock_enterprises record){
        return livestockEnterprisesMapper.searchAllLivestock(record);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=livestockEnterprisesMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }

    public GenericDao<Livestock_enterprises,Long> getDao(){
        return livestockEnterprisesMapper;
    }
}
