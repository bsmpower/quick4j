package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Industry_trash;

import java.util.List;

public interface IndustryTrashService extends GenericService<Industry_trash,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry_trash record);

    int insertSelective(Industry_trash record);

    Industry_trash selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_trash record);

    int updateByPrimaryKey(Industry_trash record);

    List<Industry_trash> list();

    List<Industry_trash> searchAllIndurTrash(Industry_trash record);

    int deleteByIds(int[] ids);
}
