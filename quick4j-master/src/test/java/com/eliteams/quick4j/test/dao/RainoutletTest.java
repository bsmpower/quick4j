package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.rain_outletMapper;
import com.eliteams.quick4j.web.model.rain_outlet;
import org.junit.Test;

import javax.annotation.Resource;

public class RainoutletTest extends TestSupport {
    @Resource
    private rain_outletMapper rainOutletMapper;

    @Test
    public void rainoutlettest(){
        rain_outlet  ro = new rain_outlet();
        ro.setAddress("沈阳");
        int flag = rainOutletMapper.insertSelective(ro);
        System.out.println(flag);
    }
}
