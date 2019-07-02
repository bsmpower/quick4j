package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.product;

public interface productMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(product record);

    int insertSelective(product record);

    product selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(product record);

    int updateByPrimaryKey(product record);
}