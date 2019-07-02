package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.section_message;

public interface section_messageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(section_message record);

    int insertSelective(section_message record);

    section_message selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(section_message record);

    int updateByPrimaryKey(section_message record);
}