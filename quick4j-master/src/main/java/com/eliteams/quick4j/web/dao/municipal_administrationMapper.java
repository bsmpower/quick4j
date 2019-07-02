package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.municipal_administration;

public interface municipal_administrationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(municipal_administration record);

    int insertSelective(municipal_administration record);

    municipal_administration selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(municipal_administration record);

    int updateByPrimaryKey(municipal_administration record);
}