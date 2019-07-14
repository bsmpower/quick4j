package com.eliteams.quick4j.web.service;

import com.eliteams.quick4j.web.model.Product;
import java.util.List;

public interface ProductService{
    List<Product> select(Product product);
    List<Product> list();
    Product get(int id);
    void add(Product product);
    void delete(int id);
    void update(Product product);
}