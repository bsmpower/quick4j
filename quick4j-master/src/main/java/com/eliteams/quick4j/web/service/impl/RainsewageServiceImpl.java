package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.model.rainsewage;
import com.eliteams.quick4j.web.service.RainoutletService;
import com.eliteams.quick4j.web.service.RainsewageService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RainsewageServiceImpl implements RainsewageService {

    @Override
    public List<rainsewage> selectRainoutlet(rainsewage rs) {
        return null;
    }

    @Override
    public int deleteByids(int[] ids) {
        return 0;
    }

    @Override
    public List<rainsewage> selectByPrimaryKey(int[] id) {
        return null;
    }

    @Override
    public List<rainsewage> selectBypage(String pageNow, rainsewage rss) {
        return null;
    }

    @Override
    public int insertall(List<rainsewage> rss) {
        return 0;
    }
}
