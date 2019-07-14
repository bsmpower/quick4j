package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.section_message;

import java.util.List;

public interface SectionMessageService {
    /**
     * 断面信息
     * @param ot
     * @return
     */
    List<section_message> selectSection(section_message ot);

    int deleteByids(int[] ids);

    List<section_message> selectByPrimaryKey(int[] id);

    List<section_message> selectBypage(String pageNow, section_message ots);

    int insertall(List<section_message> ot);
}
