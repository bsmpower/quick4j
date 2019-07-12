package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.island;

import java.util.List;

public interface islandMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(island record);

    int insertSelective(island record);

    List<island> selectisland(island rot);

    island selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(island record);

    int updateByPrimaryKey(island record);
}