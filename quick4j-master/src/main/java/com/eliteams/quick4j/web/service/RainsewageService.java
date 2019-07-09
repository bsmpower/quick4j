package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.rain_outlet;
import com.eliteams.quick4j.web.model.rainsewage;

import java.util.List;

public interface RainsewageService {
    /**
     * 查詢雨污混合口的信息
     * @param rs
     * @return
     */
    List<rainsewage> selectRainoutlet(rainsewage rs);

    int deleteByids(int[] ids);

    List<rainsewage> selectByPrimaryKey(int[] id);

    List<rainsewage> selectBypage(String pageNow, rainsewage rss);

    int insertall(List<rainsewage> rss);
}
