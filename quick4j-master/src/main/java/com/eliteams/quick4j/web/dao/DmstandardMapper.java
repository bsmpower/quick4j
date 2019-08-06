package com.eliteams.quick4j.web.dao;

import java.util.List;

import com.eliteams.quick4j.web.model.Dmstandard;

public interface DmstandardMapper{
    List<Dmstandard> list();
    Dmstandard select(Dmstandard dmstandard);
    void update(Dmstandard dmstandard);
}
