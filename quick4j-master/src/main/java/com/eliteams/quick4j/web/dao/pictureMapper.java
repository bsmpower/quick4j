package com.eliteams.quick4j.web.dao;


import com.eliteams.quick4j.web.model.picture;

import java.util.List;

public interface pictureMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(picture record);

    int insertSelective(picture record);

    picture selectByPrimaryKey(Integer id);

    List<picture> selectpicture(picture rot);

    int updateByPrimaryKeySelective(picture record);

    int updateByPrimaryKey(picture record);
}