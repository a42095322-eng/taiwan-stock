// 台股數據 - 動態載入以繞過iOS Safari快取
// 更新時間：2026-05-25 收盤
window.stockData = {
    update_time: "2026-05-25 13:45:00",
    tse_index: "43,644.40",
    tse_change: "+1,376.43",
    tse_percent: "+3.26%",
    sampleBullishStocks: [
        {
            "symbol": "2330",
            "name": "台積電",
            "price": 2310,
            "change": 55,
            "changePercent": 2.44,
            "reason": "黃仁勳來台、AMD宣布投資100億美元，AI需求強勁，三大法人同步買超，收盤創近期新高",
            "tags": ["半導體", "AI概念", "權值股", "外資買超"]
        },
        {
            "symbol": "2454",
            "name": "聯發科",
            "price": 4245,
            "change": 385,
            "changePercent": 9.97,
            "reason": "跳空漲停鎖死，創歷史新高。AI邊緣運算及手機晶片需求爆發，成交值居台股第一",
            "tags": ["IC設計", "5G概念", "AI邊緣運算", "漲停股"]
        },
        {
            "symbol": "3711",
            "name": "日月光投控",
            "price": 617,
            "change": 56,
            "changePercent": 9.98,
            "reason": "AMD點名為先進封裝EFB關鍵合作夥伴，上修資本支出至85億美元，先進封測業績年增突破35億美元",
            "tags": ["封測", "先進封裝", "AI伺服器", "漲停股"]
        },
        {
            "symbol": "2327",
            "name": "國巨",
            "price": 629,
            "change": 57,
            "changePercent": 9.97,
            "reason": "被動元件漲價題材持續發酵，AI伺服器及高效能運算需求激增，外資力挺，漲停鎖死",
            "tags": ["被動元件", "AI伺服器", "漲停股", "法人買超"]
        }
    ],
    samplePotentialStocks: [
        {
            "symbol": "3037",
            "name": "欣興",
            "price": 1040,
            "change": 70,
            "changePercent": 7.22,
            "reason": "ABF載板供給吃緊，突破千元大關。大摩目標價上調56%至1225元，供需缺口至2030年將擴大至22%",
            "tags": ["ABF載板", "PCB", "AI硬體", "漲價題材"]
        },
        {
            "symbol": "3324",
            "name": "雙鴻",
            "price": 1250,
            "change": 80,
            "changePercent": 6.84,
            "reason": "AI伺服器液冷散熱技術加速普及，全年營收目標上修至年增70%，毛利率站穩30%以上",
            "tags": ["散熱", "AI伺服器", "營收上修", "成長股"]
        },
        {
            "symbol": "3481",
            "name": "群創",
            "price": 49.10,
            "change": 4.45,
            "changePercent": 9.97,
            "reason": "面板級扇出型封裝FOPLP成功量產，面板族群全面漲停，成交量放大，改寫16年新高",
            "tags": ["面板", "先進封裝", "轉型題材", "漲停股"]
        }
    ],
    sampleNews: [
        {
            "title": "台股收43644點創歷史新高，飆漲1376點寫收盤第5大漲點",
            "source": "中央社",
            "time": "13:51",
            "impact": "正面"
        },
        {
            "title": "黃仁勳提前抵台：Vera將是台灣供應鏈史上最大規模產品，GTC 6/1登場",
            "source": "經濟日報",
            "time": "16:16",
            "impact": "正面"
        },
        {
            "title": "AMD蘇姿丰宣布投資台灣超過100億美元，點名日月光、力成等關鍵夥伴",
            "source": "鉅亨網",
            "time": "09:43",
            "impact": "正面"
        },
        {
            "title": "聯發科、日月光、國巨同步漲停，聯電漲停125元，AI概念股全面噴發",
            "source": "CMoney",
            "time": "14:30",
            "impact": "正面"
        },
        {
            "title": "美伊和平協議有望成形，避險情緒降溫，新台幣登單日最強亞幣",
            "source": "中央社",
            "time": "18:14",
            "impact": "正面"
        }
    ]
};