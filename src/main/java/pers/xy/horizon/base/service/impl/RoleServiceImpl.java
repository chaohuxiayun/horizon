package pers.xy.horizon.base.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.xy.horizon.base.dao.RoleMapper;
import pers.xy.horizon.base.entity.Role;
import pers.xy.horizon.base.entity.RoleExample;
import pers.xy.horizon.base.service.RoleService;
import pers.xy.horizon.base.util.ListUtils;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;

    @Override
    public Role selectById(Long id) {
        RoleExample example = new RoleExample();
        RoleExample.Criteria criteria = example.createCriteria();
        criteria.andIdEqualTo(id);
        return (Role) ListUtils.getList0(roleMapper.selectByExample(example));
    }

    @Override
    public Role selectByCode(String code) {
        RoleExample example = new RoleExample();
        RoleExample.Criteria criteria = example.createCriteria();
        criteria.andCodeEqualTo(code);
        return (Role) ListUtils.getList0(roleMapper.selectByExample(example));
    }

    @Override
    public int insert(Role role) {
        return 0;
    }

    @Override
    public int update(Role role) {
        return 0;
    }
}
