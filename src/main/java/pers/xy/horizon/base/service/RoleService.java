package pers.xy.horizon.base.service;

import pers.xy.horizon.base.entity.Role;
/**
 * @Description
 * @Date 2019/5/8
 * @Created by xiayun
 */
public interface RoleService {


    Role selectById(Long id);

    Role selectByCode(String code);

    int insert(Role role);

    int update(Role role);


}
