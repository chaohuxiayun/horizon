package pers.xy.horizon.base.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pers.xy.horizon.base.service.PermissionService;
import pers.xy.horizon.base.dao.PermissionMapper;
import pers.xy.horizon.base.dto.PermissionDto;
import pers.xy.horizon.base.dto.UserRoleDto;
import pers.xy.horizon.base.service.UserRoleService;


import java.util.ArrayList;
import java.util.List;

/**
 * @Description
 * @Date 2019/6/12
 * @Created by xiayun
 */
@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionMapper permissionMapper;

    @Autowired
    private UserRoleService userRoleService;

    @Override
    public List<PermissionDto> findByUserId(Long userId) {
        List<UserRoleDto> urs = userRoleService.findListByUserId(userId);
        List<Long> list = new ArrayList<>();
        urs.forEach(ur->list.add(ur.getRole().getId()));
        return permissionMapper.findByRoleIds(list);
    }
}
