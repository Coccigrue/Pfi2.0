const apiBaseURL = "https://pfi201869646.glitch.me/api/images";

function HEAD(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'HEAD',
        contentType: 'text/plain',
        complete: request => { successCallBack(request.getResponseHeader('ETag')) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function GET_ID(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        success: data => { successCallBack(data); },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function GET_ALL(successCallBack, errorCallBack, queryString = null) {
    let url = apiBaseURL + (queryString ? queryString : "");
    $.ajax({
        url: url,
        type: 'GET',
        success: (data, status, xhr) => { successCallBack(data, xhr.getResponseHeader("ETag")) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function POST(data, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        headers: getBearerAuthorizationToken(),
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function GetUsager(id,successCallBack,errorCallBack)
{
    $.ajax({
        url: "https://pfi201869646.glitch.me/accounts/index/"+id,
        headers: getBearerAuthorizationToken(),
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function DeleteUsager(id, successCallBack, errorCallBack)
{
    $.ajax({
        url: "https://pfi201869646.glitch.me/accounts/remove/"+id,
        headers: getBearerAuthorizationToken(),
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function Disconect(id, successCallBack, errorCallBack)
{
    $.ajax({
        url: "https://pfi201869646.glitch.me/accounts/logout/"+id,
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function PostUser(data, successCallBack, errorCallBack){
    $.ajax({
        url: "https://pfi201869646.glitch.me/accounts/register",
        headers: getBearerAuthorizationToken(),
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function CreateSession(data,successCallBack, errorCallBack)
{
   
        $.ajax({
            url: "https://pfi201869646.glitch.me/token",
            headers: getBearerAuthorizationToken(),
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: data => { successCallBack(data); },
            error: function (jqXHR) { errorCallBack(jqXHR.status) }
        });
}
function AcceptVerify(id,code,successCallBack, errorCallBack)
{
    $.ajax({
        url: " https://pfi201869646.glitch.me/accounts/verify?id="+id+"&code="+code+"",
        type: 'GET',
        contentType: 'application/json',
        success: data => { successCallBack(data); },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function PutUser(data, successCallBack, errorCallBack){
    $.ajax({
        url: "https://pfi201869646.glitch.me/accounts/modify",
        headers: getBearerAuthorizationToken(),
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function PUT(bookmark, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + bookmark.Id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(bookmark),
        success: () => { successCallBack() },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function DELETE(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'DELETE',
        success: () => { successCallBack() },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function retrieveAccessToken()
{
    return sessionStorage.getItem("token")
}
function getBearerAuthorizationToken() {
    return { 'Authorization': 'Bearer ' + retrieveAccessToken() };
}