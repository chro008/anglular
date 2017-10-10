# anglular
首先安装node，然后用npm安装angular-cli 命令如下：<br>
npm install -g @angular/cli

通过ng v查看安装情况<br>
在我本机展示如下：<br>
@angular/cli: 1.4.3<br>
node: 8.1.2<br>
os: win32 x64<br>

###创建一个新的项目<br>
ng new demo<br>
注意：我本地出现错误<br>
14523 verbose stack Error: sha1-GDr4HxQRhrjWYLBkKVktQLdUCko= integrity checksum failed when using sha1: wanted sha1-GDr4HxQRhrjWYLBkKVktQLdUCko= but got sha1-DsRkH3XwB6z4mCVfq8YE9VNf5sY=. (47738 bytes)<br>
网上查询不到相关信息，我将npm的registry更改成taobao的就不再出现错误（扩展了解nrm，可以切换源---[相关博文介绍](https://my.oschina.net/u/1417838/blog)）

###启动服务
ng serve
打开http://localhost:4200/
可以看到效果


##创建spring-boot项目
 ###angular_demo；
目的是测试angular的增删改查<br>

建表、批量插入测试数据sql如下<br><br>
drop table if exists list;<br>
create table list(<br>
id int(3) not null auto_increment,<br>
name varchar(20) not null,<br>
age int(3) not null,<br>
city varchar(20) not null,<br>
primary key(id)<br>
);<br><br>

drop PROCEDURE inserts; <br>
truncate table list;<br>
delimiter //<br><br>

 create procedure inserts(n int)<br>
 begin<br>
		    declare i int default(1);<br>
   declare name_ varchar(20);<br>
   declare age_ int;<br>
	 declare city_ varchar(20);<br>
   while i<n do<br>
		set name_=concat("name",i);<br>
		set age_ = ROUND(rand()*10);<br>
		set city_ = concat("city",i);<br>
   insert into list (id,name,age,city) values(null,name_,age_,city_);<br>
	 set i=i+1;<br>
   end while;<br>
 end //<br>

call inserts(100);<br>
select id,name,age,city from list;<br>



