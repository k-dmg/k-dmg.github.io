let ability_list = [
    {"ability_id":1,"ability_name":"작열하는 진","ability_explan":"배틀 시작시 전방에 있으면 화속성강화 필드(약)을 발동","ability_short_explan":"화속성강화 필드(약)을 발동","ability_target":0,"ability_kind":4,"ability_element":1,"ability_type":1,"ability_power":20},
    {"ability_id":2,"ability_name":"얼어붙는 진","ability_explan":"배틀 시작시 전방에 있으면 빙속성강화 필드(약)을 발동","ability_short_explan":"빙속성강화 필드(약)을 발동","ability_target":0,"ability_kind":4,"ability_element":2,"ability_type":1,"ability_power":20},
    {"ability_id":3,"ability_name":"천둥의 진","ability_explan":"배틀 시작시 전방에 있으면 번개속성강화 필드(약)을 발동","ability_short_explan":"번개속성강화 필드(약)을 발동","ability_target":0,"ability_kind":4,"ability_element":3,"ability_type":1,"ability_power":20},
    {"ability_id":4,"ability_name":"영광의 진","ability_explan":"배틀 시작시 전방에 있으면 빛속성강화 필드(약)을 발동","ability_short_explan":"빛속성강화 필드(약)을 발동","ability_target":0,"ability_kind":4,"ability_element":4,"ability_type":1,"ability_power":20},
    {"ability_id":5,"ability_name":"암야의 진","ability_explan":"배틀 시작시 전방에 있으면 어둠속성강화 필드(약)을 발동","ability_short_explan":"어둠속성강화 필드(약)을 발동","ability_target":0,"ability_kind":4,"ability_element":5,"ability_type":1,"ability_power":20},
    {"ability_id":6,"ability_name":"광란의 형상","ability_explan":"배틀 시작시 전방에 있으면 자신의 연격수(큰 대미지)+3(1회)","ability_short_explan":"연격수(큰 대미지)+3(1회)","ability_target":5,"ability_kind":5,"ability_element":0,"ability_type":2,"ability_power":120},
    {"ability_id":7,"ability_name":"장마","ability_explan":"배틀 시작시 전방에 있으면 자신의 연격수(소)+5(1회)","ability_short_explan":"연격수(소)+3(1회)","ability_target":5,"ability_kind":5,"ability_element":0,"ability_type":2,"ability_power":50},
    {"ability_id":201,"ability_name":"불의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 화속성의 스킬 공격력+25%","ability_short_explan":"화속성의 스킬 공격력+25%","ability_target":1,"ability_kind":1,"ability_element":1,"ability_type":1,"ability_power":25},
    {"ability_id":202,"ability_name":"얼음의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 빙속성의 스킬 공격력+25%","ability_short_explan":"빙속성의 스킬 공격력+25%","ability_target":1,"ability_kind":1,"ability_element":2,"ability_type":1,"ability_power":25},
    {"ability_id":203,"ability_name":"번개의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 번개속성의 스킬 공격력+25%","ability_short_explan":"번개속성의 스킬 공격력+25%","ability_target":1,"ability_kind":1,"ability_element":3,"ability_type":1,"ability_power":25},
    {"ability_id":204,"ability_name":"빛의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 빛속성의 스킬 공격력+25%","ability_short_explan":"빛속성의 스킬 공격력+25%","ability_target":1,"ability_kind":1,"ability_element":4,"ability_type":1,"ability_power":25},
    {"ability_id":205,"ability_name":"어둠의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 어둠속성의 스킬 공격력+25%","ability_short_explan":"어둠속성의 스킬 공격력+25%","ability_target":1,"ability_kind":1,"ability_element":5,"ability_type":1,"ability_power":25},
    {"ability_id":206,"ability_name":"별밤","ability_explan":"행동 시작시 전방에 있으면 팀의 크리티컬율+10%","ability_short_explan":"크리티컬율+10%","ability_target":2,"ability_kind":2,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":207,"ability_name":"영웅의 개선가","ability_explan":"행동 시작시 전방에 있으면 팀의 스킬 공격력+10%","ability_short_explan":"스킬공격력+10%","ability_target":2,"ability_kind":1,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":208,"ability_name":"노도","ability_explan":"행동 시작시 전방에 있으면 자신의 크리티컬 대미지+30%","ability_short_explan":"크리티컬 대미지+30%","ability_target":1,"ability_kind":3,"ability_element":0,"ability_type":1,"ability_power":30},
    {"ability_id":209,"ability_name":"재주","ability_explan":"행동 시작시 전방에 있으면 자신의 크리티컬율+30%","ability_short_explan":"크리티컬율+30%","ability_target":1,"ability_kind":2,"ability_element":0,"ability_type":1,"ability_power":30},
    {"ability_id":210,"ability_name":"고양","ability_explan":"행동 시작시 전방에 있으면 토큰 1개당 공격력+5%","ability_short_explan":"토큰 1개당 공격력+5%","ability_target":1,"ability_kind":6,"ability_element":0,"ability_type":2,"ability_power":5},
    {"ability_id":211,"ability_name":"야생의 감","ability_explan":"행동 시작시 전방에 있으면 확률로 스킬공격력+30%","ability_short_explan":"확률로 스킬공격력+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":212,"ability_name":"용맹","ability_explan":"행동 시작시 전방 & DP100%이상 시 자신의 스킬공격력+30%","ability_short_explan":"DP100%이상 시 스킬공격력+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":213,"ability_name":"양동작전","ability_explan":"행동 시작시 전방 & DP30%이하 시 전방의 스킬 공격력+30%","ability_short_explan":"DP30%이하 시 스킬공격력+30%","ability_target":2,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":214,"ability_name":"장렬","ability_explan":"행동 시작시 전방 & DP80%이상 시 자신의 스킬공격력+20%","ability_short_explan":"DP80%이상 시 스킬공격력+20%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":20},
    {"ability_id":217,"ability_name":"번개의 지휘","ability_explan":"행동 시작시 전방 & DP80%이상 시 전방의 번개속성의 스킬 공격력+18%","ability_short_explan":"DP80%이상 시 번개속성의 스킬 공격력+18%","ability_target":2,"ability_kind":1,"ability_element":3,"ability_type":2,"ability_power":18},
    {"ability_id":218,"ability_name":"빛의 지휘","ability_explan":"행동 시작시 전방 & DP80%이상 시 전방의 빛속성의 스킬 공격력+18%","ability_short_explan":"DP80%이상 시 빛속성의 스킬 공격력+18%","ability_target":2,"ability_kind":1,"ability_element":4,"ability_type":2,"ability_power":18},
    {"ability_id":220,"ability_name":"결심","ability_explan":"행동 시작시 전방 & SP15이상 시 자신의 스킬공격력+30%","ability_short_explan":"SP15이상 시 스킬공격력+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":221,"ability_name":"예기","ability_explan":"행동 시작시 전방 & 적이 도발이나 주목상태일 때 자신의 스킬공격력+30%","ability_short_explan":"적이 도발이나 주목상태일 때 스킬공격력+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":222,"ability_name":"약화","ability_explan":"행동 시작시 전방에 있으면 적의 방어력-10%","ability_short_explan":"적의 방어력-10%","ability_target":2,"ability_kind":7,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":234,"ability_name":"빛의 응원","ability_explan":"행동 시작시 후방 & DP80%이상 시 전방의 빛속성의 스킬 공격력+18%","ability_short_explan":"DP80%이상 시 빛속성의 스킬 공격력+18%","ability_target":2,"ability_kind":1,"ability_element":4,"ability_type":2,"ability_power":18},
    {"ability_id":235,"ability_name":"만물의 위엄","ability_explan":"행동 시작시 전방에 있으면 자신의 스킬 공격력+20%","ability_short_explan":"스킬 공격력+20%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":1,"ability_power":20},
    {"ability_id":301,"ability_name":"열중","ability_explan":"오버드라이브 개시시 전방에 있으면 자신의 스킬공격력+20%","ability_short_explan":"OD개시시 전방에 있으면 스킬공격력+20%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":20},
    {"ability_id":401,"ability_name":"불의 파동","ability_explan":"아군 전체의 화속성 스킬공격력을 항상+10%","ability_short_explan":"화속성 스킬공격력을 항상+10%","ability_target":3,"ability_kind":1,"ability_element":1,"ability_type":1,"ability_power":10},
    {"ability_id":402,"ability_name":"얼음의 파동","ability_explan":"아군 전체의 빙속성 스킬공격력을 항상+10%","ability_short_explan":"빙속성 스킬공격력을 항상+10%","ability_target":3,"ability_kind":1,"ability_element":2,"ability_type":1,"ability_power":10},
    {"ability_id":403,"ability_name":"번개의 파동","ability_explan":"아군 전체의 번개속성 스킬공격력을 항상+10%","ability_short_explan":"번개속성 스킬공격력을 항상+10%","ability_target":3,"ability_kind":1,"ability_element":3,"ability_type":1,"ability_power":10},
    {"ability_id":404,"ability_name":"빛의 파동","ability_explan":"아군 전체의 빛속성 스킬공격력을 항상+10%","ability_short_explan":"빛속성 스킬공격력을 항상+10%","ability_target":3,"ability_kind":1,"ability_element":4,"ability_type":1,"ability_power":10},
    {"ability_id":405,"ability_name":"어둠의 파동","ability_explan":"아군 전체의 어둠속성 스킬공격력을 항상+10%","ability_short_explan":"어둠속성 스킬공격력을 항상+10%","ability_target":3,"ability_kind":1,"ability_element":5,"ability_type":1,"ability_power":10},
    {"ability_id":406,"ability_name":"만물의 파동","ability_explan":"아군 전체의 스킬 공격력을 항상+8%","ability_short_explan":" 스킬공격력을 항상 +8%","ability_target":3,"ability_kind":1,"ability_element":0,"ability_type":1,"ability_power":8},
    {"ability_id":411,"ability_name":"화염의 극의","ability_explan":"배틀 시작 시 불 속성 스타일이 3명 이상일 때 아군 전체의 불 속성 스킬 공격력 +30%","ability_short_explan":"화속 3명 이상시 화속 스킬공격력 +30%(중복X)","ability_target":3,"ability_kind":1,"ability_element":1,"ability_type":2,"ability_power":30},
    {"ability_id":501,"ability_name":"재치","ability_explan":"자신이 발동한 스킬공격력 증가의 효과+25%","ability_short_explan":"자신이 발동한 스킬공격력 증가의 효과+25%","ability_target":4,"ability_kind":8,"ability_element":0,"ability_type":1,"ability_power":25},
    {"ability_id":502,"ability_name":"침식","ability_explan":"자신이 발동한 방어력 감소의 효과+25%","ability_short_explan":"자신이 발동한 방어력 감소 효과+25%","ability_target":4,"ability_kind":9,"ability_element":0,"ability_type":1,"ability_power":25},
    {"ability_id":503,"ability_name":"정화의 갈채","ability_explan":"자신이 적의 버프 해제 시 전체에 스킬 공격력 30% 증가(8턴) 부여","ability_short_explan":"버프 해제 시 공격력 30%","ability_target":2,"ability_kind":1,"ability_element":0,"ability_type":3,"ability_power":30},
    {"ability_id":504,"ability_name":"파쇄의 갈채","ability_explan":"자신의 공격으로 적 브레이크 시 전체에 스킬 공격력 30% 증가(8턴) 부여","ability_short_explan":"브레이크시 공격력 30%","ability_target":3,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":505,"ability_name":"심안의 경지","ability_explan":"행동 시작 시 전방 & 자신이 심안 상태일 때 자신의 스킬 공격력 +15%","ability_short_explan":"심안시 공격력 15%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":15},
    {"ability_id":506,"ability_name":"증폭","ability_explan":"자신이 발동한 스킬공격력 증가의 효과+10%","ability_short_explan":"자신이 발동한 스킬공격력 증가의 효과+10%","ability_target":4,"ability_kind":8,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":507,"ability_name":"감퇴","ability_explan":"자신이 발동한 방어력 감소의 효과+10%","ability_short_explan":"자신이 발동한 방어력 감소 효과+10%","ability_target":4,"ability_kind":9,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":508,"ability_name":"익시드","ability_explan":"추가 턴 중 자신이 부여한 스킬 공격력 증가의 효과+30%","ability_short_explan":"추가 턴 중 스킬공격력 증가의 효과+30%","ability_target":4,"ability_kind":8,"ability_element":0,"ability_type":1,"ability_power":30},
    {"ability_id":509,"ability_name":"맥없는 물고기","ability_explan":"소비 SP 8 이하인 스킬 사용 시 자신이 부여한 방어력 감소 효과량 +30%","ability_short_explan":"소비 SP8 스킬 방어력 감소+30%","ability_target":4,"ability_kind":9,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":1001,"ability_name":"위협의 비명","ability_explan":"배틀 시작시 전방에 있으면 높은 확률로 적 스턴","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1002,"ability_name":"세련","ability_explan":"배틀 시작시 전방에 있으면 자신의 토큰+5","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1003,"ability_name":"재앙","ability_explan":"배틀 시작시 전방에 있으면 적 저주 상태(2턴)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1004,"ability_name":"준민","ability_explan":"배틀 시작시 전방에 있으면 자신의 SP+5","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1101,"ability_name":"섬광","ability_explan":"턴 개시시에 전방에 있으면 자신의 SP+1","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1102,"ability_name":"굳센 마음","ability_explan":"턴 개시시 전방 & 브레이크 상태일 때 자신의 DP를 회복(1회)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1103,"ability_name":"성장의 노력","ability_explan":"턴 개시시 전방에 있으면 오버드라이브 게이지+5%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1104,"ability_name":"현명","ability_explan":"턴 개시시 전방에 있으면 자신의 방어력+30%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1105,"ability_name":"박애의 마음","ability_explan":"턴 개시시 전방에 있으면 전방의 DP+10%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1106,"ability_name":"자애의 마음","ability_explan":"턴 개시시 전방에 있으면 아군 전체의 DP+7%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1107,"ability_name":"졸다트","ability_explan":"턴 개시시 전방에 있으면 자신의 방어력+10%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1201,"ability_name":"선명","ability_explan":"행동 시작시 전방에 있으면 자신의 스킬공격시 파괴율 상승량+30%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1202,"ability_name":"강렬","ability_explan":"행동 시작시 전방에 있으면 전방의 스킬공격시 파괴율 상승량+20%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1501,"ability_name":"혜풍","ability_explan":"자신이 발동한 회복스킬의 효과+20%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1502,"ability_name":"감내","ability_explan":"적행동 시작시 전방 & DP파괴 상태일때 자신의 방어력+50%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1503,"ability_name":"전공","ability_explan":"대미지를 입힐때 적 하나마다 토큰 1상승(추격 제외)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":603,"ability_name":"번개의 제압","ability_explan":"행동 시작 시 전방 & DP 80% 이상일 때 적의 번개 속성 방어력 -18%","ability_short_explan":"적의 번개 속성 방어력-18%","ability_target":2,"ability_kind":7,"ability_element":3,"ability_type":1,"ability_power":10},
    {"ability_id":10001,"ability_name":"솟구치는 초능력","ability_explan":"전투 중 [인기곡 차트 진입 일섬]을 1회 이상 사용하면 자신의 스킬 공격력 +50%","ability_short_explan":"스킬 공격력 +50%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":50},
    ]