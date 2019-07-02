package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.outletMapper;
import com.eliteams.quick4j.web.model.outlet;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

public class OutletMapperTest extends TestSupport {
    @Resource
    private outletMapper outletMapperTest;

    @Test
    public void outletMapperTest(){
        outlet ot = new outlet();
//        outlet ottestid = outletMapperTest.selectByPrimaryKey(1);
//        System.out.println(ottestid.getCity());
        String ss = "2512422280";
        ot.setPwkCode(ss);
//        ot.setId(1);
//        List<outlet> list = outletMapperTest.selectPwk(ot);
//        System.out.println(list);
//        System.out.println(list.size());
        int flag = outletMapperTest.insert(ot);
        System.out.println(flag);
    }

}
