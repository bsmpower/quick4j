package com.eliteams.quick4j.web.dao;

import java.util.List;
import com.eliteams.quick4j.web.model.Product;

public interface ProductMapper{
    List<Product> select(Product product);
    List<Product> list();
    Product get(int id);
    void add(Product product);
    void delete(int id);
    void update(Product product);
}
