package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.aquaculture;

public interface aquacultureMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(aquaculture record);

    int insertSelective(aquaculture record);

    aquaculture selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(aquaculture record);

    int updateByPrimaryKey(aquaculture record);
}