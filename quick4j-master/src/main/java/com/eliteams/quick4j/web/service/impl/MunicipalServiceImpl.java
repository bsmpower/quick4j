package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.Municipal_administrationMapper;
import com.eliteams.quick4j.web.model.Municipal_administration;
import com.eliteams.quick4j.web.service.MunicipalService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MunicipalServiceImpl extends GenericServiceImpl<Municipal_administration,Long> implements MunicipalService {
    @Resource
    private Municipal_administrationMapper municipalAdministrationMapper;

    public int deleteByPrimaryKey(Integer id){
        return municipalAdministrationMapper.deleteByPrimaryKey(id);
    }

    public int insert(Municipal_administration record){
        return municipalAdministrationMapper.insert(record);
    }

    public int insertSelective(Municipal_administration record){
        return municipalAdministrationMapper.insertSelective(record);
    }

    public Municipal_administration selectByPrimaryKey(Integer id){
        return municipalAdministrationMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Municipal_administration record){
        return municipalAdministrationMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Municipal_administration record){
        return municipalAdministrationMapper.updateByPrimaryKey(record);
    }

    public List<Municipal_administration> list(){
        return municipalAdministrationMapper.list();
    }

    public List<Municipal_administration> listAll(Municipal_administration record){
        return municipalAdministrationMapper.listAll(record);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=municipalAdministrationMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }
    public List<Municipal_administration> searchExit(Municipal_administration record){
        return municipalAdministrationMapper.searchExit(record);
    }


    public GenericDao<Municipal_administration,Long> getDao(){
        return municipalAdministrationMapper;
    }
}
