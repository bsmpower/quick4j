package com.eliteams.quick4j.test.service;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.model.rainsewage;
import com.eliteams.quick4j.web.service.RainsewageService;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class RainsewageServiceTest extends TestSupport {
    @Resource
    private RainsewageService rainsewageService;

    @Test
    public void TestrainService(){
        int[] id = {1};
        List<rainsewage> list = new ArrayList<>();
        list =rainsewageService.selectByPrimaryKey(id);
        System.out.println(list.size());
    }
}
