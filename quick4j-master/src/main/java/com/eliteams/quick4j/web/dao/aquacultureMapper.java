package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Aquaculture;

import java.util.List;

public interface AquacultureMapper extends GenericDao<Aquaculture,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Aquaculture record);

    int insertSelective(Aquaculture record);

    Aquaculture selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Aquaculture record);

    int updateByPrimaryKey(Aquaculture record);

    List<Aquaculture> list();

    List<Aquaculture> searchAllAqua(Aquaculture aquaculture);

    List<Aquaculture> searchExit(Aquaculture record);
}