package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.user_role;

public interface user_roleMapper {
    int deleteByPrimaryKey(Long id);

    int insert(user_role record);

    int insertSelective(user_role record);

    user_role selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(user_role record);

    int updateByPrimaryKey(user_role record);
}