package pers.xy.horizon.base.service;


import pers.xy.horizon.base.entity.RolePermission;

import java.util.List;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
public interface RolePermissionService {


    List<RolePermission> findByRoleId(Long roleId);

}
