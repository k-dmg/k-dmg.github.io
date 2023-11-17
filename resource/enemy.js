var enemy_list = [
    {"enemy_class":1,"enemy_class_no":1,"enemy_name":"데스슬러그（제1형태）","enemy_stat":290,"max_dp":66000,"max_hp":300000,"destruction":5,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":2,"enemy_name":"데스슬러그（제2형태）","enemy_stat":290,"max_dp":88000,"max_hp":1680000,"destruction":8,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":3,"enemy_name":"로터리몰(제1형태）","enemy_stat":310,"max_dp":97600,"max_hp":999999,"destruction":3,"destruction_limit":300,"physical_1":100,"physical_2":150,"physical_3":50,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":4,"enemy_name":"로터리몰(제2형태）","enemy_stat":310,"max_dp":195000,"max_hp":1842800,"destruction":6,"destruction_limit":999,"physical_1":100,"physical_2":150,"physical_3":50,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":5,"enemy_name":"레드크림슨","enemy_stat":270,"max_dp":225000,"max_hp":5002200,"destruction":8,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":6,"enemy_name":"필러","enemy_stat":290,"max_dp":450000,"max_hp":10200000,"destruction":8,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":150,"element_2":150,"element_3":150,"element_4":150,"element_5":150},
    {"enemy_class":1,"enemy_class_no":7,"enemy_name":"플랫핸드(3장/제1형태)","enemy_stat":320,"max_dp":275000,"max_hp":1875000,"destruction":6,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":150,"element_2":150,"element_3":150,"element_4":150,"element_5":150},
    {"enemy_class":1,"enemy_class_no":8,"enemy_name":"플랫핸드(3장/제2형태）","enemy_stat":320,"max_dp":350000,"max_hp":8625000,"destruction":10,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":150,"element_5":150},
    {"enemy_class":1,"enemy_class_no":9,"enemy_name":"얼티밋필러","enemy_stat":320,"max_dp":500000,"max_hp":15000000,"destruction":10,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":150,"element_2":150,"element_3":150,"element_4":150,"element_5":150},
    {"enemy_class":1,"enemy_class_no":10,"enemy_name":"플랫핸드(4장전편)","enemy_stat":380,"max_dp":1000000,"max_hp":38000000,"destruction":10,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":1,"enemy_class_no":11,"enemy_name":"데저트 데드론","enemy_stat":380,"max_dp":4452000,"max_hp":183274000,"destruction":10,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":10,"element_1":100,"element_2":250,"element_3":100,"element_4":100,"element_5":250},
    {"enemy_class":2,"enemy_class_no":1,"enemy_name":"엑소 워쳐 R : Lv.3","enemy_stat":320,"max_dp":65000,"max_hp":300000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":25,"element_2":200,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":2,"enemy_name":"엑소 워쳐 B : Lv.3","enemy_stat":320,"max_dp":65000,"max_hp":300000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":25,"element_3":200,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":3,"enemy_name":"엑소 워쳐 Y : Lv.3","enemy_stat":320,"max_dp":65000,"max_hp":300000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":200,"element_2":100,"element_3":25,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":4,"enemy_name":"엑소 워쳐 W : Lv.3","enemy_stat":320,"max_dp":65000,"max_hp":300000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":25,"element_5":200},
    {"enemy_class":2,"enemy_class_no":5,"enemy_name":"엑소 워쳐 P : Lv.3","enemy_stat":320,"max_dp":65000,"max_hp":300000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":200,"element_5":25},
    {"enemy_class":2,"enemy_class_no":6,"enemy_name":"렉투스/시니스터 닐R : Lv.3","enemy_stat":340,"max_dp":150000,"max_hp":700000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":25,"element_2":250,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":7,"enemy_name":"렉투스/시니스터 닐B : Lv.3","enemy_stat":340,"max_dp":150000,"max_hp":700000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":25,"element_3":250,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":8,"enemy_name":"렉투스/시니스터 닐Y : Lv.3","enemy_stat":340,"max_dp":150000,"max_hp":700000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":250,"element_2":100,"element_3":25,"element_4":100,"element_5":100},
    {"enemy_class":2,"enemy_class_no":9,"enemy_name":"렉투스/시니스터 닐W : Lv.3","enemy_stat":340,"max_dp":150000,"max_hp":700000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":25,"element_5":250},
    {"enemy_class":2,"enemy_class_no":10,"enemy_name":"렉투스/시니스터 닐P : Lv.3","enemy_stat":340,"max_dp":150000,"max_hp":700000,"destruction":4,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":250,"element_5":25},
    {"enemy_class":3,"enemy_class_no":1,"enemy_name":"(1F)몰 암즈α","enemy_stat":340,"max_dp":30000,"max_hp":45500,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":200,"element_2":200,"element_3":200,"element_4":200,"element_5":200},
    {"enemy_class":3,"enemy_class_no":2,"enemy_name":"(2F)서밋 골렘","enemy_stat":340,"max_dp":20000,"max_hp":42000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":100,"physical_3":150,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":3,"enemy_name":"(2F)트라이 클로","enemy_stat":340,"max_dp":8320,"max_hp":16000,"destruction":5,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":4,"enemy_name":"(2F)커스 돌","enemy_stat":340,"max_dp":13600,"max_hp":19200,"destruction":5,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":250,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":5,"enemy_name":"(3F)배럴 워커","enemy_stat":340,"max_dp":46000,"max_hp":70000,"destruction":2,"destruction_limit":150,"physical_1":150,"physical_2":25,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":6,"enemy_name":"(4F)섀도우 유키[Spitfire]","enemy_stat":340,"max_dp":110000,"max_hp":66000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":7,"enemy_name":"(5F)데스슬러그(제1형태)","enemy_stat":340,"max_dp":20000,"max_hp":60000,"destruction":5,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":8,"enemy_name":"(5F)데스슬러그(제2형태)","enemy_stat":340,"max_dp":42000,"max_hp":600000,"destruction":8,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":9,"enemy_name":"(6F)쉬림프 크랩","enemy_stat":340,"max_dp":41000,"max_hp":30000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":10,"enemy_name":"(7F)섀도우 히사메[불릿]","enemy_stat":340,"max_dp":150000,"max_hp":100000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":11,"enemy_name":"(8F)어비스 노커","enemy_stat":340,"max_dp":50000,"max_hp":155000,"destruction":5,"destruction_limit":300,"physical_1":150,"physical_2":50,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":3,"enemy_class_no":12,"enemy_name":"(9F)섀도우 니이나[BrandNew]","enemy_stat":340,"max_dp":30000,"max_hp":1350000,"destruction":6,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":200,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":1,"enemy_name":"(1F)몰 암즈α","enemy_stat":380,"max_dp":200000,"max_hp":455000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":200,"element_2":200,"element_3":200,"element_4":200,"element_5":200},
    {"enemy_class":4,"enemy_class_no":2,"enemy_name":"(2F)서밋 골렘","enemy_stat":380,"max_dp":170000,"max_hp":210000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":100,"physical_3":150,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":3,"enemy_name":"(2F)트라이 클로","enemy_stat":380,"max_dp":41600,"max_hp":80000,"destruction":5,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":4,"enemy_name":"(2F)커스 돌","enemy_stat":380,"max_dp":68000,"max_hp":96000,"destruction":5,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":250,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":5,"enemy_name":"(3F)배럴 워커","enemy_stat":380,"max_dp":170000,"max_hp":280000,"destruction":2,"destruction_limit":150,"physical_1":150,"physical_2":25,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":6,"enemy_name":"(4F)섀도우 유키[Spitfire]","enemy_stat":380,"max_dp":950000,"max_hp":330000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":7,"enemy_name":"(5F)데스슬러그(제1형태)","enemy_stat":380,"max_dp":50000,"max_hp":300000,"destruction":5,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":8,"enemy_name":"(5F)데스슬러그(제2형태)","enemy_stat":380,"max_dp":210000,"max_hp":3000000,"destruction":8,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":9,"enemy_name":"(6F)쉬림프 크랩","enemy_stat":380,"max_dp":400000,"max_hp":180000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":10,"enemy_name":"(7F)섀도우 히사메[불릿]","enemy_stat":380,"max_dp":1500000,"max_hp":650000,"destruction":2,"destruction_limit":150,"physical_1":25,"physical_2":150,"physical_3":25,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":11,"enemy_name":"(8F)어비스 노커","enemy_stat":380,"max_dp":300000,"max_hp":1550000,"destruction":5,"destruction_limit":300,"physical_1":150,"physical_2":50,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":12,"enemy_name":"(9F)섀도우 니이나[BrandNew]","enemy_stat":380,"max_dp":150000,"max_hp":13500000,"destruction":6,"destruction_limit":999,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":200,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":13,"enemy_name":"그림자 스가와라","enemy_stat":390,"max_dp":800000,"max_hp":1000000,"destruction":6,"destruction_limit":400,"physical_1":25,"physical_2":25,"physical_3":150,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":14,"enemy_name":"아라크네 블루라인","enemy_stat":390,"max_dp":1300000,"max_hp":2000000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":250,"physical_3":50,"element_0":100,"element_1":100,"element_2":100,"element_3":250,"element_4":100,"element_5":100},
    {"enemy_class":4,"enemy_class_no":15,"enemy_name":"그림자 미사토","enemy_stat":390,"max_dp":400000,"max_hp":3000000,"destruction":6,"destruction_limit":400,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":250},
    {"enemy_class":4,"enemy_class_no":16,"enemy_name":"셀 프로텍션","enemy_stat":390,"max_dp":820000,"max_hp":950000,"destruction":5,"destruction_limit":300,"physical_1":50,"physical_2":150,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":100,"element_4":25,"element_5":150},
    {"enemy_class":5,"enemy_class_no":1,"enemy_name":"(10F)어비스 노커Ω","enemy_stat":280,"max_dp":20000,"max_hp":42000,"destruction":5,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":75,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":2,"enemy_name":"(20F/48F)배럴 워커Ω","enemy_stat":300,"max_dp":17000,"max_hp":26000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":75,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":3,"enemy_name":"(25F)썬더배럴 워커Ω","enemy_stat":310,"max_dp":31000,"max_hp":47000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":75,"element_1":200,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":4,"enemy_name":"(30F)아라크네라인Ω","enemy_stat":320,"max_dp":41000,"max_hp":56000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":5,"enemy_name":"(35F)아이스 배럴 워커Ω","enemy_stat":330,"max_dp":31000,"max_hp":47000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":100,"element_2":100,"element_3":200,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":6,"enemy_name":"(40F)다크 배럴 워커Ω","enemy_stat":340,"max_dp":31000,"max_hp":47000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":100,"element_2":100,"element_3":100,"element_4":200,"element_5":100},
    {"enemy_class":5,"enemy_class_no":7,"enemy_name":"(43F)파이어 배럴 워커Ω","enemy_stat":345,"max_dp":31000,"max_hp":47000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":100,"element_2":200,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":8,"enemy_name":"(45F)라이트 배럴 워커Ω","enemy_stat":350,"max_dp":45000,"max_hp":68000,"destruction":2,"destruction_limit":150,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":50,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":200},
    {"enemy_class":5,"enemy_class_no":9,"enemy_name":"(50F)데스슬러그Ω(제1형태)","enemy_stat":360,"max_dp":66000,"max_hp":300000,"destruction":5,"destruction_limit":300,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":25,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":5,"enemy_class_no":10,"enemy_name":"(50F)데스슬러그Ω(제2형태)","enemy_stat":360,"max_dp":88000,"max_hp":1200000,"destruction":8,"destruction_limit":700,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":25,"element_1":100,"element_2":100,"element_3":100,"element_4":100,"element_5":100},
    {"enemy_class":6,"enemy_class_no":1,"enemy_name":"페로셔스 노커(120)","enemy_stat":360,"max_dp":483000,"max_hp":7276000,"destruction":6,"destruction_limit":500,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":150,"element_3":150,"element_4":100,"element_5":100},
    {"enemy_class":6,"enemy_class_no":2,"enemy_name":"페로셔스 노커(100)","enemy_stat":290,"max_dp":200000,"max_hp":1880000,"destruction":6,"destruction_limit":500,"physical_1":100,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":150,"element_3":150,"element_4":100,"element_5":100},
    {"enemy_class":6,"enemy_class_no":3,"enemy_name":"님블 호스(120)","enemy_stat":400,"max_dp":290000,"max_hp":9600000,"destruction":5,"destruction_limit":300,"physical_1":50,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":250,"element_4":250,"element_5":100},
    {"enemy_class":6,"enemy_class_no":4,"enemy_name":"님블 호스(100)","enemy_stat":340,"max_dp":75000,"max_hp":6300000,"destruction":5,"destruction_limit":300,"physical_1":50,"physical_2":100,"physical_3":100,"element_0":100,"element_1":100,"element_2":100,"element_3":250,"element_4":250,"element_5":100},
    ];