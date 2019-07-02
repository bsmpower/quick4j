package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.industry_life;

public interface industry_lifeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(industry_life record);

    int insertSelective(industry_life record);

    industry_life selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(industry_life record);

    int updateByPrimaryKey(industry_life record);
}