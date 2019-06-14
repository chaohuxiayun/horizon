package pers.xy.horizon.base.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.xy.horizon.base.dao.UserMapper;
import pers.xy.horizon.base.entity.User;
import pers.xy.horizon.base.entity.UserExample;
import pers.xy.horizon.base.service.UserService;
import pers.xy.horizon.base.util.ListUtils;


/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public User findByLoginName(String loginName) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andLoginNameEqualTo(loginName);
        return (User) ListUtils.getList0(userMapper.selectByExample(example));
    }

    @Override
    public User findById(Long id) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andIdEqualTo(id);
        return (User) ListUtils.getList0(userMapper.selectByExample(example));
    }

    @Override
    public int insert(User user){
        return userMapper.insert(user);
    }

    @Override
    public int update(User user){
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andIdEqualTo(user.getId());
        return userMapper.updateByExampleSelective(user,example);
    }

}
