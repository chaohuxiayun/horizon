package pers.xy.horizon.base.service.impl;

import org.springframework.stereotype.Service;
import pers.xy.horizon.base.entity.RolePermission;
import pers.xy.horizon.base.service.RolePermissionService;

import java.util.List;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
@Service
public class RolePermissionServiceImpl implements RolePermissionService {
    @Override
    public List<RolePermission> findByRoleId(Long roleId) {
        return null;
    }
}
