package com.eliteams.quick4j.web.dao;

import java.util.List;
import com.eliteams.quick4j.web.model.Wdsc;

public interface WdscMapper{
    List<Wdsc> select(String str);
    List<Wdsc> list();
    Wdsc selectbyname(String name);
    Wdsc get(int id);
    void add(Wdsc wdsc);
    void delete(int id);
}