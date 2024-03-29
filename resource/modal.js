// スタイルリスト作成
function createStyleList() {
    $.each(style_list, function(index, value) {
        let temp = value.image_url.split(".");
    	let source = "./icon/" + temp[0] + "_Thumbnail.webp?v=/";
    	let input = $('<input>')
            .attr("type", "image")
            .attr("src", source)
            .attr("title", "[" + value.style_name + "]" + chara_full_name[value.chara_id])
            .data("style_id", value.style_id)
            .addClass("select_style")
            .addClass("physical_" + value.physical)
            .addClass("element_" + value.element)
            .addClass("role_" + value.role);
    	$("#sytle_list_" + value.troops).append(input);
    });
}

// モーダル系イベント
function addModalEvent() {
    // モーダルを開く
    $('.showmodal').on('click', function() {
        chara_no = $(this).data("chara_no");
        $('.modal_layer').addClass('isShow');
    });

    let narrow = {"physical": "", "element": "", "role": "" };
    // スタイル絞り込み
    $(".narrow").on('click', function() {
        let classification = "";
        if ($(this).hasClass("physical")) {
            classification = "physical";
        } else if ($(this).hasClass("element")) {
            classification = "element";
        } else {
            classification = "role";
        }

        let selecter = ".narrow" + "." + classification;
        let select = $(this).data("select");

        if (select == "1") {
            $(selecter).css("opacity", "0.3");
            $(selecter).data("select", "1");
            $(this).css("opacity", "1");
            $(this).data("select", "0");
            narrow[classification] = "." + $(this).prop("id");
        } else {
            $(selecter).css("opacity", "1");
            $(selecter).data("select", "1");
            narrow[classification] = "";
        }

        $(".select_style").hide();
        let show_class = ".select_style" + narrow.physical + narrow.element + narrow.role;
        $(show_class).show();
    });

    // スタイルを選択
    $('.select_style').on('click', function(){
        let style_id = $(this).data("style_id");

        let style = style_list.find((obj) => obj.style_id === style_id);
        let lastSelect = [];
        // 同一のキャラIDは不許可
        for(let idx in select_style_list) {
            if (select_style_list[idx].chara_id === style.chara_id && chara_no != idx) {
                alert("같은 캐릭터를 여러명 넣을 수 없습니다.");
                return false;
            }
        }
        // メンバーの情報を削除
        removeMember();
        
        // 画像切り替え
        select_style_list[chara_no] = style;
        $('[data-chara_no="' + chara_no + '"]').attr("src", $(this).attr("src"));

        // 宝珠スキルタイプを設定
        $("#jewel_type_" + chara_no).val(style.jewel_type);
        // ステータスを設定
        for (let j = 1; j < status_kbn.length; j++) {
            const status = localStorage.getItem(status_kbn[j] + "_" + style.chara_id);
            if (status) $("#" + status_kbn[j] + "_" + chara_no).val(status);
        }
        const jewel_status = localStorage.getItem("jewel_" + style.chara_id);
        if (jewel_status) $("#jewel_lv_" + chara_no).prop("selectedIndex", jewel_status);
        const limit_status = localStorage.getItem("limit_" + style.chara_id);
        if (limit_status) $("#limit_" + chara_no).prop("selectedIndex", limit_status);

        // スキル・バフ・アビリティを追加
        addAttackList(style, chara_no);
        addBuffList(style, chara_no);
        addAbility(style, chara_no);

        limit_count = limit_status?limit_status:0;
        let chara_id = "chara_id-" + select_style_list[chara_no].chara_id;
        $("input[type=checkbox]." + chara_id).each(function(index, value) {
            let ability_id = $(value).data("ability_id");
            let ability_info = getAbilityInfo(ability_id);
            let limit_border = Number($(value).data("limit_border"));
            if (select_attack_skill !== undefined) {
                let attack_chara_id = "chara_id-" + select_attack_skill.chara_id;
                setAbilityCheck(value, ability_info, limit_border, limit_count, attack_chara_id);
            }
        });
        $("#attack_list").trigger("change");
        for(let idx in select_style_list) {
            lastSelect.push(select_style_list[idx].style_id)
        }
        localStorage.setItem("preset"+thisPreset, lastSelect.join(","));
        closeModel();
    });

    // メンバーを外す
    $('.remove_btn').on('click', function() {
        removeMember();
        closeModel();
    });

    // モーダルを閉じる
    $('.modal_layer_mask').on('click', function() {
        closeModel();
    });
}

// モーダルを閉じる
function closeModel() {
    chara_no = 0;
    $('.modal_layer').removeClass('isShow');
}

// メンバーを外す
function removeMember() {
    // 入れ替えスタイルのスキルを削除
    let chara_id_class = ".chara_id-" + select_style_list[chara_no].chara_id;
    let parent = $(".include_lv " + chara_id_class + ":selected").parent();
    $.each(parent, function(index, value) {
        // 暫定的にdisplay:none追加
        $(value).find(chara_id_class).css("display", "none");
        select2ndSkill($("#" + $(value).prop("id")));
    });
    // 該当メンバーのスキル削除
    $(chara_id_class).remove();
    select_style_list[chara_no] = 0;
    // 画像初期化
    $('[data-chara_no="' + chara_no + '"]').attr("src", "resource/plus.png");
    // スキル情報編集
    $("#attack_list").trigger("change");
}