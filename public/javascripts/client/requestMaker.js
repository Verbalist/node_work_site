function doRequestAjaxPost (requestJson, URL, async){

    return $.ajax({
        url: path + restPath + URL,
        type: 'POST',
        data: requestJson,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        mimeType: 'application/json',
        async: async,

        success: function (data) {
            return data
        },
        error: function (data, status, er) {

        }
    });

}

function doRequestAjaxPostEmployee (requestJson, URL, method, async){
    console.log(path + restPath + employeePath + URL);
    return $.ajax({
        url: path + restPath + employeePath + URL,
        type: method,
        data: requestJson,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        mimeType: 'application/json',
        async: async,

        success: function (data) {
            return data
        },
        error: function (data, status, er) {

        }
    });

}

function doRequestAjaxPostEmployer (requestJson, URL, method, async){
    console.log(path + restPath + employerPath + URL);
    return $.ajax({
        url: path + restPath + employerPath + URL,
        type: method,
        data: requestJson,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        mimeType: 'application/json',
        async: async,

        success: function (data) {
            return data
        },
        error: function (data, status, er) {

        }
    });

}


function doRequestAjaxPostSearch (requestJson, URL, method, async){
    return $.ajax({
        url: path + restPath + searchPath + URL,
        type: method,
        data: requestJson,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        mimeType: 'application/json',
        async: async,

        success: function (data) {
            return data
        },
        error: function (data, status, er) {

        }
    });

}
function sendJSON(path, args) {
    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(args));
    //  Send request
    var result = doRequestAjaxPost(requestBody, path, true).responseJSON;
    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }
    return result;
}