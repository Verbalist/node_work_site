function errorText(error_text,error_template){
    this.error_text = error_text;
    this.error_template = error_template;
}

function initPosition(){
    var uri = window.location.href;
    console.log(uri.split("/").pop());
    var response = getPositionByIdEmployer(uri.split("/").pop())
    var template = $("#editResumeEmployer").html();
    console.log(response);
    var html = Mustache.render(template, response.resume);
    $("#edit_position_from_wrapper").append(html);
}

function showPositionSettings(){
    console.log("showPositionSettings - Started!!!");    
}

function showPositions(){
    console.log("showPositions - Started!!!");    
}

function showProfileSettings(){
    console.log("showProfileSettings - Started!!!");    
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

function getPositionByIdEmployer(resume_id){
    console.log("getPositionByIdEmployer - Started!!!");

    var requestArray = {};
    
    var URL = "/position/" + resume_id;

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "GET", false).responseJSON;
    checkUndefined(result);
    return result;
}

function findEmployerById(employer_id){
    console.log("findEmployerById - Started!!!");
    
    
    //  Prepare JSON and settings

    var requestArray = {
        "employer_id" : employer_id
    };

    var URL = "/findEmployerById";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error"));

    return result;
}

function createPosition(employer_id){
    console.log("createPosition - Started!!!");
    var template_string = "#create_position_from_wrapper";

    var serializedArray = $(template_string).serializeArray();

    //  Prepare JSON and settings

    var requestArray = {
        "employer_id" : employer_id
    };

    var URL = "/createPosition";


    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error"),template_string);

    return result;
}



function editPosition(employer_id){
    console.log("editPosition - Started!!!");
    template_string = "#edit_position_from_wrapper"
    var serializedArray = $(template_string).serializeArray();

    //  Prepare JSON and settings

    var requestArray = {
        "employer_id" : employer_id
    };

    var URL = "/editPosition";


    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error"),template_string);
    
    return result;
}

function getProfileEmployer(employer_id){
    console.log("getProfileEmployer - Started!!!");
    template_string = "#employer_profile_from_wrapper"
    var serializedArray = $(template_string).serializeArray();

    //  Prepare JSON and settings

    var requestArray = {
        "employer_id" : employer_id
    };

    var URL = "/editPosition";


    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error"),template_string);
    
    return result;
}