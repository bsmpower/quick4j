package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.Industry_trash;

public interface Industry_trashMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry_trash record);

    int insertSelective(Industry_trash record);

    Industry_trash selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_trash record);

    int updateByPrimaryKey(Industry_trash record);
}
