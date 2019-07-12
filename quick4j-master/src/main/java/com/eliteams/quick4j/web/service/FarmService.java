package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Farm;

import java.util.List;

public interface FarmService extends GenericService<Farm,Long>{
    int deleteByPrimaryKey(Integer id);

    int insert(Farm record);

    int insertSelective(Farm record);

    Farm selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Farm record);

    int updateByPrimaryKey(Farm record);

    List<Farm> list();

    List<Farm> searchAllFarm(Farm aquaculture);

    int deleteByIds(int[] ids);
}
