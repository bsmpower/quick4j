package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.model.rain_outlet;

import java.util.List;

public interface RainoutletService {
    /**
     * 查詢排污口信息
     * @param rot
     * @return
     */
    List<rain_outlet> selectRainoutlet(rain_outlet rot);

    int deleteByids(int[] ids);

    List<rain_outlet> selectByPrimaryKey(int[] id);

    List<rain_outlet> selectBypage(String pageNow, rain_outlet ots);

    int insertall(List<rain_outlet> ot);
}
