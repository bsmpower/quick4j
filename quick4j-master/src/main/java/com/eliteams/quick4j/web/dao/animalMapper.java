package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.animal;

public interface animalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(animal record);

    int insertSelective(animal record);

    animal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(animal record);

    int updateByPrimaryKey(animal record);
}