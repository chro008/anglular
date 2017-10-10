package com.lbsky.angular_demo.service;

import com.alibaba.fastjson.JSONObject;
import com.lbsky.angular_demo.bean.ListData;
import com.lbsky.angular_demo.dao.ListDao;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListService {

    public JSONObject getWithTotal(int page) {
        JSONObject object = new JSONObject();
        object.put("total", getTotalCount());
        object.put("list", get(page));
        return object;
    }

    private List<ListData> get(int page) {
        String pageLimit = " limit " + (page - 1) * 10 + ",10 ";
        return new ListDao().getAllStudents(pageLimit);
    }

    private int getTotalCount() {
        return new ListDao().getTotalNum();
    }

    public void delete(int id) {
        new ListDao().deleteById(id);
    }

}
