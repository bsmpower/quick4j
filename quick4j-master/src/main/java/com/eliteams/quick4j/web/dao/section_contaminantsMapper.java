package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.section_contaminants;

public interface section_contaminantsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(section_contaminants record);

    int insertSelective(section_contaminants record);

    section_contaminants selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(section_contaminants record);

    int updateByPrimaryKey(section_contaminants record);
}