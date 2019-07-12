package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.core.generic.GenericServiceImpl;
import com.eliteams.quick4j.web.dao.Industry_trashMapper;
import com.eliteams.quick4j.web.model.Industry_trash;
import com.eliteams.quick4j.web.service.IndustryTrashService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class IndustryTrashServiceImpl extends GenericServiceImpl<Industry_trash,Long> implements IndustryTrashService {
    @Resource
    private Industry_trashMapper industryTrashMapper;

    public int deleteByPrimaryKey(Integer id){
        return industryTrashMapper.deleteByPrimaryKey(id);
    }

    public int insert(Industry_trash record){
        return industryTrashMapper.insert(record);
    }

    public int insertSelective(Industry_trash record){
        return industryTrashMapper.insertSelective(record);
    }

    public Industry_trash selectByPrimaryKey(Integer id){
        return industryTrashMapper.selectByPrimaryKey(id);
    }

    public int updateByPrimaryKeySelective(Industry_trash record){
        return industryTrashMapper.updateByPrimaryKeySelective(record);
    }

    public int updateByPrimaryKey(Industry_trash record){
        return industryTrashMapper.updateByPrimaryKey(record);
    }

    public List<Industry_trash> list(){
        return industryTrashMapper.list();
    }

    public List<Industry_trash> searchAllIndurTrash(Industry_trash record){
        return industryTrashMapper.searchAllIndurTrash(record);
    }

    public int deleteByIds(int[] ids){
        for (int i=0;i<ids.length;i++){
            int flag=industryTrashMapper.deleteByPrimaryKey(ids[i]);
            if (flag==0)
                return 0;
        }
        return 1;
    }
    public GenericDao<Industry_trash,Long> getDao(){
        return industryTrashMapper;
    }
}
