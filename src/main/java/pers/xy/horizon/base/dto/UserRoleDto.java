package pers.xy.horizon.base.dto;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
public class UserRoleDto {

    private Long id;
    private UserDto user;
    private RoleDto role;

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public RoleDto getRole() {
        return role;
    }

    public void setRole(RoleDto role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
