package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.EmissionMapper;
import com.eliteams.quick4j.web.model.Emission;
import com.eliteams.quick4j.web.service.EmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class EmissionServiceImpl implements EmissionService{

    @Autowired
    private EmissionMapper emissionMapper;

    public List<Emission> selectEmission(Emission emission){
        return emissionMapper.selectEmission(emission);
    }

    public List<Emission> listEmission(){
        return emissionMapper.listEmission();
    }

    public Emission get(int id){
        return emissionMapper.get(id);
    }

    public void addEmission(Emission emission){
        emissionMapper.addEmission(emission);
    }

    public void deleteEmission(int id){
        emissionMapper.deleteEmission(id);
    }

    public void updateEmission(Emission emission){
        emissionMapper.updateEmission(emission);
    }
}
