package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.rain_outlet;
import com.eliteams.quick4j.web.model.rainsewage;

import java.util.List;

public interface rainsewageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(rainsewage record);

    int insertSelective(rainsewage record);

    rainsewage selectByPrimaryKey(Integer id);

    List<rainsewage> selectRainsewage(rainsewage rot);

    int updateByPrimaryKeySelective(rainsewage record);

    int updateByPrimaryKey(rainsewage record);
}