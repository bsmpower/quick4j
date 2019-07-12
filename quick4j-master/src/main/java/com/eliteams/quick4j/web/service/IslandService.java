package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.island;

import java.util.List;


public interface IslandService {
    /**
     * 油田信息
     * @param rot
     * @return
     */
    List<island> selectisland(island rot);

    int deleteByids(int[] ids);

    List<island> selectByPrimaryKey(int[] id);

    List<island> selectBypage(String pageNow, island ots);

    int insertall(List<island> ot);
}
