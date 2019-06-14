package pers.xy.horizon.base.shiro;

import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import pers.xy.horizon.base.dto.PermissionDto;
import pers.xy.horizon.base.dto.UserRoleDto;
import pers.xy.horizon.base.entity.User;
import pers.xy.horizon.base.service.PermissionService;
import pers.xy.horizon.base.service.UserRoleService;
import pers.xy.horizon.base.service.UserService;

import javax.inject.Inject;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @Description
 * @Date 2019/5/7
 * @Created by xiayun
 */
public class BasicRealm extends AuthorizingRealm {
    @Inject
    private UserService userService;

    @Autowired
    private UserRoleService userRoleService;

    @Autowired
    private PermissionService permissionService;

    /**
     * 权限认证
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        //获取登录时输入的用户名
        try {
            String loginName = (String) principalCollection.fromRealm(getName()).iterator().next();
            //到数据库查是否有此对象
            User user = userService.findByLoginName(loginName);
            if (user != null) {
                //权限信息对象info,用来存放查出的用户的所有的角色（role）及权限（permission）
                SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
                //用户的角色集合
                Set<String> set = new HashSet<>();
                List<UserRoleDto> list = userRoleService.findListByUserId(user.getId());
                list.forEach(l -> set.add(l.getRole().getName()));
                info.setRoles(set);

                //用户的角色对应的所有权限，如果只使用角色定义访问权限，下面的四行可以不要
                List<PermissionDto> roleList = permissionService.findByUserId(user.getId());
                Set<String> urlSet = new HashSet<>();
                roleList.forEach(rl -> urlSet.add(rl.getUrl()));
                info.setStringPermissions(urlSet);
                return info;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * 登录认证;
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(
            AuthenticationToken authenticationToken) throws AuthenticationException {
        //UsernamePasswordToken对象用来存放提交的登录信息
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        //查出是否有此用户
        System.out.println(token.getUsername());
        User user = userService.findByLoginName(token.getUsername());

        if (user != null) {
            //若存在，将此用户存放到登录认证info中
            return new SimpleAuthenticationInfo(user.getLoginName(), user.getPassword(), getName());
        }
        return null;
    }
}
