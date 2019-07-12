package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.rain_spillway;
import com.eliteams.quick4j.web.model.rainsewage;

import java.util.List;

public interface rain_spillwayMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(rain_spillway record);

    int insertSelective(rain_spillway record);

    rain_spillway selectByPrimaryKey(Integer id);

    List<rain_spillway> selectRainSpillway(rain_spillway rot);

    int updateByPrimaryKeySelective(rain_spillway record);

    int updateByPrimaryKey(rain_spillway record);
}