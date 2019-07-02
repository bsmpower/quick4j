package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.farm;

public interface farmMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(farm record);

    int insertSelective(farm record);

    farm selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(farm record);

    int updateByPrimaryKey(farm record);
}