package com.eliteams.quick4j.web.dao;


import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Livestock_enterprises;

import java.util.List;

public interface Livestock_enterprisesMapper extends GenericDao<Livestock_enterprises,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Livestock_enterprises record);

    int insertSelective(Livestock_enterprises record);

    Livestock_enterprises selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Livestock_enterprises record);

    int updateByPrimaryKey(Livestock_enterprises record);

    List<Livestock_enterprises> list();

    List<Livestock_enterprises> searchAllLivestock(Livestock_enterprises record);
}