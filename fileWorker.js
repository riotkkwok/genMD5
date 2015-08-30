importScripts("sha512.js");

onmessage = function (e) {
    if(e.data.index === "DONE"){
        var a = [];
        e.data.buffer.map(function(i){
            a = a.concat(i);
        });
        postMessage({
            "status" : 0,
            "data" : rstr2hex(binb2rstr(binb_sha512(a, e.data.result)))
        });
    }else{
        postMessage({
            "status" : 1,
            "index" : e.data.index,
            "len" : e.data.len,
            "count" : e.data.current,
            "total" : e.data.total,
            "data" : rstr2binb(e.data.result)
        });
    }
};