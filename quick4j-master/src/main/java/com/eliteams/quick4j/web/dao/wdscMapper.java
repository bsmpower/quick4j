package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.wdsc;

public interface wdscMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(wdsc record);

    int insertSelective(wdsc record);

    wdsc selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(wdsc record);

    int updateByPrimaryKey(wdsc record);
}