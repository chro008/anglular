package com.lbsky.angular_demo.service;

import com.lbsky.angular_demo.bean.ListData;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ListService {

    public List<ListData> get(int page){
        List<ListData> list = new ArrayList<>();
        ListData item;
        int start = page * 10 + 1;
        int end = start + 10;
        for (int i = start; i < end; i++) {
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
