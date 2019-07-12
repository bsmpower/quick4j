package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.oil_fieldMapper;
import com.eliteams.quick4j.web.dao.portMapper;
import com.eliteams.quick4j.web.dao.rain_outletMapper;
import com.eliteams.quick4j.web.model.oil_field;
import com.eliteams.quick4j.web.model.port;
import com.eliteams.quick4j.web.model.rain_outlet;
import org.junit.Test;

import javax.annotation.Resource;

public class RainoutletTest extends TestSupport {
    @Resource
    private rain_outletMapper rainOutletMapper;

    @Resource
    private oil_fieldMapper oilFieldMapper;

    @Resource
    private portMapper portmapper;

    @Test
    public void rainoutlettest(){
        rain_outlet  ro = new rain_outlet();
        ro.setAddress("沈阳");
        int flag = rainOutletMapper.insertSelective(ro);
        System.out.println(flag);
    }

    @Test
    public void oiltest(){
        oil_field of = new oil_field();
        of.setCity("沈阳");
        int flag = oilFieldMapper.insertSelective(of);
        System.out.println(flag);
    }

    @Test
    public void testport(){
        port of = new port();
        of.setCity("沈阳");
        int flag = portmapper.insertSelective(of);
        System.out.println(flag);
    }
}
