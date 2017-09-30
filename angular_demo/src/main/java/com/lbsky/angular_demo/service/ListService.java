package com.lbsky.angular_demo.service;

import com.lbsky.angular_demo.bean.ListData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ListService {

    public List<ListData> get(){
        List<ListData> list = new ArrayList<>();
        ListData item;
        for (int i = 0; i < 10; i++) {
            item = new ListData();
            item.setId(i);
            item.setName("name" + i);
            item.setAge(20 + i);
            item.setCity("city" + i);
            list.add(item);
        }
        return list;
    }

}
