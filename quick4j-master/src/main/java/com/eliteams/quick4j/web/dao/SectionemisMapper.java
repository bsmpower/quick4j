package com.eliteams.quick4j.web.dao;

import java.util.List;

import com.eliteams.quick4j.web.model.Sectionemis;
import org.apache.ibatis.annotations.Param;

public interface SectionemisMapper{
    List<Sectionemis> selectSectionemis(@Param("e") Sectionemis sectionemis);
    List<Sectionemis> listSectionemis();
    Sectionemis get(int id);
    void addSectionemis(Sectionemis sectionemis);
    void deleteSectionemis(int id);
    void updateSectionemis(Sectionemis sectionemis);
}
