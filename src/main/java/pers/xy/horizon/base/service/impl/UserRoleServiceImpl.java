package pers.xy.horizon.base.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.xy.horizon.base.dao.RoleMapper;
import pers.xy.horizon.base.dao.UserMapper;
import pers.xy.horizon.base.dao.UserRoleMapper;
import pers.xy.horizon.base.dto.UserRoleDto;
import pers.xy.horizon.base.entity.UserRole;
import pers.xy.horizon.base.entity.UserRoleExample;
import pers.xy.horizon.base.service.RoleService;
import pers.xy.horizon.base.service.UserRoleService;
import pers.xy.horizon.base.service.UserService;
import pers.xy.horizon.base.util.ListUtils;

import java.util.List;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
@Service
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    private UserRoleMapper userRoleMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RoleMapper roleMapper;


    @Override
    public UserRole selectById(Long id) {
        UserRoleExample userRoleExample = new UserRoleExample();
        UserRoleExample.Criteria criteria = userRoleExample.createCriteria();
        criteria.andIdEqualTo(id);
        return (UserRole) ListUtils.getList0(userRoleMapper.selectByExample(userRoleExample));
    }

    @Override
    public List<UserRoleDto> findListByUserId(Long userId) {
        return userRoleMapper.selectByUserId(userId);
    }
}
