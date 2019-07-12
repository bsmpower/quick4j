package com.eliteams.quick4j.web.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import com.eliteams.quick4j.web.model.Emission;

public interface EmissionMapper{
//    List<Emission> selectEmission(@Param("e") Emission emission, @Param("startdate")String startdate,@Param("enddate")String enddate);
    List<Emission> selectEmission(@Param("e") Emission emission);
    List<Emission> listEmission();
    Emission get(int id);
    void addEmission(Emission emission);
    void deleteEmission(int id);
    void updateEmission(Emission emission);
}

