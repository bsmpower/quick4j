package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.portMapper;
import com.eliteams.quick4j.web.model.oil_field;
import com.eliteams.quick4j.web.model.port;
import com.eliteams.quick4j.web.service.PortService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class PortServiceImpl implements PortService {

    @Resource
    private portMapper portmapper;

    @Override
    public List<port> selectPort(port rot) {
        List<port> list = new ArrayList<>();
        list =portmapper.selectport(rot);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = portmapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<port> selectByPrimaryKey(int[] ids) {
        List<port> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(portmapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<port> selectBypage(String pageNow, port ots) {
        return null;
    }

    @Override
    public int insertall(List<port> ot) {
        int length = ot.size();
        for(port rs : ot){
            portmapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
