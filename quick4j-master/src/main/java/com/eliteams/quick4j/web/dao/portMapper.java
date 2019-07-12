package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.oil_field;
import com.eliteams.quick4j.web.model.port;

import java.util.List;

public interface portMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(port record);

    int insertSelective(port record);

    List<port> selectport(port rot);

    port selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(port record);

    int updateByPrimaryKey(port record);
}