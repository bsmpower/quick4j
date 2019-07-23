package com.eliteams.quick4j.web.dao;

import com.eliteams.quick4j.web.model.outlet;

import java.util.List;

public interface outletMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(outlet record);

    int insertSelective(outlet record);

    outlet selectByPrimaryKey(Integer id);

    List<outlet> selectPwk(outlet outlet);

//    List<outlet>
    int updateByPrimaryKeySelective(outlet record);

    int updateByPrimaryKey(outlet record);

}