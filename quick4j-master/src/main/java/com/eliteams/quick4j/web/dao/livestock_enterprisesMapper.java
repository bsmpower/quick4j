package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.livestock_enterprises;

public interface livestock_enterprisesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(livestock_enterprises record);

    int insertSelective(livestock_enterprises record);

    livestock_enterprises selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(livestock_enterprises record);

    int updateByPrimaryKey(livestock_enterprises record);
}