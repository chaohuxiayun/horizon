package pers.xy.horizon.base.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pers.xy.horizon.base.entity.User;
import pers.xy.horizon.base.service.UserService;


import javax.servlet.http.HttpSession;


/**
 * @Description
 * @Date 2019/6/11
 * @Created by xiayun
 */
@Controller
@RequestMapping(value="/login")
public class LoginController {

    @Autowired
    private UserService userService;


    /**
     * 跳转首页
     *
     * @return
     */
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String toIndex(HttpSession session) {
        return "/index";
    }



    @RequestMapping(value="/login",method= RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody User user, RedirectAttributes redirectAttributes){
        try {
            UsernamePasswordToken token= new UsernamePasswordToken(user.getLoginName(),user.getPassword());
            SecurityUtils.getSubject().login(token);
            //使用权限工具进行用户登录，登录成功后跳到shiro配置的successUrl中，与下面的return没什么关系！
            return "S";
        } catch (AuthenticationException e) {
            redirectAttributes.addFlashAttribute("message","用户名或密码错误");
            return "F";
        }
    }


    @RequiresPermissions("login/login")
    @RequestMapping(value="/test",method= RequestMethod.GET)
    public String test(){
        System.out.println(1123);
        return "123";
    }

}
