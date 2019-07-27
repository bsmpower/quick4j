package com.eliteams.quick4j.web.service.impl;

import com.eliteams.quick4j.web.dao.ProductMapper;
import com.eliteams.quick4j.web.model.Product;
import com.eliteams.quick4j.web.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    public List<Product> select(Product product){
        return productMapper.select(product);
    }

    public List<Product> list(){
        return productMapper.list();
    }

    public Product get(int id){
        return productMapper.get(id);
    }

    public void add(Product product){
        productMapper.add(product);
    }

    public void delete(int id){
        productMapper.delete(id);
    }

    public void update(Product product){
        productMapper.update(product);
    }
}
