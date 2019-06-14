package pers.xy.horizon.base.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import pers.xy.horizon.base.entity.RolePermission;
import pers.xy.horizon.base.entity.RolePermissionExample;

public interface RolePermissionMapper {
    long countByExample(RolePermissionExample example);

    int deleteByExample(RolePermissionExample example);

    int insert(RolePermission record);

    int insertSelective(RolePermission record);

    List<RolePermission> selectByExample(RolePermissionExample example);

    int updateByExampleSelective(@Param("record") RolePermission record, @Param("example") RolePermissionExample example);

    int updateByExample(@Param("record") RolePermission record, @Param("example") RolePermissionExample example);
}