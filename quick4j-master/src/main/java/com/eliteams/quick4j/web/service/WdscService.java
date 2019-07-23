package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Wdsc;
import java.util.List;

public interface WdscService{
    List<Wdsc> select(String str);
    List<Wdsc> list();
    Wdsc get(int id);
    Wdsc selectbyname(String name);
    void add(Wdsc wdsc);
    void delete(int id);
}