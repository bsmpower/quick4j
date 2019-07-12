package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.SectionemisMapper;
import com.eliteams.quick4j.web.model.Sectionemis;
import com.eliteams.quick4j.web.service.SectionemisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SectionemisServiceImpl implements SectionemisService {

    @Autowired
    private SectionemisMapper sectionemisMapper;

    public List<Sectionemis> select(Sectionemis sectionemis) {
        return sectionemisMapper.selectSectionemis(sectionemis);
    }

    public List<Sectionemis> list() {
        return sectionemisMapper.listSectionemis();
    }

    public Sectionemis get(int id) {
        return sectionemisMapper.get(id);
    }

    public void add(Sectionemis sectionemis) {
        sectionemisMapper.addSectionemis(sectionemis);
    }

    public void delete(int id) {
        sectionemisMapper.deleteSectionemis(id);
    }

    public void update(Sectionemis sectionemis) {
        sectionemisMapper.updateSectionemis(sectionemis);
    }
}