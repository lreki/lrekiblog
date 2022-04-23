"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[470],{4915:(e,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-1cb8f391",path:"/MySQL/%E9%80%BB%E8%BE%91%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html",title:"关于InnoDB的逻辑存储结构",lang:"zh-CN",frontmatter:{date:"2022/4/13 17:21",sticky:!1,description:"关于InnoDB的逻辑存储结构",title:"关于InnoDB的逻辑存储结构",tag:["MySQL"]},excerpt:"",headers:[{level:2,title:"关于InnoDB的逻辑存储结构",slug:"关于innodb的逻辑存储结构",children:[{level:3,title:"表空间",slug:"表空间",children:[]},{level:3,title:"段",slug:"段",children:[]},{level:3,title:"区",slug:"区",children:[]},{level:3,title:"页",slug:"页",children:[]},{level:3,title:"行",slug:"行",children:[]}]}],git:{}}},2443:(e,n,a)=>{a.r(n),a.d(n,{default:()=>h});var l=a(6252);const i=(0,l._)("h2",{id:"关于innodb的逻辑存储结构",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#关于innodb的逻辑存储结构","aria-hidden":"true"},"#"),(0,l.Uk)(" 关于InnoDB的逻辑存储结构")],-1),t=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"InnoDB的逻辑存储结构",originSrc:"https://wx1.sinaimg.cn/mw690/ae168f56gy1h19bfdlf1lj20q10dk0tn.jpg",data:"aurora"})],-1),d=(0,l.uE)('<h3 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间" aria-hidden="true">#</a> 表空间</h3><p>  表空间是InnoDB存储引擎逻辑结构的最高层，如果用户启用了参数 innodb_file_per_table(在8.0版本中默认开启)，则每张表都会有一个表空间（xxx.ibd），一个mysql实例可以对应多个表空间，用于存储记录、索引等数据。</p><h3 id="段" tabindex="-1"><a class="header-anchor" href="#段" aria-hidden="true">#</a> 段</h3><p>  段，分为数据段（Leaf node segment）、索引段（Non-leaf node segment）、回滚段（Rollback segment），InnoDB是索引组织表，数据段就是B+树的叶子节点， 索引段即为B+树的非叶子节点。段用来管理多个Extent（区）。</p><h3 id="区" tabindex="-1"><a class="header-anchor" href="#区" aria-hidden="true">#</a> 区</h3><p>  区，表空间的单元结构，每个区的大小为1M。 默认情况下， InnoDB存储引擎页大小为16K， 即一个区中一共有64个连续的页。</p><h3 id="页" tabindex="-1"><a class="header-anchor" href="#页" aria-hidden="true">#</a> 页</h3><p> 页，是InnoDB 存储引擎磁盘管理的最小单元，每个页的大小默认为 16KB。为了保证页的连续性，InnoDB 存储引擎每次从磁盘申请 4-5 个区。</p><h3 id="行" tabindex="-1"><a class="header-anchor" href="#行" aria-hidden="true">#</a> 行</h3><p> 行，InnoDB 存储引擎数据是按行进行存放的。在行中，默认有两个隐藏字段：</p><ul><li>Trx_id：每次对某条记录进行改动时，都会把对应的事务id赋值给trx_id隐藏列。</li><li>Roll_pointer：每次对某条引记录进行改动时，都会把旧的版本写入到undo日志中，这个隐藏列就相当于一个指针，可以通过它来找到该记录修改前的信息。</li></ul>',11),r={},h=(0,a(3744).Z)(r,[["render",function(e,n){return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,t,d],64)}]])}}]);