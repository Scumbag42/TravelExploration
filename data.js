// 完整34个省级行政区数据 + 景点专属固定图片
const data = {
    "北京市": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101010100.shtml",
        cities: ["北京市", "密云区", "延庆区"],
        spots: {
            "北京市": [
                { name: "故宫博物院", city: "北京市", website: "https://www.dpm.org.cn", weatherUrl: "https://www.weather.com.cn/weather/101010100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/4.jpg"] },
                { name: "八达岭长城", city: "北京市", website: "https://www.badaling.cn", weatherUrl: "https://www.weather.com.cn/weather/101010100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/八达岭长城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/八达岭长城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/八达岭长城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/八达岭长城/4.jpg"] },
                { name: "颐和园", city: "北京市", website: "https://www.summerpalace-china.com", weatherUrl: "https://www.weather.com.cn/weather/101010100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/颐和园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/颐和园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/颐和园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/颐和园/4.jpg"] },
                { name: "天坛公园", city: "北京市", website: "", weatherUrl: "https://www.weather.com.cn/weather/101010100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/天坛公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/天坛公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/天坛公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/天坛公园/4.jpg"] }
            ],
            "密云区": [
                { name: "古北水镇", city: "密云区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/古北水镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/古北水镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/古北水镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/古北水镇/4.jpg"] },
                { name: "司马台长城", city: "密云区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/司马台长城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/司马台长城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/司马台长城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/司马台长城/4.jpg"] },
                { name: "密云水库", city: "密云区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/密云水库/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/密云水库/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/密云水库/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/密云水库/4.jpg"] }
            ],
            "延庆区": [
                { name: "龙庆峡", city: "延庆区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/龙庆峡/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/龙庆峡/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/龙庆峡/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/龙庆峡/4.jpg"] },
                { name: "玉渡山", city: "延庆区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/玉渡山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/玉渡山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/玉渡山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/玉渡山/4.jpg"] },
                { name: "百里山水画廊", city: "延庆区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/百里山水画廊/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/百里山水画廊/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/百里山水画廊/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/百里山水画廊/4.jpg"] }
            ]
        }
    },
    "上海市": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101020100.shtml",
        cities: ["上海市", "浦东新区", "青浦区"],
        spots: {
            "上海市": [
                { name: "外滩", city: "上海市", website: "https://www.sh-waitan.com", weatherUrl: "https://www.weather.com.cn/weather/101020100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/4.jpg"] },
                { name: "东方明珠", city: "上海市", website: "https://www.oriental-pearl.com", weatherUrl: "https://www.weather.com.cn/weather/101020100.shtml", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/东方明珠/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/东方明珠/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/东方明珠/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/东方明珠/4.jpg"] },
                { name: "豫园", city: "上海市", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/豫园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/豫园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/豫园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/豫园/4.jpg"] },
                { name: "上海科技馆", city: "上海市", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/上海科技馆/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/上海科技馆/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/上海科技馆/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/上海科技馆/4.jpg"] }
            ],
            "浦东新区": [
                { name: "上海迪士尼", city: "浦东新区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/4.jpg"] },
                { name: "野生动物园", city: "浦东新区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/野生动物园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/野生动物园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/野生动物园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/野生动物园/4.jpg"] },
                { name: "世纪公园", city: "浦东新区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/世纪公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/世纪公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/世纪公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/世纪公园/4.jpg"] }
            ],
            "青浦区": [
                { name: "朱家角古镇", city: "青浦区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/朱家角古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/朱家角古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/朱家角古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/朱家角古镇/4.jpg"] },
                { name: "大观园", city: "青浦区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/大观园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/大观园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/大观园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/大观园/4.jpg"] },
                { name: "淀山湖", city: "青浦区", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/淀山湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/淀山湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/淀山湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/淀山湖/4.jpg"] }
            ]
        }
    },
    "天津市": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101030100.shtml",
        cities: ["天津市", "蓟州区", "滨海新区"],
        spots: {
            "天津市": [
                { name: "天津之眼", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/天津之眼/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/天津之眼/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/天津之眼/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/天津之眼/4.jpg"] },
                { name: "古文化街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/古文化街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/古文化街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/古文化街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/古文化街/4.jpg"] },
                { name: "五大道", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/五大道/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/五大道/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/五大道/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/五大道/4.jpg"] }
            ],
            "蓟州区": [
                { name: "盘山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/4.jpg"] },
                { name: "黄崖关长城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/黄崖关长城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/黄崖关长城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/黄崖关长城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/黄崖关长城/4.jpg"] },
                { name: "独乐寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/独乐寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/独乐寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/独乐寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/独乐寺/4.jpg"] }
            ],
            "滨海新区": [
                { name: "航母公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/航母公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/航母公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/航母公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/航母公园/4.jpg"] },
                { name: "东疆湾", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/东疆湾/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/东疆湾/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/东疆湾/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/东疆湾/4.jpg"] },
                { name: "海河外滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/上海/外滩/4.jpg"] }
            ]
        }
    },
    "重庆市": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101040100.shtml",
        cities: ["重庆市", "武隆区", "江津区"],
        spots: {
            "重庆市": [
                { name: "洪崖洞", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/洪崖洞/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/洪崖洞/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/洪崖洞/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/洪崖洞/4.jpg"] },
                { name: "解放碑", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/解放碑/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/解放碑/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/解放碑/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/解放碑/4.jpg"] },
                { name: "磁器口", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/磁器口/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/磁器口/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/磁器口/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/磁器口/4.jpg"] }
            ],
            "武隆区": [
                { name: "天生三桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/天生三桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/天生三桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/天生三桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/天生三桥/4.jpg"] },
                { name: "仙女山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/仙女山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/仙女山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/仙女山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/仙女山/4.jpg"] },
                { name: "芙蓉洞", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/芙蓉洞/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/芙蓉洞/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/芙蓉洞/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/芙蓉洞/4.jpg"] }
            ],
            "江津区": [
                { name: "四面山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/四面山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/四面山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/四面山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/四面山/4.jpg"] },
                { name: "中山古镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/4.jpg"] },
                { name: "黑石山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/黑石山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/黑石山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/黑石山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/重庆/黑石山/4.jpg"] }
            ]
        }
    },
    "河北省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101090101.shtml",
        cities: ["石家庄", "承德", "保定"],
        spots: {
            "石家庄": [
                { name: "西柏坡", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/西柏坡/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/西柏坡/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/西柏坡/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/西柏坡/4.jpg"] },
                { name: "赵州桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/赵州桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/赵州桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/赵州桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/赵州桥/4.jpg"] },
                { name: "苍岩山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/苍岩山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/苍岩山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/苍岩山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/苍岩山/4.jpg"] }
            ],
            "承德": [
                { name: "避暑山庄", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/承德避暑山庄/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/承德避暑山庄/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/承德避暑山庄/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/承德避暑山庄/4.jpg"] },
                { name: "外八庙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/外八庙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/外八庙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/外八庙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/外八庙/4.jpg"] },
                { name: "木兰围场", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/木兰围场/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/木兰围场/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/木兰围场/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/木兰围场/4.jpg"] }
            ],
            "保定": [
                { name: "白洋淀", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/白洋淀/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/白洋淀/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/白洋淀/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/白洋淀/4.jpg"] },
                { name: "狼牙山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/狼牙山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/狼牙山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/狼牙山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/狼牙山/4.jpg"] },
                { name: "清西陵", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/清西陵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/清西陵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/清西陵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/河北/清西陵/4.jpg"] }
            ]
        }
    },
    "山西省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101100101.shtml",
        cities: ["太原", "晋中", "大同"],
        spots: {
            "太原": [
                { name: "晋祠", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/晋祠/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/晋祠/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/晋祠/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/晋祠/4.jpg"] },
                { name: "蒙山大佛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/蒙山大佛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/蒙山大佛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/蒙山大佛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/蒙山大佛/4.jpg"] },
                { name: "青龙古镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/青龙古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/青龙古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/青龙古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/青龙古镇/4.jpg"] }
            ],
            "晋中": [
                { name: "平遥古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/平遥古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/平遥古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/平遥古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/平遥古城/4.jpg"] },
                { name: "乔家大院", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/乔家大院/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/乔家大院/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/乔家大院/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/乔家大院/4.jpg"] },
                { name: "绵山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/绵山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/绵山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/绵山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/绵山/4.jpg"] }
            ],
            "大同": [
                { name: "云冈石窟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/云冈石窟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/云冈石窟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/云冈石窟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/云冈石窟/4.jpg"] },
                { name: "悬空寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/悬空寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/悬空寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/悬空寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/悬空寺/4.jpg"] },
                { name: "恒山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/恒山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/恒山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/恒山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/山西/恒山/4.jpg"] }
            ]
        }
    },
    "辽宁省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101070101.shtml",
        cities: ["沈阳", "大连", "丹东"],
        spots: {
            "沈阳": [
                { name: "沈阳故宫", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/沈阳故宫/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/沈阳故宫/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/沈阳故宫/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/沈阳故宫/4.jpg"] },
                { name: "张氏帅府", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/张氏帅府/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/张氏帅府/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/张氏帅府/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/张氏帅府/4.jpg"] },
                { name: "北陵公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/北陵公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/北陵公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/北陵公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/北陵公园/4.jpg"] }
            ],
            "大连": [
                { name: "星海广场", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/星海广场/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/星海广场/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/星海广场/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/星海广场/4.jpg"] },
                { name: "老虎滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/大连老虎滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/大连老虎滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/大连老虎滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/大连老虎滩/4.jpg"] },
                { name: "金石滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/金石滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/金石滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/金石滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/金石滩/4.jpg"] }
            ],
            "丹东": [
                { name: "鸭绿江断桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/鸭绿江断桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/鸭绿江断桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/鸭绿江断桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/鸭绿江断桥/4.jpg"] },
                { name: "凤凰山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/凤凰山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/凤凰山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/凤凰山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/凤凰山/4.jpg"] },
                { name: "虎山长城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/虎山长城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/虎山长城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/虎山长城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/辽宁/虎山长城/4.jpg"] }
            ]
        }
    },
    "吉林省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101060101.shtml",
        cities: ["长春", "延边", "吉林"],
        spots: {
            "长春": [
                { name: "伪满皇宫", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/伪满皇宫/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/伪满皇宫/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/伪满皇宫/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/伪满皇宫/4.jpg"] },
                { name: "净月潭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/净月潭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/净月潭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/净月潭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/净月潭/4.jpg"] },
                { name: "长影世纪城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长影世纪城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长影世纪城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长影世纪城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长影世纪城/4.jpg"] }
            ],
            "延边": [
                { name: "长白山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长白山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长白山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长白山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/长白山/4.jpg"] },
                { name: "六鼎山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/六鼎山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/六鼎山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/六鼎山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/六鼎山/4.jpg"] },
                { name: "防川景区", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/防川景区/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/防川景区/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/防川景区/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/防川景区/4.jpg"] }
            ],
            "吉林": [
                { name: "松花湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/松花湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/松花湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/松花湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/松花湖/4.jpg"] },
                { name: "雾凇岛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/雾凇岛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/雾凇岛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/雾凇岛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/雾凇岛/4.jpg"] },
                { name: "北山公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/北山公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/北山公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/北山公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/吉林/北山公园/4.jpg"] }
            ]
        }
    },
    "黑龙江省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101050101.shtml",
        cities: ["哈尔滨", "牡丹江", "齐齐哈尔"],
        spots: {
            "哈尔滨": [
                { name: "冰雪大世界", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/哈尔滨冰雪大世界/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/哈尔滨冰雪大世界/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/哈尔滨冰雪大世界/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/哈尔滨冰雪大世界/4.jpg"] },
                { name: "中央大街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/中央大街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/中央大街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/中央大街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/中央大街/4.jpg"] },
                { name: "太阳岛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/太阳岛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/太阳岛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/太阳岛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/太阳岛/4.jpg"] }
            ],
            "牡丹江": [
                { name: "镜泊湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/镜泊湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/镜泊湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/镜泊湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/镜泊湖/4.jpg"] },
                { name: "雪乡", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/雪乡/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/雪乡/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/雪乡/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/雪乡/4.jpg"] },
                { name: "横道河子", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/横道河子/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/横道河子/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/横道河子/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/横道河子/4.jpg"] }
            ],
            "齐齐哈尔": [
                { name: "扎龙湿地", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/扎龙湿地/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/扎龙湿地/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/扎龙湿地/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/扎龙湿地/4.jpg"] },
                { name: "龙沙公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/龙沙公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/龙沙公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/龙沙公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/龙沙公园/4.jpg"] },
                { name: "明月岛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/明月岛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/明月岛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/明月岛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/黑龙江/明月岛/4.jpg"] }
            ]
        }
    },
    "江苏省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101190101.shtml",
        cities: ["南京", "苏州", "无锡"],
        spots: {
            "南京": [
                { name: "中山陵", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/南京中山陵/4.jpg"] },
                { name: "明孝陵", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/明孝陵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/明孝陵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/明孝陵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/明孝陵/4.jpg"] },
                { name: "夫子庙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/夫子庙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/夫子庙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/夫子庙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/夫子庙/4.jpg"] }
            ],
            "苏州": [
                { name: "苏州园林", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/苏州园林/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/苏州园林/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/苏州园林/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/苏州园林/4.jpg"] },
                { name: "周庄", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/周庄古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/周庄古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/周庄古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/周庄古镇/4.jpg"] },
                { name: "寒山寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/寒山寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/寒山寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/寒山寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/寒山寺/4.jpg"] }
            ],
            "无锡": [
                { name: "太湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/太湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/太湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/太湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/太湖/4.jpg"] },
                { name: "灵山大佛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/灵山大佛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/灵山大佛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/灵山大佛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/灵山大佛/4.jpg"] },
                { name: "鼋头渚", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/无锡鼋头渚/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/无锡鼋头渚/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/无锡鼋头渚/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/江苏/无锡鼋头渚/4.jpg"] }
            ]
        }
    },
    "浙江省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101210101.shtml",
        cities: ["杭州", "宁波", "温州"],
        spots: {
            "杭州": [
                { name: "西湖", city: "", website: "https://www.hzwestlake.com", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/4.jpg"] },
                { name: "灵隐寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/灵隐寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/灵隐寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/灵隐寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/灵隐寺/4.jpg"] },
                { name: "千岛湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/千岛湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/千岛湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/千岛湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/千岛湖/4.jpg"] }
            ],
            "宁波": [
                { name: "天一阁", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/天一阁/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/天一阁/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/天一阁/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/天一阁/4.jpg"] },
                { name: "普陀山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/普陀山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/普陀山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/普陀山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/普陀山/4.jpg"] },
                { name: "溪口", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/溪口/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/溪口/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/溪口/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/溪口/4.jpg"] }
            ],
            "温州": [
                { name: "雁荡山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/雁荡山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/雁荡山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/雁荡山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/雁荡山/4.jpg"] },
                { name: "楠溪江", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/楠溪江/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/楠溪江/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/楠溪江/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/楠溪江/4.jpg"] },
                { name: "江心屿", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/江心屿/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/江心屿/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/江心屿/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/江心屿/4.jpg"] }
            ]
        }
    },
    "安徽省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101220101.shtml",
        cities: ["合肥", "黄山", "池州"],
        spots: {
            "合肥": [
                { name: "三河古镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/三河古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/三河古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/三河古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/三河古镇/4.jpg"] },
                { name: "巢湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/巢湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/巢湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/巢湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/巢湖/4.jpg"] },
                { name: "包公祠", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/包公祠/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/包公祠/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/包公祠/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/包公祠/4.jpg"] }
            ],
            "黄山": [
                { name: "黄山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/黄山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/黄山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/黄山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/黄山/4.jpg"] },
                { name: "宏村", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/宏村/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/宏村/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/宏村/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/宏村/4.jpg"] },
                { name: "西递", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/西递/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/西递/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/西递/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/西递/4.jpg"] }
            ],
            "池州": [
                { name: "九华山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/九华山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/九华山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/九华山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/九华山/4.jpg"] },
                { name: "平天湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/平天湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/平天湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/平天湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/平天湖/4.jpg"] },
                { name: "杏花村", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/杏花村/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/杏花村/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/杏花村/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/安徽/杏花村/4.jpg"] }
            ]
        }
    },
    "福建省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101230101.shtml",
        cities: ["福州", "厦门", "泉州"],
        spots: {
            "福州": [
                { name: "三坊七巷", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/三坊七巷/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/三坊七巷/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/三坊七巷/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/三坊七巷/4.jpg"] },
                { name: "鼓山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓山/4.jpg"] },
                { name: "西湖公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/浙江/杭州西湖/4.jpg"] }
            ],
            "厦门": [
                { name: "鼓浪屿", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓浪屿/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓浪屿/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓浪屿/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/鼓浪屿/4.jpg"] },
                { name: "南普陀寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/南普陀寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/南普陀寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/南普陀寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/南普陀寺/4.jpg"] },
                { name: "曾厝垵", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/曾厝垵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/曾厝垵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/曾厝垵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/曾厝垵/4.jpg"] }
            ],
            "泉州": [
                { name: "开元寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/开元寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/开元寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/开元寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/开元寺/4.jpg"] },
                { name: "清源山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/清源山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/清源山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/清源山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/清源山/4.jpg"] },
                { name: "崇武古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/崇武古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/崇武古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/崇武古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages/福建/崇武古城/4.jpg"] }
            ]
        }
    },
    "江西省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101240101.shtml",
        cities: ["南昌", "九江", "上饶"],
        spots: {
            "南昌": [
                { name: "滕王阁", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/滕王阁/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/滕王阁/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/滕王阁/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/滕王阁/4.jpg"] },
                { name: "八一广场", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/八一广场/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/八一广场/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/八一广场/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/八一广场/4.jpg"] },
                { name: "梅岭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/梅岭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/梅岭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/梅岭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/梅岭/4.jpg"] }
            ],
            "九江": [
                { name: "庐山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/庐山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/庐山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/庐山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/庐山/4.jpg"] },
                { name: "鄱阳湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/鄱阳湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/鄱阳湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/鄱阳湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/鄱阳湖/4.jpg"] },
                { name: "东林寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/东林寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/东林寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/东林寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/东林寺/4.jpg"] }
            ],
            "上饶": [
                { name: "婺源", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/婺源/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/婺源/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/婺源/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/婺源/4.jpg"] },
                { name: "三清山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/三清山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/三清山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/三清山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/三清山/4.jpg"] },
                { name: "龙虎山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/龙虎山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/龙虎山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/龙虎山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/江西/龙虎山/4.jpg"] }
            ]
        }
    },
    "山东省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101120101.shtml",
        cities: ["济南", "青岛", "泰安"],
        spots: {
            "济南": [
                { name: "趵突泉", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/趵突泉/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/趵突泉/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/趵突泉/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/趵突泉/4.jpg"] },
                { name: "大明湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/大明湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/大明湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/大明湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/大明湖/4.jpg"] },
                { name: "千佛山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/千佛山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/千佛山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/千佛山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/千佛山/4.jpg"] }
            ],
            "青岛": [
                { name: "崂山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/崂山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/崂山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/崂山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/崂山/4.jpg"] },
                { name: "栈桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/青岛栈桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/青岛栈桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/青岛栈桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/青岛栈桥/4.jpg"] },
                { name: "八大关", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/八大关/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/八大关/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/八大关/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/八大关/4.jpg"] }
            ],
            "泰安": [
                { name: "泰山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/泰山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/泰山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/泰山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/泰山/4.jpg"] },
                { name: "岱庙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/岱庙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/岱庙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/岱庙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/岱庙/4.jpg"] },
                { name: "方特", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/方特/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/方特/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/方特/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/山东/方特/4.jpg"] }
            ]
        }
    },
    "河南省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101180101.shtml",
        cities: ["郑州", "洛阳", "开封"],
        spots: {
            "郑州": [
                { name: "少林寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/少林寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/少林寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/少林寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/少林寺/4.jpg"] },
                { name: "嵩山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/嵩山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/嵩山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/嵩山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/嵩山/4.jpg"] },
                { name: "河南博物院", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/河南博物院/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/河南博物院/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/河南博物院/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/河南博物院/4.jpg"] }
            ],
            "洛阳": [
                { name: "龙门石窟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙门石窟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙门石窟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙门石窟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙门石窟/4.jpg"] },
                { name: "白马寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/白马寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/白马寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/白马寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/白马寺/4.jpg"] },
                { name: "老君山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/老君山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/老君山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/老君山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/老君山/4.jpg"] }
            ],
            "开封": [
                { name: "清明上河园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/清明上河园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/清明上河园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/清明上河园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/清明上河园/4.jpg"] },
                { name: "大相国寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/大相国寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/大相国寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/大相国寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/大相国寺/4.jpg"] },
                { name: "龙亭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙亭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙亭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙亭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/河南/龙亭/4.jpg"] }
            ]
        }
    },
    "湖北省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101200101.shtml",
        cities: ["武汉", "宜昌", "襄阳"],
        spots: {
            "武汉": [
                { name: "黄鹤楼", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/黄鹤楼/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/黄鹤楼/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/黄鹤楼/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/黄鹤楼/4.jpg"] },
                { name: "东湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/东湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/东湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/东湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/东湖/4.jpg"] },
                { name: "户部巷", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/户部巷/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/户部巷/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/户部巷/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/户部巷/4.jpg"] }
            ],
            "宜昌": [
                { name: "三峡大坝", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡大坝/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡大坝/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡大坝/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡大坝/4.jpg"] },
                { name: "三峡人家", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡人家/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡人家/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡人家/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/三峡人家/4.jpg"] },
                { name: "清江画廊", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/清江画廊/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/清江画廊/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/清江画廊/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/清江画廊/4.jpg"] }
            ],
            "襄阳": [
                { name: "古隆中", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/古隆中/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/古隆中/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/古隆中/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/古隆中/4.jpg"] },
                { name: "襄阳古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/襄阳古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/襄阳古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/襄阳古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/襄阳古城/4.jpg"] },
                { name: "唐城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/唐城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/唐城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/唐城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages4/湖北/唐城/4.jpg"] }
            ]
        }
    },
    "湖南省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101250101.shtml",
        cities: ["长沙", "张家界", "湘西"],
        spots: {
            "长沙": [
                { name: "橘子洲", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/橘子洲/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/橘子洲/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/橘子洲/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/橘子洲/4.jpg"] },
                { name: "岳麓山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/岳麓山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/岳麓山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/岳麓山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/岳麓山/4.jpg"] },
                { name: "太平街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/太平街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/太平街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/太平街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/太平街/4.jpg"] }
            ],
            "张家界": [
                { name: "张家界森林公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/张家界/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/张家界/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/张家界/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/张家界/4.jpg"] },
                { name: "天门山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/天门山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/天门山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/天门山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/天门山/4.jpg"] },
                { name: "黄龙洞", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/黄龙洞/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/黄龙洞/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/黄龙洞/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/黄龙洞/4.jpg"] }
            ],
            "湘西": [
                { name: "凤凰古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/凤凰古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/凤凰古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/凤凰古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/凤凰古城/4.jpg"] },
                { name: "芙蓉镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/芙蓉镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/芙蓉镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/芙蓉镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/芙蓉镇/4.jpg"] },
                { name: "猛洞河", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/猛洞河/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/猛洞河/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/猛洞河/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages5/湖南/猛洞河/4.jpg"] }
            ]
        }
    },
    "广东省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101280101.shtml",
        cities: ["广州", "深圳", "珠海"],
        spots: {
            "广州": [
                { name: "广州塔", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/广州塔/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/广州塔/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/广州塔/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/广州塔/4.jpg"] },
                { name: "长隆", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/4.jpg"] },
                { name: "沙面", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/沙面/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/沙面/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/沙面/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/沙面/4.jpg"] }
            ],
            "深圳": [
                { name: "世界之窗", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/世界之窗/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/世界之窗/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/世界之窗/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/世界之窗/4.jpg"] },
                { name: "欢乐谷", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/欢乐谷/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/欢乐谷/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/欢乐谷/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/欢乐谷/4.jpg"] },
                { name: "大小梅沙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/大小梅沙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/大小梅沙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/大小梅沙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/大小梅沙/4.jpg"] }
            ],
            "珠海": [
                { name: "长隆海洋王国", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/长隆/4.jpg"] },
                { name: "情侣路", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/情侣路/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/情侣路/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/情侣路/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/情侣路/4.jpg"] },
                { name: "圆明新园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/圆明新园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/圆明新园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/圆明新园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广东/圆明新园/4.jpg"] }
            ]
        }
    },
    "海南省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101310101.shtml",
        cities: ["三亚", "海口", "琼海"],
        spots: {
            "三亚": [
                { name: "亚龙湾", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/三亚亚龙湾/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/三亚亚龙湾/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/三亚亚龙湾/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/三亚亚龙湾/4.jpg"] },
                { name: "天涯海角", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/天涯海角/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/天涯海角/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/天涯海角/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/天涯海角/4.jpg"] },
                { name: "蜈支洲岛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/蜈支洲岛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/蜈支洲岛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/蜈支洲岛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/蜈支洲岛/4.jpg"] }
            ],
            "海口": [
                { name: "假日海滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/假日海滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/假日海滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/假日海滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/假日海滩/4.jpg"] },
                { name: "骑楼老街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/骑楼老街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/骑楼老街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/骑楼老街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/骑楼老街/4.jpg"] },
                { name: "火山口", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/火山口/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/火山口/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/火山口/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/火山口/4.jpg"] }
            ],
            "琼海": [
                { name: "博鳌亚洲论坛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/博鳌亚洲论坛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/博鳌亚洲论坛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/博鳌亚洲论坛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/博鳌亚洲论坛/4.jpg"] },
                { name: "白石岭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/白石岭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/白石岭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/白石岭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/白石岭/4.jpg"] },
                { name: "玉带滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/玉带滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/玉带滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/玉带滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/海南/玉带滩/4.jpg"] }
            ]
        }
    },
    "四川省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101270101.shtml",
        cities: ["成都", "阿坝", "甘孜"],
        spots: {
            "成都": [
                { name: "大熊猫基地", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/大熊猫基地/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/大熊猫基地/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/大熊猫基地/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/大熊猫基地/4.jpg"] },
                { name: "宽窄巷子", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/宽窄巷子/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/宽窄巷子/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/宽窄巷子/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/宽窄巷子/4.jpg"] },
                { name: "锦里", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/锦里/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/锦里/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/锦里/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/锦里/4.jpg"] }
            ],
            "阿坝": [
                { name: "九寨沟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/九寨沟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/九寨沟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/九寨沟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/九寨沟/4.jpg"] },
                { name: "黄龙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/黄龙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/黄龙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/黄龙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/黄龙/4.jpg"] },
                { name: "若尔盖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/若尔盖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/若尔盖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/若尔盖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/若尔盖/4.jpg"] }
            ],
            "甘孜": [
                { name: "稻城亚丁", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/稻城亚丁/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/稻城亚丁/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/稻城亚丁/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/稻城亚丁/4.jpg"] },
                { name: "海螺沟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/海螺沟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/海螺沟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/海螺沟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/海螺沟/4.jpg"] },
                { name: "色达", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/色达/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/色达/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/色达/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/四川/色达/4.jpg"] }
            ]
        }
    },
    "贵州省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101260101.shtml",
        cities: ["贵阳", "安顺", "黔东南"],
        spots: {
            "贵阳": [
                { name: "黔灵山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黔灵山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黔灵山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黔灵山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黔灵山/4.jpg"] },
                { name: "青岩古镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/青岩古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/青岩古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/青岩古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/青岩古镇/4.jpg"] },
                { name: "天河潭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/天河潭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/天河潭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/天河潭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/天河潭/4.jpg"] }
            ],
            "安顺": [
                { name: "黄果树瀑布", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黄果树瀑布/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黄果树瀑布/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黄果树瀑布/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/黄果树瀑布/4.jpg"] },
                { name: "龙宫", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/龙宫/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/龙宫/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/龙宫/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/龙宫/4.jpg"] },
                { name: "夜郎洞", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/夜郎洞/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/夜郎洞/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/夜郎洞/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/夜郎洞/4.jpg"] }
            ],
            "黔东南": [
                { name: "千户苗寨", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/西江千户苗寨/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/西江千户苗寨/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/西江千户苗寨/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/西江千户苗寨/4.jpg"] },
                { name: "镇远古镇", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/镇远古镇/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/镇远古镇/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/镇远古镇/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/镇远古镇/4.jpg"] },
                { name: "肇兴侗寨", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/肇兴侗寨/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/肇兴侗寨/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/肇兴侗寨/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages3/贵州/肇兴侗寨/4.jpg"] }
            ]
        }
    },
    "云南省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101290101.shtml",
        cities: ["昆明", "丽江", "大理"],
        spots: {
            "昆明": [
                { name: "滇池", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/滇池/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/滇池/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/滇池/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/滇池/4.jpg"] },
                { name: "石林", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/石林/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/石林/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/石林/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/石林/4.jpg"] },
                { name: "翠湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/翠湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/翠湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/翠湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/翠湖/4.jpg"] }
            ],
            "丽江": [
                { name: "丽江古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/丽江古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/丽江古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/丽江古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/丽江古城/4.jpg"] },
                { name: "玉龙雪山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/玉龙雪山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/玉龙雪山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/玉龙雪山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/玉龙雪山/4.jpg"] },
                { name: "蓝月谷", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/蓝月谷/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/蓝月谷/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/蓝月谷/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/蓝月谷/4.jpg"] }
            ],
            "大理": [
                { name: "洱海", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理洱海/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理洱海/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理洱海/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理洱海/4.jpg"] },
                { name: "大理古城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理古城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理古城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理古城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/大理古城/4.jpg"] },
                { name: "崇圣寺三塔", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/崇圣寺三塔/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/崇圣寺三塔/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/崇圣寺三塔/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages12/云南/崇圣寺三塔/4.jpg"] }
            ]
        }
    },
    "陕西省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101110101.shtml",
        cities: ["西安", "延安", "宝鸡"],
        spots: {
            "西安": [
                { name: "兵马俑", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/兵马俑/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/兵马俑/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/兵马俑/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/兵马俑/4.jpg"] },
                { name: "华清宫", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/华清宫/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/华清宫/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/华清宫/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/华清宫/4.jpg"] },
                { name: "大雁塔", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/大雁塔/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/大雁塔/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/大雁塔/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/大雁塔/4.jpg"] }
            ],
            "延安": [
                { name: "宝塔山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/宝塔山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/宝塔山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/宝塔山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/宝塔山/4.jpg"] },
                { name: "枣园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/枣园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/枣园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/枣园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/枣园/4.jpg"] },
                { name: "壶口瀑布", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/壶口瀑布/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/壶口瀑布/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/壶口瀑布/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/壶口瀑布/4.jpg"] }
            ],
            "宝鸡": [
                { name: "法门寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/法门寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/法门寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/法门寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/法门寺/4.jpg"] },
                { name: "太白山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/太白山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/太白山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/太白山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/太白山/4.jpg"] },
                { name: "关山草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/关山草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/关山草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/关山草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages9/陕西/关山草原/4.jpg"] }
            ]
        }
    },
    "甘肃省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101160101.shtml",
        cities: ["兰州", "敦煌", "嘉峪关"],
        spots: {
            "兰州": [
                { name: "中山桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/中山桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/中山桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/中山桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/中山桥/4.jpg"] },
                { name: "白塔山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/白塔山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/白塔山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/白塔山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/白塔山/4.jpg"] },
                { name: "五泉山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/五泉山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/五泉山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/五泉山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/五泉山/4.jpg"] }
            ],
            "敦煌": [
                { name: "莫高窟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/莫高窟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/莫高窟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/莫高窟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/莫高窟/4.jpg"] },
                { name: "鸣沙山月牙泉", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/鸣沙山月牙泉/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/鸣沙山月牙泉/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/鸣沙山月牙泉/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/鸣沙山月牙泉/4.jpg"] },
                { name: "雅丹地貌", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/雅丹地貌/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/雅丹地貌/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/雅丹地貌/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/雅丹地貌/4.jpg"] }
            ],
            "嘉峪关": [
                { name: "嘉峪关长城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/嘉峪关/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/嘉峪关/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/嘉峪关/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/嘉峪关/4.jpg"] },
                { name: "悬壁长城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/悬壁长城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/悬壁长城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/悬壁长城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/悬壁长城/4.jpg"] },
                { name: "长城第一墩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/长城第一墩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/长城第一墩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/长城第一墩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/甘肃/长城第一墩/4.jpg"] }
            ]
        }
    },
    "青海省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101150101.shtml",
        cities: ["西宁", "海南州", "海北州"],
        spots: {
            "西宁": [
                { name: "塔尔寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/塔尔寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/塔尔寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/塔尔寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/塔尔寺/4.jpg"] },
                { name: "东关大清真寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/东关大清真寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/东关大清真寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/东关大清真寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/东关大清真寺/4.jpg"] },
                { name: "南山公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/南山公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/南山公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/南山公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/南山公园/4.jpg"] }
            ],
            "海南州": [
                { name: "青海湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/青海湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/青海湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/青海湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/青海湖/4.jpg"] },
                { name: "龙羊峡", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/龙羊峡/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/龙羊峡/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/龙羊峡/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/龙羊峡/4.jpg"] },
                { name: "贵德地质公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/贵德地质公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/贵德地质公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/贵德地质公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/贵德地质公园/4.jpg"] }
            ],
            "海北州": [
                { name: "门源油菜花", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/门源油菜花/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/门源油菜花/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/门源油菜花/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/门源油菜花/4.jpg"] },
                { name: "祁连山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/祁连山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/祁连山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/祁连山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/祁连山/4.jpg"] },
                { name: "金银滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/金银滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/金银滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/金银滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages8/青海/金银滩/4.jpg"] }
            ]
        }
    },
    "台湾省": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101340101.shtml",
        cities: ["台北", "高雄", "台中"],
        spots: {
            "台北": [
                { name: "台北101", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/台北101/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/台北101/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/台北101/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/台北101/4.jpg"] },
                { name: "故宫博物院", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/北京/故宫博物院/4.jpg"] },
                { name: "阳明山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阳明山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阳明山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阳明山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阳明山/4.jpg"] }
            ],
            "高雄": [
                { name: "西子湾", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/西子湾/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/西子湾/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/西子湾/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/西子湾/4.jpg"] },
                { name: "垦丁", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/垦丁/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/垦丁/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/垦丁/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/垦丁/4.jpg"] },
                { name: "六合夜市", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/六合夜市/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/六合夜市/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/六合夜市/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/六合夜市/4.jpg"] }
            ],
            "台中": [
                { name: "日月潭", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/日月潭/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/日月潭/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/日月潭/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/日月潭/4.jpg"] },
                { name: "阿里山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阿里山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阿里山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阿里山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/阿里山/4.jpg"] },
                { name: "逢甲夜市", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/逢甲夜市/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/逢甲夜市/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/逢甲夜市/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages10/台湾/逢甲夜市/4.jpg"] }
            ]
        }
    },
    "内蒙古自治区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101080101.shtml",
        cities: ["呼和浩特", "呼伦贝尔", "锡林郭勒"],
        spots: {
            "呼和浩特": [
                { name: "大召寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/大召寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/大召寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/大召寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/大召寺/4.jpg"] },
                { name: "昭君博物院", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/昭君博物院/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/昭君博物院/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/昭君博物院/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/昭君博物院/4.jpg"] },
                { name: "希拉穆仁草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/希拉穆仁草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/希拉穆仁草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/希拉穆仁草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/希拉穆仁草原/4.jpg"] }
            ],
            "呼伦贝尔": [
                { name: "呼伦贝尔草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/呼伦贝尔草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/呼伦贝尔草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/呼伦贝尔草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/呼伦贝尔草原/4.jpg"] },
                { name: "满洲里国门", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/满洲里国门/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/满洲里国门/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/满洲里国门/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/满洲里国门/4.jpg"] },
                { name: "额尔古纳湿地", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/额尔古纳湿地/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/额尔古纳湿地/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/额尔古纳湿地/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/额尔古纳湿地/4.jpg"] }
            ],
            "锡林郭勒": [
                { name: "锡林郭勒草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/锡林郭勒草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/锡林郭勒草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/锡林郭勒草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/锡林郭勒草原/4.jpg"] },
                { name: "贝子庙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/贝子庙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/贝子庙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/贝子庙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/贝子庙/4.jpg"] },
                { name: "元上都遗址", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/元上都遗址/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/元上都遗址/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/元上都遗址/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/内蒙古/元上都遗址/4.jpg"] }
            ]
        }
    },
    "广西壮族自治区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101300101.shtml",
        cities: ["桂林", "南宁", "北海"],
        spots: {
            "桂林": [
                { name: "漓江", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/漓江/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/漓江/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/漓江/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/漓江/4.jpg"] },
                { name: "象山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/象山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/象山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/象山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/象山/4.jpg"] },
                { name: "阳朔西街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/阳朔/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/阳朔/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/阳朔/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/阳朔/4.jpg"] }
            ],
            "南宁": [
                { name: "青秀山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/青秀山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/青秀山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/青秀山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/青秀山/4.jpg"] },
                { name: "大明山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/大明山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/大明山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/大明山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/大明山/4.jpg"] },
                { name: "南湖公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/南湖公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/南湖公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/南湖公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/南湖公园/4.jpg"] }
            ],
            "北海": [
                { name: "银滩", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/北海银滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/北海银滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/北海银滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/北海银滩/4.jpg"] },
                { name: "涠洲岛", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/涠洲岛/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/涠洲岛/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/涠洲岛/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/涠洲岛/4.jpg"] },
                { name: "老街", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/老街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/老街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/老街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages2/广西/老街/4.jpg"] }
            ]
        }
    },
    "西藏自治区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101140101.shtml",
        cities: ["拉萨", "日喀则", "林芝"],
        spots: {
            "拉萨": [
                { name: "布达拉宫", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/布达拉宫/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/布达拉宫/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/布达拉宫/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/布达拉宫/4.jpg"] },
                { name: "大昭寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/大昭寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/大昭寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/大昭寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/大昭寺/4.jpg"] },
                { name: "纳木错", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/纳木错/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/纳木错/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/纳木错/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/纳木错/4.jpg"] }
            ],
            "日喀则": [
                { name: "扎什伦布寺", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/扎什伦布寺/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/扎什伦布寺/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/扎什伦布寺/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/扎什伦布寺/4.jpg"] },
                { name: "珠穆朗玛峰", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/珠穆朗玛峰/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/珠穆朗玛峰/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/珠穆朗玛峰/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/珠穆朗玛峰/4.jpg"] },
                { name: "羊卓雍措", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/羊卓雍措/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/羊卓雍措/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/羊卓雍措/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/羊卓雍措/4.jpg"] }
            ],
            "林芝": [
                { name: "南迦巴瓦峰", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/南迦巴瓦峰/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/南迦巴瓦峰/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/南迦巴瓦峰/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/南迦巴瓦峰/4.jpg"] },
                { name: "巴松措", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/巴松措/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/巴松措/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/巴松措/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/巴松措/4.jpg"] },
                { name: "鲁朗林海", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/鲁朗林海/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/鲁朗林海/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/鲁朗林海/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages6/西藏/鲁朗林海/4.jpg"] }
            ]
        }
    },
    "宁夏回族自治区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101170101.shtml",
        cities: ["银川", "中卫", "固原"],
        spots: {
            "银川": [
                { name: "镇北堡西部影城", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/镇北堡西部影城/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/镇北堡西部影城/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/镇北堡西部影城/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/镇北堡西部影城/4.jpg"] },
                { name: "沙湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙湖/4.jpg"] },
                { name: "西夏王陵", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/西夏王陵/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/西夏王陵/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/西夏王陵/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/西夏王陵/4.jpg"] }
            ],
            "中卫": [
                { name: "沙坡头", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙坡头/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙坡头/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙坡头/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/沙坡头/4.jpg"] },
                { name: "通湖草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/通湖草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/通湖草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/通湖草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/通湖草原/4.jpg"] },
                { name: "高庙", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/高庙/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/高庙/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/高庙/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/高庙/4.jpg"] }
            ],
            "固原": [
                { name: "须弥山石窟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/须弥山石窟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/须弥山石窟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/须弥山石窟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/须弥山石窟/4.jpg"] },
                { name: "火石寨", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/火石寨/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/火石寨/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/火石寨/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages7/宁夏/火石寨/4.jpg"] },
                { name: "六盘山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages1/天津/盘山/4.jpg"] }
            ]
        }
    },
    "新疆维吾尔自治区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101130101.shtml",
        cities: ["乌鲁木齐", "吐鲁番", "伊犁"],
        spots: {
            "乌鲁木齐": [
                { name: "天山天池", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/天山天池/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/天山天池/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/天山天池/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/天山天池/4.jpg"] },
                { name: "国际大巴扎", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/国际大巴扎/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/国际大巴扎/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/国际大巴扎/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/国际大巴扎/4.jpg"] },
                { name: "红山公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/红山公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/红山公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/红山公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/红山公园/4.jpg"] }
            ],
            "吐鲁番": [
                { name: "火焰山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/吐鲁番火焰山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/吐鲁番火焰山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/吐鲁番火焰山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/吐鲁番火焰山/4.jpg"] },
                { name: "葡萄沟", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/葡萄沟/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/葡萄沟/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/葡萄沟/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/葡萄沟/4.jpg"] },
                { name: "坎儿井", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/坎儿井/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/坎儿井/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/坎儿井/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/坎儿井/4.jpg"] }
            ],
            "伊犁": [
                { name: "那拉提草原", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/那拉提草原/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/那拉提草原/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/那拉提草原/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/那拉提草原/4.jpg"] },
                { name: "赛里木湖", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/赛里木湖/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/赛里木湖/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/赛里木湖/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/赛里木湖/4.jpg"] },
                { name: "喀纳斯", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/喀纳斯/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/喀纳斯/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/喀纳斯/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/新疆/喀纳斯/4.jpg"] }
            ]
        }
    },
    "香港特别行政区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101320101.shtml",
        cities: ["香港岛", "九龙", "新界"],
        spots: {
            "香港岛": [
                { name: "维多利亚港", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/维多利亚港/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/维多利亚港/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/维多利亚港/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/维多利亚港/4.jpg"] },
                { name: "太平山顶", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/太平山顶/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/太平山顶/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/太平山顶/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/太平山顶/4.jpg"] },
                { name: "海洋公园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/海洋公园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/海洋公园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/海洋公园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/海洋公园/4.jpg"] }
            ],
            "九龙": [
                { name: "尖沙咀", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/尖沙咀/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/尖沙咀/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/尖沙咀/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/尖沙咀/4.jpg"] },
                { name: "迪士尼乐园", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/迪士尼乐园/4.jpg"] },
                { name: "黄大仙祠", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/黄大仙祠/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/黄大仙祠/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/黄大仙祠/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/黄大仙祠/4.jpg"] }
            ],
            "新界": [
                { name: "大屿山", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/大屿山/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/大屿山/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/大屿山/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/大屿山/4.jpg"] },
                { name: "青马大桥", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/青马大桥/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/青马大桥/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/青马大桥/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/青马大桥/4.jpg"] },
                { name: "西贡", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/西贡/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/西贡/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/西贡/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages11/香港/西贡/4.jpg"] }
            ]
        }
    },
    "澳门特别行政区": {
        provinceWeatherUrl: "https://www.weather.com.cn/weather/101330101.shtml",
        cities: ["澳门半岛", "氹仔", "路环"],
        spots: {
            "澳门半岛": [
                { name: "大三巴牌坊", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/大三巴牌坊/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/大三巴牌坊/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/大三巴牌坊/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/大三巴牌坊/4.jpg"] },
                { name: "妈祖阁", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/妈祖阁/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/妈祖阁/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/妈祖阁/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/妈祖阁/4.jpg"] },
                { name: "议事亭前地", city: "", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/议事亭前地/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/议事亭前地/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/议事亭前地/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/议事亭前地/4.jpg"] }
            ],
            "氹仔": [
                { name: "威尼斯人", city: "氹仔", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/威尼斯人/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/威尼斯人/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/威尼斯人/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/威尼斯人/4.jpg"] },
                { name: "巴黎人", city: "氹仔", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/巴黎人/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/巴黎人/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/巴黎人/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/巴黎人/4.jpg"] },
                { name: "官也街", city: "氹仔", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/官也街/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/官也街/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/官也街/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/官也街/4.jpg"] }
            ],
            "路环": [
                { name: "黑沙海滩", city: "路环", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/黑沙海滩/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/黑沙海滩/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/黑沙海滩/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/黑沙海滩/4.jpg"] },
                { name: "圣方济各堂", city: "路环", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/圣方济各堂/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/圣方济各堂/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/圣方济各堂/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/圣方济各堂/4.jpg"] },
                { name: "路环市区", city: "路环", website: "", weatherUrl: "", images: ["https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/路环市区/1.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/路环市区/2.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/路环市区/3.jpg", "https://cdn.jsdelivr.net/gh/Scumbag42/TravelImages13/澳门/路环市区/4.jpg"] }
            ]
        }
    }
};
