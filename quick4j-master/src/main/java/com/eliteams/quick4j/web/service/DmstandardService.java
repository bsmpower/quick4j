package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Dmstandard;

import java.util.List;

public interface DmstandardService{
    Dmstandard select(Dmstandard dmstandard);
    List<Dmstandard> list();
    void update(Dmstandard dmstandard);
}