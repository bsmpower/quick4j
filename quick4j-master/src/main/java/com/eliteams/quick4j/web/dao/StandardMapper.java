package com.eliteams.quick4j.web.dao;

import java.util.List;

import com.eliteams.quick4j.web.model.Standard;

public interface StandardMapper{
    List<Standard> list();
    Standard select(Standard standard);
    void update(Standard standard);
}

