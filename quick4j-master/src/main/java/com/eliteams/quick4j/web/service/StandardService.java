package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Standard;

import java.util.List;

public interface StandardService{
    Standard select(Standard standard);
    List<Standard> list();
    void update(Standard standard);
}