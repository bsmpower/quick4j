package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.role_permission;

public interface role_permissionMapper {
    int deleteByPrimaryKey(Long id);

    int insert(role_permission record);

    int insertSelective(role_permission record);

    role_permission selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(role_permission record);

    int updateByPrimaryKey(role_permission record);
}