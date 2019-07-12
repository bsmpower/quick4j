package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Emission;
import java.util.List;

public interface EmissionService{
    List<Emission> selectEmission(Emission emission);
    List<Emission> listEmission();
    Emission get(int id);
    void addEmission(Emission emission);
    void deleteEmission(int id);
    void updateEmission(Emission emission);
}