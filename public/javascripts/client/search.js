function showSearchPositions(){
	console.log("showPositions - Started!!!");    
    var url = window.location.href;
    var split_url = url.split("/");
    console.log(split_url[split_url.length-2]);
    //$('#page_number')[0].value;
    text_string = $('#search_text')[0].value;
    var response = getPositionsSearch(text_string);
    var template = $("#showPositionsEmployer").html();
    for(var elem in response.positions){
        var html = Mustache.render(template, response.positions[elem]);
        $("#positions_list_wrapper").append(html);
    }
}



function getResumesSearch(imit,start){
    console.log("getResumesSearch - Started!!!");


    var requestArray = {};
    requestArray.limit = limit;
    requestArray.start = start;
    
    var URL = "/resumes";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostSearch(requestBody, URL, "POST", false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }

    return result;
}

function getPositionsSearch(text_string){
    console.log("getPositionsSearch - Started!!!");

    var requestArray = {};
    requestArray.text_string = text_string;

    var URL = "/search";

     var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));
    //  Send request
    var result = doRequestAjaxPostSearch(requestBody, URL, "POST", false).responseJSON;
    checkUndefined(result);
    console.log(result);
    return result;
}

function checkUndefined(result,error_obj){
    var serverErrorLabel = $('<label/>', {
                    id: 'server_connection_error',
                    "class": 'user-server-error'
                });
    if(result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
        if(error_obj !== undefined){
            switch (result.error_code) {
                        case 403:
                            serverErrorLabel.text(error_obj.error_text);
                            if(error_obj.error_template !== undefined){
                                serverErrorLabel.appendTo(error_obj.error_template);
                            }
                            break;
                }
        }
    } else {
        console.log("Server connection error");
    }
}