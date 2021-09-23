const fetch = require('node-fetch');
const path = require('path');
const fs = require('hexo-fs');

async function getMusicUrl(musicId){
    const response = await fetch("https://api.imjad.cn/cloudmusic/?type=song&id=" + musicId.toString());
    const data = await response.json();
    return data.data[0].url;
}

exports.AsyncGetData = async (playlistId) => {
    const response = await fetch("https://api.imjad.cn/cloudmusic/?type=playlist&id=" + playlistId.toString());
    const data = await response.json();
    if(data == undefined || data == null){
        return null;
    }
    const rootPath = path.resolve(__dirname, '../../../' ,'NCMjson/ncm.json');
    for(let i = 0; i < data.playlist.tracks.length; i++){
        data.playlist.tracks[i].musicUrl = await getMusicUrl(data.playlist.tracks[i].id);
    }
    fs.writeFileSync(rootPath, JSON.stringify(data.playlist.tracks));
}

exports.writeJson = () => {
    const rootPath = path.resolve(__dirname, '../../../' ,'NCMjson/ncm.json');
    let isDirExist = fs.existsSync(path.resolve(rootPath, "../"));
    if(!isDirExist){
        fs.mkdirSync(path.resolve(rootPath, "../"));
    }
    let isExist = fs.existsSync(rootPath);
    if(!isExist){
        console.info("[ncm-widget-plugin] file is not exist, making a json file now...");
        fs.writeFileSync(rootPath);
    }
}

exports.readJson = () => {
    const rootPath = path.resolve(__dirname, '../../../' ,'NCMjson/ncm.json');
    let vObj = JSON.parse(fs.readFileSync(rootPath));
    return vObj;
}