package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.port;

public interface portMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(port record);

    int insertSelective(port record);

    port selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(port record);

    int updateByPrimaryKey(port record);
}