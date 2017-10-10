package com.lbsky.angular_demo.dao;

import com.lbsky.angular_demo.bean.ListData;
import com.lbsky.angular_demo.util.DBUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ListDao {

    public List<ListData> getAllStudents(String pageLimit) {
        List<ListData> lists = new ArrayList<>();
        String sql = "select id,name,age,city from list " + pageLimit;

        try (
                Connection conn = DBUtil.getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql);
                ResultSet rs = pstmt.executeQuery()
        ) {
            ListData item;
            while (rs.next()) {
                item = new ListData();
                item.setId(rs.getInt(1));
                item.setName(rs.getString(2));
                item.setAge(rs.getInt(3));
                item.setCity(rs.getString(4));
                lists.add(item);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lists;
    }

    public int getTotalNum() {
        String sql = "select count(id) from list ";

        try (
                Connection conn = DBUtil.getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql);
                ResultSet rs = pstmt.executeQuery()
        ) {
            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    public void deleteById(int id) {
        String sql = "delete from list where id=? ";

        try (
                Connection conn = DBUtil.getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)
        ) {
            pstmt.setInt(1, id);
            pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     *
     *
     *
     */

}
