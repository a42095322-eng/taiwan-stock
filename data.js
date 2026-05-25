// 台股數據 - 動態載入以繞過iOS Safari快取
window.stockData = {
    update_time: "2026-05-25 18:10:00",
    sampleBullishStocks: [
        {
            "symbol": "2330",
            "name": "台積電",
            "price": 2255,
            "change": 25,
            "changePercent": 1.12,
            "reason": "黃仁勳提前抵台強化合作，輝達Vera Rubin平台帶動先進製程需求，外資預估AI營收年增率達60%",
            "tags": ["半導體", "AI概念", "權值股", "外資買超"]
        },
        {
            "symbol": "3711",
            "name": "日月光投控",
            "price": 561,
            "change": 51,
            "changePercent": 10.0,
            "reason": "輝達Vera Rubin平台即將量產，先進封裝需求爆發，獲黃仁勳點名為關鍵供應鏈夥伴，漲停鎖死",
            "tags": ["封測", "先進封裝", "AI伺服器", "漲停股"]
        },
        {
            "symbol": "2454",
            "name": "聯發科",
            "price": 3860,
            "change": 310,
            "changePercent": 8.73,
            "reason": "5G/6G晶片出貨成長，AI邊緣運算需求強勁，與輝達深化合作開發AI平台，成交值居台股第一",
            "tags": ["IC設計", "5G概念", "AI邊緣運算", "手機晶片"]
        },
        {
            "symbol": "2327",
            "name": "國巨",
            "price": 629,
            "change": 57,
            "changePercent": 9.97,
            "reason": "被動元件需求激增，AI伺服器及高效能運算推動營運成長，市值創新高，漲停鎖死",
            "tags": ["被動元件", "AI伺服器", "漲停股", "法人買超"]
        }
    ],
    samplePotentialStocks: [
        {
            "symbol": "3037",
            "name": "欣興",
            "price": 970,
            "change": 65,
            "changePercent": 7.18,
            "reason": "ABF載板供給吃緊，AI產品世代交替帶動尺寸與層數提升，外資看好價格上漲15-20%",
            "tags": ["ABF載板", "PCB", "AI硬體", "漲價題材"]
        },
        {
            "symbol": "3324",
            "name": "雙鴻",
            "price": 1170,
            "change": 50,
            "changePercent": 4.46,
            "reason": "AI ASIC客戶散熱訂單湧入，全年營收目標上修至年增70%，毛利率站穩30%以上",
            "tags": ["散熱", "AI伺服器", "營收上修", "成長股"]
        },
        {
            "symbol": "3481",
            "name": "群創",
            "price": 44.65,
            "change": 4.05,
            "changePercent": 9.98,
            "reason": "面板級扇出型封裝FOPLP成功量產，轉型非顯示器業務成效顯著，獲國際客戶採用，漲停鎖死",
            "tags": ["面板", "先進封裝", "轉型題材", "漲停股"]
        }
    ],
    sampleNews: [
        {
            "title": "黃仁勳：Vera 將是台灣供應鏈史上最大規模產品，台鏈下半年會很忙",
            "source": "Yahoo財經",
            "time": "06:22",
            "impact": "正面"
        },
        {
            "title": "台股上周漲1095點站上42267點創收盤新高，距歷史高僅140點",
            "source": "鉅亨網",
            "time": "11:34",
            "impact": "正面"
        },
        {
            "title": "黃仁勳來台助攻台股，投顧：聚焦AI概念股",
            "source": "中央社",
            "time": "09:42",
            "impact": "正面"
        },
        {
            "title": "台股22日強彈899點，聯發科、國巨、日月光同步漲停",
            "source": "中央社",
            "time": "14:30",
            "impact": "正面"
        },
        {
            "title": "輝達Vera Rubin平台將在台積電3奈米製程投片，供應鏈備貨潮啟動",
            "source": "經濟日報",
            "time": "10:15",
            "impact": "正面"
        }
    ]
};