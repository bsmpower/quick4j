package com.eliteams.quick4j.test.service;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.model.rain_outlet;
import com.eliteams.quick4j.web.service.RainoutletService;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

public class RainOutletServiceTest extends TestSupport {
    @Resource
    private RainoutletService rainoutletService;

    @Test
    public void rainserviceTest(){
        rain_outlet rot = new rain_outlet();
        List<rain_outlet> list = rainoutletService.selectRainoutlet(rot);
        System.out.println(list.size());

    }
}
