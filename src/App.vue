<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <div class="box">
    <div class="top_box">
      <div class="top">
        <div class="logo"><img src="./assets/images/logo.jpg" alt="XXX" title="XXX"></div>
        <div class="menu">
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/newslist">热点专题</router-link></li>
            <li><router-link to="/museum">文博场馆</router-link></li>
            <li><router-link to="/stra">旅游攻略</router-link></li>
            <li><router-link to="/sight">景点景区</router-link></li>
            <li><router-link to="/contact">服务中心</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="banner fl"></div>
  <RouterView />
</template>

<style>
@charset "utf-8";
/* CSS Document */
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td, font {
  padding: 0;
}
fieldset, img { border: 0; vertical-align: top; }
table { border-collapse: collapse; border-spacing: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; }
ol, ul, li, dl, dt, dd { list-style: none; }
a { color: #000; text-decoration: none; }
a:link, a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
.red { color: #F00; }
.yellow { color: #ffb138; }
.fl { float: left; }
.fr { float: right; }
.clr { clear: both; }
.mright { margin-right: 20px; }
.blank { height: 20px; font-size: 0; line-height: 0; clear: both; overflow: hidden; }
body, td, th { font-family: "Microsoft YaHei", "微软雅黑", \5FAE\8F6F\96C5\9ED1; }
input { outline: none; }
@font-face { font-family: '微软雅黑';   /*字体名称*/ src: url('../font/msyh.ttf');/*字体路径*/ }
.box { width: 100%; height: auto; background-color: none; }
.box_2 { width: 100%; min-height: 229px; margin: 0px auto; background-color: #F4F4F4; }
.kong { width: 100%; height: 80px; }
/* top */
.top_box_tiao { width: 100%; height: 40px; background-color: #24A05E; }
.top_box { width: 100%; height: 110px; }
.top { width: 1200px; height: 110px; margin: 0px auto; display: block; }
.logo { width: 464px; height: 110px; float: left; overflow: hidden; }
.banner { background: url(assets/images/banner.jpg) no-repeat center top; height: 550px; width: 100%; }
/* menu */
.menu { width: 736px; height: auto; margin: 0px auto; margin-top: 0px; float: right; }
.menu ul { margin: 0px auto; }
.menu ul li { float: left; width: 120px; color: #fff; text-align: center; line-height: 110px; font-size: 18px; position: relative; overflow: visible; }
.menu ul li a { color: #000; font-size: 18px; text-align: center; height: 105px; width: 121px; color: #000000; padding-bottom: 0px; display: block; text-decoration: none; }
.menu ul li a:hover { color: #FFF; background-color: #258307; height: 110px; line-height: 110px; }
/* banner_news */
.banner_box_2 { width: 1200px; height: 80px; margin: 0px auto; }
.banner_tel { width: 294px; height: 300px; float: left; background-color: #258307; margin-top: -220px; position: relative; }
.banner_telxian { width: 29px; float: left; background-color: #FFF; display: block; z-index: 999; position: relative; height: 80px; }
.banner_new { height: 80px; background-color: #2B960A; margin-top: -80px; z-index: -1; width: 130%; background-image: url(./assets/images/laba.jpg); background-repeat: no-repeat; background-position: 22% center; }
.top_big { width: 1200px; margin: 0 auto; position: relative; }
.top_big2 { position: absolute; left: 0; top: -40px; }
.banner_news { width: 470px; height: 80px; line-height: 80px; color: #FFF; }
.banner_news a { color: #FFF; }
.banner_serch { width: 240px; height: 80px; overflow: hidden; }
.banner_serch .serch_1 { width: 200px; height: 35px; line-height: 35px; margin-top: 23px; text-indent: 1%; }
.banner_serch .submit_1 { width: 40px; height: 35px; line-height: 35px; margin-top: 23px; background-color: #626262; color: #FFF; }
.huadong { width: 470px; height: 80px; padding: 0; position: relative; font: 12px/1.5 "Microsoft YaHei", simsun; margin-left: 370px; }
.huadong .huabox { width: 470px; line-height: 80px; }
.huadong .hdimg { float: left; line-height: 80px; }
.huadong .hdimg img { width: 470px; vertical-align: middle; }
.huadong h5 { float: left; line-height: 80px; font-size: 14px; color: #FFF; font-weight: normal; }
.huadong .notice_active { float: left; width: 220px; height: 80px; padding: 0; overflow: hidden; position: relative; }
.huadong .notice_active li { list-style-type: none; line-height: 80px; overflow: hidden; height: 80px; font-size: 14px; color: #FFF; font-weight: normal; }
/* about */
.about { width: 1200px; height: 0; margin: 0px auto; }
.contact_p { width: 604px; text-align: center; }
.contact_p a { color: #F00; font-size: 14px; }
.about_contact { width: 550px; font-size: 18px; letter-spacing: 0px; font-weight: normal }
.about_title { width: 550px; text-align: left; font-size: 20px; color: #333333; font-weight: normal; letter-spacing: 0px; line-height: 25px; padding-top: 30px; }
.about_title span { font-size: 14px; line-height: 35px; color: #5E5E5E; width: 520px; padding-top: 20px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; min-height: 35px; overflow: hidden; }
.about_submit { width: 120px; height: 35px; border: #379817 solid 1px; text-align: center; line-height: 35px; font-size: 14px; margin-top: 10px; }
.about_submit a { color: #379817; display: block; }
.about_img { width: 100%; height: 197px; margin: 0px auto; text-align: center; margin-top: -125px; }
.about_img img { }
/* product */
.product { width: 100%; min-height: 646px; margin: 0px auto; background-color: #F4F4F4; margin-top: 50px; }
.product_contact { width: 1200px; margin: 0px auto; }
.biaotou { font-size: 16px; color: #fff; background-color: #258307; width: 60px; height: 90px; margin-top: -45px; text-align: center; line-height: 45px; letter-spacing: 2px; }
.product_list { width: 1200px; margin: 0px auto; }
.product_list ul { }
.product_list ul li { float: left; margin: 20px 20px 20px 0px; background-color: #FFF; text-align: center; width: 280px; min-height: 490px;background-color:#F4F4F4; }
#product_bg { border: 1px #CCCCCC solid; }
.product_list ul li span { width: 100%; height: 70px; display: block; background-repeat: no-repeat; background-position: center top; padding-top: 20px; font-size: 26px; color: #258406; }
.product_list ul li b { width: 80%; min-height: 20px; margin: 0px auto; color: #333; font-weight: normal; line-height: 20px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; padding-bottom: 20px; }
.product_list ul li i { width: 100%; height: 300px; display: block; overflow: hidden; }
.product_list ul li i img { width: 80%; height:290px; cursor: pointer; transition: all 0.6s;}
.product_list ul li i img:hover { transform: scale(1.1); }
.product_list ul li a { color: #666; text-decoration: none; }
/* case */
.case {
  margin: 0px auto;
  width: 100%;
  min-height: 400px;
  background-color: #FFF;
  padding-top: 0px;
}
/* list_new */
.list_leftbox { width: 600px; height: 400px; }
.list_rightbox { width: 500px; height: 500px; text-align: center; padding-top: 90px; }
.list_rightbox img { width: 97%; }
.list_new { width: 1200px; margin: 0px auto; }
.list_new_list { margin-left: -70px; margin-top: 90px; }
.list_new_list ul { }
.list_new_list ul li { float: left; width: 642px; margin: 0px 0px 30px 2px; overflow: hidden; }
.list_new_list ul li a { }
.list_new_list ul li span { width: 81px; height: 80px; float: left; font-size: 14px; text-align: center; border-right: 1px solid #ccc; }
.list_new_list ul li span b { width: 81px; float: left; font-size: 28px; line-height: 30px; padding-top: 20px; }
.list_new_list ul li i { float: left; width: 480px; font-size: 18px; height: 20px; line-height: 20px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; padding-left: 20px; color: #000; }
.list_new_list ul li strong { width: 480px; height: 50px; float: left; font-size: 15px; text-align: center; border-right: 0; line-height: 25px; padding-left: 20px; font-style: normal; font-weight: normal; color: #666; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; padding-top: 5px; }
/* case */
.h_tonglan {
  width: 1200px;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  overflow: hidden;
  min-height: 287px;
}
.h_tonglan dl { width: 1200px; height: 32px; _height: 32px; background: url(/image/huixian2.gif) repeat-x top; margin-left: 10px; margin-right: 10px; }
.h_tonglan dl dd { float: left; width: 196px; height: 32px; _height: 32px; background: url(/image/lvx2.gif) repeat-x top; }
.h_tonglan dl dt { float: right; width: 700px; text-align: right; line-height: 25px; min-height: 25px; color: #6A6A6A; }
.h_tonglan ul { }
.h190px { overflow: hidden; margin-left: 10px; margin-right: 10px; padding-bottom: 3px; padding-top: 14px; }
.h190px img { width: 938px; border: 0px; }
.h218px { width: 1200px; margin: 0 auto; margin-top: 60px; }
.h218px th { padding-top: 67px; }
.h218px td { overflow: hidden; }
#scrollbox ul { overflow: hidden; }
#scrollbox ul LI { FLOAT: left; width: 300px; height: 184px; vertical-align: top; font-size: 12px; line-height: 18px; min-height: 18px; text-align: center; padding: 0px; overflow: hidden; }
#scrollbox ul LI img { width: 250px; height: 144px; border: 0px; }
.pointer { CURSOR: pointer }
/* bottom */
.bottom { width: 100%; min-height: 342px; overflow: hidden; /*background-color: #258307*/; padding-top: 20px; color: #FFF; }
.bottom a { color: #FFF; }
.bottom_topbox { width: 1200px; overflow: hidden; min-height: 250px; margin: 0px auto; }
.bottom_topbox span { display: block; margin-top: 5px; font-size: 10px; /*line-height: 25px*/;width: 180px}
/*.bottom_bottombox { width: 100%; overflow: hidden; min-height: 92px; border-top: 1px solid #fff; text-align: center; line-height: 40px; }
.bottom_leftbox { float: left; width: 750px; }
.bottom_rightbox { width: 450px; height: 205px; float: right; overflow: hidden; display: block; }
.bottom_rightbox img { text-align: center; margin-left: 20px; margin-top: 20px; width: 140px; height: 170px; }*/

/*底部*/
#footer{clear:both;background-color:#258307; color: #FFF;line-height:22px; font-size:12px;}
#footer a{color:#FFF;}
#footer a:hover{color:#ff9d00;text-decoration:none;}
#footer .ft-content{width:1000px;margin:0 auto;}
#footer .ft-info{padding:30px 8px 40px 8px;border-bottom:1px solid #575a5b;}
#footer .ft-info-col{float:left;display:inline;}
#footer .ft-info dt{height:30px;font-size:14px;overflow:hidden;}
#footer .ft-info-intro{width:200px;margin-right:68px;}
#footer .ft-info-intro strong{color:#ff9d00;font-weight:normal;}
#footer .ft-info-about{width:128px;margin-right:85px;}
#footer .ft-info-service{width:135px;margin-right:80px;}
#footer .ft-info-service dt{text-align:center;}
#footer .ft-info-service dd{width:100%;overflow:hidden;}
#footer .ft-info-service ul{margin-right:-35px;}
#footer .ft-info-service li{float:left;width:85px;}
#footer .ft-info-qrcode{float:right;padding-top:22px;line-height:1.4em;}
#footer .ft-info-qrcode dd{width:100px;display:inline;margin-left:30px;float:right;text-align:center;}
#footer .ft-info-qrcode span{display:block;height:90px;margin:0 0 8px 6px;}
#footer .ft-qrcode-weixin{background:url("./assets/images/二维码1.jpg") no-repeat;}
#footer .ft-qrcode-tejia{background:url("./assets/images/二维码1.jpg") no-repeat;}
#footer .ft-info-social{clear:both;text-align:center;padding-top:25px;}
#footer .ft-info-social dt{font-size:16px;margin-bottom: 30px;}
#footer .ft-info-social dd{bottom:0}

/* 路径 */
.box{margin:0 0 10px 0;}
.page_route { width: 1200px; margin: 0px auto; border-bottom: 1px solid #eaeaea; height: 40px; line-height: 40px; padding-top: 10px; text-align: left; font-size: 16px; }
.page_route a { color: #696969; }
.page_title { width: 1200px; padding-top: 30px; font-size: 28px; text-align: left; color: #353334; margin: 0px auto;}
.page_title span { display: block; font-size: 20px; color: #555; text-align: left; padding-bottom: 5px; padding-top: 10px; }
/*博物馆图*/
.search{
  width: 30%;
  margin: 10px auto;
  display: flex;
  /*border: 1px solid red;*/
}
.search input{

  flex: 4;
  height: 30px;
  outline: none;
  border: 1px solid green ;
  box-sizing: border-box;
  padding-left: 10px;}
.search button{
  float: right;
  flex: 1;
  height: 30px;
  background-color: green;
  color: white;

  border-style: none;
  outline: none;
}
.search button i{
  font-style: normal;
}
.search button:hover{
  color: yellow
}

.about_con span { display: block; font-size: 14px; color: #555; text-align: left; padding-bottom: 30px; padding-top: 10px;}
.about_con {width: 1200px;margin: 0px auto;}
.about_con ul{padding:0 100px;}
.about_con ul li {
  margin:0 ;
  width: 200px;
  list-style: none;
  float:left;
  font-size: 0;
  text-align: center;
  vertical-align: bottom;
  /*内容底部对齐*/
}
.content{
  width:80%;
  padding: 10px 0;
  overflow: hidden;
}
.img-wrap {
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.img-box {
  height: 120px;
  overflow: hidden;
}
.img-box img {
  position: relative;
  width: 100%;
  height:100%;
  top: 50%;
  transform: translateY(-50%);
}
.title{
  padding-top: 12px;
  font-size: 15px;
  color: #454545;
  padding-right: 0px;
}
/*分页*/
.fenye{width: 30%; margin:580px  0 10px 610px;  background-color: aqua;}
.fenye ul li{display: inline; }
.fenye li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
}
.fenye li a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}
/*服务中心*/
.fuwu{position:absolute;top:800px;padding:30px 0 0 133px; width:100%;height:
    600px;overflow: auto;}

.bigbox {
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
}
.bigbox ul {
  width: 45%;
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height:auto;
  background-color: darkgreen;
  transition: all .5s;

}

.bigbox ul li {
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  list-style: none;
}

.bigbox ul li:first-child {
  display: flex;
  align-items: center;
  margin-top: 40px;

}

.bigbox ul li:first-child img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0 25px;
}

.bigbox ul li:first-child span {
  color: #fff;
  font-size: 16px;
  white-space: nowrap;
}

.bigbox ul li a {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #d2d2d2;

  text-decoration: none;
  transition: all .5s;
}

.bigbox ul li a img {
  width: 30px;
  height:30px;
  margin: 0 25px;
}

.bigbox ul li a span {
  font-size: 14px;
}

.bigbox ul li a:hover {
  color: #fff;
  background-color: yellowgreen;
}
.right-content {
  position: absolute; top: 30px; left: 400px;min-width: 920px;
  background-color: #f0f0f0; /* 设置背景颜色 */
}
.right-content {
  text-align: center; /* 让标题居中显示 */
}

.right-content h2 {
  background-color: #f0f0f0; /* 设置标题背景颜色 */
  padding: 20px 0 0 0; /* 添加内边距 */
  display: inline-block; /* 让标题宽度根据内容自动调整 */
}

.right-content ul {
  list-style: none; /* 移除列表默认样式 */
  padding: 0;
}

.right-content li {
  text-align: left;
  background-color: #e0e0e0; /* 设置背景颜色 */
  border: 1px solid #ccc; /* 添加边框 */
  margin-bottom: 10px; /* 设置列表项之间的间距 */
  padding: 10px; /* 添加内边距 */
}
.right-content h3 {
  background-color: #f0f0f0; /* 设置标题背景颜色 */
  padding:  0; /* 添加内边距 */
  display: inline-block; /* 让标题宽度根据内容自动调整 */
}

.page_contact_img { width: 100%; margin: 0px auto; overflow: hidden; padding-top: 20px; padding-bottom: 20px; text-align: center; }
.page_contact_img span { display: block; width: 50%; text-align: center; color: #278306; font-size: 25px; margin: 0px auto; padding-top: 10px; padding-bottom: 10px; }
.page_contact_img img { width:80%；}
.page_contact_img table{width: 80%;text-align: center; }
.page_contact_p { width: 70%; margin: 10px auto; padding-bottom:10px; background-color:#f4f4f4;}
#page_contact_bg { border: 1px #CECECE solid; min-height: 1150px; display: block; margin-bottom: 20px; }
.page_title_2 { width: 100%; height: 40px; line-height: 40px; text-align: center; font-size: 18px; color: #505151; }
#title2{ padding-top:30px;}
.page_date { font-size: 14px; color: #505151; }
.page_miaosu { width:80%; height: auto;  background-color:rgba(207,247,198,1.00); border: 1px solid #CCC; margin: 0px auto; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; padding: 1%; margin-bottom: 20px; font-size:13px; text-align: center;}
/* 荣誉资质 */
.ryzz { width: 1200px; margin: 0px auto; }
.ryzz ul { }
.ryzz ul li { float: left; margin: 20px 15px 20px 0px; background-color: #FFF; text-align: center; width: 270px; min-height: 181px; }
.ryzz ul li i { width: 100%; height: 181px; display: block; overflow: hidden; }
.ryzz ul li i img { width: 263px; height: 177px; cursor: pointer; transition: all 0.6s; }
.ryzz ul li i img:hover { transform: scale(1.1); }
.ryzz ul li a { color: #666; text-decoration: none; }
/* contactleft */
.left { width: 368px; padding-bottom: 20px; }
/* pageright */
.right { width: 815px; padding-bottom: 20px; }
/* page */
.page_1 { width: 100%; height: 36px; font-size: 14px; text-align: center; margin-top: 20px; text-align: center; color: #000; display: block; margin-bottom: 10px; }
.page_1 a { padding: 8px 12px 8px 12px; margin: 3px; border: solid 1px #ccc; text-align: center; color: #000; background: #fff; font-size: 14px; margin-left: 0px; }
.page_1 a:hover { background-color: #248407; color: #FFF; }
/*new */
.new { width: 1200px; margin: 0 120px; }
.new ul { margin: 0px auto; }
.new ul li { float: left; width: 96%; color: #000; text-align: left; margin-top: 9px; height: auto; overflow: hidden; border-bottom: dashed 1px #ccc; padding-bottom: 30px; margin-top: 30px; margin-left: 2%; }
.new ul li h4 { font-size: 18px; font-weight: normal; }
.new ul li h4 b { font-size: 18px; font-weight: normal; color: #208501; }
.new ul li i { display: block; padding-left: 10px; padding-top: 10px; height: 20px; line-height: 20px; color: #CCC; text-indent: 10px; }
.new ul li img { padding-right: 20px; cursor: pointer; width: 248px; height: 157px; float: left; }
.new ul li span { float: left; height: 70px; overflow: hidden; line-height: 35px; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; /* text-indent: 10px; */ width: 857px; padding-left: 10px; }
.new ul li a { color: 1; }

.wc960 { margin: 0px auto; width: 1400px; }
.fl { float: left; }
.fr { float: right; }
.mt20 { margin-top: 40px; }
.icon { background: url(../images/icon.png) no-repeat 0 0; }
.warp-pic-list li { float: left; display: inline; }
.warp-pic-list .img_wrap { display: block; font-size: 0; }
.warp-pic-list .text-area { line-height: 24px; }
.wrapBox { overflow: hidden; }

.row .hd { height: 190px; }
.row .hd .title { font: 26px/40px "΢���ź�", "Microsoft YaHei", "����", "SimHei"; }

.tab-T-3 { width: 66px; }
.tab-T-3 li { width: 12px; height: 12px; font-size: 0; background-color: #dfdfdf; float: left; margin-left: 10px; cursor: pointer; display: inline; }
.tab-T-3 li.cur { background-color: #d81c1b; }


.yb_conct { position: fixed; z-index: 9999999; top: 500px; right: -127px; cursor: pointer; transition: all .3s ease; }
.yb_bar ul li { width: 180px; height: 53px; font: 16px/53px 'Microsoft YaHei'; color: #fff; text-indent: 54px; margin-bottom: 3px; border-radius: 3px; transition: all .5s ease; overflow: hidden; }
.yb_bar .yb_top { background: #FE7D01 url(./assets/images/fixCont.png) no-repeat 0 0; }
.yb_bar .yb_phone { background: #FE7D01 url(./assets/images/fixCont.png) no-repeat 0 -57px; }
.yb_bar .yb_QQ { text-indent: 0; background: #FE7D01 url(./assets/images/fixCont.png) no-repeat 0 -113px; }
.yb_bar .yb_ercode { height:200px;

  background: #FE7D01 url(./assets/images/fixCont.png) no-repeat 0 -169px; }
.hd_qr { padding: 0 29px 25px 29px; }
.yb_QQ a { display: block; text-indent: 54px; width: 100%; height: 100%; color: #fff; }
* { padding: 0; margin: 0; border: none; }
ul, ol, li { list-style: none; }
em, i { font-style: normal; }
a { text-decoration: none; color: #333; }
img { display: inline-block; border: 0 none; }
body { color: #333; font-family: 'Microsoft YaHei', Verdana, Arial, Helvetica, sans-serif; line-height: 20px; overflow-x: hidden; width: 100%; height: auto; font-size: 14px; }
.clear:after { content: '\20'; display: block; height: 0; clear: both; visibility: hidden; }


#myModal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  z-index: 9999;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#myModal input,
#myModal textarea {
  width: calc(100% - 20px); 
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

</style>
