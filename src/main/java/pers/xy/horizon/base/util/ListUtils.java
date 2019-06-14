package pers.xy.horizon.base.util;

import pers.xy.horizon.base.entity.User;

import java.util.ArrayList;
import java.util.List;

/**
 * @Description
 * @Date 2019/6/8
 * @Created by xiayun
 */
public class ListUtils {


    public static Object getList0(List list){
        if(list != null && list.size() > 0) {
            return list.get(0);
        }
        return null;
    }

    public static void main(String[] args) {

        List list = new ArrayList();
        list.add(null);
        User user = (User) ListUtils.getList0(list);
        System.out.println(user);

    }


}
