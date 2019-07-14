package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.section_messageMapper;
import com.eliteams.quick4j.web.model.section_message;
import com.eliteams.quick4j.web.service.SectionMessageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class SectionMessageServiceImpl implements SectionMessageService {
    @Resource
    private section_messageMapper sectionMessageMapper;

    @Override
    public List<section_message> selectSection(section_message ot) {
        List<section_message> list = new ArrayList<>();
        list = sectionMessageMapper.selectsection(ot);
        return list;
    }

    @Override
    public int deleteByids(int[] ids) {
        for(int i = 0; i < ids.length; i++){
            int flag = sectionMessageMapper.deleteByPrimaryKey(ids[i]);
            if(flag == 0){
                return 0;
            }
        }
        return 0;
    }

    @Override
    public List<section_message> selectByPrimaryKey(int[] ids) {
        List<section_message> rots = new ArrayList<>();
        for(int i = 0; i < ids.length; i++)
            rots.add(sectionMessageMapper.selectByPrimaryKey(ids[i]));
        return rots;
    }

    @Override
    public List<section_message> selectBypage(String pageNow, section_message ots) {
        return null;
    }

    @Override
    public int insertall(List<section_message> ot) {
        int length = ot.size();
        for(section_message rs : ot){
            sectionMessageMapper.insertSelective(rs);
            length--;
        }
        if(length == 0){
            return 1;
        }else{
            return 0;
        }
    }
}
