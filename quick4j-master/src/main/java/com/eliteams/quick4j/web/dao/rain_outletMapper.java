package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.rain_outlet;

import java.util.List;

public interface rain_outletMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(rain_outlet record);

    int insertSelective(rain_outlet record);

    rain_outlet selectByPrimaryKey(Integer id);

    List<rain_outlet> selectRainoutlet(rain_outlet rot);

    int updateByPrimaryKeySelective(rain_outlet record);

    int updateByPrimaryKey(rain_outlet record);
}