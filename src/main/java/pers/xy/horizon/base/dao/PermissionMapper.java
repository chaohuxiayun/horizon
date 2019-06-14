package pers.xy.horizon.base.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pers.xy.horizon.base.dto.PermissionDto;
import pers.xy.horizon.base.entity.Permission;
import pers.xy.horizon.base.entity.PermissionExample;

public interface PermissionMapper {
    long countByExample(PermissionExample example);

    int deleteByExample(PermissionExample example);

    int insert(Permission record);

    int insertSelective(Permission record);

    List<Permission> selectByExample(PermissionExample example);

    int updateByExampleSelective(@Param("record") Permission record, @Param("example") PermissionExample example);

    int updateByExample(@Param("record") Permission record, @Param("example") PermissionExample example);

    List<PermissionDto> findByUserId(Long userId);

    List<PermissionDto> findByRoleIds(List roleIds);


}