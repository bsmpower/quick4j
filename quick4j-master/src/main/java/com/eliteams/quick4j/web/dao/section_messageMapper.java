package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.island;
import com.eliteams.quick4j.web.model.section_message;

import java.util.List;

public interface section_messageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(section_message record);

    int insertSelective(section_message record);

    section_message selectByPrimaryKey(Integer id);

    List<section_message> selectsection(section_message rot);

    int updateByPrimaryKeySelective(section_message record);

    int updateByPrimaryKey(section_message record);
}