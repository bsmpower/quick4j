package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.oil_field;

import java.util.List;

public interface OilfieldService {
    /**
     * 油田信息
     * @param rot
     * @return
     */
    List<oil_field> selectOilfield(oil_field rot);

    int deleteByids(int[] ids);

    List<oil_field> selectByPrimaryKey(int[] id);

    List<oil_field> selectBypage(String pageNow, oil_field ots);

    int insertall(List<oil_field> ot);
}
