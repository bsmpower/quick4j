package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.Industry_park;

import java.util.List;

public interface IndustryParkService extends GenericService<Industry_park,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry_park record);

    List<Industry_park> searchExit(Industry_park record);

    int insertSelective(Industry_park record);

    Industry_park selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_park record);

    int updateByPrimaryKey(Industry_park record);

    List<Industry_park> list();

    List<Industry_park> searchAllIndustryPark(Industry_park record);

    int deleteByIds(int[] ids);
}
