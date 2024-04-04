
// キャラ名取得
function getCharaData(chara_id) {
    const filtered_name = chara_data.filter((obj) => obj.chara_id == chara_id);
    return filtered_name.length > 0 ? filtered_name[0] : undefined;
}