package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.rain_spillway;

public interface rain_spillwayMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(rain_spillway record);

    int insertSelective(rain_spillway record);

    rain_spillway selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(rain_spillway record);

    int updateByPrimaryKey(rain_spillway record);
}