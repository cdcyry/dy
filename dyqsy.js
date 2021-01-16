//重写匹配地址:core-c-hl.amemv.com/aweme/v1/aweme/post
//QuanX重写配置:amemv.com/aweme/v1/aweme/post url script-response-body https://gitee.com/passerby-b/javascript/raw/master/dywm.js
//MITM:*.amemv.com
//需要到作者的作品列表里找到那个视频再下载
 
console.log("&#127822;抖音去水印脚本开始!");
var body = $response.body;
var $tool = tool();
try {
    if ($request.url.indexOf("amemv.com/aweme/v1/aweme/post") > -1 && !!body) {
        var obj = $tool.str2json(body);
        for (var i = 0; i < obj.aweme_list.length; i++) {
            var play_addr = obj.aweme_list[i].video.play_addr.url_list;
            obj.aweme_list[i].video.download_addr.url_list = play_addr;
            console.log("&#127822;播放地址:" + play_addr);
        }
        $done({ body: $tool.json2str(obj) });
    }
    else {
        $done({});
    }
} catch (e) {
    console.log("&#127822;try错误:" + e);
    $tool.notify('try错误!', 'try错误:', e);
    $done({});
}
console.log("执行完成!!!!");
 
function tool(){var a=typeof $httpClient!="undefined";var b=typeof $task!="undefined";var c={notify:function(i,f,h,g){var e={};if(b){if(!!g){if(typeof g=="string"){e["open-url"]=g}if(!!g.url){e["open-url"]=g.url}if(!!g.img){e["media-url"]=g.img}$notify(i,f,h,e)}else{$notify(i,f,h)}}if(a){if(!!g){if(typeof g=="string"){e["openUrl"]=g}if(!!g.url){e["openUrl"]=g.url}if(!!g.img){e["mediaUrl"]=g.img}$notification.post(i,f,h,e)}else{$notification.post(i,f,h)}}},get:function(e,f){if(b){if(typeof e=="string"){e={url:e}}e["method"]="GET";$task.fetch(e).then(function(g){f(null,d(g),g.body)},function(g){f(g.error,null,null)})}if(a){$httpClient.get(e,function(i,h,g){f(i,d(h),g)})}},post:function(e,f){if(b){if(typeof e=="string"){e={url:e}}e["method"]="POST";$task.fetch(e).then(function(g){f(null,d(g),g.body)},function(g){f(g.error,null,null)})}if(a){$httpClient.post(e,function(i,h,g){f(i,d(h),g)})}},unicode:function(e){return unescape(e.replace(/\\u/gi,"%u"))},decodeurl:function(e){return decodeURIComponent(e)},json2str:function(e){return JSON.stringify(e)},str2json:function(e){return JSON.parse(e)},setkeyval:function(f,e){if(b){$prefs.setValueForKey(f,e)}if(a){$persistentStore.write(f,e)}},getkeyval:function(e){if(b){return $prefs.valueForKey(e)}if(a){return $persistentStore.read(e)}}};function d(e){if(e){if(e.status){e["statusCode"]=e.status}else{if(e.statusCode){e["status"]=e.statusCode}}}return e}return c};
