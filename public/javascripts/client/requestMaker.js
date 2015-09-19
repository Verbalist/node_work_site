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