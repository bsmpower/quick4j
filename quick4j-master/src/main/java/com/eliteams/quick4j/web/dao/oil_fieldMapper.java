package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.oil_field;

public interface oil_fieldMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(oil_field record);

    int insertSelective(oil_field record);

    oil_field selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(oil_field record);

    int updateByPrimaryKey(oil_field record);
}