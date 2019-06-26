package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.Industry_trashMapper;
import com.eliteams.quick4j.web.model.Industry_trash;
import org.junit.Test;

import javax.annotation.Resource;

public class Insustry_trashMapperTest extends TestSupport {
    @Resource
    private Industry_trashMapper industry_trashMapper;

    @Test
    public void testIndustry(){
        int id = 1;
        Industry_trash industry_trash = industry_trashMapper.selectByPrimaryKey(id);
        System.out.println(industry_trash);
        System.out.println(industry_trash.getAddress());
    }
}
