package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Industry_trash;

import java.util.List;

public interface Industry_trashMapper extends GenericDao<Industry_trash,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry_trash record);

    int insertSelective(Industry_trash record);

    Industry_trash selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_trash record);

    int updateByPrimaryKey(Industry_trash record);

    List<Industry_trash> list();

    List<Industry_trash> searchAllIndurTrash(Industry_trash record);

    List<Industry_trash> searchExit(Industry_trash record);
}
