package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.oil_field;
import com.eliteams.quick4j.web.model.rain_outlet;


import java.util.List;

public interface oil_fieldMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(oil_field record);

    int insertSelective(oil_field record);

    List<oil_field> selectoilfield(oil_field rot);

    oil_field selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(oil_field record);

    int updateByPrimaryKey(oil_field record);
}