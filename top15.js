// =============================================
// 全国热度排名前15景点数据
// 热度值 (heat) 越大越热门，可自行调整
// 注意：img 路径必须与 data.js 中实际存在的景点一致
// =============================================
const top15Spots = [
    { rank: 1,  name: "故宫博物院",   province: "北京市",   city: "北京市",   heat: 9999, img: "/TravelExploration/images/北京/故宫博物院/1.jpg" },
    { rank: 2,  name: "八达岭长城",   province: "北京市",   city: "北京市",   heat: 9850, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/北京/八达岭长城/1.jpg" },
    { rank: 3,  name: "外滩",         province: "上海市",   city: "上海市",   heat: 9720, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/上海/外滩/1.jpg" },
    { rank: 4,  name: "东方明珠",     province: "上海市",   city: "上海市",   heat: 9680, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/上海/东方明珠/1.jpg" },
    { rank: 5,  name: "平遥古城",     province: "山西省",   city: "晋中",     heat: 9550, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/山西/平遥古城/1.jpg" },
    { rank: 6,  name: "颐和园",       province: "北京市",   city: "北京市",   heat: 9430, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/北京/颐和园/1.jpg" },
    { rank: 7,  name: "云冈石窟",     province: "山西省",   city: "大同",     heat: 9310, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/山西/云冈石窟/1.jpg" },
    { rank: 8,  name: "泰山",         province: "山东省",   city: "泰安",     heat: 9200, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/山东/泰山/1.jpg" },
    { rank: 9,  name: "黄山",         province: "安徽省",   city: "黄山",     heat: 9080, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/安徽/黄山/1.jpg" },
    { rank: 10, name: "避暑山庄",     province: "河北省",   city: "承德",     heat: 8950, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/河北/承德避暑山庄/1.jpg" },
    { rank: 11, name: "洪崖洞",       province: "重庆市",   city: "重庆市",   heat: 8830, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/重庆/洪崖洞/1.jpg" },
    { rank: 12, name: "布达拉宫",     province: "西藏",     city: "拉萨",     heat: 8700, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/西藏/布达拉宫/1.jpg" },
    { rank: 13, name: "冰雪大世界",   province: "黑龙江省", city: "哈尔滨",   heat: 8580, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/黑龙江/哈尔滨冰雪大世界/1.jpg" },
    { rank: 14, name: "沈阳故宫",     province: "辽宁省",   city: "沈阳",     heat: 8460, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/辽宁/沈阳故宫/1.jpg" },
    { rank: 15, name: "苏州园林",     province: "江苏省",   city: "苏州",     heat: 8350, img: "https://github.com/Scumbag42/TravelExploration/blob/main/images/江苏/苏州园林/1.jpg" }
];
