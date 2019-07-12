package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.rainsewageMapper;
import com.eliteams.quick4j.web.model.rainsewage;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class rainsewageTest extends TestSupport {
    @Resource
    private rainsewageMapper rainsewagemapper;

    @Test
    public void testRainsewage(){
        rainsewage rs = new rainsewage();
        rs.setAddress("123456");
        List<rainsewage> list = new ArrayList<>();
        list = rainsewagemapper.selectRainsewage(rs);
        System.out.println(list.size());
    }
}
