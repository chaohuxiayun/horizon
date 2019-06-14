package pers.xy.horizon.base.service;

import pers.xy.horizon.base.dto.PermissionDto;

import java.util.List;

/**
 * @Description
 * @Date 2019/6/12
 * @Created by xiayun
 */
public interface PermissionService {

    List<PermissionDto> findByUserId(Long userId);

}
