function checkUndefined(result){
    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }
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

    checkUndefined(result);

    return result;
}

function createPosition(employer_id){
    console.log("createPosition - Started!!!");
    
    var serializedArray = $("create_position_from_wrapper").serializeArray();

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

    checkUndefined(result);

    return result;
}

function editPosition(employer_id){
    console.log("editPosition - Started!!!");
    
    var serializedArray = $("edit_position_from_wrapper").serializeArray();

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

    checkUndefined(result);
    
    return result;
}

function getProfile(employer_id){
    console.log("editPosition - Started!!!");
    
    var serializedArray = $("employer_profile_from_wrapper").serializeArray();

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

    checkUndefined(result);
    
    return result;
}