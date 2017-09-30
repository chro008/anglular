package com.lbsky.angular_demo.bean;

public class ListData {
    private int id;
    private String name;
    private int age;
    private String city;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString(){
        return "id is " + id + "\nname is " + name + "\nage is " + age + "\ncity is "+ city;
    }
}
