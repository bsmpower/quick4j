package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.rain_spillwayMapper;
import com.eliteams.quick4j.web.model.rain_spillway;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class rainspillwayMapperTest extends TestSupport {
    @Resource
    private rain_spillwayMapper rain_spillwaymapper;

    @Test
    public void testrain(){
        rain_spillway rainSpillway = new rain_spillway();
        rainSpillway.setXhkName("东北大学");
        rainSpillway.setTjyear("2019");
        rainSpillway.setTjmonth("8");
        List<rain_spillway> list = new ArrayList<>();
        list = rain_spillwaymapper.selectRainSpillway(rainSpillway);
        System.out.println(list.size());
    }
}
