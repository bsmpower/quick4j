package com.eliteams.quick4j.web.service;


import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Aquaculture;

import java.util.List;

public interface AquacultureService extends GenericService<Aquaculture,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Aquaculture record);

    int insertSelective(Aquaculture record);

    Aquaculture selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Aquaculture record);

    int updateByPrimaryKey(Aquaculture record);

    List<Aquaculture> list();

    List<Aquaculture> searchAllAqua(Aquaculture aquaculture);

    int deleteByIds(int[] ids);
}
