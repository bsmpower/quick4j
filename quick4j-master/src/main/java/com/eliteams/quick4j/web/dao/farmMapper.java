package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Farm;

import java.util.List;

public interface FarmMapper extends GenericDao<Farm,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Farm record);

    int insertSelective(Farm record);

    Farm selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Farm record);

    int updateByPrimaryKey(Farm record);

    List<Farm> list();

    List<Farm> searchAllFarm(Farm aquaculture);

    List<Farm> searchExit(Farm record);
}