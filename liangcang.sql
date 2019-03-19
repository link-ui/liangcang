# Host: localhost  (Version: 5.5.53)
# Date: 2019-01-03 21:13:09
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('001','VIVALANDS','首饰',1180,0,'精致的车厢，可滑动，不对称设计，内旋造型，修饰脸型','img/goods001.jpg','img/goods001T.jpg','过山车耳环 | 925银 皓石','img/goods001Z.jpg','img/goodsG1.jpg','','','','','','','','',''),('002','Moreover','餐具',134,0,'食品级304不锈钢材料，可靠，拉丝表面，品质一流','img/goods002.jpg','img/goods002T.jpg','原创设计不锈钢刀叉套装 | 自带奢华气质','img/goods002Z.jpg','img/goodsG2.jpg','','','','','','','','',''),('003','Seem Soap','香皂',320,0,'自然香氛，巴黎工坊手工制作，充满创意的手工雕塑香皂，纯天然成分，180g/枚','img/goods003.jpg','img/goods003T.jpg','法国纯天然原型手工小皂 | 自然香氛','img/goods003Z.jpg','img/goodsG3.jpg','','','','','','','','',''),('004','本来设计','文具',224,0,'倾泻如墨书写不止，温润原木，胡桃木底座，更加有质感','img/goods004.jpg','img/goods004T.jpg','可收藏的原木金属永恒笔 | 一支写不','img/goods004Z.jpg','img/goodsG4.jpg','','','','','','','','',''),('005','逸间','摆件',158,0,'小而精致的礼物，像小猪一样的多吃多睡，认真对待自己','img/goods005.jpg','img/goods005T.jpg','猪光宝气 会发光的猪小白 | 寂静的夜','img/goods005Z.jpg','img/goodsG5.jpg','','','','','','','','',''),('006','Sony','数码',1999,0,'随时充电，一次可连续播放21小时，可调节舒适挡位','img/goods006.jpg','img/goods006T.jpg','可以陪你游戏的蓝牙耳机 | 轻轻一点','img/goods006Z.jpg','img/goodsG6.jpg','','','','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `goodsName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsType` varchar(255) DEFAULT NULL,
  `beiyong2` varchar(255) DEFAULT NULL,
  `goodsPrice` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('VIVALANDS','001','img/goods001.jpg',2,'首饰','过山车耳环 | 925银 皓石','1180'),('Moreover','002','img/goods002.jpg',3,'餐具','原创设计不锈钢刀叉套装 | 自带奢华气质','134'),('本来设计','004','img/goods004.jpg',1,'文具','可收藏的原木金属永恒笔 | 一支写不','224');

#
# Structure for table "userinfo"
#

CREATE TABLE `userinfo` (
  `userId` varchar(30) NOT NULL DEFAULT '',
  `userPw` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "userinfo"
#

INSERT INTO `userinfo` VALUES ('18629696399','w1862969');
