package pers.xy.horizon.base.service;


import pers.xy.horizon.base.dto.UserRoleDto;
import pers.xy.horizon.base.entity.UserRole;

import java.util.List;

/**
 * @Description
 * @Date 2019/6/7
 * @Created by xiayun
 */
public interface UserRoleService {

    UserRole selectById(Long id);

    List<UserRoleDto> findListByUserId(Long userId);

}
