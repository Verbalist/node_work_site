function errorText(error_text,error_template){
    this.error_text = error_text;
    this.error_template = error_template;
}

function initPosition(){
    var uri = window.location.href;
    console.log(uri.split("/").pop());
    var response = getPositionByIdEmployer(uri.split("/").pop())
    var template = $("#editPositionEmployer").html();
    console.log(response);
    var html = Mustache.render(template, response.position);
    $("#edit_position_from_wrapper").append(html);
}

function initEmployerProfile(){
    var uri = window.location.href;
    console.log(uri.split("/").slice(-2,-1)[0]);
    var response = getProfileByIdEmployer(uri.split("/").slice(-2,-1)[0])
    var template = $("#editProfileEmployer").html();
    console.log(response);
    var html = Mustache.render(template, response.profile_info);
    $("#employer_profile_from_wrapper").append(html);
}

function showPositionSettings(){
    console.log("showPositionSettings - Started!!!");    
}

function showPositions(){
    console.log("showPositions - Started!!!");    
    var url = window.location.href;
    var split_url = url.split("/");
    console.log(split_url[split_url.length-2]);
    employer_name = split_url[split_url.length-2];
    page_number = $('#page_number')[0].value;
    positions_per_page = $('#positions_per_page')[0].value;
    start = (page_number-1)*positions_per_page;
    limit = positions_per_page;
    var response = getPositionsEmployer(employer_name, limit, start);
    var template = $("#showPositionsEmployer").html();
    console.log(response);
    for(var elem in response.positions){
        var html = Mustache.render(template, response.positions[elem]);
        $("#positions_list_wrapper").append(html);
    }
    
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

    var result = doRequestAjaxPostEmployer(requestBody, URL, "GET", false).responseJSON;
    checkUndefined(result);
    return result;
}

function getPositionsEmployer(id, limit, start){
    console.log("getPositionByIdEmployer - Started!!!");

    var requestArray = {};
    requestArray.limit = limit;
    requestArray.start = start;

    var URL = "/"+id+"/positions";

     var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));
    //  Send request

    var result = doRequestAjaxPostEmployer(requestBody, URL, "POST", false).responseJSON;
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

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error")));

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

    var result = doRequestAjaxPostEmployer(requestBody, URL,"POST", false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error")),template_string);

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

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error")));
    
    return result;
}

function getProfileByIdEmployer(employer_id){
    console.log("getProfileEmployer - Started!!!");
    template_string = "#employer_profile_from_wrapper"

    //  Prepare JSON and settings

    var requestArray = {};
    requestArray.employer_id = employer_id;

    var URL = "/profile";



    console.log(requestArray);
    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployer(requestBody, URL, "GET", false).responseJSON;

    checkUndefined(result, new errorText(arguments.callee.toString().concat("error")));
    
    return result;
}