package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Municipal_administration;

import java.util.List;

public interface MunicipalService extends GenericService<Municipal_administration,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Municipal_administration record);

    int insertSelective(Municipal_administration record);

    Municipal_administration selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Municipal_administration record);

    int updateByPrimaryKey(Municipal_administration record);

    List<Municipal_administration> list();

    List<Municipal_administration> listAll(Municipal_administration record);

    int deleteByIds(int[] ids);

    List<Municipal_administration> searchExit(Municipal_administration record);
}
