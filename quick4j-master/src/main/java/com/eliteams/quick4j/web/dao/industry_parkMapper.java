package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.industry_park;

public interface industry_parkMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(industry_park record);

    int insertSelective(industry_park record);

    industry_park selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(industry_park record);

    int updateByPrimaryKey(industry_park record);
}