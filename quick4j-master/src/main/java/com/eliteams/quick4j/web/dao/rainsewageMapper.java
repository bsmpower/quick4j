package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.rainsewage;

public interface rainsewageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(rainsewage record);

    int insertSelective(rainsewage record);

    rainsewage selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(rainsewage record);

    int updateByPrimaryKey(rainsewage record);
}