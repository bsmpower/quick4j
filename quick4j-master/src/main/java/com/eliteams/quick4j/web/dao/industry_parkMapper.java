package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.core.generic.GenericDao;
import com.eliteams.quick4j.web.model.Industry_park;

import java.util.List;

public interface Industry_parkMapper extends GenericDao<Industry_park,Long> {
    int deleteByPrimaryKey(Integer id);

    int insert(Industry_park record);

    int insertSelective(Industry_park record);

    Industry_park selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Industry_park record);

    int updateByPrimaryKey(Industry_park record);

    List<Industry_park> list();

    List<Industry_park> searchAllIndustryPark(Industry_park record);
}