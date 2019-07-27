package com.eliteams.quick4j.test.dao;

import com.eliteams.quick4j.core.feature.test.TestSupport;
import com.eliteams.quick4j.web.dao.UserMapper;
import com.eliteams.quick4j.web.model.User;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

public class UserTest extends TestSupport {
    @Resource
    private UserMapper userMapper;

    @Test
    public void userTest(){
        User user = new User();
        List<User> list = userMapper.selectalluser(user);
        System.out.println(list.size());
    }
}
