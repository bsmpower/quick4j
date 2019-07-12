package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.port;

import java.util.List;

public interface PortService {
    /**
     * 油田信息
     * @param rot
     * @return
     */
    List<port> selectPort(port rot);

    int deleteByids(int[] ids);

    List<port> selectByPrimaryKey(int[] id);

    List<port> selectBypage(String pageNow, port ots);

    int insertall(List<port> ot);
}
