package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.core.generic.GenericService;
import com.eliteams.quick4j.web.model.outlet;

import java.util.List;


public interface OutletService{
    /**
     * 查詢排污口信息
     * @param ot
     * @return
     */
    List<outlet> selectPwk(outlet ot);

    int deleteByids(int[] ids);

    List<outlet> selectBypage(String pageNow, outlet ot);

}
