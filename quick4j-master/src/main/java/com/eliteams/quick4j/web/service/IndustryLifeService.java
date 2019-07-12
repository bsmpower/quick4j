package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Industry_life;

import java.util.List;

public interface IndustryLifeService extends GenericService<Industry_life,Long>{

    int deleteByPrimaryKey(Integer id);

    int insert(Industry_life record);

    int insertSelective(Industry_life record);

    Industry_life selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_life record);

    int updateByPrimaryKey(Industry_life record);

    List<Industry_life> list();

    int deleteByIds(int[] ids);

    List<Industry_life> searchAllIndustryLife(Industry_life record);
}
