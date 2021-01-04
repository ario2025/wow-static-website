var Ajax=function() {
    var xhr;
    if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest()}else{
        var versions = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"];
        for(var i = 0, len = versions.length; i < len; i++) {
        try {xhr = new ActiveXObject(versions[i]);break;}catch(e){};
        }
    }
    return xhr;
}

var post=function(url, data, callback) {
    var xhr = Ajax();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');	
    xhr.send(data);
    xhr.onreadystatechange=function(){if(xhr.readyState===4){callback(xhr)}};
};

var get=function(url, callback){
    var xhr = Ajax();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange=function(){if(xhr.readyState===4){callback(xhr)}};
}

var thisUrl = document.location.toString().replace(document.location.pathname,"");
var body = document.getElementsByTagName("body")[0];

get(thisUrl + "/inc/header.html",function(xhr){body.innerHTML=xhr.responseText+body.innerHTML});
get(thisUrl + "/inc/footer.html",function(xhr){body.innerHTML=body.innerHTML+xhr.responseText});