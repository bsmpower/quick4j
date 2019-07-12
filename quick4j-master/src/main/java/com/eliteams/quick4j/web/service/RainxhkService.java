package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.rain_spillway;
import com.eliteams.quick4j.web.model.rainsewage;

import java.util.List;

public interface RainxhkService {
    /**
     * 查詢雨水泄洪口的信息
     * @param rs
     * @return
     */
    List<rain_spillway> selectRainxhk(rain_spillway rs);

    int deleteByids(int[] ids);

    List<rain_spillway> selectByPrimaryKey(int[] id);

    List<rain_spillway> selectBypage(String pageNow, rain_spillway rss);

    int insertall(List<rain_spillway> rss);
}
