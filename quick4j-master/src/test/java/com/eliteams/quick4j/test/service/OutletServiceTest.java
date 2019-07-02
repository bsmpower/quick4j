package com.eliteams.quick4j.test.service;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.model.outlet;
import com.eliteams.quick4j.web.service.OutletService;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class OutletServiceTest extends TestSupport{
    @Resource
    private OutletService outletService;

    @Test
    public void testOutletService(){
        List<outlet> list = new ArrayList<>();
        outlet ot = new outlet();
        list = outletService.selectPwk(ot);
        System.out.println(list.size());

    }
}
