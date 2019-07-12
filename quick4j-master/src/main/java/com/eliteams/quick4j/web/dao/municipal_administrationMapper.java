package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Municipal_administration;

import java.util.List;

public interface Municipal_administrationMapper extends GenericDao<Municipal_administration,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Municipal_administration record);

    int insertSelective(Municipal_administration record);

    Municipal_administration selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Municipal_administration record);

    int updateByPrimaryKey(Municipal_administration record);

    List<Municipal_administration> list();

    List<Municipal_administration> listAll(Municipal_administration record);
}