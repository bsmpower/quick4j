package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Sectionemis;

import java.util.List;

public interface SectionemisService{
    List<Sectionemis> select(Sectionemis sectionemis);
    List<Sectionemis> list();
    Sectionemis get(int id);
    void add(Sectionemis sectionemis);
    void delete(int id);
    void update(Sectionemis sectionemis);
}